import { useState } from 'react';
import './App.css';

function App() {

  const [turn, setTurn] = useState(true)
  const [expand, setExpand] = useState(true)
  const [count, setCount] = useState(0)
  const [light, setLight] = useState(true)
  return (
    <div className="App">

      {/* lev1_1: state - FAQ*/}
      <section className="faq_container">
        <div>
          <p>Why is react great?  </p>
          <button onClick={() => setTurn(!turn)}>+</button>
        </div>

        {/* lev1_2: state - FAQ*/}
        <article>
          <p style={{ display: turn ? 'none' : '' }}>Fast Learning Curve</p>
          <button onClick={() => setExpand(!expand)}>+</button>
          <p style={{ display: expand ? 'none' : '' }}>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
            As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.
          </p>
        </article>

        <div className="counter">
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>{count}</p>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount("0")}>Reset</button>
        </div>

        <div className="dark_light_mode">
          <p style={{ display: light ? 'none' : '', backgroundColor: 'black', color: 'white' }}>night</p>
          <p style={{ display: light ? '' : 'none' }}>day</p>
          <button onClick={() => setLight(!light)}>{light ? 'Change to night' : 'Change to day'}</button>
        </div>

      </section >

    </div >
  );
}

export default App;
