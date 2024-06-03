import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  const list = ["Goku", "Vegeta", "Gohan", "Trunks", "Goten"];
  const list2: string[] = [];
  const handleSelect = (elemento: string) => {
    console.log(`Elemento seleccionado: ${elemento}`);
  };

  // const contenido = list.length ? (
  //   <List data={list} onSelect={handleSelect} />
  // ) : (
  //   "Sin elementos para mostrar"
  // );

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  // JSX
  return (
    <Card>
      <CardBody title="Hola Mundo" content="Este es el texto" />
      {contenido}
      <Button isLoading={isLoading} onClick={handleClick}>
        Click me!
      </Button>
    </Card>
  );
}

export default App;
