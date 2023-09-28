import { Link } from "react-router-dom";

type props = {
    className? : string
}
export default function Logo({className} : props){
    return (
        <Link to='/' className={`${className} `} >
            <img className="h-10 md:h-16" src="/images/the-good-helper-foundation-logo.png" alt="GHF Logo" />
        </Link>
    )
}