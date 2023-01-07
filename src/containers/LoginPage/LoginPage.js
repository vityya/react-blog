import "./LoginPage.css";
import { useState } from "react";


export const LoginPage = ({ setIsLoggedIn, history, setUserName }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handelLogIn = (e) => {
    e.preventDefault();

    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('userName', login)

    setUserName(login)
    setIsLoggedIn(true);
    history.push("/");
  };

  return (
    <h1>
      <form className="loginForm" onSubmit={handelLogIn}>
        <h2>Авторизація</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            onChange={handleLoginChange}
            placeholder="Імя користувача"
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            onChange={handlePasswordChange}
            placeholder="Пароль"
            required
          />
        </div>
        <div>
          <button className="blackBtn" type="submit">
            Війти
          </button>
        </div>
      </form>
    </h1>
  );
};
