import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import TransactionHistory from './components/History'
import AddNewTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <Income />
      <TransactionHistory />
      <AddNewTransaction />
    </GlobalProvider>
  )
}

export default App
