import Image from "next/image";
import Banner from '../../public/Banner.png'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">TASMANIA. OUR TIME HAS COME</h1>
        <Image src={Banner} alt={"Banner"} className="w-full h-full"/>
      </section>
    </main>
  );
}
