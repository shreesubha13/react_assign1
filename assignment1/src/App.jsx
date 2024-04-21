import './App.css'
import Person from './Component/Person'
import Button from './Component/Button'
import Header from './Component/Header'
import List from './Component/List'

function App(){
    return(
        <>
        <Person name="John" age="30" />
        <Button text="Click here!" onClick={() => console.log("Button clicked")} />
        <Header title="Welcom to React !!" />
        <List items={['apple', 'banana', 'orange']} />



        </>
    )
}


export default App
