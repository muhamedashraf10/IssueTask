import "./App.css";
import { companyImg, departments, images } from "./DataOfApp";
import IssueTicket from "./Page/IssueTicket/IssueTicket";

function App() {
  return (
    <div className="App">
      <IssueTicket
        departments={departments}
        images={images}
        company={companyImg}
      />
    </div>
  );
}

export default App;
