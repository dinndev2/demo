import './App.css'
import Calendar from './components/Calendar'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <ErrorBoundary fallback="error">
      <div className="w-full h-screen overflow-auto">
        <Calendar />
      </div>
    </ErrorBoundary>
  )
}

export default App
