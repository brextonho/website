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
                    <h2 className="mb-3 text-2xl">Government of Singapore Investment Corporation (GIC)</h2>
                    <h3 className="text-base">Data Science</h3>
                </div>
                <div className="flex flex-col items-end">
                <p className="text-base">Jan 2023 — Nov 2023</p>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p className="text-base">PE Strats</p>
                <p className="text-base"><span className="font-bold me-1">Tools and Technologies: </span>Python, Plotly Dash, Bootstrap, Snowflake, SnowSQL, Tableau, Git</p>
                  
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger className="sm:flex flex-row">
                <div className="flex flex-col items-start">
                    <h2 className="mb-3 text-2xl">Shopee</h2>
                    <h3 className="text-base">Data Analytics</h3>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-base">May 2022 — Aug 2022</p>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <p className="text-base">Shopee Mall, Supermarket, Supply Chain</p>
                <p className="text-base"><span className="font-bold me-1">Tools and Technologies: </span>PrestoSQL, SparkQL, Google Apps Script, Excel</p>
            </AccordionContent>
        </AccordionItem>
    
    </Accordion>
)
}
