import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
      <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
        Something went wrong:
      </h2>
      <pre className="text-sm text-red-700 dark:text-red-300 mb-4">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  )
}

const ErrorBoundary = ({ children, fallback }) => {
  return (
    <ReactErrorBoundary FallbackComponent={fallback || ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary