import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

type props = {
    title : string
    excerpt : string
    slug : string
    image : string
}
export default function PostCard({title, excerpt, image, slug} : props){

    return (
        <div key={slug} className="group bg-secondary bg-opacity-10 md:grid md:grid-cols-2 overflow-hidden">
            <div className=' group-even:order-2 overflow-hidden '>
                <img className="group-hover:scale-110 h-48 md:h-96 w-full object-cover" src={image} alt={`The Good Helper Foundation News ${title}`} />
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-4 p-2 md:p-5 shadow">
                <h2 className="title-2 text-secondary">{title}</h2>
                <p className="text-xs sm:text-sm md:text-base">{excerpt}</p>
                <Link to={slug} className="w-fit button sm border border-secondary hover:bg-secondary text-secondary hover:text-white">
                    Read More
                    <BsFillArrowRightCircleFill />
                </Link>
            </div>
        </div>
    )
}