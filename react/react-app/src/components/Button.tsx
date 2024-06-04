import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

const styles = {
  backgroundColor: 'red',
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      style={styles}
      onClick={onClick}
      type="button"
      disabled={isLoading}
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
