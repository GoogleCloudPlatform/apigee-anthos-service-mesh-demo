import type { Component } from 'solid-js';
import styles from './RestDoc.module.css';
import 'rapidoc';

import bookmarkIcon from '../assets/icon-bookmark.svg'
import api from '../specs/productservice.yaml'

export const RestDoc: Component = (props) => {
  return (
    <div class={styles.docFrame}>
      <div class={styles.breadcrumbs}>
        <span class={styles.crumb}>Apigee Service API Portal</span>
        <span class={styles.crumb}>&gt</span>
        <span class={styles.crumb}>APIs</span>
        <span class={styles.crumb}>&gt</span>
        <span class={styles.crumb}>Product Catalog API</span>
      </div>

      <div class={styles.headerText}>Product Catalog API
        <div class={styles.bookmarkIcon}><img src={bookmarkIcon}></img></div>
      </div>

      <div class={styles.normalText}>
        This API provides access to the product catalog API which provides product-related data to clients.
      </div>
      <rapi-doc 
        spec-url="/productservice.yaml"
        show-header = 'false'
        show-info = 'false'
        // api-key-name = 'x-api-key'
        // api-key-location = 'header'
        // api-key-value = '2jk43k4j324j32kj4k32j'
        allow-authentication ='true'
        allow-server-selection = 'false'
        allow-api-list-style-selection ='false'
        theme = 'light'
        class= {styles.docView}
        bg-color = 'rgb(241, 243, 244)'
        primary-color = '#35a854'
        render-style = "view"
        style = {{ textAlign: "left" }}
        data-reveal-delay="200"        
      ></rapi-doc>
    </div>
  );
};