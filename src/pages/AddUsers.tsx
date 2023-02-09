import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../types/usersTypes'
import { useActions } from '../hooks/useActions'
import './styles/addAndUpdateUser.scss'

interface AddUsersProps {}

const AddUsers: React.FC<AddUsersProps> = () => {
	const { addUsers } = useActions()
	const [contactState, setContactState] = useState({
		name: '',
		email: '',
		contact: '',
		relationship: '',
	})

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		setContactState({ ...contactState, relationship: event.target.value })
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContactState({ ...contactState, [e.target.name]: e.target.value })
	}

	const handleClick = (user: IUser): void => {
		if (!contactState.name || !contactState.email || !contactState.contact || !contactState.relationship) {
			alert('fill all gaps')
		} else {
			addUsers(user)
		}
	}

	const navigate = useNavigate()
	return (
		<div>
			<h1>ADD CONTACT</h1>

			<div className='contact-inputs-add'>
				<input
					value={contactState.name}
					name='name'
					onChange={handleInputChange}
					placeholder='Contact name...'
				/>
				<input
					value={contactState.email}
					name='email'
					onChange={handleInputChange}
					placeholder='Contact email...'
				/>
				<input
					value={contactState.contact}
					name='contact'
					onChange={handleInputChange}
					placeholder='Contact number...'
				/>
				<select value={contactState.relationship} onChange={handleChange}>
					<option value={'family'}>Family</option>
					<option value={'friend'}>Friend</option>
					<option value={'work'}>Work</option>
				</select>
				<button
					className='btn-add-contact'
					type='submit'
					onClick={() => {
						handleClick(contactState)
						navigate('/')
					}}
				>
					ADD CONTACT
				</button>
			</div>
			<button
				className='btn-back'
				onClick={() => {
					navigate('/')
				}}
			>
				back
			</button>
		</div>
	)
}

export default AddUsers
