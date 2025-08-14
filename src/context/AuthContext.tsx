import { createContext, useState, type ReactNode } from 'react'

import React from 'react'

interface AuthContextProps {
	user: User | null
	token: string | null
	login: (user: User, token: string) => void
	logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
	user: null,
	token: null,
	login: () => {},
	logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(() => {
		const storedUser = localStorage.getItem('user')
		return storedUser ? JSON.parse(storedUser) : null
	})

	const [token, setToken] = useState<string | null>(() => {
		return localStorage.getItem('token')
	})

	React.useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === 'token') {
				setToken(e.newValue)
			}
			if (e.key === 'user') {
				setUser(e.newValue ? JSON.parse(e.newValue) : null)
			}
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [])

	const login = (user: User, token: string) => {
		setUser(user)
		setToken(token)
		localStorage.setItem('token', token)
		localStorage.setItem('user', JSON.stringify(user))
	}

	const logout = () => {
		setUser(null)
		setToken(null)
		localStorage.removeItem('token')
		localStorage.removeItem('user')
	}

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
