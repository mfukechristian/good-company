import React, { useState, useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { MdFormatAlignLeft } from "react-icons/md";

function Chat() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate an API call
		setTimeout(() => {
			setItems([
				{
					title:
						"AI-Powered Chatbots: Discover how AI chatbots are revolutionizing customer service by offering instant and personalized responses.",
					date: "3 days ago",
					id: 1,
				},
				{
					title:
						"Natural Language Processing (NLP): Understand how NLP enables machines to interpret, understand, and respond to human language.",
					date: "4 days ago",
					id: 2,
				},
				{
					title:
						"Conversational AI Applications: Learn about applications of conversational AI in industries like healthcare, finance, and e-commerce.",
					date: "1 day ago",
					id: 3,
				},
				{
					title:
						"Real-Time Translation Tools: Explore how chat systems with real-time translation are bridging language barriers globally.",
					date: "5 days ago",
					id: 4,
				},
				{
					title:
						"Voice-Based Assistants: Dive into the technology behind virtual assistants like Alexa and Google Assistant for voice-based interactions.",
					date: "6 days ago",
					id: 5,
				},
				{
					title:
						"Secure Messaging Platforms: Learn about encryption technologies that ensure data privacy and security in chat applications.",
					date: "1 week ago",
					id: 6,
				},
			]);
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="dashboard">
			<div className="dashboard-header">
				<h2>Chat Topics</h2>
				<button className="dashboard-show-all">Show All</button>
			</div>
			<div className="card-grid">
				{loading
					? Array(6)
							.fill(0)
							.map((_, index) => (
								<div key={index} className="card skeleton">
									<div className="skeleton-header"></div>
									<div className="skeleton-content"></div>
								</div>
							))
					: items.map((item) => (
							<div className="card" key={item.id}>
								<div className="card-header">
									<div
										className="card-icon"
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "30px",
											height: "30px",
											borderRadius: "5px",
											backgroundColor: "#f7f2ff",
										}}
									>
										<MdFormatAlignLeft
											style={{ fontSize: "20px", color: "#9f70fa" }}
										/>
									</div>
									<div className="card-favorite">
										<IoIosStarOutline style={{ fontSize: "20px" }} />
									</div>
								</div>
								<div className="card-body">
									<p className="card-date">{item.date}</p>
									<h3 className="card-title">{item.title}</h3>
								</div>
								<div className="card-actions">
									<button className="btn btn-download">Download</button>
									<button className="btn btn-view">View</button>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
}

export default Chat;
