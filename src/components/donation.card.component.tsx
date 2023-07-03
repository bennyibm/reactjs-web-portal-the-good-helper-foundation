import ProgressBar from "./progress-bar.component"
import { Link } from 'react-router-dom';

type props = {
    title : string
    description : string
    raisedAmount? : number
    totalAmount : number
    date : string
    location : string
}

export default function DonationCard({ title, description, raisedAmount, totalAmount, date, location} : props){
    return (
        <div key={title} className=" max-w-md group flex flex-col bg-secondary bg-opacity-10">
            <div className="overflow-hidden">                
                <img className="w-full h-52 object-cover group-hover:scale-110" src="/images/the-good-helper-foundation-people-in-need.jpeg" alt="" />
            </div>
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-2xl text-secondary">{title}</h3>
                <p className="text-slate-400 text-sm">{description}</p>
                <div className="pt-5">
                    <ProgressBar currentAmount={raisedAmount} totalAmount={totalAmount} showAmounts />
                </div>
                <Link to='#' className="button sm border-secondary bg-secondary hover:bg-secondary hover:border-secondary text-white">donate now</Link>
            </div>
        </div>
    )
}