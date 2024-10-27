/* eslint-disable no-undef */

import { HiLightBulb } from "react-icons/hi";
import Container from "../components/Container";
import { useEffect, useState } from "react";


function Header() {

  const [theme , setTheme] = useState ()

const themeHandler = ()=>{
  setTheme(!theme)
  localStorage.setItem('darkTheme', `${!theme}`)
  localStorage.getItem('darkTheme')
}


useEffect(()=>{

  if( localStorage.getItem('darkTheme')== 'true'){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }

},[theme])
  return (
    <div className=" border-b border-solid dark:bg-slate-900 dark:border-[#666]">
        <Container className="flex justify-between items-center cursor-pointer">
            <div className=" flex gap-2 font-semibold">
                <h1 className="text-3xl dark:text-slate-100">SAIFUL</h1> <span className=" text-3xl text-green-500"> ISLAM</span>
            </div>
            <HiLightBulb onClick={themeHandler} className=" text-2xl dark:text-white cursor-pointer" />
        </Container>
    </div>
  )
}

export default Header