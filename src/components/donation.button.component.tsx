import { Link } from "react-router-dom"

type props = {
    className? : string
    label? : string
    icon? : any
}

export default function Donationbutton({className, label = 'Donate Now', icon} : props){
    return (
        <Link className={`${className} button`} to='https://donorbox.org/you-can-make-it-happens' target="_blank">
            {label}
            {icon}
        </Link>
    )
}