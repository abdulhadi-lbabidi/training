import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row ,Col } from 'react-bootstrap'
import HookCard from './components/Card/HookCard'

function App() {
  const [counter, setCount] = useState(0);
  const [isodd, setIsodd] = useState(false);
  const turbo = useRef();

  const count = () => {setCount(counter + 1) ; }
  useEffect(()=>{
    setIsodd(!isodd);
    console.log(isodd);
    turbo.current.value = counter;
  },[counter]);


  return (
    <>
      <div className='container'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Container >
        <Row >
        <Col className='p-2 ' sm>
          <div className=" mycard">
          <HookCard title="UseState Hook" text="it is a hook for sitting an variable and casting it and it can be with default value" code="const [count, setCount] = useState(0)" />
          <button className='my-3' onClick={count}>
            count is {counter}
          </button>
          </div>
          </Col>
          <Col className='p-2 ' sm>
          <div className=" mycard">
            <HookCard title="UseEffect Hook" text="Its function is to call the method inside it every time the conditional dependency inside it or the variable within the variables column is changed." code="useEffect(()=>{ setIsodd(!isodd); },[counter])" />
            <p className='fs-6'>changed showed on log</p>
          </div>
          </Col>
          <Col className='p-2 ' sm>
          <div className=" mycard">
            <HookCard title="UseRef Hook" text="" code="const object = useRef();"/>
            <input type="text" ref={turbo} readOnly={true} />
          </div>
          </Col>
        </Row>  
      </Container>
    </>
  )
}

export default App
