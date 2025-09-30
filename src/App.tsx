import { Calculator } from './components/Calculator'
import { OperationHistory } from './components/Operation-History'

function App() {
  return (
    <main className="app-container py-[80px] px-[24px] sm:px-[40px] flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-[32px]">
      <Calculator />
      <OperationHistory />
    </main>
  )
}

export default App
