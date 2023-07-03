import { FunctionComponent, useCallback, useRef, useState } from "react"
import CustomSelectBox from "./custom-select-box.component"

export enum InputPatterns{
    EMAIL = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    PASSWORD = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    MIN_HEIGHT_8 = "(?=.*).{8,}",
    URL = "https?://.+",
    ALPHABETS_AND_SPACES = '[a-zA-Z.\\D]+'
}

export const isMatchingPattern = (text : string, pattern : string) => (new RegExp(pattern)).test(text)

export enum FieldInputType{
    TEXT = 'text',
    PASSWORD = 'password',
    SELECT_BOX = 'selectbox',
    NUMBER = 'number',
    PHONE = 'tel',
    FILE = 'file',
    EMAIL= 'email'
}

export enum FieldValidity{
    VALID = 'valid',
    EMPTY = 'empty',
    INVALID = 'invalid'
}

export type Field  = {
    type? : FieldInputType
    label? : string
    id? : string
    initialValue? : string
    placeholder? : string
    icon? : string
    required? : boolean
    readonly? : boolean
    pattern? : InputPatterns | string
    onChange? : (field : {name : string, value : any}) => void
    className? : string
    onEmptyErrorMessage? : string
    onInvalidErrorMessage? : string
    renderFieldComponent? : FunctionComponent<Field & {name : string, validity? : FieldValidity, hasError? : boolean}>

    extraData? : any
}

type props = {
    fields : {[x : string] : Field}
    onEmptyErrorMessage? : string
    onInvalidErrorMessage? : string
    renderFieldComponent? : FunctionComponent<Field & {name : string, validity? : FieldValidity, hasError? : boolean}>
    onChange? : (field : {name : string, value : any}) => void
    onSubmit? : ( fields : {[x : string] : any}) => void
    className? : string
    SubmitButton? : any
    children? : any
}

export function InputFieldTemplate1( props : Field & {name : string, validity? : FieldValidity, hasError? : boolean} ){
    return (
        <div className={`my-4 w-full ${props.extraData?.fullWidth ? "" : ""}`}>
            <div className="w-full">
                <div className="flex items-center flex-wrap w-full gap-2">                       
                    <label className="" htmlFor={props.id}>{props.label}</label>
                    { props.hasError && (props.validity === FieldValidity.EMPTY) && <p className='text-red-500 text-xs mt-1 md:mt-0'>{props.onEmptyErrorMessage}</p>}
                </div>
                <input  
                    className={`p-2 h-12 w-full border placeholder:text-slate-300 shadow-inner ${props.className || ""}`}
                    id={props.id}
                    type={props.type} 
                    name={props.name} 
                    onChange={e => props.onChange && props.onChange({name : e.target.name, value : e.target.value})} 
                    placeholder={props.placeholder}
                    defaultValue={props.initialValue}
                    readOnly={props.readonly} 
                />
            </div>
            { props.hasError && (props.validity === FieldValidity.INVALID) && <p className='text-red-500 text-xs '>{props.onInvalidErrorMessage}</p> }
        </div>
    )
}

export function InputFieldTextArea( props : Field & {name : string, validity? : FieldValidity, hasError? : boolean} ){
    return (
        <div className="w-full my-4">
            <div className="flex items-center flex-wrap w-full gap-2">                       
                <label className="" htmlFor="preface">{props.label}</label>
                { props.hasError && <p className='text-red-500 text-xs mt-1 md:mt-0'>{ (props.validity === FieldValidity.EMPTY) ? props.onEmptyErrorMessage : props.onInvalidErrorMessage}</p>}
            </div>
            <textarea 
                onChange={e => props.onChange && props.onChange({name : e.target.name, value : e.target.value})}
                name={props.name} 
                id={props.id} 
                rows={5} 
                placeholder={props.placeholder} // 'entrée une description du livre (aumoins 500 characters)'
                defaultValue={props.initialValue}
                className={`p-2 w-full border border-gray-50 shadow-sm rounded-md ${props.className || ""}`}
            />
        </div>
    )
}

export function InputFieldCustomSelect( props : Field & {name : string, validity? : FieldValidity, hasError? : boolean} ){
    return(
        <div className="w-full my-4">
            <div className="flex items-center flex-wrap w-full gap-2">
                <label className="" htmlFor={props.id}>{props.label}</label>
                { props.hasError && (
                    <p className='text-red-500 text-xs mt-1 md:mt-0'> { props.validity === FieldValidity.EMPTY ? props.onEmptyErrorMessage : props.onInvalidErrorMessage } </p>
                )}
            </div>
            <CustomSelectBox
                id={props.id}
                className={`bg-white border-gray-50 shadow-sm ${props.className || ""}`}
                name={props.name}
                placeholder={props.placeholder}
                defaultValue={props.initialValue}
                options={props.extraData?.options}
                onChange={ option => props.onChange && props.onChange({name : props.name, value : option.value!} ) }
            />
        </div>
    )
}

export default function MyForm({ fields, onChange, onSubmit, className, onEmptyErrorMessage,onInvalidErrorMessage, renderFieldComponent: RenderFieldComponent = InputFieldTemplate1, children} : props){
    const [states, setStates] = useState( { fields  })
    const formDatas = useRef( (() => {
        let datas : {[x : string] : string} = {}
        Object.entries(fields).forEach( ([fieldName, field]) => {
            datas[fieldName] = field.initialValue || ''
        })

        return datas
    })() ) 

    const validateField = useCallback( (field : Field, currentValue : string) => {
        
        if(field.required){
            if(!currentValue) return FieldValidity.EMPTY
        }

        if( field.pattern && !isMatchingPattern(currentValue, field.pattern) ){
            return FieldValidity.INVALID
        }

        return FieldValidity.VALID
    }, [])
    
    const handleSubmit = useCallback( (e : any) => {
        e.preventDefault()

        let anyError = false
        const newDatas : any = {}
        Object.entries(states.fields).forEach( ([fieldName, field]) => {
            const validity = validateField(field, formDatas.current[fieldName])
            newDatas[fieldName] = {
                ...fields[fieldName],
                initialValue : formDatas.current[fieldName], 
                validity, 
                hasError : validity !== FieldValidity.VALID 
            }
            anyError ||= validity !== FieldValidity.VALID
        })

        setStates( prev => ({...prev, fields : newDatas}))

        !anyError && onSubmit && onSubmit(formDatas.current)

    }, [fields, onSubmit, states.fields, validateField])
    
    const handleChange = useCallback( (field : {name : string, value : any}) => {
        formDatas.current = {...formDatas.current, [field.name] : field.value}
        onChange && onChange(field)
    }, [onChange])

    return (
        <form onSubmit={handleSubmit} className={` ${className}`} onKeyDown={ e => (e.key === 'Enter') && handleSubmit(e) } >
            { 
                Object.entries(states.fields)
                .map( ([name, field], index) => (
                    field.renderFieldComponent ? <field.renderFieldComponent key={index} {...field} name={name} onChange={handleChange} onEmptyErrorMessage={field.onEmptyErrorMessage || onEmptyErrorMessage} onInvalidErrorMessage={ field.onInvalidErrorMessage || onInvalidErrorMessage} />: <RenderFieldComponent key={index} {...field} name={name} onChange={handleChange} onEmptyErrorMessage={field.onEmptyErrorMessage || onEmptyErrorMessage} onInvalidErrorMessage={ field.onInvalidErrorMessage || onInvalidErrorMessage} />
                )) 
            }

            {children}
        </form>
    )
}