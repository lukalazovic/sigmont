//TODO Create proper AccordionBlock

export const AccordionBlock = ({ title, items }:any) => {
    return (
        <>
        <div> {title} </div>
        {items.map((i:any) => {
            return (
            <div key={i}>
                <h1>{i.title}</h1>
                <p>{i.content}</p>
            </div>
            )
        })}
        </>
    )
}