'use client'

import { useState, useEffect, useCallback } from 'react'

// Average UK water usage data (litres per day per person)
const USAGE_DEFAULTS = {
  showerMinutes: 7,        // Average shower time
  showersPerWeek: 7,       // Daily shower
  bathsPerWeek: 1,         // One bath per week
  toiletFlushes: 5,        // Per person per day
  washingMachineLoads: 3,  // Per week
  dishwasherLoads: 4,      // Per week
  gardenWateringMins: 0,   // Minutes per week (summer)
}

// Water usage per activity (litres)
const LITRES_PER = {
  showerPerMinute: 10,     // Modern shower
  bath: 80,                // Average bath
  toiletFlush: 6,          // Dual flush average
  washingMachineLoad: 50,  // Modern machine
  dishwasherLoad: 12,      // Modern dishwasher
  gardenPerMinute: 15,     // Hosepipe
  drinkingCooking: 5,      // Per person per day
  handWashing: 3,          // Per person per day
}

// Average UK water rates (2025/26)
const DEFAULT_RATES = {
  waterPerM3: 1.85,        // £ per cubic metre
  sewagePerM3: 1.45,       // £ per cubic metre (usually charged on water used)
  standingChargePerYear: 45, // Annual standing charge
  unmeteredAnnual: 450,    // Average unmetered bill for 2-bed
}

interface Results {
  dailyLitres: number
  annualM3: number
  meteredAnnual: number
  unmeteredAnnual: number
  savings: number
  recommendation: 'meter' | 'unmetered' | 'similar'
}

export function WaterMeterCalculator() {
  const [occupants, setOccupants] = useState(2)
  const [bedrooms, setBedrooms] = useState(3)

  // Usage inputs
  const [showerMinutes, setShowerMinutes] = useState(USAGE_DEFAULTS.showerMinutes)
  const [showersPerWeek, setShowersPerWeek] = useState(USAGE_DEFAULTS.showersPerWeek)
  const [bathsPerWeek, setBathsPerWeek] = useState(USAGE_DEFAULTS.bathsPerWeek)
  const [toiletFlushes, setToiletFlushes] = useState(USAGE_DEFAULTS.toiletFlushes)
  const [washingLoads, setWashingLoads] = useState(USAGE_DEFAULTS.washingMachineLoads)
  const [dishwasherLoads, setDishwasherLoads] = useState(USAGE_DEFAULTS.dishwasherLoads)
  const [gardenMinutes, setGardenMinutes] = useState(USAGE_DEFAULTS.gardenWateringMins)
  const [hasGarden, setHasGarden] = useState(false)

  // Rate inputs
  const [waterRate, setWaterRate] = useState(DEFAULT_RATES.waterPerM3)
  const [sewageRate, setSewageRate] = useState(DEFAULT_RATES.sewagePerM3)
  const [standingCharge, setStandingCharge] = useState(DEFAULT_RATES.standingChargePerYear)

  // Results
  const [results, setResults] = useState<Results | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculate = useCallback(() => {
    // Calculate daily water usage in litres per person
    const showerLitresPerDay = (showerMinutes * LITRES_PER.showerPerMinute * showersPerWeek) / 7
    const bathLitresPerDay = (bathsPerWeek * LITRES_PER.bath) / 7
    const toiletLitresPerDay = toiletFlushes * LITRES_PER.toiletFlush
    const drinkingCookingPerDay = LITRES_PER.drinkingCooking
    const handWashingPerDay = LITRES_PER.handWashing

    const perPersonPerDay = showerLitresPerDay + bathLitresPerDay + toiletLitresPerDay + drinkingCookingPerDay + handWashingPerDay

    // Household usage (shared appliances)
    const washingLitresPerDay = (washingLoads * LITRES_PER.washingMachineLoad) / 7
    const dishwasherLitresPerDay = (dishwasherLoads * LITRES_PER.dishwasherLoad) / 7
    const gardenLitresPerDay = hasGarden ? (gardenMinutes * LITRES_PER.gardenPerMinute * 26) / 365 : 0 // 26 weeks summer

    const householdSharedPerDay = washingLitresPerDay + dishwasherLitresPerDay + gardenLitresPerDay

    // Total daily usage
    const dailyLitres = Math.round((perPersonPerDay * occupants) + householdSharedPerDay)

    // Annual cubic metres (1000 litres = 1 m³)
    const annualM3 = Math.round((dailyLitres * 365) / 1000 * 10) / 10

    // Metered annual cost
    const waterCost = annualM3 * waterRate
    const sewageCost = annualM3 * sewageRate
    const meteredAnnual = Math.round(waterCost + sewageCost + standingCharge)

    // Unmetered estimate (based on rateable value proxy using bedrooms)
    // Typical rates: 1-bed £300, 2-bed £400, 3-bed £500, 4-bed £600, 5-bed+ £750
    const unmeteredByBedrooms: { [key: number]: number } = {
      1: 320,
      2: 420,
      3: 520,
      4: 640,
      5: 780,
    }
    const unmeteredAnnual = unmeteredByBedrooms[Math.min(bedrooms, 5)] || 520

    // Calculate savings
    const savings = unmeteredAnnual - meteredAnnual

    // Recommendation
    let recommendation: 'meter' | 'unmetered' | 'similar'
    if (savings > 50) {
      recommendation = 'meter'
    } else if (savings < -50) {
      recommendation = 'unmetered'
    } else {
      recommendation = 'similar'
    }

    setResults({
      dailyLitres,
      annualM3,
      meteredAnnual,
      unmeteredAnnual,
      savings,
      recommendation,
    })
  }, [occupants, bedrooms, showerMinutes, showersPerWeek, bathsPerWeek, toiletFlushes, washingLoads, dishwasherLoads, gardenMinutes, hasGarden, waterRate, sewageRate, standingCharge])

  useEffect(() => {
    calculate()
  }, [calculate])

  const resetAll = () => {
    setOccupants(2)
    setBedrooms(3)
    setShowerMinutes(USAGE_DEFAULTS.showerMinutes)
    setShowersPerWeek(USAGE_DEFAULTS.showersPerWeek)
    setBathsPerWeek(USAGE_DEFAULTS.bathsPerWeek)
    setToiletFlushes(USAGE_DEFAULTS.toiletFlushes)
    setWashingLoads(USAGE_DEFAULTS.washingMachineLoads)
    setDishwasherLoads(USAGE_DEFAULTS.dishwasherLoads)
    setGardenMinutes(USAGE_DEFAULTS.gardenWateringMins)
    setHasGarden(false)
    setWaterRate(DEFAULT_RATES.waterPerM3)
    setSewageRate(DEFAULT_RATES.sewagePerM3)
    setStandingCharge(DEFAULT_RATES.standingChargePerYear)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Basic Inputs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Your Household</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="occupants" className="block text-sm text-slate-400 mb-2">
                  Number of People
                </label>
                <select
                  id="occupants"
                  value={occupants}
                  onChange={(e) => setOccupants(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bedrooms" className="block text-sm text-slate-400 mb-2">
                  Number of Bedrooms
                </label>
                <select
                  id="bedrooms"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'bedroom' : 'bedrooms'}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Usage Inputs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Water Usage (per person)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="showerMinutes" className="block text-sm text-slate-400 mb-2">
                  Shower length (minutes)
                </label>
                <input
                  id="showerMinutes"
                  type="number"
                  min="0"
                  max="30"
                  value={showerMinutes}
                  onChange={(e) => setShowerMinutes(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="showersPerWeek" className="block text-sm text-slate-400 mb-2">
                  Showers per week (each)
                </label>
                <input
                  id="showersPerWeek"
                  type="number"
                  min="0"
                  max="21"
                  value={showersPerWeek}
                  onChange={(e) => setShowersPerWeek(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="bathsPerWeek" className="block text-sm text-slate-400 mb-2">
                  Baths per week (each)
                </label>
                <input
                  id="bathsPerWeek"
                  type="number"
                  min="0"
                  max="14"
                  value={bathsPerWeek}
                  onChange={(e) => setBathsPerWeek(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="toiletFlushes" className="block text-sm text-slate-400 mb-2">
                  Toilet flushes per day (each)
                </label>
                <input
                  id="toiletFlushes"
                  type="number"
                  min="0"
                  max="15"
                  value={toiletFlushes}
                  onChange={(e) => setToiletFlushes(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Household Usage */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Household Usage</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="washingLoads" className="block text-sm text-slate-400 mb-2">
                  Washing machine loads/week
                </label>
                <input
                  id="washingLoads"
                  type="number"
                  min="0"
                  max="20"
                  value={washingLoads}
                  onChange={(e) => setWashingLoads(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="dishwasherLoads" className="block text-sm text-slate-400 mb-2">
                  Dishwasher loads/week
                </label>
                <input
                  id="dishwasherLoads"
                  type="number"
                  min="0"
                  max="20"
                  value={dishwasherLoads}
                  onChange={(e) => setDishwasherLoads(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="hasGarden" className="flex items-center gap-3 cursor-pointer">
                <input
                  id="hasGarden"
                  type="checkbox"
                  checked={hasGarden}
                  onChange={(e) => setHasGarden(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-slate-300">I have a garden I water regularly</span>
              </label>

              {hasGarden && (
                <div className="mt-3">
                  <label htmlFor="gardenMinutes" className="block text-sm text-slate-400 mb-2">
                    Garden watering (minutes/week in summer)
                  </label>
                  <input
                    id="gardenMinutes"
                    type="number"
                    min="0"
                    max="300"
                    value={gardenMinutes}
                    onChange={(e) => setGardenMinutes(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="mb-6">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Advanced: Adjust water rates
            </button>

            {showAdvanced && (
              <div className="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="waterRate" className="block text-sm text-slate-400 mb-2">
                      Water rate (£/m³)
                    </label>
                    <input
                      id="waterRate"
                      type="number"
                      step="0.01"
                      min="0"
                      value={waterRate}
                      onChange={(e) => setWaterRate(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="sewageRate" className="block text-sm text-slate-400 mb-2">
                      Sewage rate (£/m³)
                    </label>
                    <input
                      id="sewageRate"
                      type="number"
                      step="0.01"
                      min="0"
                      value={sewageRate}
                      onChange={(e) => setSewageRate(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="standingCharge" className="block text-sm text-slate-400 mb-2">
                      Standing charge (£/year)
                    </label>
                    <input
                      id="standingCharge"
                      type="number"
                      step="1"
                      min="0"
                      value={standingCharge}
                      onChange={(e) => setStandingCharge(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {results && (
            <div className="border-t border-slate-700/50 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Results</h3>

              {/* Main Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl border border-cyan-500/30">
                  <p className="text-sm text-cyan-400 mb-1">Estimated Metered Bill</p>
                  <p className="text-3xl font-bold text-white">£{results.meteredAnnual}</p>
                  <p className="text-xs text-slate-400 mt-1">per year</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-slate-500/20 to-slate-600/10 rounded-xl border border-slate-500/30">
                  <p className="text-sm text-slate-400 mb-1">Estimated Unmetered Bill</p>
                  <p className="text-3xl font-bold text-white">£{results.unmeteredAnnual}</p>
                  <p className="text-xs text-slate-400 mt-1">per year (based on {bedrooms} bedrooms)</p>
                </div>
              </div>

              {/* Recommendation */}
              <div className={`p-4 rounded-xl border ${
                results.recommendation === 'meter'
                  ? 'bg-green-500/10 border-green-500/30'
                  : results.recommendation === 'unmetered'
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-slate-500/10 border-slate-500/30'
              }`}>
                {results.recommendation === 'meter' ? (
                  <>
                    <p className="text-green-400 font-semibold mb-1">
                      A water meter could save you around £{results.savings}/year
                    </p>
                    <p className="text-sm text-slate-300">
                      With {occupants} {occupants === 1 ? 'person' : 'people'} in a {bedrooms}-bedroom property, you&apos;re likely to benefit from switching to a water meter.
                    </p>
                  </>
                ) : results.recommendation === 'unmetered' ? (
                  <>
                    <p className="text-amber-400 font-semibold mb-1">
                      You might pay £{Math.abs(results.savings)} more with a meter
                    </p>
                    <p className="text-sm text-slate-300">
                      With {occupants} {occupants === 1 ? 'person' : 'people'} in a {bedrooms}-bedroom property, you may be better off staying unmetered.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-slate-300 font-semibold mb-1">
                      Your bills would be similar either way
                    </p>
                    <p className="text-sm text-slate-400">
                      With a difference of around £{Math.abs(results.savings)}, it&apos;s a close call. Consider other factors like water-saving incentives.
                    </p>
                  </>
                )}
              </div>

              {/* Usage Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <p className="text-sm text-slate-400 mb-1">Daily Usage</p>
                  <p className="text-2xl font-bold text-white">{results.dailyLitres} litres</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <p className="text-sm text-slate-400 mb-1">Annual Usage</p>
                  <p className="text-2xl font-bold text-white">{results.annualM3} m³</p>
                </div>
              </div>
            </div>
          )}

          {/* Reset Button */}
          <button
            onClick={resetAll}
            className="w-full mt-6 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
          >
            Reset Calculator
          </button>
        </div>
      </div>
    </div>
  )
}
