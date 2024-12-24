
import './App.css';
import {  createBrowserRouter } from 'react-router-dom';
import Aboutus from './Component/Pages/Aboutus';
import AppHead from './Component/Pages/AppHead';

function App() {
  const router = createBrowserRouter([
    {
			path: "/",
			element: (
				<AppHead title="Home">
					<Aboutus />
				</AppHead>
			),
		},
  ])
  return router;
}

export default App;
