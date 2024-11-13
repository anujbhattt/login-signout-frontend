import React, { useState } from 'react'
import styles from "./signup.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post("https://login-signout-backend.vercel.app/signup", { email, password })
      .then(() => {
        navigate("/")
        setLoading(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.body}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.title}>
          Sign Up
        </div>
        <div className={styles.email}>
          Email
          <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.password}>
          Password
          <input type='password' placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.buttons}>
          <button type='submit' disabled={loading}>{loading ? "Signing..." : "Sign Up"}</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
