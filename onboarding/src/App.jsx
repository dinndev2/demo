import './App.css'
import OnboardingForm from './components/OnboardingForm'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <OnboardingForm />
      </ErrorBoundary>
    </>
  )
}

export default App
