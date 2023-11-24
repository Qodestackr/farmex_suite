A robust system that will adapt to needs such as:

- Farmex Pricing Calculator. A comprehensive comparison interactive feature. Allow users to enable/disable and find a custom pricing on various packages. Give users what they want, pay only what you use.
- A robust GIS powered Authentication Engine (Start with Basic Auth)
<!-- BUILD A SIMPLE AUTH THEN BUILD UPON THAT -->

MINIMUM VIABLE PRODUCT.

- FARMING RELATED STUFF FROM :: Farmex Marketplace basics - Dashboard and Actual UI site
- Farm Guard
- Crop Analytics default pages (More functionalities require ML features)
- GIS Powered tooling
- Workflows and Integration (CRM, Custom Workflows)

WHAT WILL SPEND MOST OF MY TIME?

- GIS Powered

<!--
Enablers of future Farming:
- Data Driven
- AI/ML && Data
- Efficient Collaboration tools that bring onboard various workflows and integration in business side of
farming
- Accessible Marketplace with efficient Logistics, all the way
- GIS
- Mobile and Online access (Web Dashboard, Mobile App, Web App)
- IoT
- Manage Farm Resources: Water, Farm Input, Machinery, Who works on them and so on...
So its about a comprehensive end to end water management, sensors with IoT, GIS, Machinery,
People working on them. Add to the mix Expenses side of things

// Marketplace will mostly expose off the functionality by:
- Real e-commerce (Farmer to end customers)
- Dashboard section (Events and such would help farmers meet)
- Farmers can check what others are selling (Farmer to Farmer Purchases)
// Sharing Economy is huge, expose functionalities to manage or lease stuff, Use GIS and sensors too in this case

// Key resources
- Farm inputs (Research on this)
- Water and Energy Management
- Machinery and People-ops
- Common functionalities for common workflows that come with this...
-->

Current Integrations:

- Farmex Cloud connects to suite of integration tools - its the core service for data and analytics<inside it, we will have more modules to manage stuff - scale with containers, serverless, and more>
- Farmex Marketplace - With data on Farmex Cloud, hook in an end to end solution to access a read market.
- Farmex Analytics - Data from Farmex Cloud is stored, analysed(Analytics and ML pipelines) and displayed in an interactive manner, the data is real-time.
  <!-- TODO, research on real-time Golang Nextjs solutions...-->
  <!-- Make sure the solution scales from small scale to large farming organizations -->

The dashboard is a complete turnkey system with tiles on managing your FarmGuard™ device, placing orders for farm inputs, ordering trucks to collect your harvests to even raising invoices for payment by your customers. Some of our beta pilot farmers call it; “the complete farming management portal”.

QUESTION. WE HAVE THIS BACKENDS

- farmex_api_core : To be implemented in Go
- farmex_api_analytics: Analytics from Marketplace to farm and so on (end to end). Makes sense to handle with Python all the way? We'll see
- farmex_api_marketplace: Its backends to be mostly Go
- farmex_api_workflows: Integration with tooling and custom workflows(Will be basic features for now, e.g basic non-IoT stuff we see in ops like project management, tools like CRM etc). Will and can get quite complex if IoT or some form come into mix. Which tech stack should handle this??

<!-- In future, we will bring farmex messaging -->

FARMERS INVESTMENTS ... I.E KINDA A SMALL MARKET EITHER TO TEACH(DEMO) OR NOT...We'll see, aim for real-time value graphs...and so forth.
