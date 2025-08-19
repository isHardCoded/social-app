import type { User } from './User'

export type Post = {
	id: number
	content: string
	created_at: string
	user: User
}
