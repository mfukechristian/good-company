import React, { useState, useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { MdFormatAlignLeft } from "react-icons/md";

function Market() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate an API call
		setTimeout(() => {
			setItems([
				{
					title:
						"E-commerce Trends 2023: Explore the latest trends in online shopping and how businesses are adapting to meet customer demands.",
					date: "2 days ago",
					id: 1,
				},
				{
					title:
						"Understanding Digital Marketing: Learn how to leverage SEO, social media, and content strategies to drive online sales.",
					date: "4 days ago",
					id: 2,
				},
				{
					title:
						"Supply Chain Optimization: Discover how technology is streamlining logistics and inventory management in the retail industry.",
					date: "1 day ago",
					id: 3,
				},
				{
					title:
						"Customer Relationship Management (CRM): Understand the role of CRM tools in enhancing customer engagement and retention.",
					date: "5 days ago",
					id: 4,
				},
				{
					title:
						"Mobile Commerce Growth: Dive into the rise of mobile commerce and how it's transforming consumer behavior.",
					date: "6 days ago",
					id: 5,
				},
				{
					title:
						"Sustainable Business Practices: Learn how businesses are adopting eco-friendly strategies to meet market demands.",
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
				<h2>Market Insights</h2>
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

export default Market;
