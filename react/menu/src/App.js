import Menulist from './component/menu.js';
import Category_xx from './component/category';
import './App.css';
import menu from './data.js';
import React, { useState } from 'react';
function App() {
  const [newmenu, setMenu] = useState(menu);
  const categoryFilter = (choose) => {
    if (choose === 'all') {
      setMenu(menu);
    } else {
      setMenu(menu.filter((value) => value.category === choose));
    }
  };
  return (
    <div className='App'>
      <section className='menu'>
        <div className='title'>
          <h2>Our menu</h2>
        </div>
        <div className='underline'></div>
        <Category_xx categoryFilter={categoryFilter} />
        <Menulist items={newmenu} />
      </section>
    </div>
  );
}

export default App;
