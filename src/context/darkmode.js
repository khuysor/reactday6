const {createContext, useState, useEffect}=require('react')
export const ContextDarkmode=createContext();
export const ContextProvider=({children})=>{
    const [mode,setmode]=useState(
        JSON.parse(localStorage.getItem('darkmode'))||false
    )
    const toggle=()=>{
        setmode(!mode)
    }
    useEffect(()=>{
            localStorage.setItem('darkmode',mode)
    },[mode])
    return (
       < ContextDarkmode.Provider value={{mode,toggle}}>

        {children}
       </ContextDarkmode.Provider>
    )
}
