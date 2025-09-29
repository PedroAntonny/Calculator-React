import React from 'react'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-text mb-8">
          Calculadora
        </h1>
        <Calculator />
      </div>
    </div>
  )
}

export default App
