import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>Codeforces Recommender</h1>
      <button onClick={toggleTheme} className="theme-btn">
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
