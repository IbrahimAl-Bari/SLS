import React from 'react'

const NavBar = () => {
    return (
        <div className={"w-full flex justify-center fixed z-10 top-2"}>
            <div className={"w-65 h-12 bg-white/20 rounded-[30px] backdrop-blur-4xl flex justify-evenly items-center"}>

                <img className={"cursor-pointer hover:scale-125 transition-all duration-200"} src="/house%201.svg" alt="house"/>

                <img className={"cursor-pointer hover:scale-125 transition-all duration-200"} src="/contact%201.svg" alt="contact"/>

                <img className={"cursor-pointer hover:scale-125 transition-all duration-200 z-100"} src="/store%201.svg" alt="store"/>
            </div>
        </div>
    )
}
export default NavBar
