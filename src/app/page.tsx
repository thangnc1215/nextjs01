import Image from "next/image";
import Banner from '../../public/banner.png'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <h1 className="text-3xl header text-center text-white ">
        <p className="font-beni font-bold" >TASMANIA.</p>
        <p className="font-beni font-bold">OUR TIME HAS COME</p>
      </h1>
      <Image src={Banner} alt={"banner"} className=" max-w-[1048px] w-full px-3 mx-0" />
    </main>
  );
}
