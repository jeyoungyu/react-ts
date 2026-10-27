import './App.css'
import Drink from './components/Drink';
import Greet from './components/Greet'
import Greet2 from './components/Greet2';
import InputValue from './components/InputValue';

function App() {
  
  const doClick = () => {
    alert("버튼이 클릭되었습니다.");
  }

  return (
    <>
      <section className="app">
        <h2>리액트 기초 문법(TypeScript)</h2>
        <Greet name='루루' 
               age={5}
               />
        <Greet2 name='라라' 
               age={15}
               doClick={doClick}
               />
        <InputValue/>
        <Drink/>
      </section>
    </>
  )
}

export default App
