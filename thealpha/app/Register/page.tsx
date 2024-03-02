"use client"

import gym_image from "../../public/gym_image_3.jpg"
import Image from "next/image";
import { useState } from "react";


export default function Register():JSX.Element{
    const [email,setEmail]=useState("")
    function onEmailChange(event):void{
        setEmail(event.target.value);
    }

    return(
        <div className="w-screen h-screen ">
            <div className="h-full w-full -z-10 overflow-clip">
                <Image src={gym_image} alt="Background Image" className="object-cover"></Image>
            </div>    
            <div className="absolute w-screen h-screen flex justify-center items-center top-0 left-0">
                <div className="flex border-4 border-white w-2/5 h-3/5">
                    <div className="w-1/2 h-full flex justify-center items-center bg-white">
                        <form>
                            
                        </form>
                    </div>
                    <div className="w-1/2 h-full bg-black flex justify-center items-center">
                        <p className="text-white text-lg font-bold">Are you ready to escape the matrix?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}