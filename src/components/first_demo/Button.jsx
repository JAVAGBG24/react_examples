import "../../styles/button.css";

const Button = ({ onClick, backgroundColor, text }) => {
  /* console.log("Ursprungligt värde: " + text);
  text = "NY TEXT";
  console.log("Efter försök att ändra: " + text); */
  // vi vet att nån gång ska den här knappen
  // kunna ta emot en funktion men vilken funktion som heslt
  // det vet inte själva knappen om nu, och behöver inte veta det

  // vi vet också att vi ska kunna ändra bakgrundsfärg om vi vill

  // vi vill också byta text på knappen till vad som helst beroende
  // på vart vi använder den tex

  // i return skriver vi "html" (jsx) för hur vi vill att knappen ska se ut
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {text}
    </button>
  );
};

export default Button;
