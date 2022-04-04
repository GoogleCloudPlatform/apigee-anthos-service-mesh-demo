import type { Component } from 'solid-js';

import styles from './Apps.module.css';
import { Card } from './Card'

export const Apps: Component = () => {
  return (
    <div>
      <div class={styles.headerText}>5 apps</div>
        
      <div class={styles.cardFlexbox}>
        <Card title="Mobile App 1"></Card>
        <Card title="Partner App 1"></Card>
        <Card title="Internal Test App"></Card>
        <Card title="Mobile App 2"></Card>
        <Card title="Ecosystem App 1"></Card>
      </div>
    </div>
    );
};
