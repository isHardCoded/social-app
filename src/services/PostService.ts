const API_URL = 'http://127.0.0.1:8000'

export const POST_SERVICE = {
	getPosts: async () => {
		const response = await fetch(`${API_URL}/api/posts/`)
		const data = await response.json()
		return data
	},
}
