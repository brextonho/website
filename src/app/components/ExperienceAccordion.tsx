import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/components/ui/accordion"

export function ExperienceAccordion() {
return (
    <Accordion type="single" collapsible className="w-full">
        
        <AccordionItem value="item-1">
            <AccordionTrigger className="sm:flex flex-row">
                <div className="flex flex-col items-start">
                    <h2 className="mb-3 lg:text-2xl text-left">Government of Singapore Investment Corporation (GIC)</h2>
                    <h3 className="lg:text-lg">Data Science</h3>
                </div>
                <div className="flex flex-col items-end">
                <p className="text-sm lg:text-lg">Jan 2023 — Nov 2023</p>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p className="lg:text-lg mb-2 lg:mb-0">PE Strats</p>
                <p className="lg:text-lg"><span className="font-bold me-1">Tools and Technologies: </span>Python, Plotly Dash, Bootstrap, Snowflake, SnowSQL, Tableau, Git</p>
                  
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger className="sm:flex flex-row">
                <div className="flex flex-col items-start">
                    <h2 className="mb-3 lg:text-2xl text-left">Shopee</h2>
                    <h3 className="lg:text-lg mb-2 lg:mb-0">Data Analytics</h3>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-sm lg:text-lg">May 2022 — Aug 2022</p>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p className="lg:text-lg">Shopee Mall, Supermarket, Supply Chain</p>
                <p className="lg:text-lg"><span className="font-bold me-1">Tools and Technologies: </span>PrestoSQL, SparkSQL, Google Apps Script, Excel</p>
            </AccordionContent>
        </AccordionItem>
    
    </Accordion>
)
}
