import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response=[
   {
    name:'Nirma',
    day:'20',
    month:'June',
    year:'2003'
   },
   {
    name:'Surf-Excel',
    day:'12',
    month:'Sep',
    year:'2010'
   },
   {
    name:'555',
    day:'18',
    month:'Jan',
    year:'1990'
   },
   {
    name:'Ariel',
    day:'13',
    month:'Jan',
    year:'2002'
   }
  ];
  return (
    <div>
    <Card>
    {
     response.map((item) =>{
      return (
        <div>
          <Item {...item}></Item>
          <ItemDate {...item}></ItemDate>
          
        </div>
      )
    })
    }
     
    </Card>
      
      <div className="App">
         Hello jii
      </div>
    </div>
  );
}

export default App;
