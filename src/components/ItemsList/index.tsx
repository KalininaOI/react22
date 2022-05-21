import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './itemsList.module.scss';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);
  const [name, setName] = useState('');

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className={style.items_list__wrapper}>
      <div>
        <p>{chartItemsAmount ? `Количество товаров: ${chartItemsAmount}` : 'корзина пуста'}</p>
        {chartItemsAmount === 5 && <p>Корзина заполнена</p>}
        <Button btnText="Добавить в корзину" handleClick={handleAddItemToChart} />
      </div>

      <div>
        <p>{name || 'укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
