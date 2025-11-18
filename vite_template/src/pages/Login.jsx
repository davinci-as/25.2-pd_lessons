import styles from "./login.module.css";
import { authWithEmail } from "../lib/auth";
import { useState } from "react";

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateData = ({ email, password }) => {
    if (email == "" || email == undefined) return false;
    if (password == "" || password == undefined) return false;
    return true;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const data = {
      email: email.value,
      password: password.value,
    };
    if (!validateData(data)) return;

    authWithEmail(data)
      .then((data) => {
        if (!data?.user?.uid) return;
        const uid = data?.user?.uid;

        fetch("/api/users/find/", {
          method: "POST",
          body: JSON.stringify({ uid }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((user) => {
            alert("Bienvenido " + user.user.displayName);
          });
      })
      .catch((error) => {
        if (error.code == "auth/invalid-credential") {
          setErrorMessage("Credenciales inválidas");
        } else {
          setErrorMessage("No se pudo iniciar sesión");
        }
      });

    /*fetch("/api/users/add/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });*/

    //fetch a /users/add
  };
  return (
    <div className={styles.container}>
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <h1>Login</h1>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Login user" />
      </form>
    </div>
  );
};
