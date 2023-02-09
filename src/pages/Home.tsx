import { useActions } from '../hooks/useActions'
import { useEffect, useState } from 'react'
import { useTypesSelector } from '../hooks/useTypesSelector'
import { useNavigate } from 'react-router-dom'
import './styles/home.scss'

export default function Home() {
	const { data } = useTypesSelector((state) => state)
	const { getUsers, deleteUsers, filterUser } = useActions()
	const navigate = useNavigate()
	const handleDelete = (id: number | string): void => {
		deleteUsers(id)
	}
	let { users } = data
	const [filter, setFilter] = useState('all')
	const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		setFilter(event.target.value)
	}
	useEffect(() => {
		getUsers()
	}, [])
	useEffect(() => {
		if (filter == 'all') {
			getUsers()
		} else {
			filterUser(filter)
		}
	}, [filter])

	return (
		<>
			<div>
				<button color='info' onClick={() => navigate('/addContact')} className='btn-add-contact'>
					Add Contact
				</button>
			</div>
			<div className='search-filter-box'>
				<input type='text' />
				<select onChange={handleFilter}>
					<option value={'all'}>All</option>
					<option value={'family'}>Family</option>
					<option value={'friend'}>Friend</option>
					<option value={'work'}>Work</option>
				</select>
			</div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Contact</th>
						<th>Relationship</th>
						<th>Action</th>
					</tr>
				</thead>
				{users &&
					users.map((user) => (
						<tbody key={user.id}>
							<tr>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.contact}</td>
								<td>{user.relationship}</td>
								<td>
									<button onClick={() => handleDelete(user.id)} className='btn-delete-contact'>
										Delete
									</button>
									<button
										onClick={() => navigate(`/updateContact/${user.id}`)}
										className='btn-edit-contact'
									>
										Edit
									</button>
								</td>
							</tr>
						</tbody>
					))}
			</table>
		</>
	)
}
