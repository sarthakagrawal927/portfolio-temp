import Head from "next/head";
import Footer from "./footer";
export default function Layout({ children, home, title }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900'
          rel='preload'
          as='font'
        />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
