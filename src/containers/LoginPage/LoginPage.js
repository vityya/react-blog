import "./LoginPage.css";

export const LoginPage = (props) => {
  
  
  const handelLogIn = (e) => {
    e.preventDefault();
    props.history.push('/')
  }
  
  return (
    <h1>
      <form className="loginForm" onSubmit={handelLogIn}>
        <h2>Авторизація</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Імя користувача"
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
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
