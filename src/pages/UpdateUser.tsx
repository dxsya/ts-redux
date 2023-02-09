import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypesSelector } from '../hooks/useTypesSelector'
import './styles/addAndUpdateUser.scss'

interface UpdateUserProps {}

const UpdateUser: React.FC<UpdateUserProps> = () => {
	const { getOneUser, updateUser } = useActions()
	const { id } = useParams()
	useEffect(() => {
		getOneUser(id)
	}, [])
	const { data } = useTypesSelector((state) => state)
	const { user } = data
	const [contactState, setContactState] = useState({ name: '', email: '', contact: '', relationship: '' })

	useEffect(() => {
		if (user) {
			setContactState(user)
		}
	}, [user])

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		setContactState({ ...contactState, relationship: event.target.value })
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setContactState({ ...contactState, [e.target.name]: e.target.value })
	}

	const navigate = useNavigate()
	return (
		<div>
			<h1>EDIT CONTACT</h1>

			<div className='contact-inputs-edit'>
				<input value={contactState.name} name='name' onChange={handleInputChange} />
				<input value={contactState.email} name='email' onChange={handleInputChange} />
				<input value={contactState.contact} name='contact' onChange={handleInputChange} />
				<select value={contactState.relationship} onChange={handleChange}>
					<option value={'family'}>Family</option>
					<option value={'friend'}>Friend</option>
					<option value={'work'}>Work</option>
				</select>
				<button
					type='submit'
					onClick={() => {
						updateUser(contactState, id)
						navigate('/')
					}}
				>
					EDIT CONTACT
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

export default UpdateUser
