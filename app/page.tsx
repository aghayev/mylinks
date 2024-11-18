"use client";
import React, { FormEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { addCookie, getCookieByName } from "./lib/utils";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const [statusText, setStatusText] = useState("");
  const read = getCookieByName("auth") ?? null;
  const { theme, toggleTheme } = useTheme();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      addCookie("auth", "yes");
      toggleTheme();
      setStatusText("Success");
    } else {
      setStatusText("Error occured");
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
                    placeholder="Usernme"
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

return LoginComponent()
}
