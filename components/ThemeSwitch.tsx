'use client'

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useState, useEffect, use } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), []) 

    if(!mounted) return(
        <div>Loading...</div>
    )

    if(resolvedTheme === 'dark'){
        return  <button onClick={() => setTheme('light')} className="ml-3 flex items-center justify-center rounded-full p-1 bg-white">
            <BsFillSunFill className="text-yellow-500"/>
        </button>
    }

    if(resolvedTheme === 'light'){
        return <button onClick={() => setTheme('dark')} className="ml-3 flex items-center justify-center rounded-full p-1 bg-black">
            <BsFillMoonFill className="text-white"/>
        </button>
    }

}