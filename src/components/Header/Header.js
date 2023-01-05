import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  let activeStyle = {
    color: "crimson",
    fontWeight: 600,
  };
  let activeClassName = "underline";
  return (
    <header className={styles.mainHeader}>
      <nav>
        <NavLink activeClassName={styles.active} exact to="/">Home</NavLink>
        <NavLink activeClassName={styles.active} exact to="/login">Login</NavLink>
      </nav>
    </header>
  );
};
