import React from 'react'

import Header from '../../components/elements/header/Header'
import PostList from '../../components/containers/post/PostList'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()
	const { user } = useAuth()

	if (!user) {
		React.useEffect(() => {
			navigate('/login')

			return () => {
				navigate('/')
			}
		})
	}

	return (
		<>
			<Header username={user?.username} />
			<PostList />
		</>
	)
}

export default HomePage
