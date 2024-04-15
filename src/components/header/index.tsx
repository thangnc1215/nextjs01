'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState } from "react"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import NavBar from "./NavBar"

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className="flex flex-row items-center justify-between p-4">
                <Logo />
                <SearchBar setOpenMenu={() => { setIsOpen(!isOpen) }} />
            </div>
            <NavBar />
        </header >

    )
}

export default HeaderComponent
