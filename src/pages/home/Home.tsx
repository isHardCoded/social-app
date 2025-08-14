import Header from '../../components/elements/header/Header'
import PostList from '../../components/containers/post/PostList'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const HomePage = () => {
	const { user } = useAuth()

	if (!user) {
		return (
			<div>
				<h2>Не авторизован</h2>
				<Link to={{ pathname: '/login' }}>Войти</Link>
				<p>123</p>
			</div>
		)
	}

	return (
		<>
			<Header username={user?.username} />
			<PostList />
		</>
	)
}

export default HomePage
