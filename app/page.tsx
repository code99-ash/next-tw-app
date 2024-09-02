import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className='p-3'>
      <h1>Home Screen</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
