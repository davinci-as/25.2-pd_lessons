import styles from "./login.module.css";

export const LoginPage = () => {
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

    fetch("/api/users/add/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    //fetch a /users/add
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Login user" />
      </form>
    </div>
  );
};
