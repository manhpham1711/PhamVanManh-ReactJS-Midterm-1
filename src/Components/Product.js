import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './Product.css';


class Product extends Component {

    constructor(){
        super();
        this.pageNumbers = [];
        this.state = {
            products: JSON.parse(localStorage.getItem("list_product")),
        }

        if(!this.state.products){
            this.state.products =[];
        }
        

    }
    onClickBy(){
        
        alert("Thank you your order ");
    }

    showProduct(){
        const { products } = this.state;
        var listProduct;
        listProduct = products.map((item,key) => <ProductItem
                                                key={key} 
                                                item = {item}
                                                onItemClick = {this.onClickBy}
                                                /> );
        return listProduct;
    }
    render(){
        return (
            <div className = "container">
                <div className = "row">
                    {this.showProduct()}
                </div>
            </div>
        );
  }
}

export default Product;