import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const id = params.productId;

  const product: Product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
  return (
    <div className="container max-w-2xl py-10">
      <h1 className=" text-xl font-semibold">{product.title}</h1>
      <p className=" leading-relaxed mt-4">{product.description}</p>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className=" mx-auto mt-6"
      />
    </div>
  );
}

export async function generateStaticParams() {
  const products: Product[] = await fetch("https://fakestoreapi.com/products?limit=10").then(
    (res) => res.json()
  );

  return products.map((product) => ({
    productId: String(product.id),
  }));
}
