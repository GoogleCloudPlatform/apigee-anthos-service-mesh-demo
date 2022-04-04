import type { Component } from 'solid-js';
import { Router, Routes, Route, Outlet } from "solid-app-router";

import styles from './Content.module.css';

import { Sidenav } from './Sidenav';
import { LandingPage } from './LandingPage';
import { Apps } from './Apps';
import { RestDoc } from './RestDoc';

export const ContentContainer: Component = () => {
  return (
    <div class={styles.contentContainer}>

      <div class={styles.side}>
        <Sidenav></Sidenav>
      </div>
      
      <div class={styles.content}>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apis/:api" element={<RestDoc />} />
        </Routes>
       
      </div>

      
    </div>
  );
};