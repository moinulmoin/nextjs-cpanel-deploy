import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default async function ProductGrid() {
  const products: Product[] = await fetch("https://fakestoreapi.com/products?limit=10").then(
    (res) => res.json()
  );

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {products.map((item) => (
          <div key={item.id} className="rounded p-4 bg-white shadow border">
            <div className=" relative h-60">
              <Image src={item.image} alt={item.title} fill className="object-top object-cover" />
            </div>

            <Link
              href={`/product/${item.id}`}
              className="text-lg text-center hover:text-blue-500 mt-4 font-semibold overflow-hidden "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
