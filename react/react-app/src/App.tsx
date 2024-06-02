import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Vegeta", "Gohan", "Trunks", "Goten"];

  // JSX
  return (
    <Card>
      <CardBody title="Hola Mundo" content="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
