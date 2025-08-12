const API_URL = 'http://127.0.0.1:8000/api'

export async function register(
	username: string,
	email: string,
	password: string
) {
	const res = await fetch(`${API_URL}/users/register/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, email, password }),
	})
	if (!res.ok) throw new Error('Registration failed')
	return res.json()
}

export async function login(username: string, password: string) {
	const res = await fetch(`${API_URL}/users/login/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	})
	if (!res.ok) throw new Error('Login failed')
	return res.json()
}
