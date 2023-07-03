
import { useCallback } from 'react';
import { IoMdMail } from 'react-icons/io'
import { BsSendCheckFill, BsFillTelephoneFill } from 'react-icons/bs'
import { BiSolidMap } from 'react-icons/bi'
import { Breadcrumb, Section, MyForm } from "../components";
import { InputFieldTextArea, FieldInputType } from '../components/my-form.component';

export default function ContactUs(){
    const onSubmit = useCallback( (fields : any) => {
        console.log("form fields ==> ", fields)

    }, [])

    return(
        <>
            <Breadcrumb title="Contact us" bgImage="/images/the-good-helper-foundation-people-in-need.jpeg" />
            <Section className="" containerClassName="grid lg:grid-cols-2 gap-y-5">
                <div className="flex flex-col gap-y-2 lg:gap-y-4 text-sm sm:text-base ">
                    <h2 className="title-2 text-secondary">
                        Get in touch with us
                    </h2>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi eum iste facere, provident deleniti 
                        tempora dicta molestiae quidem labore similique, placeat minima quod deserunt? Sapiente dolore unde obcaecati 
                        alias, et officiis quis hic laborum similique dolor suscipit voluptatem harum.
                    </p>
                    <div className='flex flex-col gap-y-2 divide-y '>
                        <a className="flex items-center gap-x-2 py-3" href="mailto:info@good-helper-foundation.org">                        
                            <IoMdMail className='text-secondary text-lg' />
                            <span className=''>info@good-helper-foundation.org</span>
                        </a>
                        <a className="flex items-center gap-x-2 py-3" href="tel:+12074091594">                        
                            <BsFillTelephoneFill className='text-secondary text-lg' />
                            <span className=''>+1 207-409-1594</span>
                        </a>
                        <a className="flex items-center gap-x-2 py-3" href="tel:+16467755266">                        
                            <BsFillTelephoneFill className='text-secondary' />
                            <span className=''>+1 646-775-5266</span>
                        </a>
                        <a className="flex items-center gap-x-2 py-3" href="tel:+16467755266">                        
                            <BiSolidMap className='text-secondary text-lg' />
                            <span className=''>28 State St ,Suite 2B, Gorham Maine 04038</span>
                        </a>
                    </div>
                </div>
                <div className='p-3 md:p-5 bg-slate-100'>
                    <h2 className="lg:hidden title-2 text-secondary">
                        Drop us a line
                    </h2>
                    <MyForm onSubmit={ onSubmit } onEmptyErrorMessage='this field is required' onInvalidErrorMessage='invalid value provided'                    
                        fields={{
                            name : {
                                required : true,
                                id : 'name',
                                label : 'Name',
                                placeholder : 'enter your name please',
                            },
                            email : {
                                required : true,
                                id : 'email',
                                label : 'Email',
                                placeholder : 'eg : yournam@domain.com',
                                type: FieldInputType.EMAIL
                            },
                            message : {
                                required : true,
                                id : 'name',
                                label : 'Message',
                                placeholder : 'tell us everything you want',
                                renderFieldComponent : InputFieldTextArea
                            }
                        }}
                    >
                        <div className='w-full block'>
                            <button className="button sm bg-secondary hover:bg-secondary-deep text-white w-full">
                                submit
                                <BsSendCheckFill className='' />
                            </button>
                        </div>
                    </MyForm>
                </div>
            </Section>
        </>
    )
}