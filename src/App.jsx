import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Support from "./components/Support";
import Home from "./components/Home";
import Market from "./components/Market";
import Chat from "./components/Chat";

function App() {
	return (
		<Router>
			<div className="app">
				<Sidebar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />{" "}
						<Route path="/market" element={<Market />} />{" "}
						<Route path="/chat" element={<Chat />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/support" element={<Support />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
