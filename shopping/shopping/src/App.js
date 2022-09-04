import './App.css';

import Banner from './components/banner';
import ProductList from './components/productList';

function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
            <div className='header-wrapper'>
            <div className='logo'>
              <h1>Amazon</h1>
            </div>

            <nav>
              <ul>
                <li><a href='#'>Sign Up</a></li>
                <li><a href='#'>Login</a></li>
              </ul>
            </nav>
            </div>
        </div>
      </header>

      <ProductList/>

    </div>
  );
}

export default App;
