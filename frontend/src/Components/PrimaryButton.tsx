import Button from "react-bootstrap/Button";
import { ReactNode } from "react";
// import styled from "styled-components";

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

function PrimaryButton({ children, type, onClick }: ButtonProps) {
  return (
    <Button
      className="button primary-button"
      variant="primary"
      type={type}
      onClick={type === "button" ? onClick : undefined}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
