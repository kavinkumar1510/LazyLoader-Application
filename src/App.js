import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

const Secretary = lazy(() => import('./pages/Secretary'))
const ExecutiveDirector = lazy(() => import('./pages/ExecutiveDirector'))
const Principal = lazy(() => import('./pages/Principal'))

// import Secretary from './pages/Secretary'
// import ExecutiveDirector from './pages/ExecutiveDirector'
// import Principal from './pages/Principal'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Suspense fallback={<div className='loader-wrapper'></div>}>
          <Route path='/chairman' component={ExecutiveDirector} />
          <Route path='/Principal' component={Principal} />
          <Route path='/' exact component={Secretary} />
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App