import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import {getData} from './services/ApiProvider'
import CoinItem from './components/CoinItem'


function App() {
  

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const res =  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(
      res =>
      {setCoins(res.data);
      console.log(res.data)
      })
      .catch(error=>alert(error))

  },[])

  const filteredCoins  = coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()))


  const handleChange = (e)=>{
    setSearch(e.target.value)2

  

  return (
    <div className="coin-app">
      <div className='coin-search'></div>
      <h1 className='coin-text'></h1>
      <form>
        <input type = 'text' className='coin-input' onChange = {handleChange} placeholder = 'Enter Coin'></input>
      </form>

      {filteredCoins.map((coin)=><CoinItem id = {coin.id} 
      name = {coin.name} 
      symbol = {coin.symbol}
      image = {coin.image} 
      price = {coin.current_price} 
      vol = {coin.total_volume} 
      pct = {coin.price_change_percentage_24h}
      mktcap = {coin.market_cap}/>)}
              ``
    </div>
  );
}

export default App;
