import { useMemo } from "react"

type props = {
    currentAmount? : number
    totalAmount : number
    showAmounts? : boolean
}

export default function ProgressBar({currentAmount = 0, totalAmount, showAmounts} : props){
    const percentage = useMemo( () => Math.round( !currentAmount ? 0 : ( currentAmount * 100 / totalAmount ) ) , [currentAmount, totalAmount])
    return(
        <div className="flex flex-col gap-y-2">
            <div className="relative bg-secondary bg-opacity-20 rounded-xl h-2">
                <div className="bg-secondary bg-opacity-70 h-full rounded-xl" style={ { width : `${percentage}%` }} />
                <div style={{ left : `${percentage}%` }} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full w-8 h-8 flex justify-center items-center bg-secondary bg-opacity-90 text-white text-[.6rem] rounded-full">
                    {percentage}%
                </div>
            </div>
            { showAmounts && (
                <div className="flex justify-between text-xs font-semibold">
                    <span>{Math.floor(currentAmount)}$</span>
                    <span>{Math.floor(totalAmount)}$</span>
                </div>
            )}
        </div>
    )
}