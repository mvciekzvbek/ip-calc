import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { siteTitle } from "../../constants";

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
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

export default Layout;