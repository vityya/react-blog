import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const handelLogOut = () => {
    localStorage.setItem('isLoggedIn', false)
    setIsLoggedIn(false);
  };

  let activeClassName = "underline";
  return (
    <header className={styles.mainHeader}>
      {isLoggedIn ? (
        <nav>
          Ласкаво просимо, &nbsp;<strong>{userName}</strong>
          <NavLink onClick={handelLogOut} exact to="/login">
            <MeetingRoomIcon />
            Вихід
          </NavLink>
        </nav>
      ) : (
        "Ласкаво просимо, незнайомець!"
      )}
    </header>
  );
};
