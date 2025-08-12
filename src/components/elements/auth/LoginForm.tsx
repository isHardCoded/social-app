import { useState } from 'react'
import { login as loginApi } from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

export const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { login } = useAuth()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const data = await loginApi(username, password)
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
				placeholder='Имя пользователя'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<input
				placeholder='Пароль'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Войти</button>
		</form>
	)
}
