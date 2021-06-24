import './App.css';
import data from './jobs_welovedevs_exerice.json';


function App() {
  return (
    <div className="App">
      {data.map(data => (
          <p key={data.companyId}>{data.title}</p>
      ))}

    </div>
  );
}

export default App;
