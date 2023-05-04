import './App.css'
import { Header } from './Components/Header';

function App() {

  let stringType : string;
  let boolType : boolean;
  let multipleTypes : boolean | string;

  //Tuple
  let arrayType : [number,number,Date];

  arrayType = [1,2,new Date()];

  type Band = {
    name: string,
    active?: boolean,
    albums: (string | number) []
  }

  let tool : Band = {
    name: 'Tool',
    active: true,
    albums: ['Lateralus']
  }

  // Not native to JS , addition to runtime
  enum Grades {A,B,C,D,E}

  const sum = (a :number , b: number) => {
    return a+ b;
  }

  return (
    <div>
       <Header title={'Title'} />
    </div>
  )
}

export default App
