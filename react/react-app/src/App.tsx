import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Vegeta", "Gohan", "Trunks", "Goten"];
  const list2: string[] = [];
  const handleSelect = (elemento: string) => {
    console.log(`Elemento seleccionado: ${elemento}`);
  };

  // JSX
  return (
    <Card>
      {/* {"" && "string vacio"}
      {undefined && "string indefinido"}
      {null && "string nulo"}
      {false && "falso"}
      {0 && "numero cero"} */}
      {list2.length !== 0 && "Mi lista"}
      <CardBody title="Hola Mundo" content="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
