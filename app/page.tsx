'use client'
import React from "react";
import { Outlet } from "react-router-dom";
import styles from './layout.module.css';

export default function Home() {

  return (
    <main>
        <div className={styles.content}>
          <Outlet />
        </div>
    </main>
  );
}