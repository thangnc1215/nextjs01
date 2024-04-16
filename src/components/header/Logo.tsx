import Link from "next/link";
import Image from "next/image";
const Logo = () => {
    return (
        <Link className="flex flex-row items-center " href={"/"}>
            <Image className=" flex mr-2" src={"/brand_logo.png"} alt={"brand_logo"} width={30} height={30} color="transparent" />
            <p className=" font-beni font-serif text-white">BELIEVE TASMANIA</p>
        </Link>
    );
}

export default Logo;