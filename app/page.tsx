"use client";
import React, { FormEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { useMy } from "./context/MyContext";
import AppConfig from "./lib/appconfig";
import { getHostname } from "./lib/utils";

export default function Home() {
  const { mymessage, setMymessage, statusText, setStatusText } = useMy();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (getHostname() !== 'localhost') {

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const loginRequest = `${AppConfig.authUrl}?user=${username}&pwd=${password}`
      
    const response = await fetch(loginRequest, { cache: "no-store" })

    if (response.ok) {
      setMymessage('supero');
      setStatusText("Success");
    } else {
      setStatusText("Error occured");
    }
    }
    else {
      setMymessage('supero');
      setStatusText("Success");
    }
  };

  const LoginComponent = () => {
  
    return (
      <main>
        <div className={styles.content}>
            <div>
              <form onSubmit={handleLogin}>
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    className={styles.inputText}
                    placeholder="Username"
                    required
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    className={styles.inputText}
                    placeholder="Password"
                    required
                  />
                </label>
                <br />
                <button className={styles.button} type="submit">
                  Log In
                </button>
                <br />
                <span className={styles.errorMsg}>{statusText}</span>
              </form>
            </div>
        </div>
      </main>
    )
  }
  
  const OutletComponent = () => {
    return (
      <main>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </main>
    )
  }

return mymessage ? OutletComponent() : LoginComponent()
}
