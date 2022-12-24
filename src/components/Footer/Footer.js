import "./Footer.css";

export const Footer = ({ year }) => {
  return (
    <footer>
      <span>&copy; React blog - {year}</span>
    </footer>
  );
};
