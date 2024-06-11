import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Suspense>
			<App />
		</Suspense>
  </React.StrictMode>,
)
