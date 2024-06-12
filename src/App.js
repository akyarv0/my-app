
import './App.css';
import { useSelector } from 'react-redux';


function App() {

  const { value } = useSelector((state) => state.counter)
  console.log(value);
  return (
    <>

    <h1>Hello World</h1>
    
    </>
  );
}

export default App;
