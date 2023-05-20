import "./App.css";
import { departments, images } from "./DataOfApp";
import IssueTicket from "./Page/IssueTicket/IssueTicket";

function App() {
  return (
    <div className="App">
      <IssueTicket departments={departments} images={images} />
    </div>
  );
}

export default App;
