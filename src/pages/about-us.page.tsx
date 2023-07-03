import { FaLightbulb } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Breadcrumb, Donationbutton, Section, TeamateCard } from "../components";
import { useCallback } from 'react';
import { faker } from '@faker-js/faker';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function AboutUs(){
    const generateTeamates = useCallback( (length : number) => {
        const teamates = [
            {
                name : 'Jacques KABAMBA',
                position : 'Executive Director, Human Right Consultant & CharityOrganizer',
                imagePath : 'jacques-kabamba',
                comment : 'Human rights and universal civil rights will only be respected on one condition. Man will have to realize that he is "responsible for the whole world'
            },
            {
                name : 'André ZOMBO',
                position : 'Finance Administrator',
                imagePath : 'andre-zombo',
                comment : 'In Humanitarianwork, the heart is not enough; We also need funds'
            },
            {
                name : 'Siméon DOBWA',
                position : 'Head of Public Relations & Communications',
                imagepath : 'Making our environment clean through a quality cleaning service has saved the lives of families',
                imagePath : 'simeon-bobwa'
            }
        ]

        return teamates
    }, [])

    return (
        <>
            <Breadcrumb title="About us" />
            <Section id='who-are-we' containerClassName="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-y-4 text-xs sm:text-sm md:text-base">
                    <h2 className="title text-secondary">
                        Who Are We
                    </h2>
                    <p className="font-bold text-primary">
                        The Good Helper Foundation is a 501(c)(3) organization. EIN:88-2775541. Donation are tax-deductible.
                    </p>
                    <p className="">
                        Here in Maine USA, many immigrant families find themselves housed in different hotels in the city because they cannot find 
                        adequate accommodation. Hotels do not provide an ideal setting for a long stay with children of  school age. With the start 
                        of the new school year approaching, it is imperative to find a good environment for children that will promote their development 
                        and fulfilment.
                    </p>
                    <p>
                        Help us urgently to find permanent accommodation or help us set up appropriate temporary shelters or accommodation to welcome 
                        single mothers with children before school starts.
                    </p>
                    <div>
                        <Donationbutton icon={<BsFillArrowRightCircleFill className='text-xl' /> } label='Donate Now' className='w-fit border-secondary hover:bg-secondary text-secondary hover:text-white'/>
                    </div>
                </div>
                <div className="hidden lg:block relative p-5">
                    <img className="absolute inset-0 w-full h-full object-cover" src="/images/the-good-helper-foundation-people-in-need.jpeg" alt="" />
                    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60" />
                </div>
            </Section>
            <Section id='our-values' bgImage='/images/the-good-helper-foundation-people-in-need.jpeg' overlayOpacity='bg-opacity-80' containerClassName='flex flex-col gap-y-5 md:gap-y-10 text-xs sm:text-sm md:text-base text-white'>
                <h2 className='title '>What makes us aparts?</h2>
                <div className='grid lg:grid-cols-2 gap-y-5'>
                    <div className='flex flex-col gap-y-2'>
                        <h3 className='title-2 '>Our Mission</h3>
                        <ul className='list-none'>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle  className='text-lg '/> 
                                <span className='flex-1'>
                                    Promote and teach human rights in our communities, schools and companies
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle  className='text-lg '/> 
                                <span className='flex-1'>
                                    Provide temporary shelter to people in need,
                                </span>
                            </li>
                            <li className='hidden items-center gap-2'>
                                <AiFillCheckCircle className='text-lg ' />
                                <span className='flex-1'>
                                    Clean house for people with disabilities and for veterans in need.
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle  className='text-lg '/> 
                                <span className='flex-1'>
                                    Support those who immigrate legally to the United States for their effective integration.
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle  className='text-lg '/> 
                                <span className='flex-1'>
                                    Work in partnership with other organizations around the world to bring hope to orphans and people with disabilities in poor countries.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h3 className='title-2 '>Our Values</h3>
                        <ul className='list-none'>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle  className='text-lg '/> 
                                <span className='flex-1'>
                                    No discrimination
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle  className='text-lg '/> 
                                <span className='flex-1'>
                                    All our work and our decisions are based on careful consideration of facts governed by the basic principles of fairness and the rule of law
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <AiFillCheckCircle className='text-lg ' />
                                <span className='flex-1'>
                                    We firmly believe in the value of every human life and we would like to work, with the best of our abilities, for the improvement of the conditions of life
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='-mt-5 flex flex-col gap-y-2'>
                    <h3 className='title-2 '>Our Works</h3>
                    <ul className='list-none'>
                        <li className='flex items-center gap-2'>
                            <AiFillCheckCircle  className='text-lg '/> 
                            <span className='flex-1'>
                                Helping with dignity those who are limited to have a decent place of residence.
                            </span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <AiFillCheckCircle  className='text-lg '/> 
                            <span className='flex-1'>
                                Promote a better life by making known the rights of every human being and break down barriers to immigrant integration and  participation in all areas of the community.
                            </span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <AiFillCheckCircle className='text-lg ' />
                            <span className='flex-1'>
                                GHF stands with the people with disability, elders, veterans, homeless and immigrants to support them by doing home cleaning, offering temporary shelter and teaching humans rights.
                            </span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <AiFillCheckCircle className='text-lg ' />
                            <span className='flex-1'>
                                We can also redistribute these donations to our partners in others poor countries who are helping orphans and deaf if necessary.            
                            </span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <AiFillCheckCircle className='text-lg ' />
                            <span className='flex-1'>
                                The GHF is receiving clothes donation to support immigrants’ family and everyone in need.
                            </span>
                        </li>
                    </ul>
                </div>
            </Section>
            
            <Section className="bg-secondary text-white" containerClassName="grid md:grid-cols-2 2xl:grid-cols-4 gap-5 text-xs sm:text-sm md:text-base">
                <div className="bg-white bg-opacity-10 p-5 shadow">
                    <div className="">
                        <FaLightbulb className="text-6xl opacity-40" />
                    </div>
                    <h3 className="title-2 py-2">Temporary shelter</h3>
                    <p className="">
                        Provide temporary residence for homeless individuals and families.
                    </p>
                </div>
                <div className="bg-white bg-opacity-10 p-5 shadow">
                    <div className="">
                        <FaLightbulb className="text-6xl opacity-40" />
                    </div>
                    <h3 className="title-2 py-2">
                        Diversity Visa
                    </h3>
                    <p className="">
                        You want to live in the USA through the DV lottery, we provide support
                    </p>
                </div>
                <div className="bg-white bg-opacity-10 p-5 shadow">
                    <div className="">
                        <FaLightbulb className="text-6xl opacity-40" />
                    </div>
                    <h3 className="title-2 py-2">
                        Human Rights training
                    </h3>
                    <p className="">
                        Everyone has the right to life, liberty and security of person. Article 3 of Universal Declaration of Human Rights
                    </p>
                </div>
                <div className="bg-white bg-opacity-10 p-5 shadow">
                    <div className="">
                        <FaLightbulb className="text-6xl opacity-40" />
                    </div>
                    <h3 className="title-2 py-2">
                        House Cleaning
                    </h3>
                    <p className="">
                        House cleaning for people with disabilities and for veterans in need
                    </p>
                </div>
            </Section>

            <Section className='bg-slate-100' containerClassName='grid md:grid-cols-2 gap-3'>
                <div className='flex flex-col gap-y-2'>
                    <h2 className="title text-secondary">
                        Helping each other can make world better
                    </h2>
                    <p className=' lg:pr-10 xl:pr-14'>
                        Let’s help our neighbors to  change the world around us. By becoming a donor, you can contribute to achieving our goals and advancing our mission.
                    </p>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <p className="title-2 text-secondary">                        
                        Dignity for all in society and Full integration of immigrants
                    </p>
                    <p>                        
                        Hotels do not provide an ideal setting for a long stay with children of school age. With the start of the new school 
                        year approaching, it is imperative to find a good environment for children that will promote their development and fulfilment.
                    </p>
                    <p>
                        Help us urgently to find permanent accommodation or help us set up appropriate temporary shelters or accommodation to welcome 
                        single mothers with children before school starts.
                    </p>
                    <div>
                        <Donationbutton icon={<BsFillArrowRightCircleFill className='text-xl' /> } label='Donate Now' className='w-fit border-secondary hover:bg-secondary text-secondary hover:text-white'/>
                    </div>
                </div>
            </Section>
            <Section id='our-team' className='' containerClassName='flex flex-col gap-y-10'>
                <h2 className='title text-secondary'>Our Team</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    { generateTeamates(12).map( TeamateCard ) }
                </div>
            </Section>
        </>
    )
}