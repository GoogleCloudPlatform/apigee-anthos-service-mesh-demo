import type { Component } from 'solid-js';
import styles from './Header.module.css';

import logo from '../assets/logo.png'

export const Header: Component = () => {
  return (
    <div class={styles.header}>
      <a style="text-decoration: none; color: #979797; padding-right: 30px; padding-top: 14px;" href="/">
        <img src={logo} alt="GCP logo" width="30px" height="30px" style="padding-right: 10px; padding-left: 10px;" />
        <span class={styles.headerTitle}>Apigee Service API Portal</span>
      </a>
    </div>
  );
};