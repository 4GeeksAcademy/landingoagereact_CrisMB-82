import React from "react";
import Navbar from "./Navbar"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>Landing Page</h1>
        <div>
			<Navbar/>
			</div> 
		<div>body</div> 
		<div>footer</div> 
		   

		</div>
	);
};

export default Home;