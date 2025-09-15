import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="steps">
        <h2>Steps to Create Vite + React and Push to GitHub</h2>
        <ol>
          <li>Open terminal and run <code>npm create vite@latest</code>.</li>
          <li>Choose a project name and select <strong>React</strong> template.</li>
          <li>Navigate into the project folder: <code>cd your-project-name</code>.</li>
          <li>Install dependencies with <code>npm install</code>.</li>
          <li>Run the project using <code>npm run dev</code>.</li>
          <li>Initialize a Git repository: <code>git init</code>.</li>
          <li>Add all files: <code>git add .</code>.</li>
          <li>Commit changes: <code>git commit -m "Initial commit"</code>.</li>
          <li>Create a repository on GitHub.</li>
          <li>Add remote: <code>git remote add origin &lt;your-repo-url&gt;</code>.</li>
          <li>Push to GitHub: <code>git push -u origin main</code>.</li>
        </ol>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </>
  )
}

export default App
