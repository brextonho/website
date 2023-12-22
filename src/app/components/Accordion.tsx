import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/components/ui/accordion"
  
export function AccordionDemo() {
return (
    <Accordion type="single" collapsible className="w-full">
        
        <AccordionItem value="item-1">
            <AccordionTrigger className="sm:flex flex-row">
                <div className="flex flex-col items-start">
                    <h2 className="mb-3 text-2xl">Government of Singapore Investment Corporation (GIC)</h2>
                    <h3 className="text-md">Data Science</h3>
                </div>
                <div className="flex flex-col items-end">
                    Jan 2023 — Nov 2023
                </div>
            </AccordionTrigger>
            <AccordionContent>
            PE Strats
            
            <p className="text-light">Tools and Technologies:</p>
            Python, SnowSQL, Tableau, git
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger className="flex">
                <div className="flex flex-col items-start">
                    <h2 className="mb-4 text-2xl">Shopee</h2>
                    <h3 className="text-md">Data Analytics</h3>
                </div>
                <div className="flex flex-col items-end">
                    May 2022 — Aug 2022
                </div>
            </AccordionTrigger>
            <AccordionContent>
            Shopee Mall, Supermarket, Supply Chain
            </AccordionContent>
        </AccordionItem>
    
    </Accordion>
)
}
