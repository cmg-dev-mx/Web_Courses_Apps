type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((item) => (
        <li
          onClick={() => handleClick(item)}
          key={item}
          className="list-group-item"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
