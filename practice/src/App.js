import logo from './logo.svg';
import './App.css';

function Header() {
  return(
    <header>
      <nav>
      <img src={logo} alt="logo" width="40px"/>
      </nav>
    </header>  
  )
};

function App() {
  return (
    <div>
      <Header />
        <h1>Website Title/Description</h1>
        <ol>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ol>
    </div>
  );
}

export default App;
