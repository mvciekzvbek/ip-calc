import * as React from "react";
import Head from 'next/head'
import Layout from '../components/Layout'
import { siteTitle } from '../constants'
import styled from 'styled-components';
import CalculatorContainer from "~/containers/CalculatorContainer";

const StyledHomePage = styled.div`
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <StyledHomePage>
          <CalculatorContainer />
        </StyledHomePage>
      </section>
    </Layout>
  )
};

export default HomePage;