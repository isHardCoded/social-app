import Header from '../../components/elements/header/Header'
import PostList from '../../components/containers/post/PostList'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import PostAdd from '../../components/elements/post-add/PostAdd'

const HomePage = () => {
	const { user } = useAuth()

	if (!user) {
		return (
			<div>
				<h2>Не авторизован</h2>
				<Link to={{ pathname: '/login' }}>Войти</Link>
			</div>
		)
	}

	return (
		<>
			<Header username={user?.username} />
			<PostAdd />
			<PostList />
		</>
	)
}

export default HomePage
