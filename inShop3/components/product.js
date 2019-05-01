import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {       

    static propTypes = {
      data: 
        PropTypes.shape({          
          name: PropTypes.string.isRequired,
          prise: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
        })
      ,
      cbDelete: PropTypes.func.isRequired,
      cbSelect: PropTypes.func.isRequired,
      num: PropTypes.number.isRequired,      
    };

    focused = () => {
      let num = this.props.num;      
      this.props.cbSelect(num);
    };

    delete = (EO) => {
      let num = this.props.num;      
      this.props.cbDelete(EO, num);
    };

    render() {
      
      let productData = this.props.data;

      let isSelectClass = 'InShopBlock_product focused',
          noSelectClass = 'InShopBlock_product';

      let classPro = this.props.className ? isSelectClass : noSelectClass;

      
      return (
        <div className = {classPro} key = {productData.name} onClick = {this.focused}>
          <div className = 'InShopBlock_product_name'>{productData.name}</div>
          <div className = 'InShopBlock_product_prise'>{productData.prise}</div>
          <div className = 'InShopBlock_product_url'>{productData.url}</div>
          <div className = 'InShopBlock_product_quantity'>{productData.quantity}</div>
          <div className = 'InShopBlock_product_button'>
            <input type = 'button' value = 'Edit'/>
            <input type = 'button' value = 'Delete'  onClick = {this.delete}/>
          </div>
        </div>
      )
    };
  };

  export default Product;