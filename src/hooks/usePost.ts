import React from 'react'
import type { Post } from '../models/Post'
import { POST_SERVICE } from '../services/PostService'

type UsePostReturn = {
	posts: Post[]
	setPosts: React.Dispatch<React.SetStateAction<Post[]>>
	addPost: (content: string, token: string | null) => Promise<void>
	updatePost: (
		id: number,
		content: string,
		token: string | null
	) => Promise<void>
	deletePost: (id: number, token: string | null) => Promise<void>
	reload: () => Promise<void>
}

export const usePost = (): UsePostReturn => {
	const [posts, setPosts] = React.useState<Post[]>([])

	const getPosts = async () => {
		setPosts(await POST_SERVICE.getPosts())
	}

	const addPost = async (content: string, token: string | null) => {
		const newPost = await POST_SERVICE.addPost(content, token)
		setPosts(prev => [...prev, newPost])
	}

	const updatePost = async (
		id: number,
		content: string,
		token: string | null
	) => {
		const updatedPost = await POST_SERVICE.updatePost(id, content, token)
		setPosts(prev => prev.map(p => (p.id === id ? updatedPost : p)))
	}

	const deletePost = async (id: number, token: string | null) => {
		await POST_SERVICE.deletePost(id, token)
		setPosts(prev => prev.filter(p => p.id !== id))
	}

	React.useEffect(() => {
		getPosts()
	}, [])

	return {
		posts,
		setPosts,
		addPost,
		updatePost,
		deletePost,
		reload: getPosts,
	}
}
