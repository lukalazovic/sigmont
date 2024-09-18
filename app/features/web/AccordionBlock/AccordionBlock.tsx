'use client'
import { IAccordionBlockProps } from "./types/accordionBlockType";
import { Accordion } from 'react-bootstrap-accordion'

export const AccordionBlock = ({
    title,
    items,
    mainIntro
}: IAccordionBlockProps) => {
    return (
        <div className="container my-5">
            <div className="accordions-wrapper">
                <h3 className="section-title text-uppercase">{title}</h3>
                {mainIntro && <p>{mainIntro}</p>}
                {items.map(({title, content}, i) => <Accordion key={i} title={title}>{content}</Accordion>)}
            </div>
        </div>
    )
}