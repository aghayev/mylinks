'use client'
import React from "react";
import { Outlet } from "react-router-dom";
import styles from './layout.module.css';
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main>
        <div className={styles.leftPlacement}>
        <Navbar />
        </div>
        <div className={styles.rightPlacement}>
        <div className={styles.content}>
          <Outlet />
        </div>
        </div>
    </main>
  );
}