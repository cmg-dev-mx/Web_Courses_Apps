type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
