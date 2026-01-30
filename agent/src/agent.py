"""Water Meter Calculator AI Agent using Pydantic AI with AG-UI protocol."""

import os
from pydantic_ai import Agent
from pydantic_ai.models.gemini import GeminiModel
from fastapi import FastAPI
from pydantic_ai.agent import AgentRunResult

# Initialize FastAPI app
app = FastAPI(title="Water Meter Agent")

# Initialize Gemini model
model = GeminiModel('gemini-2.0-flash', api_key=os.environ.get('GOOGLE_API_KEY'))

# Create the agent with water meter expertise
agent = Agent(
    model,
    system_prompt="""You are a helpful assistant for Water Meter Calculator UK.
You help UK households understand water meters and whether switching would save them money.

## Your Expertise:
- Water meter vs unmetered billing comparisons
- Typical UK water usage patterns
- Water company rates and standing charges
- Water-saving tips and advice
- Understanding water bills

## Key Facts:
- Average UK water usage: 140-150 litres per person per day
- Water meter installation is FREE in England and Wales
- Most water companies offer 12-24 month trial periods
- Rule of thumb: fewer people than bedrooms = meter likely saves money

## Typical Savings:
- Single person in 3-bed house: £100-200/year savings
- Couple in 3-bed house: £50-150/year savings
- Family of 4+ in 3-bed: May pay more with meter

## Water Rates (typical 2025/26):
- Water supply: ~£1.85 per cubic metre
- Sewerage: ~£1.45 per cubic metre
- Standing charge: ~£45 per year

Always be helpful, accurate, and encourage users to contact their water company for exact rates.
""",
    result_type=str,
)


# Tool functions
@agent.tool
async def calculate_water_savings(
    occupants: int,
    bedrooms: int,
    daily_litres: int = 145,
) -> str:
    """Calculate potential savings from switching to a water meter.

    Args:
        occupants: Number of people in the household
        bedrooms: Number of bedrooms in the property
        daily_litres: Estimated daily water usage per person (default 145L)
    """
    # Calculate annual usage
    annual_litres = occupants * daily_litres * 365
    annual_m3 = annual_litres / 1000

    # Calculate metered cost (typical rates)
    water_cost = annual_m3 * 1.85
    sewage_cost = annual_m3 * 1.45
    standing_charge = 45
    metered_total = water_cost + sewage_cost + standing_charge

    # Estimate unmetered cost by bedrooms
    unmetered_by_beds = {1: 320, 2: 420, 3: 520, 4: 640, 5: 780}
    unmetered_total = unmetered_by_beds.get(min(bedrooms, 5), 520)

    savings = unmetered_total - metered_total

    if savings > 50:
        recommendation = "A water meter is likely to save you money"
    elif savings < -50:
        recommendation = "Staying unmetered is probably better for you"
    else:
        recommendation = "Your bills would be similar either way"

    return f"""Water Meter Savings Estimate:

Household: {occupants} people, {bedrooms} bedrooms
Annual usage: ~{round(annual_m3)} cubic metres

Estimated metered bill: £{round(metered_total)}
Estimated unmetered bill: £{unmetered_total}
Potential savings: £{round(savings)} per year

Recommendation: {recommendation}

Note: These are estimates using typical UK rates. Contact your water company for exact figures."""


@agent.tool
async def get_water_usage_info(activity: str) -> str:
    """Get information about water usage for a specific activity.

    Args:
        activity: The activity to get water usage for (shower, bath, toilet, washing machine, etc.)
    """
    usage_data = {
        "shower": "A typical shower uses about 10 litres per minute. A 7-minute shower uses ~70 litres. Tip: Reducing shower time by 1 minute saves 3,650 litres per year.",
        "bath": "A full bath uses approximately 80 litres of water. That's equivalent to about 8 minutes of showering. Consider showers for daily washing.",
        "toilet": "A dual-flush toilet uses about 6 litres (full) or 4 litres (half). Older toilets can use up to 13 litres per flush.",
        "washing machine": "A modern washing machine uses about 50 litres per load. Running full loads is more efficient than multiple small loads.",
        "dishwasher": "A dishwasher uses about 12 litres per cycle - often less than hand washing the same dishes.",
        "garden": "A garden hose uses about 15 litres per minute. Consider using a watering can or water butt instead.",
        "tap": "A running tap uses about 6 litres per minute. Turn off taps while brushing teeth or soaping hands.",
    }

    activity_lower = activity.lower()
    for key, info in usage_data.items():
        if key in activity_lower:
            return info

    return f"I don't have specific data for '{activity}'. Average UK water usage is 145 litres per person per day, including all activities."


@agent.tool
async def get_water_company_info(region: str = "general") -> str:
    """Get information about UK water companies.

    Args:
        region: The region or water company name (or 'general' for overview)
    """
    companies = {
        "thames": "Thames Water serves London and the Thames Valley. Contact: 0800 316 9800",
        "united utilities": "United Utilities serves North West England. Contact: 0345 672 2999",
        "severn trent": "Severn Trent serves the Midlands. Contact: 0345 750 0500",
        "yorkshire": "Yorkshire Water serves Yorkshire and parts of North Lincolnshire. Contact: 0345 124 2424",
        "anglian": "Anglian Water serves East Anglia and parts of the Midlands. Contact: 0345 791 9155",
        "southern": "Southern Water serves Kent, Sussex, Hampshire and Isle of Wight. Contact: 0330 303 0368",
        "welsh": "Welsh Water (Dwr Cymru) serves Wales and parts of England. Contact: 0800 052 0145",
        "northumbrian": "Northumbrian Water serves North East England. Contact: 0345 733 5566",
    }

    region_lower = region.lower()
    for key, info in companies.items():
        if key in region_lower:
            return f"{info}\n\nTo request a water meter, contact your water company directly. Installation is free and most offer a trial period."

    return """Major UK water companies include:
- Thames Water (London, Thames Valley)
- United Utilities (North West)
- Severn Trent (Midlands)
- Yorkshire Water (Yorkshire)
- Anglian Water (East Anglia)
- Southern Water (South East)
- Welsh Water (Wales)
- Northumbrian Water (North East)

To find your water company, check your water bill or visit ccw.org.uk

Water meter installation is FREE in England and Wales. Most companies offer a 12-24 month trial period."""


@agent.tool
async def get_water_saving_tips(area: str = "general") -> str:
    """Get water saving tips for a specific area of the home.

    Args:
        area: The area to get tips for (bathroom, kitchen, garden, general)
    """
    tips = {
        "bathroom": """Bathroom Water Saving Tips:
1. Take shorter showers (4-5 minutes) - saves 20 litres per shower
2. Fix dripping taps - saves 5,500 litres per year
3. Install a water-efficient showerhead - saves 30%
4. Use the half-flush on dual-flush toilets
5. Turn off tap while brushing teeth - saves 5 litres each time
6. Consider a shower timer to track your time""",

        "kitchen": """Kitchen Water Saving Tips:
1. Only run the dishwasher when full
2. Use a bowl for washing up instead of running tap
3. Keep a jug of water in the fridge instead of running tap for cold water
4. Steam vegetables instead of boiling (uses less water)
5. Use the right size pan for cooking
6. Fix dripping taps promptly""",

        "garden": """Garden Water Saving Tips:
1. Install a water butt to collect rainwater
2. Water plants in early morning or evening (less evaporation)
3. Use a watering can instead of a hose
4. Add mulch to flower beds to retain moisture
5. Choose drought-resistant plants
6. Let your lawn grow longer (needs less water)""",

        "general": """Top 10 Water Saving Tips:
1. Fix leaks promptly - a dripping tap wastes 5,500 litres/year
2. Take shorter showers - save 20 litres per minute
3. Turn off taps when not in use
4. Use full loads in washing machines and dishwashers
5. Install water-efficient fixtures
6. Collect rainwater for the garden
7. Report water leaks in your area
8. Consider a water meter to track usage
9. Check toilet cisterns for leaks
10. Reuse cooking water for plants

A water-efficient household uses about 110 litres per person per day compared to the UK average of 145 litres.""",
    }

    area_lower = area.lower()
    for key, info in tips.items():
        if key in area_lower:
            return info

    return tips["general"]


# AG-UI endpoint
@app.post("/agui/")
async def agui_endpoint(request: dict):
    """AG-UI compatible endpoint for CopilotKit."""
    message = request.get("message", "")
    result: AgentRunResult = await agent.run(message)
    return {"response": result.data}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
