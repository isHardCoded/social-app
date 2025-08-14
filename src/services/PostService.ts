const API_URL = 'http://127.0.0.1:8000'

export const POST_SERVICE = {
	getPosts: async () => {
		const response = await fetch(`${API_URL}/api/posts/`)
		const data = await response.json()
		return data
	},

	addPost: async (content: string, token: string | null) => {
		const response = await fetch(`${API_URL}/api/posts/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ content }),
		})

		if (!response.ok) throw new Error('Registration failed')

		return response.json()
	},
}
