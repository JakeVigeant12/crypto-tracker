import React from 'react'
import '../Coin.css'
const CoinItem = ({name,image,symbol, price,vol,pct,mktcap}) => {

  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <h1>{name}</h1>
                <img src={image} alt = "coinimage"></img>
                <div className='coin-data'>
                <p className="coin-symbol">{symbol}</p>
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${vol.toLocaleString()}</p>
                {(pct < 0) ? (<p className='coin-percent red'>{pct.toFixed(2)}%</p>):(<p className='coin-percent green'>{pct.toFixed(2)}%</p>)}
                <p className="coin-market-cap">${mktcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoinItem