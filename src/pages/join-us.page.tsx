import { useCallback } from "react";
import { BsSendCheckFill } from 'react-icons/bs'
import { Breadcrumb, MyForm, Section } from "../components";
import { InputFieldTextArea, FieldInputType } from '../components/my-form.component';

export default function JoinUs(){
    const onSubmit = useCallback( (fields : any) => {

    }, [])

    return (
        <>
            <Breadcrumb title="Join the trip" />
            <Section className="" containerClassName="grid md:grid-cols-2 items-center gap-y-5">
                <div className="">
                    <h2 className="title text-secondary">
                        Help With Us
                    </h2>
                    <p className="text-xs ms:text-sm md:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere omnis officiis distinctio deleniti beatae voluptatem, neque velit sit totam dolorum. Iure, architecto?
                    </p>
                    <p className="text-xs ms:text-sm md:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident facere omnis officiis distinctio deleniti beatae voluptatem, neque velit sit totam dolorum. Iure, architecto?
                    </p>

                </div>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 bg-secondary bg-opacity-10">
                    <div className="p-5 flex flex-col items-center gap-y-4">                        
                        <img className="w-10 ms:w-16 lg:w-24" alt="" src="/images/the-good-helper-foundation-abroad.svg" />
                        <h3 className="text-xs sm:text-sm text-center">Presential</h3>
                    </div>
                    <div className="p-5 flex flex-col items-center gap-y-4">                        
                        <img className="w-10 ms:w-16 lg:w-24" alt="" src="/images/the-good-helper-foundation-in-your-country.svg"/>
                        <h3 className="text-xs sm:text-sm text-center">Presential</h3>
                    </div>
                    <div className="p-5 flex flex-col items-center gap-y-4">                        
                        <img className="w-10 ms:w-16 lg:w-24" alt="" src="/images/the-good-helper-foundation-abroad.svg" />
                        <h3 className="text-xs sm:text-sm text-center">Presential</h3>
                    </div>
                    <div className="p-5 flex flex-col items-center gap-y-4">                        
                        <img className="w-10 ms:w-16 lg:w-24" alt="" src="/images/the-good-helper-foundation-in-your-country.svg"/>
                        <h3 className="text-xs sm:text-sm text-center">Presential</h3>
                    </div>
                </div>
            </Section>
            <Section className="" bgImage="/images/the-good-helper-foundation-people-in-need.jpeg" containerClassName="grid lg:grid-cols-5">
                <div className="col-span-3 bg-secondary lg:bg-white text-white lg:text-black py-5 px-3 md:px-8 flex flex-col gap-y-4">
                    <h2 className="title lg:text-secondary">Join the journey</h2>
                    <p className="text-xs ms:text-sm md:text-base">
                        You want to help? join the trip & help us to help others in need!
                    </p>
                    <p className="text-xs ms:text-sm md:text-base">                        
                        You can become a <span className="font-semibold lg:text-secondary">volunteer/member</span> wherever you are without moving. Sometimes to help, all it takes is a small gesture.
                    </p>
                </div>
            </Section>

            <Section className="" containerClassName="grid lg:grid-cols-2 gap-5">
                <div className="">
                    <h2 className="title text-secondary">
                        <span className="lg:hidden">No need to wait,</span> Fill the form</h2>
                    <MyForm className="relative z-10" onSubmit={ onSubmit } onEmptyErrorMessage='this field is required' onInvalidErrorMessage='invalid value provided'                    
                        fields={{
                            name : {
                                required : true,
                                id : 'name',
                                label : 'Name',
                                placeholder : 'enter your name please',
                            },
                            gender : {
                                required : true,
                                id : 'gender',
                                label : 'Gender',
                                placeholder : 'enter your name please',
                            },
                            email : {
                                required : true,
                                id : 'email',
                                label : 'Email',
                                placeholder : 'eg : yournam@domain.com',
                                type: FieldInputType.EMAIL
                            },
                            phone : {
                                required : true,
                                id : 'phone',
                                label : 'Phone',
                                placeholder : 'enter your name please',
                                type: FieldInputType.PHONE
                            },
                        }}
                    >
                        <div className='w-full block'>
                            <button className="button sm bg-secondary hover:bg-secondary-deep text-white w-full">
                                register
                                <BsSendCheckFill className='' />
                            </button>
                        </div>
                    </MyForm>

                </div>
                <div className="hidden lg:block relative p-5">
                    <img className="absolute inset-0 w-full h-full object-cover" src="/images/the-good-helper-foundation-people-in-need.jpeg" alt="" />
                    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60" />
                </div>
            </Section>
        </>
    )
}