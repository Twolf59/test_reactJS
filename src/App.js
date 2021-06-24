import './App.css';
import data from './jobs_welovedevs_exerice.json';


function App() {
  return (
    <div className="App">
      {data.map(data => (
          <li key={data.companyId}>{data.description}</li>
      ))}

    </div>
  );
}

export default App;
