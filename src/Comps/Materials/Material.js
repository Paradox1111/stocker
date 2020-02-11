import React from 'react';
import formatPartType from '../../helpers/formatPartType';

function Material(props) {
  const { type, stock, price } = props.mat[0];
  const setMat = props.mat[1];
  const money = props.money[0];
  const setMoney = props.money[1];

  function buyOne() {
    if (money >= price) {
      setMat({ type: type, stock: stock + 1, price: price });
      setMoney(money - price);
    }
  }
  function buyFive() {
    if (money >= price * 5) {
      setMat({ type: type, stock: stock + 5, price: price });
      setMoney(money - price * 5);
    }
  }
  return (
    <div className='Material'>
      <img src='' alt='' />
      <strong>{formatPartType(type)}:</strong> {stock}
      <br />${price}
      <br />
      <button className='buy' onClick={buyOne}>
        Buy +1 ${price}
      </button>
      <button className='buy' onClick={buyFive}>
        Buy +5 ${price * 5}
      </button>
    </div>
  );
}

export default Material;
