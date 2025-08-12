import { useState } from 'react'
import { register as registerApi } from '../../../services/api'
import { useNavigate } from 'react-router-dom'

export const RegisterForm = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const data = await registerApi(username, email, password)
			console.log(`Пользователь успешно зарегистрировался: ${data.username}`)
			navigate('/login')
		} catch (err) {
			alert('Ошибка регистрации')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Регистрация</h2>
			<input
				placeholder='Имя пользователя'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<input
				placeholder='Email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				placeholder='Пароль'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Зарегистрироваться</button>
		</form>
	)
}
