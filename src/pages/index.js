import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import MapDash from '@components/MapDash';

import Hero from '@components/Hero';
import Stake from '@components/Stake';
import Service from '@components/Service';



import Zones from '@components/Zones';
import SideBar from '@components/SideBar';
import CardGrid from '../components/CardDataStats/CardGrid';
import HeroSection from '@components/HeroSection';
import LegalInstitutions from '@components/LegalInstitution';
import  Organizations from '@components/Organizations';
import GeographicZones from '@components/GeographicZones';

const DEFAULT_CENTER = [38.907132, -77.036546]
const DEFAULT_ZOOM = 6
const titleText = "Catalogue des Instruments Juridiques";
const subtitleText = 
  "Ce catalogue présente la liste des instruments juridiques engageant\n" +
  "le Cameroun auprès de certaines organisations internationales.";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MINFI</title>
        <meta name="description" content="Catalogue Numerique du MINFI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection 
      titleText ={titleText}
      subtitleText={subtitleText}
      />
      <Section>
       
        <LegalInstitutions />
       
      </Section>
    
      <Section>
      <Organizations />
      </Section>
     
      <Section>
      <GeographicZones />
      </Section>
      
    </Layout>
  )
}
