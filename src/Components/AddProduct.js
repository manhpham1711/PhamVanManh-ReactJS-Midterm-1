import React, { Component } from 'react';
import './AddProduct.css';

class AddProduct extends Component {

    onAddProduct(event){
        event.preventDefault();
        var name = event.target['name'].value;
        var code = event.target['code'].value;
        var price = event.target['price'].value;
        var category = event.target['category'].value;
        
        var priceOld = event.target['priceOld'].value;
        if(priceOld == ""){
            priceOld = 0;
        }
        
        var img = event.target['img'].value;
        if(img == ""){
            img = "https://banghieu365.com/wp-content/uploads/2018/09/Phong-nen-mau-xanh-cong-ty-365_31.jpg";
        }

        var id;
        if(JSON.parse(localStorage.getItem("list_product"))){
          id = JSON.parse(localStorage.getItem("list_product")).length + 1;
        }else{
          id = 1;
        }
        
        var products = JSON.parse(localStorage.getItem("list_product"));
        var product = {
            id: id,
            name: name,
            code: code,
            price: price,
            priceOld: priceOld,
            category: category,
            img: img
        }
       
        if(!products){
            products = [];
        }
        
        products.push(product);
        localStorage.setItem("list_product", JSON.stringify(products));
        console.log(products);
    }

    render(){
        return(
          <div className="form">
              <form className="Addpduct" onSubmit={this.onAddProduct}>
              <legend><h1>Add Product</h1> </legend>
              <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control" name ="name" placeholder="Input Name" />
              </div>
              <div className="form-group">
                <label >Code</label>
                <input type="text" className="form-control" name ="code" placeholder="Input Code" />
              </div>
              <div className="form-group">
                <label >Price</label>
                <input type="number" className="form-control" name ="price" placeholder="Input Price" />
              </div>
              <div className="form-group">
                <label >Price Old</label>
                <input type="number" className="form-control" name ="priceOld" placeholder="Input Price" />
              </div>

              <div className="form-group">
                <label >Category </label>
                <select name="category">
                    <option value="nam">Men</option>
                    <option value="nu">Woman</option>
                </select>
              </div>

              <div className="form-group">
                <label >Link Image</label>
                <input type="text" className="form-control" name ="img" placeholder="Input Link Img" />
              </div>

              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>   
        );
    }
}

export default AddProduct;