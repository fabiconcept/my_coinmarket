import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Suggestion = ({ find, setFind }) => {
  let list = [];

  try {
    const searchWith = useSelector(state => state.listing.list);

    searchWith.forEach(element => {
      let name = (element.name).toLowerCase();
      if (name.includes(find) & find != '') {
        let itemName = element.name;
        let itemId = element.id;
        let itemImage = element.image;
        list.push({ id: itemId, name: itemName, image: itemImage });
      }
    });

  } catch (error) {
    console.log("Didn't Load")
  }


  return (
    <div className={`${find ? "suggest" : "hide"}`}>
      <div className="sug-title">
        suggestion
      </div>
      <ul>
        {list.map(item => (
          <Link to={`/view/${item.id}`} onClick={()=>setFind('')} key={item.id}><li>
            <img src={item.image} alt="" />
            {item.name}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Suggestion;