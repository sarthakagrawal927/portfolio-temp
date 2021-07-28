import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";
import Projects from "../components/projects";

// import Description from "../components/description";
// import Features from "../components/features";
// import Contact from "../components/contact";
// import Blogs from "../components/blogs";

export default function Home() {
  return (
    <Layout title='Sarthak Agrawal'>
      <Header />
      {/* <Description />
      <Features /> */}
      <Projects />
      {/* <Blogs /> */}
      {/* <Contact /> */}
    </Layout>
  );
}
