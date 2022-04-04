import type { Component } from 'solid-js';
import styles from './CardMenu.module.css';

import clockIcon from '../assets/icon-clock.svg';

export const CardMenu: Component = (props) => {
  
   
  return (
    <div class={styles.cardContainer}>
      <div class={styles.cardIcon}>
        <img src={props.icon} style="width: 27px;"></img>
      </div>
      <div class={styles.cardText}>
        <div class={styles.cardTitle}>{props.title}</div>
        <div class={styles.cardSubtitle} >{props.subtitle}</div>
      </div>
    </div>
  );


};