/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
          <Cards/>
          <PercentCardsAndSimpleLine/>
          <EmailsList/>
        </main>
        <AccountInfo />
      </div>
    </div>
  );
}
export default App;
