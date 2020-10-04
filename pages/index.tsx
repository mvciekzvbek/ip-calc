import * as React from "react";
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import { siteTitle } from '../constants'

const HomePage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        HomePage
      </section>
    </Layout>
  )
}

export default HomePage