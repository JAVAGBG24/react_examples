import "../styles/footer.css";

const Footer = () => {
  // vi vill visa året dynamiskt så vi slipper hårdkoda det och
  // ändra manuellt

  // det betyder att vi inte bara vill ha en return()
  // vi vill ha en variabel som ska vara det dynamiska året
  // innan vi returnerar nåt

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Our React App.</p>
      <p>Created for React learning demo.</p>
    </footer>
  );
};

export default Footer;
