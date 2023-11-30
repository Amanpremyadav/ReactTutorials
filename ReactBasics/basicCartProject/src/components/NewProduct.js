import ProductForm from './ProductForm';
import './NewProduct.css';

function NewProduct(props) {
    function saveNewProduct(product) {
      console.log("I am inside NewProduct.js");
      console.log(product);
      props.onAddingNewProduct(product);
    }
    
    return (
        <div className='new-product'>
          <ProductForm onSavingNewProduct={saveNewProduct}></ProductForm>
        </div>
    );
}

export default NewProduct;