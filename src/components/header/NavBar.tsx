import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname()
    return (
        <section
            className="flex flex-row gap-12 text items-center justify-center 
            border-b-2 p-2 border-gray-800 mb-2 invisible md:visible" >
            {DATA_HEADER.map((item) => (
                <Link
                    className={`${pathname === item.href ? 'text-white' : 'text-gray-500'} font-beni font-medium text-2xl`}
                    key={item.label}
                    href={item.href}>
                    {item.label.toUpperCase()}
                </Link>
            ))}
        </section>
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

export default NavBar;