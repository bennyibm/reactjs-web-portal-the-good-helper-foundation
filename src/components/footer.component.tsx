import { BiCopyright, BiSolidMap } from 'react-icons/bi'
import { getCurrentDate } from "../utils/date-time";
import Section from "./section.component";
import Logo from './logo.component';
import { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { link } from 'fs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export default function Footer(){
    const menuItems = useMemo( () => [
        { label : 'Home', link : '/' },
        {
            label : 'About',
            link : '/about-us',
            isMainLink : true,
            dropdownItems : [
                { label : 'Who Are We', link : 'about-us' },
                { label : 'Our Team', link : '#our-team'},
                { label : 'Our Values', link : '#our-values'},
            ]
        },
        { label : 'Join', link : '/join-us' },
        { label : 'News', link : '/news' },
        { label : 'Cases', link : '/donation-cases' },
        { label : 'Contact', link : '/contact' },
    ], [])
    return (
        <footer className="text-white">
            <Section bgImage="/images/the-good-helper-foundation-people-in-need.jpeg" overlayOpacity='bg-opacity-80' className='text-xs lg:text-sm' containerClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className='col-span-2 sm:col-span-3 lg:col-span-1'>
                    <Logo />
                    <p className=''>
                        Let’s help our neighbors to  change the world around us. By becoming a donor, you can contribute to achieving our goals and advancing our mission.
                    </p>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h3 className='text-2xl text-primary'>
                        Usefull links
                    </h3>
                    <nav className='flex flex-col gap-y-1'>
                        { menuItems.map( ({link, label}, index) =>(
                             <NavLink key={index} className={ ({isActive}) => ` ${isActive ? 'text-primary' : ''} hover:text-primary w-fit` }  to={link} >{label}</NavLink>
                        ) )}
                    </nav>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h3 className='text-2xl text-primary'>
                        Bank Information
                    </h3>
                    <ul className='list-none flex flex-col gap-y-2'>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                Account name
                            </span>
                            <span className='text-primary'>
                                GOOD HELPER 22
                            </span>
                        </li>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                Account number
                            </span>
                            <span className='text-primary'>
                                429360479
                            </span>
                        </li>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                Account number
                            </span>
                            <span className='text-primary'>
                                429360479
                            </span>
                        </li>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                Routing number
                            </span>
                            <span className='text-primary'>
                                2112-74450
                            </span>
                        </li>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                Fedwire ABA for Wires
                            </span>
                            <span className='text-primary'>
                                031101266
                            </span>
                        </li>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                Routing number
                            </span>
                            <span className='text-primary'>
                                2112-74450
                            </span>
                        </li>
                        <li className='flex gap-2 text-xs lg:text-sm'>
                            <span className='d'>
                                SWIFT code
                            </span>
                            <span className='text-primary'>
                                NRTHUS33XXX SWIFT
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='col-span-2 sm:col-span-1 flex flex-col gap-y-2'>
                    <h3 className='text-2xl text-primary'>
                        Contact
                    </h3>
                    <div className='flex flex-col gap-y-3'>
                        <a className="flex items-center gap-x-2 hover:text-primary" href="mailto:info@good-helper-foundation.org">                        
                            <IoMdMail className='' />
                            <span className=''>info@good-helper-foundation.org</span>
                        </a>
                        <a className="flex items-center gap-x-2 hover:text-primary" href="tel:+12074091594">                        
                            <BsFillTelephoneFill className='' />
                            <span className=''>+1 207-409-1594</span>
                        </a>
                        <a className="flex items-center gap-x-2 hover:text-primary" href="tel:+16467755266">                        
                            <BsFillTelephoneFill className='' />
                            <span className=''>+1 646 775 5266</span>
                        </a>
                        <a className="flex items-center gap-x-2 hover:text-primary" href="tel:+16467755266">                        
                            <BiSolidMap className='' />
                            <span className=''>28 State St ,Suite 2B, Gorham Maine 04038</span>
                        </a>
                    </div>
                </div>
            </Section>
            <Section withVerticalPadding={false} className="py-5 text-center bg-black bg-opacity-90">
                <p className="flex flex-wrap items-center justify-center text-xs gap-x-2">
                    Copyright 
                    <span className=' inline-flex justify-center items-center'> 
                        <BiCopyright className='' /> 
                        { getCurrentDate().getFullYear() }
                        
                    </span>
                    Good helper Foundation. All right reserved
                </p>
            </Section>
        </footer>
    )
}
// 
// Account number 2429360479
// Routing number 2112-74450
// Fedwire ABA for Wires 031101266
// SWIFT code NRTHUS33XXX SWIFT