import { useNavigate } from "react-router-dom";
import PageNav from "../component/PageNav";
import { useAuth } from "../contexts/FakeAuthContex";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import Button from "../component/Button";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated]
  );

  function handleOnSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
