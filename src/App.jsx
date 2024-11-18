import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import AddNewTransaction from './components/AddNewTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <Income />
      <History />
      <AddNewTransaction />
    </GlobalProvider>
  )
}

export default App
