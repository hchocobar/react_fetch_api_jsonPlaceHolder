import React from "react";
import Todos from "./Todos.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">React - RestAPI</h1>
			<Todos/>
		</div>
	);
};

export default Home;
