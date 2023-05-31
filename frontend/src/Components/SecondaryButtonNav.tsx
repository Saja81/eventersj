import Button from "react-bootstrap/Button";
import { ButtonProps } from "./PrimaryButton";

function SecondaryButton({ children, type, onClick }: ButtonProps) {
  return (
    <Button
      className="button-nav secondary-button-nav"
      variant="secondary"
      type={type}
      onClick={type === "button" ? onClick : undefined}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;

// Kopierat secondarybauuton för att ha en mindre knapp i navbaren
