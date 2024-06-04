import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };

  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          onClick={() => handleClick(i, item)}
          key={item}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
