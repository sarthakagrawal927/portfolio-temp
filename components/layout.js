import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
export default function Layout({ children, home, title }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap'
          rel='preload'
          as='font'
        />
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
