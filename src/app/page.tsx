export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" }}>
            Coming Soon
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
            Water Meter Calculator: Calculate Your Water Meter Savings
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deciding whether to switch to a water meter is a significant financial decision for UK households. A water meter calculator helps you estimate whether you would pay more or less on metered water charges compared to your current unmetered bills, potentially saving you hundreds of pounds each year depending on your household size and water usage habits.
          </p>
        </div>

        <div className="my-12 flex justify-center">
          <img
            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20300%22%20fill%3D%22none%22%3E%3Crect%20width%3D%22600%22%20height%3D%22300%22%20rx%3D%2212%22%20fill%3D%22%230E7490%22%20opacity%3D%220.08%22%2F%3E%3Crect%20x%3D%2240%22%20y%3D%2240%22%20width%3D%22520%22%20height%3D%22220%22%20rx%3D%228%22%20fill%3D%22%230E7490%22%20opacity%3D%220.12%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22140%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22bold%22%20fill%3D%22%230E7490%22%3EWater%20Meter%20Calculator%3C%2Ftext%3E%3Ctext%20x%3D%22300%22%20y%3D%22180%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2216%22%20fill%3D%22%230E7490%22%20opacity%3D%220.8%22%3ECalculate%20Your%20Water%20Meter%20Savings%3C%2Ftext%3E%3Crect%20x%3D%22220%22%20y%3D%22210%22%20width%3D%22160%22%20height%3D%2236%22%20rx%3D%2218%22%20fill%3D%22%230E7490%22%20opacity%3D%220.2%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22234%22%20text-anchor%3D%22middle%22%20font-family%3D%22system-ui%2Csans-serif%22%20font-size%3D%2214%22%20fill%3D%22%230E7490%22%3EComing%20Soon%3C%2Ftext%3E%3C%2Fsvg%3E"
            alt="water meter calculator illustration"
            width={600}
            height={300}
            className="rounded-lg w-full max-w-lg"
          />
        </div>

        <article className="space-y-8">

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            How a Water Meter Calculator Helps You Decide
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            A water meter calculator estimates your likely metered water charges based on your actual consumption patterns and compares them to your current unmetered bills. By inputting information about your household size, shower and bath habits, garden watering, and appliance usage, the calculator provides a personalised estimate of what your water bills would be with a meter installed. This comparison helps you make an informed decision about whether switching is financially beneficial for your household. Generally, households with fewer occupants than bedrooms tend to save money with a <strong>water meter calculator</strong> showing significant potential savings, while larger families in smaller properties may pay more on metered charges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Understanding Metered vs Unmetered Water Charges
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Unmetered water charges are based on the rateable value of your property, a figure determined by your local authority that does not change regardless of how much water you actually use. Metered charges, by contrast, are calculated based on actual consumption measured in cubic metres, plus a fixed standing charge. This means that with a meter, you only pay for the water you use, creating a direct financial incentive to reduce consumption. Water companies charge different rates per cubic metre for clean water supply and for sewerage services, and both of these are reflected in your metered bill. Understanding these differences is essential for accurately interpreting your water meter calculator results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Who Benefits Most from a Water Meter?
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Certain household types typically benefit significantly from switching to a water meter. Single occupants and couples in properties with three or more bedrooms often see the biggest savings, as their unmetered charges are based on a larger property value while their actual water usage is relatively low. Households that are already water-conscious, those who do not have large gardens, and those without water-hungry habits like daily baths or long showers also tend to pay less on metered charges. Conversely, larger families with five or more occupants, those with large gardens requiring regular watering, and households with swimming pools or hot tubs may pay more with a meter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            The Process of Getting a Water Meter Installed
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Getting a water meter installed is free and straightforward in most cases. Contact your water company to request a meter installation, and they will arrange an appointment to fit it, usually within a few weeks. The meter is typically installed at the boundary of your property where the water supply pipe enters from the street. In some cases, such as shared supply pipes or properties where external installation is impractical, your water company may offer an assessed charge instead, which estimates what your metered bill would be based on similar properties. Most water companies offer a trial period of at least twelve months during which you can revert to unmetered charges if you find the meter is not saving you money.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Reducing Your Metered Water Bills Further
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            Once you have a water meter installed, every litre you save directly reduces your bill, providing ongoing motivation to be water-efficient. Simple changes like fixing dripping taps, installing a water-efficient showerhead, and using a water butt for garden watering can significantly reduce your metered consumption. Running washing machines and dishwashers only with full loads, reducing shower times, and turning off the tap while brushing teeth are small habit changes that add up to meaningful savings over a year. Your water meter calculator can help you quantify the financial benefit of these changes, showing exactly how much each water-saving measure could reduce your annual bill.
          </p>
        </section>
        </article>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="h-1 w-24 mx-auto rounded mb-6" style={{ background: "var(--accent)" }} />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Water Meter Calculator. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
