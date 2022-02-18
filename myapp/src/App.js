

function App() {

  const image = "World Economic Forum"
  
  let styles 

  if(image === 'World Economic Forum') {
    styles = {
      width: "500px",
      border: "10px solid black"
    }
  } else {
    styles = {
      width: "200px",
      border: "10px solid green"
    }
  }
  
  const handler = () => {
    console.log("I was hovered")
  }

  const handler2 = () => {
    console.log("I was clicked")
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>

      <div className="container">
        <h3>{image}</h3> 
        <img style={styles} src="https://www.weforum.org/assets/fallbacks/generic-large-d3281ac72c5557b91cbf5c81cbf14dd1c4ead6b241ab2ad49afb691f1874ca8b.png" alt="" />
        <button onMouseMove={handler}>HOVER ME</button>
        <button onClick={handler2}>CLICK ME</button>
      </div>
        <footer>
          <a href="a">Github</a>
        </footer>
    </div>
  );
}

export default App;
