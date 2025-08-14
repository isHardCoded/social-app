const API_URL = 'http://127.0.0.1:8000/api'

export const AUTH_SERVICE = {
	register: async (username: string, email: string, password: string) => {
		const response = await fetch(`${API_URL}/users/register/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, email, password }),
		})

		if (!response.ok) throw new Error('Registration failed')
		return response.json()
	},

	login: async (username: string, password: string) => {
		const response = await fetch(`${API_URL}/users/login/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		})

		if (!response.ok) throw new Error('Login failed')

		return response.json()
	},
}
