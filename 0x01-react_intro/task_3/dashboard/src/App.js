import { getFullYear, getFooterCopy } from './utils'
import './App.css';

export default function App(){
  return (
    <>
    <div className="App-header">
      <img src="logo.jpg" alt="hbtn logo" />
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>OK</button>
    </div>
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
    </>
  )
}