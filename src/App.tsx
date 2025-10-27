
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

export default function App() {
	return (
		<MainLayout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</MainLayout>
	);
}
