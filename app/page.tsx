import Link from "next/link";
import ProductCard from "./components/Productcard";



export default function Home() {
  return (
    <main><h1 className="text-3xl">hello world</h1>
      <Link href="./users/user">users</Link>
      <ProductCard />
    </main>
  );
}
