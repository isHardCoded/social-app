import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

createRoot(document.getElementById('root')!).render(
	<AuthProvider>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	</AuthProvider>
)
