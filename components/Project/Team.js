"use client"
export default function TeamMember({teams,priority}) {
    return (
        <div className="flex  mt-3 mb-3 gap-10 pl-3 pr-3">
        <div className="flex-1">
            <div className="text-sm font-medium  mb-3">Team:</div>
            <div>
                <div className="relative w-max-content flex -space-x-3 avatarGroup items-center">
                    {
                        teams.map((item,i)=>(
                        <span className="relative flex shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background h-7 w-7">
                        <img className="aspect-square h-full w-full" src={item.image_url} />
                         </span>
                        ))
                    }
                    
                </div>
            </div>
        </div>
        <div className="flex flex-col items-end">
            <div className="text-sm font-medium  mb-3 text-right ">Priority:</div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-info border-transparent text-info-foreground capitalize">{priority}
            </div>
        </div>
    </div>
    )
}