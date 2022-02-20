import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css';
 
function Categories(props) {

  const categories = ['queen', 'queencirclejerk', 'Queemes', 'freddiemercury', 'BrianMay', 'JohnDeacon'];

  return (
    <div className='categories-component'>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <NavLink to={`/${cat}`}>{cat}</NavLink>
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Categories;