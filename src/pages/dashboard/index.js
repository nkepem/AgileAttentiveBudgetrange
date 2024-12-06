import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import Hero from '@components/Hero';


import styles from '@styles/Home.module.scss';
import SideBar from '../../components/SideBar';
import React, { useState } from 'react';
import LayoutTwo from '../../components/LayoutTwo';

export default function dashboard() {
    
    return (
      <LayoutTwo>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the page.</p>
    </LayoutTwo>
    )
  }