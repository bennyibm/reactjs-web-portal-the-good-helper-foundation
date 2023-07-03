import { FaHandshakeSimple, FaLightbulb } from 'react-icons/fa6'
import { FaHands } from 'react-icons/fa'
import { BiSolidDonateHeart, BiDonateHeart } from 'react-icons/bi'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { GiTeamIdea } from 'react-icons/gi'
import { HiUserGroup } from 'react-icons/hi'
import { Section } from "../components";
import Button from "../components/button.component";
import { Link } from 'react-router-dom';
import Donationbutton from '../components/donation.button.component';

export default function Home(){
    return(
        <>
            <Section className="min-h-[400px] lg:min-h-[600px]" overlayOpacity='bg-opacity-60' bgPosition='object-center' bgImage="/images/the-good-helper-foundation-people-in-need.jpeg">
                <div className="max-w-4xl text-white drop-shadow-2xl md:drop-shadow-xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                        Let's Give a Smile to Our Loved Ones Who are in Need
                    </h1>
                    <p className="py-4 md:py-8 md:text-xl max-w-3xl">
                        We’re raising money to make a difference and further our cause. To meet new challenges, the GOOD HELPER FOUNDATION set up this campaign with a goal of $250,000
                    </p>
                    <div className="">
                        <Donationbutton label='Donate' icon={<BsFillArrowRightCircleFill className='text-xl lg:text-3xl' /> } className='w-fit button border-secondary hover:bg-secondary' />
                    </div>
                </div>
            </Section>
            <Section className="bg-white" containerClassName="grid lg:grid-cols-3 gap-y-5 lg:gap-x-10">
                <div className="group p-5 flex flex-col items-center gap-y-4 bg-slate-100 hover:bg-secondary hover:text-white text-center">
                    <FaLightbulb className='text-8xl text-secondary group-hover:text-white '/>
                    <h3 className='title-2'>Wild Assistance</h3>
                    <p className='text-sm lg:text-base'>
                        Don't hesitate to reach out to relieve our brothers and sisters in distress.
                    </p>
                    <Link to='/contact' className='button xs border-secondary text-secondary group-hover:bg-white group-hover:text-secondary'>Contact</Link>
                </div>
                <div className="group p-5 flex flex-col items-center gap-y-4 bg-slate-100 hover:bg-secondary hover:text-white text-center">
                    <FaHandshakeSimple className='text-8xl text-secondary group-hover:text-white '/>
                    <h3 className='title-2'>Become a volunteer</h3>
                    <p className='text-sm lg:text-base'> 
                        Become a member and help change the world around you
                    </p>
                    <Link to='/join-us' className='button xs border-secondary text-secondary group-hover:bg-white group-hover:text-secondary'>Fill the form</Link>
                </div>
                <div className="group p-5 flex flex-col items-center gap-y-4 bg-slate-100 hover:bg-secondary hover:text-white text-center">
                    <FaHands className='text-8xl text-secondary group-hover:text-white '/>
                    <h3 className='title-2'>Make a Donation</h3>
                    <p className='text-sm lg:text-base'>
                        We need donations to help families around the world
                    </p>
                    <Donationbutton className='button xs border-secondary text-secondary group-hover:bg-white group-hover:text-secondary' />
                </div>
            </Section>

            <Section className='' container={false} overlayOpacity='bg-opacity-40' bgImage='/images/the-good-helper-foundation-no-home.jpeg'>
                <div className='absolute top-0 bottom-0 left-0  w-full md:w-3/4 lg:w-2/3 bg-secondary bg-opacity-80 md:bg-opacity-90 md:rounded-tr-[20rem]' />
                <div className="container relative z-10 grid md:grid-cols-3 text-white">
                    <div className="col-span-2 flex flex-col gap-y-6 text-sm lg:text-xl md:pr-4 lg:pr-0">                        
                        <h2 className="title">Who Are We ?</h2>
                        <p className="">
                            We’re raising money to make a difference and further our cause. To meet new challenges, the GOOD HELPER FOUNDATION set up this 
                            campaign with a goal of $250,000.With your help we want to enable many immigrant parents and children who are currently housed 
                            in hotels in Maine USA, to overcome the enormous challenge of finding suitable accommodation.
                        </p>
                        <p>
                            Help us urgently to find permanent accommodation or help us set up appropriate temporary shelters or accommodation to welcome single 
                            mothers with children before school starts. Thank you for your support to also give them the chance to go to school and live with 
                            dignity. Yes you can make it happen !
                        </p>
                        <Link to='/about-us' className='button w-fit hover:bg-white hover:text-primary text-white py-3 border border-white'>
                            Read more 
                            <BsFillArrowRightCircleFill className='text-xl lg:text-3xl' /> 
                        </Link>
                    </div>
                </div>
            </Section>

            <Section className='bg-white' containerClassName='md:grid md:grid-cols-3 items-center'>
                <div className="flex flex-col items-center gap-y-2 md:gap-y-8">
                    <h2 className='title text-secondary'>They Needs our Help</h2>
                    <p className='hidden text-sm md:text-base' >
                        Help us urgently to find permanent accommodation or help us set up appropriate temporary shelters or 
                        accommodation to welcome single mothers with children before school starts. Thank you for your support to also give them the chance to go to school and live with dignity. Yes you can make it happen !
                    </p>
                </div>
                <div className='pt-6 md:pt-0 md:col-span-2 grid grid-cols-3 items-center gap-x-10 font-bold text-primary'>
                    <div className='flex flex-col items-center gap-y-4 text-center'>
                        <FaLightbulb className='text-6xl md:text-8xl' />
                        <h3 className='text-secondary md:text-2xl'> <span className='text-2xl md:text-3xl'>+40</span> <br /> Volunteers </h3>
                    </div>
                    <div className='flex flex-col items-center gap-y-4 text-center'>
                        <HiUserGroup className='text-6xl md:text-8xl' />
                        <h3 className='text-secondary md:text-2xl'> <span className='text-2xl md:text-3xl'>+40</span> <br /> Volunteers </h3>
                    </div>
                    <div className='flex flex-col items-center gap-y-4 text-center'>
                        <GiTeamIdea className='text-6xl md:text-8xl' />
                        <h3 className='text-secondary md:text-2xl'> <span className='text-2xl md:text-3xl'>+40</span> <br /> Volunteers </h3>
                    </div>
                </div>
            </Section>
        </>
    )
}