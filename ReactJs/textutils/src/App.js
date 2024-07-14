import './App.css';
import { ThemeProvider } from './Components/ThemeContext';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm'

function App() {
  let bg = {
    backgroundColor: '#EAECEE'
  }
  return (
    <>
      <ThemeProvider>
        {/* <NavBar /> */}
        <NavBar title="TextUtils" />
        {/* <NavBar title={2} /> */}

        <div className="container-fluid p-0 me-0">
          <TextForm heading="Enter Text Below:" />

        </div>

      </ThemeProvider>
    </>
  );
}

export default App;
