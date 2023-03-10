import "./App.css";
import { Header } from "./components/Header/Header";
import { BlogPage } from "./containers/BlogPage/BlogPage";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage } from "./containers/LoginPage/LoginPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  return (
    <Router>
      <div className="App">
        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main>
          <Switch>
            <Route exact path="/" component={BlogPage} />
            <Route
              path="/login"
              render={(props) => (
                <LoginPage
                  {...props}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserName={setUserName}
                />
              )}
            />
          </Switch>
        </main>
        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}

export default App;
