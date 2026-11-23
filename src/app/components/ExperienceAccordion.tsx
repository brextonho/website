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

export type ExperienceEntry = Omit<ExperienceItemProps, "value">;

export const ExperienceAccordion: React.FC<{ items: ExperienceEntry[] }> = ({ items }) => (
    <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
            <ExperienceItem key={item.title} value={`item-${i}`} {...item} />
        ))}
    </Accordion>
);
