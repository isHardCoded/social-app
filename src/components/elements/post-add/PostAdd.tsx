import styles from './PostAdd.module.css'

const PostAdd = () => {
	return (
		<form className={styles.form}>
			<div>
				<img src='' alt='' />
				<input type='text' placeholder='Введите текст поста...' />
			</div>
			<button>Добавить пост</button>
		</form>
	)
}

export default PostAdd
