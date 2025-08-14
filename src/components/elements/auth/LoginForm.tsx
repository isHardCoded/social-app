import React from 'react'
import { AUTH_SERVICE } from '../../../services/UserService'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')

	const { login } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const data = await AUTH_SERVICE.login(username, password)
			login(data.user, data.access)
			navigate('/')
		} catch (err) {
			alert('Ошибка входа')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Вход</h2>
			<input
				type='text'
				placeholder='Имя пользователя'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Пароль'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Войти</button>
		</form>
	)
}

export default LoginForm
