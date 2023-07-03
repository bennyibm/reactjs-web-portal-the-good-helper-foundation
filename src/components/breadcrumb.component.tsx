import Section from "./section.component"

type props = {
    title : string
    bgImage? : string
}
export default function Breadcrumb( { title, bgImage = '/images/the-good-helper-foundation-people-in-need.jpeg' } : props ){
    return(
        <Section bgImage={bgImage} className="md:min-h-[300px] lg:min-h-[400px] flex items-center">
            <h1 className="title text-white drop-shadow-2xl">{title}</h1>
        </Section>
    )
}