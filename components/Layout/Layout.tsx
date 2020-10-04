import Head from 'next/head'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { siteTitle } from "../../constants";

export default function Layout({
  children,
}: {
    children: React.ReactNode
  }) {
  return (
    <>
      <Head>
        <link rel='icon' href="/favicon.ico" />
        <meta name="description" content="Learn how to calculate IP addresses for your network." />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <header></header>
      <main>{children}</main>
      <Footer />
    </>
  )
};