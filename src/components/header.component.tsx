import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMail } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Donationbutton, Logo, MenuItem } from '.'

export default function Header(){
    const location = useLocation()
    const [isFixed, setIsFixed] = useState(false)
    const menuItems = useMemo( () => [
        { label : 'Home', link : '/' },
        {
            label : 'About',
            link : '/about-us',
            isMainLink : true,
            dropdownItems : [
                { label : 'Who Are We', link : '#who-are-we' },
                { label : 'Our Team', link : '#our-team'},
                { label : 'Our Values', link : '#our-values'},
            ]
        },
        { label : 'Join', link : '/join-us' },
        { label : 'News', link : '/news' },
        { label : 'Cases', link : '/donation-cases' },
        { label : 'Contact', link : '/contact' },
    ], [])

    const TopBar = useCallback( () => (
        <div className="bg-secondary">
            <div className='container flex justify-between'>
                <div className='flex-1 text-xs sm:text-sm flex justify-between sm:justify-normal sm:gap-x-8 py-4'>                        
                    <div className="text-white">
                        <a href="mailto:info@good-helper-foundation.org" className="flex items-center gap-x-2">                        
                            <IoMdMail className='' />
                            <span className=''>info@good-helper-foundation.org</span>
                        </a>
                    </div>
                    <div className="text-white">
                        <a href="tel:+16467755266" className="flex items-center gap-x-2">                        
                            <BsFillTelephoneFill className='' />
                            <span className=''>+1 646 775 5266</span>
                        </a>
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <Donationbutton className=' hover:bg-secondary-deep py-2 bg-white text-secondary hover:text-white' />
                </div>
            </div>
        </div>
    ), [])

    const NavMenu = useCallback( () => (
        <div className="group sticky z-50 top-0 w-full bg-white shadow">
            <div className='container flex justify-between py-2'>
                <Logo />
                <nav className='flex items-center gap-x-4'>
                    <ul className="list-none flex gap-x-2 md:gap-x-6 text-secondary text-xs sm:text-sm md:text-base">
                        { menuItems.map( (item, index) => <MenuItem key={index} {...item} />)}                    
                    </ul>
                    <div className={`hidden ${isFixed ? 'sm:flex' : ''}`}>
                        <Donationbutton className='items-center justify-center bg-secondary hover:bg-secondary-deep text-white'/>
                    </div>
                </nav>
            </div>
        </div>
    ), [menuItems, isFixed])


    useEffect(() =>{
        // setShowMobileMenu(false)
        if(location.hash){
            document.getElementById(location.hash.substring(1))?.scrollIntoView({behavior : "smooth", inline : "start" })
        }else{
            window.scrollTo( 0, 0 )
        }

        const onScroll = () => setIsFixed( window.scrollY >= 100 )
        window.addEventListener("scroll", onScroll)

        // return () => window.removeEventListener("scroll", onScroll)

    }, [location])

    return (
        <>
            <TopBar />
            <NavMenu />
        </>
    )
}