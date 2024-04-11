import Link from "next/link"

const FooterComponent = () => {
    return (
        <footer className="mb-10" >
            <section className="flex flex-row items-center justify-center">
                <div className="item-start">
                    <span className="text-gray-400 font-serif">BELIEVE </span>
                    <span>TASMANIA</span>
                </div>
                <div className="w-1/3" />
                <p className=" text-gray-400 w-1/3 text-right ">{"The Tasmanian story began over 60.000 year ago \n We Acknowledge the ancient history of the \n Tasmanian aboriginal people as the First people of the lutruwita/Tasmania."}</p>
            </section>
            <section className="flex flex-row gap-10  items-center justify-center border-b-2 p-2 border-gray-800 mb-2" >
                {DATA_HEADER.map((item) => (
                    <Link className="text-gray-400 font-light font-mono" key={item.label} href={item.href}>{item.label.toUpperCase()}</Link>
                ))}
            </section>
            <div className="flex items-center justify-center gap-12">
                <p className="text-gray-400 text-sm">Privacy Policy</p>
                <p className="text-gray-400 text-sm ">Terms & Conditions</p>
            </div>
        </footer>
    )
}

const DATA_HEADER = [
    {
        label: 'Home',
        href: '/home'
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
        label: 'Get in touch',
        href: '/getInTouch'
    },
    {
        label: 'News',
        href: '/news'
    },
]
export default FooterComponent
