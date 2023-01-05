import "./App.css";
import { Header } from "./components/Header/Header";
import { BlogPage } from "./containers/BlogPage/BlogPage";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage } from "./containers/LoginPage/LoginPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={BlogPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </main>
        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}

export default App;
