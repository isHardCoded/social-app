import React from 'react'
import type { Post } from '../models/Post'
import { POST_SERVICE } from '../services/PostService'

type UsePostReturn = {
	posts: Post[]
	setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

export const usePost = (): UsePostReturn => {
	const [posts, setPosts] = React.useState<Post[]>([])

	const getPosts = async () => {
		setPosts(await POST_SERVICE.getPosts())
	}

	React.useEffect(() => {
		getPosts()
	}, [])

	return {
		posts,
		setPosts,
	}
}
