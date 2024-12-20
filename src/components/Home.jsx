import React, { useState, useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { MdFormatAlignLeft } from "react-icons/md";

function Home() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate an API call
		setTimeout(() => {
			setItems([
				{
					title:
						"Understanding Big Data: Explore the complexities of big data, including storage, processing, and analysis techniques for large-scale datasets.",
					date: "3 days ago",
					id: 1,
				},
				{
					title:
						"Cloud Computing Essentials: Learn about cloud infrastructure, virtualization, and deployment models to streamline your projects.",
					date: "4 days ago",
					id: 2,
				},
				{
					title:
						"Building Scalable Applications: Discover strategies and best practices for designing and implementing scalable software systems.",
					date: "2 days ago",
					id: 3,
				},
				{
					title:
						"Cybersecurity Fundamentals: Gain insights into protecting networks, data, and systems from cyber threats and vulnerabilities.",
					date: "5 days ago",
					id: 4,
				},
				{
					title:
						"Introduction to Internet of Things (IoT): Understand the interconnectedness of smart devices and how they can transform industries.",
					date: "6 days ago",
					id: 5,
				},
				{
					title:
						"Blockchain Technology Basics: Learn about blockchain's decentralized nature and its applications in finance, healthcare, and beyond.",
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
				<h2>Home Items</h2>
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

export default Home;
