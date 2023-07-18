import React from "react";
import "./App.css";
import "./reset.css";
import Index from "./pages/Index";
import PlanList from "./pages/PlanList";
import SpotList from "./pages/SpotList";
import PlanDetail from "./pages/PlanDetail";
import SpotDetail from "./pages/SpotDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/planList" element={<PlanList />} />
				<Route path="/spotList" element={<SpotList />} />
				<Route path="/planDetail" element={<PlanDetail />} />
				<Route path="/spotDetail" element={<SpotDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
