import './App.css'

function App() {

  let stringType : string;
  let boolType : boolean;
  let multipleTypes : boolean | string;

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

  const sum = (a :number , b: number) => {
    return a+ b;
  }

  return (
    <div>
        Typescript starter
    </div>
  )
}

export default App
