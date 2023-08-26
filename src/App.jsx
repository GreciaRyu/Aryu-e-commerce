// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import ItemListContainer from './components/ItemListContainer/indexContainer';
import NavBar from "./components/NavBar/indexNav";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header>
         <NavBar />
       </header>
       <main>
          <div>
            <ItemListContainer props="Bienvenido"/>
        </div>
      </main>
    </div>
      //   <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="users/*" element={<Users />} />
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;