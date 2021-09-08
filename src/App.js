import logo from './logo.svg';
import './App.css';
import StudentDetails from "./components/Student"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">student details form</header> */}
      <section>
        <StudentDetails />
      </section>
    </div>
  );
}

export default App;
