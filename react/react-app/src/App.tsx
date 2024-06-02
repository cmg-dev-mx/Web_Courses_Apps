import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Vegeta", "Gohan", "Trunks", "Goten"];
  const handleSelect = (elemento: string) => {
    console.log(`Elemento seleccionado: ${elemento}`);
  };

  // JSX
  return (
    <Card>
      <CardBody title="Hola Mundo" content="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
