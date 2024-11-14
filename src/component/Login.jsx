import { Link } from "react-router-dom"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post("https://login-signout-backend.vercel.app/login", { email, password })
      .then((result) => {
        if (result.data === "success") {
          navigate('/home')
        }
        else if (result.data === "No record exist") {
          alert("Cannot find User.")
        }
        else {
          alert("Incorrect password, please try again.")
        }
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className={styles.body}>
      <form className={styles.container} onSubmit={handleSubmit} >
        <div className={styles.title}>
          L O G I N
        </div>
        <div className={styles.email}>
          Email
          <input type="email" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.password}>
          Password
          <input type="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.buttons}>
          <button type="submit" disabled={loading} >{loading ? "Loging..." : "Log In"}</button>
          <div className={styles.signup}>
            Dont have an Account?
            <Link to={"/sign"} className={styles.btn}>SignUP</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
