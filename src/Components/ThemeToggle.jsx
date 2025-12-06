import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import {clsName} from "@/lib/utills.js"

export default function ThemeToggle() {

    const [themeDark, setDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkTheme(true);
            document.documentElement.classList.add('dark');
        }
        else {
            setDarkTheme(false);
            document.documentElement.classList.remove('dark');
        }
    }, [])

    const toggleTheme = () => {
        if (themeDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setDarkTheme(false);
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setDarkTheme(true);
        }
    }

    return (
        <>
            <button onClick={toggleTheme}
                className={clsName("fixed max-sm:hidden top-2 right-5 z-50 p-2",
                    "ronded-full trasition-colors duration-300",
                    "focus:outline-hidden")}>
                {themeDark ?
                    <Sun className='h-6 w-6 text-yellow-300' />
                    : <Moon className='h-6 w-6 text-blue-900' />}
            </button>
        </>
    )
}