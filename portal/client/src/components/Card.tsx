import type { Component } from 'solid-js';
import styles from './Card.module.css';

import openIcon from '../assets/icon-open.svg';
import shareIcon from '../assets/icon-share.svg';
import deleteIcon from '../assets/icon-delete.svg';

export const Card: Component = (props) => {
  
   
  return (
    <div class={styles.cardContainer}>
      <div class={styles.cardTopBar}></div>
      <div class={styles.cardTitle}>{props.title}</div>

      {/* <div style="display: flex; margin: 3px 2px 0px 20px; color: #555;">
        <div style="background-color: #f1f3f4; opacity: .7; border-radius: 15px; padding: 4px; font-size: 10px;">Product Catalog API</div>
        <div>Shipping API</div>
      </div> */}

      <div class={styles.cardDivider}></div>
      
      <div style="display: flex; margin-left: 20px; font-size: 14px; color: #979797">
        <div style="">Key:<br/>Secret:</div>
        <div style="margin-left: 10px">**************************<br/>**************************</div>
      </div>

      <div class={styles.cardDivider}></div>

      <div class={styles.cardFooter}>
        <div class={styles.cardBlock}>
          <img class={styles.appsIcon} src={openIcon}></img>
          <span class={styles.cardFunction}>Edit app</span>
        </div>
        <div class={styles.cardBlock}>
          <img class={styles.appsIcon} src={shareIcon}></img>
          <span class={styles.cardFunction}>Share app</span>
        </div>
        <div class={styles.cardBlock}>
          <img class={styles.appsIcon} src={deleteIcon}></img>
          <span class={styles.cardFunction}>Delete app</span>
        </div>
      </div>
    </div>
  );


};