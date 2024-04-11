'use client'
import Image from "next/image"
import Brand_Logo from '../../../public/Brand_Logo.png'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const HeaderComponent = () => {
    const pathname = usePathname()
    return (
        <header>
            <section className="flex flex-row items-center justify-between mb-2 p-10">
                <div className="flex flex-row ">
                    <Image src={Brand_Logo} alt={"brand_logo"} width={20} height={20} color="transparent" />
                    <p>BELIEVE TASMANIA</p>
                </div>
                <div>
                    <p>SEARCH BELIEVE TASMANIA</p>
                </div>
            </section>

            <section className="flex flex-row gap-12 text items-center justify-center border-b-2 p-2 border-gray-800 mb-2" >
                {DATA_HEADER.map((item) => (
                    <Link className={`${pathname === item.href ? 'text-white' : 'text-gray-500'}`} key={item.label} href={item.href}>{item.label.toUpperCase()}</Link>
                ))}
            </section>
        </header >

    )
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
export default HeaderComponent
