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

		if (!response.ok) throw new Error('Ошибка при добавлении поста')

		return response.json()
	},

	updatePost: async (id: number, content: string, token: string | null) => {
		const response = await fetch(`${API_URL}/api/posts/${id}/`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ content }),
		})

		if (!response.ok) {
			throw new Error('Ошибка при редактировании поста')
		}
	},

	deletePost: async (id: number, token: string | null) => {
		const response = await fetch(`${API_URL}/api/posts/${id}/`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		if (!response.ok) {
			throw new Error('Ошибка при удалении поста')
		}
	},
}
