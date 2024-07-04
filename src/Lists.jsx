import PropTypes from 'prop-types';

function List(props){
     
    
    const category= props.category;
    const itemList = props.items;

   // fruits.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));
    //fruits.sort((a,b) => a.calories-b.calories);
    //fruits.sort((a,b) => b.calories-a.calories);

    //const lowcalfruits = fruits.filter(fruit => fruit.calories<100);
    //const highcalfruits = fruits.filter(fruit => fruit.calories>100);

   const listitems = itemList.map(item => <li key={item.name}>
    {item.name}: &nbsp;<b>{item.calories}</b> </li> );
     
     return(
     <> <h3 className="cat">{category}</h3>
     <ol className="list">{listitems}</ol> 
     </>
     );
  
}
List.propTypes = {
category: PropTypes.string,
items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                         name: PropTypes.string,
                         calories: PropTypes.number,})),
}
List.defaultProps = {
    category : "Category",
    items : [],
}
export default List