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
    <Item ItemName={response[0].name}>I love the girl</Item>
      <ItemDate ItemDay={response[0].day} ItemMonth={response[0].month} ItemYear={response[0].year}></ItemDate>
      
      <Item ItemName={response[1].name}></Item>
      <ItemDate ItemDay={response[1].day} ItemMonth={response[1].month} ItemYear={response[1].year}></ItemDate>

      <Item ItemName={response[2].name}></Item>
      <ItemDate ItemDay={response[2].day} ItemMonth={response[2].month} ItemYear={response[2].year}></ItemDate>

      <Item ItemName={response[3].name}></Item>
      <ItemDate ItemDay={response[3].day} ItemMonth={response[3].month} ItemYear={response[3].year}></ItemDate>
    </Card>
      
      <div className="App">
         Hello jii
      </div>
    </div>
  );
}

export default App;
