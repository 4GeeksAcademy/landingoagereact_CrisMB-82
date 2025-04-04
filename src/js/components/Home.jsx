import React from "react";
import Navbar from "./Navbar"
import Body from "./Body"
import Footer from "./Footer"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>Landing Page</h1>
			<div>
				<Navbar />
			</div>
			<div>
				<Body />
			</div>
			<div>
				<Footer />
			</div>


		</div>
	);
};

export default Home;