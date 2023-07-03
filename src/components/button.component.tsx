import { Link } from "react-router-dom"

type props = {
    children? : any
    className? : string
    style? : any
    size? : 'sm' | 'md' | 'lg'
    bgColor? : string
    hoverBgColor? : string
    textColor? : string
    hoverTextColor? : string
    onClick? : () => void
    link? : string
    disabled? : boolean
}
export default function Button({children,link, disabled, className = '', size, style, bgColor = 'primary', hoverBgColor = 'primary-deep', textColor = 'white', hoverTextColor = 'white', onClick} : props){

    return link ? (
        <Link to={link} style={style}
            className={` ${className} flex justify-center items-center gap-x-3 ${ (size === 'md') ? 'px-24 py-4 rounded-full' : 'px-8 py-2' } bg-secondary text-white hover:bg-secondary rounded-3xl`} >
            {children}
        </Link>
    ) : (
        <button 
            className={`${className} flex justify-center items-center gap-x-3 ${ (size === 'md') ? 'px-24 py-4 rounded-full' : 'px-8 py-2' } bg-secondary text-white hover:bg-secondary rounded-3xl  disabled:pointer-events-none disabled:bg-opacity-80`} style={style}
            onClick={ () => onClick && onClick()}
            disabled={disabled}
        >
            {children}
        </button>
    )
}