import { GetServerSidePropsContext } from 'next';
import Head from 'next/head'

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

type Rating = Product['rating'];

type Props = {
  products: Product[]
}

export default function Home({products}) {
  return (
    <>
      <Head>
        <title>eCommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ol>
        {products.map(product => {
          return <li key={product.id}>{product.title}</li>
        })}
        </ol>
      </main>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
  return {
    props: {
      products
    }
  }
}
