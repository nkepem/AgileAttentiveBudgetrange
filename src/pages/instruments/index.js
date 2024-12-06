import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import Hero from '@components/Hero';


import styles from '@styles/Home.module.scss';
import Zones from '@components/Zones';

export default function Instruments() {
    return (
      <Layout>
        <Head>
          <title>Instruments Juridiques</title>
          <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section>
          <Container>
            <Hero />
          </Container>
        </Section>
       
  
        <Section>
          <Container>
            <Zones/>
          </Container>
          </Section>
  
       
      </Layout>
    )
  }