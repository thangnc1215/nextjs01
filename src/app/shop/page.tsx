import AddUnicorn from "@/components/addUnicorn"
import Link from "next/link"

const getData = async () => {
    const resp = await fetch('https://crudcrud.com/api/45c0337034d64f5fa97a7f6a28d2491c/unicorns')
    return resp.json()
}


const Shop = async () => {
    const data = await getData()
    console.log('====Data====', data)
    return (
        <main className="flex w-full h-full items-center justify-center">
            <div>
                <p className=" text-white font-beni font-bold text-2xl">List Unicorn</p>
                <AddUnicorn />
                <ul className=" flex-col mr-24 text-left">
                    {data.map((i: any) =>
                        <li><Link className=" text-white font-beni font-medium" href={"/"}>{`${i.name} - ${i.colour} - ${i.age}`}</Link></li>
                    )}

                </ul>
            </div>
        </main>
    );
}

export default Shop;