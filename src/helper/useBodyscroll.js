import { useEffect, useState } from "react"

const useBodyscroll=()=>{
    const bodyStyle=document.body.style
    const [isLock ,setLock]=useState(bodyStyle.overflowY==='hidden')
    useEffect(()=>{
        bodyStyle.overflow=isLock ? 'hidden':'auto'
    },[isLock,bodyStyle])
    const toggle=()=> setLock(!isLock)
    
    return [toggle]
}
export default useBodyscroll