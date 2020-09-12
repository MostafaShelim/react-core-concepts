import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const countryDetails = [
    {country: 'Bangladesh', capital: 'dhaka'},
    {country: 'India', capital: 'Delli'},
    {country: 'India', capital: 'Delli'},
    {country: 'Oganda', capital: 'Kashinogor'}
  ]
  const output = countryDetails.map(country => country);
  console.log(output);
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        <ul>
          {
          countryDetails.map(countryName => <li>{countryName.country}</li>)
          }
        </ul>
        <ul>
          {
          countryDetails.map(countryName => <Paragraph name = {countryName.country}><li></li></Paragraph>)
          }
        </ul>
      
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleCounter = () => setCount(count + 1);
  return (
   <div>
      <h2>Count:{count}</h2>
      <button onClick={handleCounter}>Increase</button>
      <button onMouseOver = { () => setCount(count-1)}>Decrease</button>
   </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]); 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h2>Dynamic Users:{users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Paragraph(props){
  const style = {
    color: 'green',
    border: '3px solid gray',
    padding: '5px',
    fontSize: '25px',
    backgroundColor: 'red',
    fontWeight: '600'
  }
  console.log(props);
  return (
    <p style={style}>Hello: {props.name}</p>
  )
}

export default App;
