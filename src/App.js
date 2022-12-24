import "./App.css";
import { Header } from "./components/Header/Header";
import { BlogContent } from "./components/BlogContent/BlogContent";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogContent random="randomProps" />
      </main>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
