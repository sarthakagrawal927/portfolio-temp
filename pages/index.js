import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";
import Main from "../components/main";

export default function Home() {
  return (
    <Layout title='Home | Significant Hobbies'>
      <Header />
      <Main />
    </Layout>
  );
}
