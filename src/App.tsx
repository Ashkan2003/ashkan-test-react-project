import "./App.css";
import AccountInfo from "./components/AccountInfo";
import Cards from "./components/Cards";
import EmailsList from "./components/EmailsList";
import Menu from "./components/Menu";
import PercentCardsAndSimpleLine from "./components/PercentCardsAndSimpleLine";
import SelectBox from "./components/SelectBox";

function App() {
  return (
    <div className="root-container">
      <Menu />
      <div className="flex-container">
        <main>
          <SelectBox />
          <Cards />
          <PercentCardsAndSimpleLine />
          <EmailsList />
        </main>
        <AccountInfo />
      </div>
    </div>
  );
}
export default App;
