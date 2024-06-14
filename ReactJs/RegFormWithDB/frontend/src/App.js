import RegForm from './Components/RegForm';

function App() {
  return (
    <div>
      <header>
        <h1 className='heading'>
          Registration Form
        </h1>
      </header>
     <RegForm />
     <p className="msg">Already Registered?</p>
     <a href="#" className="login-msg">Log In</a>
    </div>
  );
}

export default App;
