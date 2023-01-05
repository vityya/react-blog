import styles from"./Footer.module.css";

export const Footer = ({ year }) => {
  return (
    <footer>
      <span>&copy; React blog - {year}</span>
      
    </footer>
  );
};
