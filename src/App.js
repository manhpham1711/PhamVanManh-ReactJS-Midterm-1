import React, { Component } from 'react';
import './App.css';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';

class App extends Component {

  constructor(){
    super();
    this.state = {
      menu: "index"
    }
    this.ClickAdd = this.ClickAdd.bind(this);
    this.ClickProduct = this.ClickProduct.bind(this);
  }

  ClickAdd(){
    this.setState({
      menu: "add"
    })
  }
  ClickProduct(){
    this.setState({
      menu: "index"
    })
  }

  render(){
    return (
        <header className="App-header">
          <div className="row">
              <button className="btn btn-danger" onClick={this.ClickProduct}>Product</button>
              <button className="btn btn-danger" onClick={this.ClickAdd}>Add Product</button>
          </div>
          <div className="row">
            {this.state.menu ==="index"? <Product />:null}
            {this.state.menu ==="add"? <AddProduct />:null}
        </div>
        </header>
    );
  }
}

export default App;
