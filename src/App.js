import React from "react";
import { Header } from "./components/Header";

import { BoxIconElement } from "boxicons";
import {BrowserRouter as Route} from "react-router-dom";
import {Paginas} from "./components/Paginas";
import {DataProvider} from  "./context/Dataprovider"
import {Carrito } from "./components/Carrito"

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Route>
       <Header />
      <Carrito/>
       <Paginas />
       
       </Route>
    </div>
    </DataProvider>

  );
}

export default App;
