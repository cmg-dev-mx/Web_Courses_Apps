import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const [list, setList] = useState(["Goku", "Vegeta", "Gohan"]);
  const handleSelect = (elemento: string) => {
    console.log(`Elemento seleccionado: ${elemento}`);
  };

  const handleAdd = () => {
    setList([...list, "Piccolo"]);
  };

  const handleDelete = () => {
    setList(list.slice(0, list.length - 1));
  };

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      <Button isLoading={true} onClick={handleAdd}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={handleDelete}>
        Eliminar
      </Button>
      {contenido}
    </Card>
  );
}

export default App;
