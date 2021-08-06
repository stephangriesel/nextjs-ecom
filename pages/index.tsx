import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        {/* <Jumbotron />
      <ProductList products={products}/>
      <Contact/> */}
      </main>

      <footer className={styles.footer}>
        <div>footer goes here</div>
      </footer>
    </div>
  );
}

export const products: IProduct[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 25.0,
    // image: basicPicture,
    description:
      'The basic is the just perfect, nothing more, nothing less for you companion',
    url: '/api/products/basic',
  },
  // (...)
  {
    id: 'comfy',
    name: 'Comfy',
    price: 15.0,
    // image: comfyPicture,
    description:
      'Not basic, not too fancy, just comfy. You companion will love this',
    url: '/api/products/comfy',
  },
];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};
