import { Link } from "react-router-dom";

export default function Logo(){
    return (
        <Link to='/' className='' >
            <img className="h-10 md:h-16" src="/images/the-good-helper-foundation-logo.png" alt="GHF Logo" />
        </Link>
    )
}