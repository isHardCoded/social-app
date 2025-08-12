import React from 'react'

import styles from './Header.module.css'
import Logo from '../../../assets/images/logo.svg'
import Avatar from '../../../assets/images/avatar.svg'
import { FaSearch } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { IoIosNotifications } from 'react-icons/io'

const Header = () => {
	const [count, setCount] = React.useState(0)

	console.log(count)

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
						<p style={{ fontSize: 12 }}>@steve_rogers</p>
					</div>
				</div>
				<div className={styles.buttons}>
					<button onClick={() => setCount(count + 1)}>
						<IoIosSettings size={26} />
					</button>
					<button>
						<IoIosNotifications size={26} />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
