import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";
import Description from "../components/description";
import Features from "../components/features";
import Projects from "../components/projects";
// import Blogs from "../components/blogs";
import Contact from "../components/contact";
export default function Home() {
  return (
    <Layout title='Sarthak Agrawal'>
      <Header />
      <Description />
      <Features />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </Layout>
  );
}
