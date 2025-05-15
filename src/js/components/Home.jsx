import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digito from "./Digito";

//create your first component
const Home = ({ segundos }) => {
	let digitos = segundos.toString().padStart(6, 0).split("");
	console.log(digitos);

	return (
		<div className="text-center">
			<div className="d-flex justify-content-center mt-5 fs-1">
				<Digito numero={<i class="fa-regular fa-clock"></i>} />
				{
					digitos.map((digito, index) => {
						return <Digito key={index} numero={digito} />
					})
				}


			</div>
		</div>
	);
};

export default Home;