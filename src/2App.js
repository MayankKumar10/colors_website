import React,{useState, useEffect} from 'react';
//import axios from 'axios';
import './App.css';
import Walkwel from './walkwel.json';
import DataTable from './DataTable';

require('es6-promise').polyfill();
require('isomorphic-fetch');

function App1() {
  const[data, setData] = useState([]);
  const[q, setQ] = useState("");

  
useEffect(() => {
  var abc = Walkwel
  setData(Walkwel)
  
},);

  return (
    <div >
        <div>filter</div> 
        <div> <DataTable data = {data} /> </div>     
    </div>
  );
}

export default App1;
