import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  content?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, content } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
    </>
  );
}

export default Card;
