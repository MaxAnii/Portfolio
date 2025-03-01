import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Routes>
			<Route path="/" element={<Home></Home>}></Route>
		</Routes>
	);
}
export default App;
