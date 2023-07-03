type props = {
    name : string
    position : string
    imagePath : string
}
export default function TeamateCard({name, position, imagePath} : props){
    return (
        <div className="bg-slate-100">
            <div className="relative bg-secondary bg-opacity-30 h-40">
                <img className="absolute top-1/2 left-1/2 -translate-y-1/3 -translate-x-1/2 w-40 h-40 object-cover rounded-full" src={`/images/team/the-good-helper-foundation-${imagePath}.jpeg`} alt={`the good helper foundation teamate ${name}`} />
            </div>
            <div className="pt-10 pb-8 px-5 text-center">
                <h3 className="title-2 text-secondary">{name}</h3>
                <p className="text-xs md:text-sm lg:text-base text-slate-500 ">{position}</p>
            </div>
        </div>
    )
}