import { useCallback } from "react"

type props = {
    data : { title : string, content : any }[]
    id? : string
    className? : string

}
export default function AccordionList( { id, className, data} : props){
    const AccordionItem = useCallback( ({title, content} : { title : string, content : any }) => (
        <div className="">
            <h3 className="">{title}</h3>
            <p className="">{content}</p>
        </div>
    ), [])

    return (
        <div id={id} className={`${className}`}>
            { data.map( (datum, index) => <AccordionItem key={index.toString()} {...datum} />) }
        </div>
    )
}