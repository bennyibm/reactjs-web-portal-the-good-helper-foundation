type props = {
    id? : string
    withVerticalPadding? : boolean
    className? : string
    containerClassName? : string
    children? : any
    bgImage? : string
    bgPosition? : 'object-center' | 'object-top' | 'object-bottom' | 'object-left' | 'object-right'
    container? : boolean
    overlayOpacity? : 'bg-opacity-0' | 'bg-opacity-5' | 'bg-opacity-10' | 'bg-opacity-20' | 'bg-opacity-25' | 'bg-opacity-30' | 'bg-opacity-40' | 'bg-opacity-50' | 'bg-opacity-60' | 'bg-opacity-70' | 'bg-opacity-75' | 'bg-opacity-80' | 'bg-opacity-90' | 'bg-opacity-95' | 'bg-opacity-100'
}
export default function Section( {id, children, className = '', container = true, containerClassName = '', withVerticalPadding = true, bgImage, bgPosition = 'object-center', overlayOpacity = 'bg-opacity-70'} : props ){
    return (
        <section id={id} className={` ${bgImage ? 'relative' : ''} ${className} ${withVerticalPadding ? 'py-10 mg:py-16 lg:py-24' : ''}`}>
            { bgImage && (
                <>
                    <img src={bgImage} alt="" className={`absolute inset-0 w-full h-full object-cover ${bgPosition}`} />
                    <div className={`absolute bg-black inset-0 w-full h-full ${overlayOpacity}`}/>
                </>
            ) }
            { !container ? children : (
                <div className={`${containerClassName} ${bgImage ? 'relative z-10' : ''} container`}>
                    {children}
                </div>
            ) }
        </section>
    )
}