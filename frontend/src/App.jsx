import React, { Component } from 'react';
import Home from './components/home/home.js';
import Navbar from './components/navbar/navbar.js';
import Sidebar from './components/sidebar/sidebar';
import CardsList from './components/cardsList/cardsList';
import Navside from './components/navSide/navSide';
import { Layout, Menu, Breadcrumb } from 'antd';
import Cart from './components/cart/cart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    // const postItems = this.state.posts.map((post, i) => (
    const postItems = this.state.posts.map((post) => (
      // <img key={i} src={post.image} />

      <div key={post.id}>
        {/* <div>{post.image}</div> */}
        <img src={post.image} height="200" width="200" />
        <h3>{post.title}</h3>
        <h3>{post.price}</h3>
      </div>
    ));
    return (
      <div className="App">
        <Navbar />
        <Sidebar />

        <div
          className="site-layout-background"
          style={{ padding: 250, marginTop: -150 }}
        >
          {' '}
          {postItems}
          <CardsList />
          {/* <Home/>      */}
          {/* <Cart/> */}
        </div>

        {/* <Navside /> */}
      </div>
    );
  }
}
