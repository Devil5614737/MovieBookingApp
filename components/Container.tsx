import { ReactNode } from "react"

interface PropsI{
    children:ReactNode;
}

export const Container=({children}:PropsI)=>{
    return (
        <div className="max-w-[950px] m-auto">{children}</div>
    )
}