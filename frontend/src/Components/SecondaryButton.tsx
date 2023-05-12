import Button from "react-bootstrap/Button";
import { ButtonProps } from "./PrimaryButton";

function SecondaryButton({ children, type, onClick }: ButtonProps) {
  return (
    <Button
      className="button secondary-button"
      variant="secondary"
      type={type}
      onClick={type === "button" ? onClick : undefined}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;
