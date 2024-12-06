import Head from 'next/head';

import LayoutThree from '@components/LayoutThree';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import Hero from '@components/Hero';


import styles from '@styles/Home.module.scss';
import Zones from '@components/Zones';

export default function zonesgeo() {
    return (
      <LayoutThree>
        <Head>
          <title>Zones</title>
          <meta name="description" content="Zones Geographiques" />
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
  
       
      </LayoutThree>
    )
  }