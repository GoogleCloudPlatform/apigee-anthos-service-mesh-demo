import type { Component } from 'solid-js';
import { Link } from "solid-app-router";

import styles from './Sidenav.module.css';
import addIcon from '../assets/add.png';
import dashIcon from '../assets/dash-icon.svg';

export const Sidenav: Component = () => {

  const toggle = (e) => {
    e.currentTarget.parentElement.children[1].classList.toggle("active");
    // let elements = e.currentTarget.parentElement.querySelector(".nested");
    // elements.classList.toggle("active");
    e.currentTarget.classList.toggle("caret-down");
  };

  return (
    <div class={styles.sidenav}>
      <a class={styles.addButton}>
        <img class={styles.addIcon} src={addIcon}></img>
        <span class={styles.addText}>Create App</span>
      </a>

      <Link href="/apps" class={styles.treeLink}>
        <div class={styles.appsButton}>
          <img class={styles.appsIcon} src={dashIcon}></img>
          <span class={styles.appsButtonText}>My Apps</span>
        </div>
      </Link>

      <div class={styles.sectionHeader}>
        <span class={styles.sectionHeaderText}>Service APIs</span>
      </div>

      <ul class={styles.tree}>
        <li  class={styles.section}>
          <input type="checkbox" id="restAPIs"/>
          <label for="restAPIs" class={styles.treeLink}>REST</label>
          <ul>
            <li class={styles.section}>
              <input type="checkbox" id="productAPI" />
              <label for="productAPI">
                <Link href="/apis/products" class={styles.treeLink}>
                  Product Catalog API
                </Link>
              </label>
              <ul>
                <li>
                  <Link href="/apis/products#post-/pet/-petId-/uploadImage" class={styles.treeLink}>
                    uploadImage
                  </Link>
                </li>
              </ul>
            </li>
            <li>Shipping API</li>
          </ul>
        </li>
        <li class={styles.section}>
          <input type="checkbox" id="grpcAPIs"/>
          <label for="grpcAPIs" class={styles.treeLink}>gRPC</label>
          <ul>
            <li>
              <Link href="/apis/shipping" class={styles.treeLink}>
                Product Shipping Protobuf
              </Link>
            </li>
            <li>Shipping API</li>
          </ul>
        </li>
      </ul>

    </div>
  );
};