import { useRef, useState, useCallback, useEffect } from "react"
import { useLocation, NavLink } from "react-router-dom"
import { FaAngleDown } from 'react-icons/fa'
import { getCurrentDate } from "../utils/date-time"

type props = {
    label : string
    link? : string
    dropdownItems? :  { label : string, link? : string} []
    md? : boolean
    isMainLink? : boolean
}

export default function MenuItem ({label, link, dropdownItems, isMainLink, md} : props) {
    const id = useRef( getCurrentDate().valueOf() )
    const location = useLocation()
    const [showSubMenu, setShowSubMenu] = useState<boolean>()
    
    const onDropdownClick = useCallback( (e : React.MouseEvent<HTMLAnchorElement>) => {
        document.dispatchEvent(new CustomEvent('dropdown', { detail : id.current  })); 

        if(isMainLink){
            e.preventDefault() 
            e.stopPropagation()
            setShowSubMenu( prev => !prev)
        }
    }, [isMainLink])

    const onDropdownHover = useCallback( () => {
        document.dispatchEvent(new CustomEvent('dropdown', { detail : id.current  }));
        setShowSubMenu( true )
    }, [])

    const onMouseLeave = useCallback( () => {
        setShowSubMenu(false)
    }, [])

    useEffect(() =>{
        setShowSubMenu(false)
        const onClick = () => setShowSubMenu(false)
        const onScroll = () => setShowSubMenu(false)
        const onDropdown = (e : any) => {
            if(e.detail !== id.current ){
                setShowSubMenu(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        window.addEventListener("click", onClick)
        document.addEventListener( "dropdown", onDropdown)
        
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("click", onClick)
            document.removeEventListener("dropdown", onDropdown)
        }

    }, [location])

    const RenderDropdown = useCallback( () => (
        <li className="relative">
            <NavLink 
                to={link || ''} 
                onClick={onDropdownClick} className={ ({isActive}) => `flex items-center gap-x-2 pb-1 relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-1 ${showSubMenu ? "after:-translate-y-0" : ""} ${isActive ? "after:w-full font-bold" : "after:w-0"} after:bg-secondary after:rounded-2xl`} >
                {label} 
                <FaAngleDown className={`${showSubMenu ? "rotate-180":""} transition-all`} />
            </NavLink>
            <div className={`bg-slate-100 w-32 ${md ? "md:w-56" : ""} absolute z-50 left-0 translate-y-3 divide-y divide-gray-300 shadow-sm ${showSubMenu ? 'block' : 'hidden'}`}>
                <nav className="w-full py-3 px-2 flex flex-col" aria-labelledby="About us">
                    {
                        dropdownItems?.map( (item, key) => 
                            <NavLink key={key} to={`${link}/${item.link}`} className={ ({isActive}) => `${isActive ? "" : ""} border-b last:border-b-0 border-b-secondary border-opacity-10 py-1`} >
                                {item.label}
                            </NavLink>
                        )
                    }
                </nav>
            </div>
        </li>
    ), [label, link, dropdownItems, md, onDropdownClick, showSubMenu])

    const RenderSimpleMenuItem = useCallback( () => (
        <li onMouseEnter={ e => {  }}>
            <NavLink to={link || ''} className={ ({isActive}) => `pb-1 relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-1  ${isActive ? "after:w-full font-bold" : "after:w-0"} after:bg-secondary after:rounded-3xl`}>{label}</NavLink>
        </li>
    ), [label, link])

    return ( dropdownItems  ? <RenderDropdown />  : <RenderSimpleMenuItem /> )
}
