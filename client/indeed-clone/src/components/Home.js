// Imports
import axios from 'axios';
import {useState, useEffect} from 'react';
import './Home.css';
import SearchBar from './SearchBar';


// A sample component arbitrarily called "Home"
function Home() {
	const [sampleBackendText, setSampleBackendText] = useState();

	// When the component mounts, call the back-end API endpoint to
	// get its text
	useEffect(() => {
		axios.get('http://localhost:4000/api/sample-req')
			.then(response => {
				console.log(JSON.stringify(response))
				setSampleBackendText(response.data);
			}).catch(err => {
				console.log(err);
				setSampleBackendText('null');
			})
	}, []);

	// Return the HTML that will display for this component, including an
	// embedded variable
	return (
		<div className="background">
			<div className='buttons'>
			<button className="login">Login</button>
			<button className="signUp">Sign Up</button>
			</div>
			<div className='search'>
			<SearchBar/>
			</div>
			<div className='slides'>
			<button className='Cultural'>Cultural</button>
			<button className='Professional'>Professional</button>
			<button className='Social'>Social</button>
			</div>
		</div>
			

	)
}

export default Home;