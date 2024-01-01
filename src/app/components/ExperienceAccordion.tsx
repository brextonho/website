import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/components/ui/accordion"

interface ExperienceItemProps {
    value: string;
    title: string;
    subtitle: string;
    date: string;
    details: string;
    tools: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    value,
    title,
    subtitle,
    date,
    details,
    tools,
}) => (
    <AccordionItem value={value}>
        <AccordionTrigger className="sm:flex flex-row">
        <div className="flex flex-col items-start">
            <h2 className="mb-3 lg:text-2xl text-left">{title}</h2>
            <h3 className="lg:text-lg mb-2 lg:mb-0">{subtitle}</h3>
        </div>
        <div className="flex flex-col items-end">
            <p className="text-sm lg:text-lg">{date}</p>
        </div>
        </AccordionTrigger>
        <AccordionContent>
        <p className="lg:text-lg mb-2 lg:mb-0">{details}</p>
        <p className="lg:text-lg">
            <span className="font-bold me-1">Tools and Technologies: </span>
            {tools}
        </p>
        </AccordionContent>
    </AccordionItem>
);

export const ExperienceAccordion: React.FC = () => (
    <Accordion type="single" collapsible className="w-full">
        <ExperienceItem
        value="item-1"
        title="Government of Singapore Investment Corporation (GIC)"
        subtitle="Data Science"
        date="Jan 2023 — Nov 2023"
        details="PE Strats"
        tools="Python, Plotly Dash, Bootstrap, Snowflake, SnowSQL, Tableau, Git"
        />

        <ExperienceItem
        value="item-2"
        title="Shopee"
        subtitle="Data Analytics"
        date="May 2022 — Aug 2022"
        details="Shopee Mall, Supermarket, Supply Chain"
        tools="PrestoSQL, SparkSQL, Google Apps Script, Excel"
        />
    </Accordion>
);
