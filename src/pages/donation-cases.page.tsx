import { Link } from 'react-router-dom'
import { Breadcrumb, DonationCard, ProgressBar, Section } from "../components";
import { useCallback, useMemo } from 'react';
import { faker } from '@faker-js/faker/locale/zu_ZA';

export default function DonationCases(){
    const generateDonations = useCallback( (length : number) => {
        const donations = []
        for (let i = 1; i < length; i++) {
            donations.push( {
                title : faker.word.words(3),
                description : faker.lorem.sentences(4),
                date : faker.date.soon().toLocaleDateString(),
                location : faker.location.city(),
                raisedAmount : faker.number.int({min : 18000, max : 20500 }),
                totalAmount : faker.number.int({min : 18000, max : 89240 })
            } );
            
        }

        return donations
    }, [])
    return( 
        <>
            <Breadcrumb title="Donation Cases" />
            <Section className="hidden bg-white" containerClassName='flex flex-col gap-y-8'>
                <h2 className='title-2'>Featured causes</h2>
                <div className="grid md:grid-cols-2 gap-5">                    
                    <div className="flex flex-col gap-y-5 p-5 bg-primary bg-opacity-10">
                        <div className="grid lg:grid-cols-2 gap-x-5">
                            <img className="h-full object-cover" src="/images/the-good-helper-foundation-people-in-need.jpeg" alt="" />
                            <div className="">
                                <h3 className="text-2xl font-semibomld text-primary">Fundraiser for Kids</h3>
                                <span className="text-sm"> Aug 25, 2018 | Ball Room New York </span>
                                <p className="text-paragraph text-sm py-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam esse nobis quae doloribus expedita, officiis iste veniam natus optio quod dolor 
                                    dolore, dolorem voluptatibus repellendus sequi ad! Distinctio, repellat cumque?
                                    dolore, dolorem voluptatibus repellendus sequi ad! Distinctio, repellat cumque?
                                    dolore, dolorem voluptatibus repellendus sequi ad! Distinctio, repellat cumque?
                                </p>
                                <Link to='' className='button sm bg-primary hover:bg-secondary text-white'>Donate Now</Link>
                            </div>
                        </div>
                        <div className="">
                            <ProgressBar currentAmount={5908.8} totalAmount={100000}  showAmounts/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 p-5 bg-primary bg-opacity-10">
                        <div className="grid lg:grid-cols-2 gap-x-5">
                            <img className="h-full object-cover" src="/images/the-good-helper-foundation-people-in-need.jpeg" alt="" />
                            <div className="">
                                <h3 className="text-2xl font-semibomld text-primary">Fundraiser for Kids</h3>
                                <span className="text-sm"> Aug 25, 2018 | Ball Room New York </span>
                                <p className="text-paragraph text-sm py-1">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam esse nobis quae doloribus expedita, officiis iste veniam natus optio quod dolor 
                                    dolore, dolorem voluptatibus repellendus sequi ad! Distinctio, repellat cumque?
                                    dolore, dolorem voluptatibus repellendus sequi ad! Distinctio, repellat cumque?
                                    dolore, dolorem voluptatibus repellendus sequi ad! Distinctio, repellat cumque?
                                </p>
                                <Link to='' className='button sm bg-primary hover:bg-secondary text-white'>Donate Now</Link>
                            </div>
                        </div>
                        <div className="">
                            <ProgressBar currentAmount={73108} totalAmount={240000}  showAmounts/>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className='' containerClassName='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                { generateDonations(12).sort( (a, b) => a.title.length > b.title.length ? 1 : -1 ).map( DonationCard ) }
                
                
            </Section>
        </>
    )
}