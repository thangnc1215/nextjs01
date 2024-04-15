'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
    setOpenMenu: () => void
}
const SearchBar = (props: SearchBarProps) => {
    const [searchResult, setSearchResult] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    return (
        <>
            <div className="flex ">
                <input
                    className=" hidden md:block"
                    id="add"
                    type='search'
                    results={searchResult}
                    placeholder="SEARCH BELIEVE TASMANIA" />

                {isOpen ?
                    <Image onClick={() => { setIsOpen(!isOpen) }}
                        src={'/ic_close_menu.png'}
                        alt={"menu"}
                        width={30}
                        height={30}
                        className=" block md:hidden" />
                    :
                    <Image onClick={() => { setIsOpen(!isOpen) }}
                        className=" block md:hidden"
                        src={'/ic_menu.png'}
                        alt={"menu"}
                        width={30}
                        height={30} />
                }
            </div >
            {isOpen ? <div className={`${isOpen ? 'block md:hidden' : 'hidden md:block'} absolute top-20 bottom-0   w-full bg-black flex  flex-col items-center justify-center transition transform`}>
                <input
                    id="add"
                    type='search'
                    results={searchResult}
                    placeholder="SEARCH BELIEVE TASMANIA" />
                <div className="flex flex-col item-center relative justify-center ">

                    {DATA_HEADER.map((item) => (
                        <Link
                            className={`${pathname === item.href ? 'text-white' : 'text-gray-500'} title text-2xl`}
                            key={item.label}
                            onClick={() => { setIsOpen(false) }}
                            href={item.href}>
                            {item.label.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div> : null}

        </>
    );
}


const DATA_HEADER = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Shop',
        href: '/shop'
    },
    {
        label: 'Stories',
        href: '/stories'
    },
    {
        label: 'Videos',
        href: '/videos'
    },
    {
        label: 'News',
        href: '/news'
    },
    {
        label: 'Get in touch',
        href: '/getInTouch'
    },

]


export default SearchBar;