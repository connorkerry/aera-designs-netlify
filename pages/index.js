import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aera Designs - Art & Clothing</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <main>
        <Header
          title="Out of our screens, into the world"
          image="https://cdn.shopify.com/s/files/1/0071/6940/9112/files/tree_on_cliff_smaller_3350x.jpg?v=1605668700"
          color={'#fff'}
        />
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
