import React from 'react';
import Item from '../Item';
import style from './ItemsList.module.scss';

const ItemsMock = [
  {
    id: 1,
    itemName: 'ботинки',
    itemDescription: 'Смотрите, какие потрясающие ботинки',
    price: 1000,
  },
  {
    id: 2,
    itemName: 'шапка',
    itemDescription: 'очень красивая шапка',
    price: 100,
  },
  {
    id: 3,
    itemName: 'платье',
    itemDescription: 'лучшее платье на свете',
    price: 5000,
  },
  {
    id: 4,
    itemName: 'пиджак',
    itemDescription: 'ну очень модный пиджак',
    price: 4000,
  },
];

const ItemsList = () => {
  return (
    <div className={style.items_list__wrapper}>
      <p>Cписок товаров</p>
      <div className={style.items_list}>
        {ItemsMock.map((item) => {
          const { id, itemName, itemDescription } = item;
          return <Item key={`ID: ${id}`} name={itemName} description={itemDescription} />;
        })}
        {/* <Item name={ItemsNock.itemName} description={ItemsNock.itemDescription} />
        <Item name={ItemsNock.itemName} description={ItemsNock.itemDescription} />
        <Item name={ItemsNock.itemName} description={ItemsNock.itemDescription} />
        <Item name={ItemsNock.itemName} description={ItemsNock.itemDescription} /> */}
      </div>
    </div>
  );
};

export default ItemsList;
