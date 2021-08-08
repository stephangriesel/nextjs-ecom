import Script from 'next/script';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';
import Head from 'next/head';
import {IProduct} from '../components/Product';
import basicPicture from '../public/basic.jpg';
import comfyPicture from '../public/comfy.jpg';
import luxPicture from '../public/lux.jpg';
import {GetStaticProps} from 'next';
import Jumbotron from '../components/Jumbotron';

interface IProductListProps {
  products: IProduct[];
}

export default function Home({products}: IProductListProps) {
  return (
    <>
      <Head>
        <title>SleepyDoggy</title>
        <link rel='preconnect' href='https://app.snipcart.com' />
        <link rel='preconnect' href='https://cdn.snipcart.com' />
        <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css'
        />
        <link rel='shortcut icon' href='../public/favicon.ico' />
      </Head>
      <main className='main'>
        <Jumbotron />
        <ProductList products={products} />
        <Contact />
      </main>
      <Script src='https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js' />
      <div
        hidden
        id='snipcart'
        data-api-key='NzhmZmY5ODgtYjA1MS00ZGQyLWE0MTMtMzFlNjJjNWM3OTVhNjM3NjQwMTMxMjkyNTY4OTAz'
      ></div>
    </>
  );
}

export const products: IProduct[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 15.0,
    image: basicPicture,
    description:
      'The basic is the just perfect, nothing more, nothing less for you companion',
    url: '/api/products/basic',
  },
  {
    id: 'comfy',
    name: 'Comfy',
    price: 25.0,
    image: comfyPicture,
    description:
      'Not basic, not too fancy, just comfy. You companion will love this',
    url: '/api/products/comfy',
  },
  {
    id: 'lux',
    name: 'Luxurious',
    price: 35.0,
    image: luxPicture,
    description:
      'The ultimate fancy bed for your very luxurious dog. Sleep in style.',
    url: '/api/products/lux',
  },
];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};
