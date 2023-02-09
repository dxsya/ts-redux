import { Route, Routes } from 'react-router-dom'
import AddUsers from './pages/AddUsers'
import Home from './pages/Home'
import UpdateUser from './pages/UpdateUser'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/addContact' element={<AddUsers />} />
				<Route path='/updateContact/:id' element={<UpdateUser />} />
			</Routes>
		</div>
	)
}

export default App
