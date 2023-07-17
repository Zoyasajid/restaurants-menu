import Menu from './components/Menu'
import './App.css';
import { useState } from 'react';
import items from './components/data'
import Categories from './components/Categories'

function App() {
  const [menuItems,SetmenuItems]=useState(items)
const filteritems =(categories)=>{
  if(categories==="all"){
    SetmenuItems(items)
  }else{
SetmenuItems(() => items.filter((item) => item.category === categories))}

}
    return <div>
    <section className="menu.section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div> 
      <Categories filteritems={filteritems}/>
      <Menu items={menuItems}/>
    </section>
  </div>

}

export default App;
