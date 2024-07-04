import Lists from "./Lists.jsx"

function App() {
  
  const fruits = [{id: 1,name:"Apple", calories: 85},
    {id: 2,name:"Banana", calories: 90},
    {id: 3,name:"Orange",calories: 150},
    {id: 4,name:"Grapes",calories: 50} ];

    const Vegetables = [{id: 1,name:"Tomato", calories: 80},
      {id: 2,name:"Potato", calories: 90},
      {id: 3,name:"Onion",calories: 100},
      {id: 4,name:"Cucumber",calories: 150} ];

  return(
    <>
   {fruits.length > 0 && <Lists items={fruits} category="Fruits" />} 
   {Vegetables.length > 0 && <Lists items={Vegetables} category="Vegatables" />}
    </>
    
  );
}

export default App
