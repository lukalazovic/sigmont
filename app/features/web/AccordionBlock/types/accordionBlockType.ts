export interface IAccordionBlockItemProps {
    title: string;
    content: string;
}

export interface IAccordionBlockProps {
    title: string;
    mainIntro?: string;
    className?: string;
    items: IAccordionBlockItemProps[];
}