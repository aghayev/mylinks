'use client'
import { useState } from 'react'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { setToken } from '../lib/token'
import styles from './layout.module.css'

function ProtectedPage() {
  const [statusText, setStatusText] = useState('')
  const router = useRouter()

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const username = formData.get('username')
      const password = formData.get('password')
    
      const response = await fetch('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      
      if (response.ok) {
        setStatusText('Success')
        setToken()
        router.push('/')
      } else {
        setStatusText('Error occured')
      }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" className={styles.inputText} placeholder="Usernme"  required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" className={styles.inputText} placeholder="Password" required />
        </label>
        <br />
        <button className={styles.button} type="submit">Log In</button>
        <br />
        <span className={styles.errorMsg}>{statusText}</span>
      </form>
    </div>
  )
}

export default ProtectedPage