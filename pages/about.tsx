import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { siteTitle } from '../constants'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        About
      </section>
    </Layout>
  )
};