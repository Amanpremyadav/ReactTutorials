import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

function App() {
  const products= [
   {
    id:'P1',
    title:'Nirma',
    cost:400,
    date:new Date(2003,9,10)
   },
   {
    id:'P2',
    title:'Surf-Excel',
    cost:290,
    date:new Date(2010,4,12)
   },
   {
    id:'P3',
    title:'555',
    cost:180,
    date:new Date(1996,2,19)
   },
   {
    id:'P4',
    title:'Ariel',
    cost:460,
    date:new Date(2013,8,29)
   }
  ];

  function addNewProduct(data){
    console.log("I am inside APP.js")
    console.log(data);
  }
  return (
    <div>
      <NewProduct onAddingNewProduct={addNewProduct}></NewProduct>
      <Products items={products}></Products>
    </div>
  );
}

export default App;
