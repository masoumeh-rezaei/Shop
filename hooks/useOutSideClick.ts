import { useEffect, useRef } from "react";

export function useOutSideClick<T extends HTMLElement>(callback:()=>void){
    const ref = useRef<T>(null)
    useEffect(()=>{
const handleClickOutSide=(e:MouseEvent)=>{
    if(ref.current && !ref.current.contains(e.target as Node)){
        callback()
    }
}
document.addEventListener('mousedown',
    handleClickOutSide);
    return()=>{
        document.removeEventListener('mousedown',
            handleClickOutSide)
    }
    },[callback])
    return ref
}