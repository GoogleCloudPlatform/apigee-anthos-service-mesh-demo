import type { Component } from 'solid-js';
import styles from './LandingPage.module.css';

import { CardMenu } from './CardMenu'

import bookmarkIcon from '../assets/icon-bookmark.svg'
import clockIcon from '../assets/icon-clock.svg'
import codeIcon from '../assets/icon-code.svg'
import docsIcon from '../assets/icon-doc.svg'
import collectionIcon from '../assets/icon-collection.svg'
import helpIcon from '../assets/icon-help.svg'

export const LandingPage: Component = () => {
  return (
    <div class={styles.docFrame}>
      <div class={styles.breadcrumbs}>
        <span class={styles.crumb}>Apigee Service API Portal</span>
        <span class={styles.crumb}>&gt</span>
        <span class={styles.crumb}>Documentation</span>
        <span class={styles.crumb}>&gt</span>
        <span class={styles.crumb}>Getting Started</span>
      </div>

      <div class={styles.headerText}>Service APIs Documentation
        <div class={styles.bookmarkIcon}><img src={bookmarkIcon}></img></div>
      </div>

      <div class={styles.normalText}>
        You have data, you have services, and you want to develop new business solutions quickly, both internally and externally. With Apigee, you can build API proxies—RESTful, HTTP-based APIs that interact with your services. With easy-to-use APIs, developers can be more productive, increasing your speed to market.
      </div>

      <div class={styles.docFlexbox}>
        <CardMenu title="Quickstarts" subtitle="Learn in 5 minutes" icon={clockIcon}></CardMenu>
        <CardMenu title="APIs & Reference" subtitle="APIs, Console, and command-line" icon={codeIcon}></CardMenu>
        <CardMenu title="How-to Guides" subtitle="Learn a task" icon={docsIcon}></CardMenu>
        <CardMenu title="Resources" subtitle="Pricing, quotas, and release notes" icon={collectionIcon}></CardMenu>
        <CardMenu title="Support" subtitle="Get assistance with issues" icon={helpIcon}></CardMenu>

      </div>
    </div>
  );
};