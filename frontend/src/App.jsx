import React from 'react';
import Home from "./components/home/home.js";
import Navbar from "./components/navbar/navbar.js";
import Sidebar from "./components/sidebar/sidebar";
import CardsList from "./components/cardsList/cardsList";
import Navside from "./components/navSide/navSide";
import { Layout, Menu, Breadcrumb } from 'antd';
import  Cart from "./components/cart/cart";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  const { Header, Content, Footer } = Layout;
  
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar/> 
     <Sidebar/>
      <div className="site-layout-background" style={{ padding: 250, marginTop: -150}}>
    {/* <CardsList/>   */}
    `    <Home/>     `
     {/* <Cart/> */}
      </div>
   
       {/* <Navside/> */}
      
    </div>
    </Provider>
  );
}

export default App;
