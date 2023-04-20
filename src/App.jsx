import { useState } from "react"
import Listltem from "./components/ListItem";

function App() {
  const [listItems, setListItems] = useState([
    {
      id: "1",
      name: "Arroz",
      quantity: 1,
      unit: "kg",
      checked: false,
    },
    {
      id: "2",
      name: "Frijol",
      quantity: 1,
      unit: "kg",
      checked: false,
    },
    {
      id: "3",
      name: "Leche",
      quantity: 2,
      unit: "lts",
      checked: false,
    },
  ])

  const handleItemChecked = (e) => {
   const newList = listItems.map(item =>{
    if (e.target.name === item.id){
      item.checked = !item.checked;
    }
    return item ;
   })
  setListItems(newList);
  }
  return (
    <div classname="container text-center">
      <div className="row">
        <div className="col text-start">
          <h1>Shopping List</h1>
        </div>
        <div className="col text-end">
          <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
      <hr />
      {
  listItems.map ((item) => (
    
  <Listltem
  id ={item[0].id}
  name ={item[0].name}
  quantity ={item[0].quantity}
  unit ={item[0].unit}
  checked ={item[0].checked}
  handleItemChecked={handleItemChecked}
  />
  ))
}
      <hr />
      </div>

  )
}

export default App