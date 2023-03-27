import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent txt="ciao" />
      </header>
      <ImageComponent
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPB8cwKlbKM3LTv2gqnTkHlWPmW1RBjHXWoZBy4bVf_UoTUa1lP6s3GQIWL0MMHNjHWX0IWaFHGb1uvESrKQgo5VS6Z7et5Vp4OkCqhjREC-Y51C8O5U0NT7d___r7DG0rfeSYJha4tnIojgaDNhL9hP8WUpiExb-lTNkKdthlnKKPf4zkVtqySiN0/s900/lago%20di%20nembia%20come%20arrivare%20.png"
        alt="Lago di Nembia"
        btntxt="Ciao ciao"
      />
    </div>
  );
}

export default App;
