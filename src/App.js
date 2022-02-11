import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/slice/cartSlice';
import { useGetAllFoodQuery } from './redux/foodApi';

function App() {
  const dispatch = useDispatch()
const handleAddToCart = ()=>{
  const item = {
    name:'pizza',
    price:10
  }
  dispatch(addToCart(item))
}

const foodInfo = useGetAllFoodQuery()
console.log(foodInfo)

  return (
    <div className="App">
       <h2>Hello World</h2>
       <button onClick={ handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default App;
