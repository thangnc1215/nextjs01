import Link from "next/link"

const FooterComponent = () => {
    return (
        <footer className="mb-10" >
            <section className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex flex-1 item-start">
                    <span className="text-gray-400">{"BELIEVE "} <span className="text-white font-serif">{"TASMANIA"}</span></span>

                </div>
                <p className=" flex flex-1 items-end text-gray-400  text-right ">{"The Tasmanian story began over 60.000 year ago \n We Acknowledge the ancient history of the \n Tasmanian aboriginal people as the First people of the lutruwita/Tasmania."}</p>
            </section>
            <section className="flex gap-2 flex-col items-start justify-center border-b-2 p-2 border-gray-800 mb-2 md:flex-row md:items-center md:gap-10" >
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
