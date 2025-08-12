import React from 'react'

import styles from './Header.module.css'
import Logo from '../../../assets/images/logo.svg'
import Avatar from '../../../assets/images/avatar.svg'
import { FaSearch } from 'react-icons/fa'

import { FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'

interface HeaderProps {
	username: string | undefined
}

const Header: React.FC<HeaderProps> = ({ username }) => {
	const { logout } = useAuth()

	return (
		<header className={styles.header}>
			<img src={Logo} alt='' />
			<div className={styles.search}>
				<FaSearch size={24} />
				<input type='text' placeholder='Search...' />
			</div>
			<div className={styles.info}>
				<div className={styles.user}>
					<img src={Avatar} alt='' />
					<div>
						<p style={{ fontSize: 16, fontWeight: 'bold' }}>Steve Rogers</p>
						<p style={{ fontSize: 12 }}>@{username}</p>
					</div>
				</div>
				<div className={styles.buttons}>
					<button onClick={logout}>
						<FiLogOut size={26} />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
