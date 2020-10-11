import * as React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { siteTitle } from '../constants'

const About: React.FC = () => {
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

export default About;