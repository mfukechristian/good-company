import React, { useState, useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { MdFormatAlignLeft } from "react-icons/md";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setItems([
        {
          title:
            "Introduction to Data Science: Learn how data is analyzed and interpreted using statistical methods, programming, and visualization techniques to derive meaningful insights.",
          date: "5 days ago",
          id: 1,
        },
        {
          title:
            "AI in Healthcare: Discover the transformative impact of AI in healthcare, from diagnosing diseases to personalized treatment and managing patient care effectively.",
          date: "5 days ago",
          id: 2,
        },
        {
          title:
            "Machine Learning Basics: Get a foundation in machine learning by exploring algorithms like linear regression, decision trees, and clustering techniques.",
          date: "5 days ago",
          id: 3,
        },
        {
          title:
            "Deep Learning Overview: Dive into advanced neural network architectures, including convolutional and recurrent networks, for image and text analysis.",
          date: "5 days ago",
          id: 4,
        },
        {
          title:
            "AI for Data Analysis: Understand how AI accelerates data analysis with tools for pattern recognition, predictive analytics, and anomaly detection.",
          date: "5 days ago",
          id: 5,
        },
        {
          title:
            "Predictive Modeling Techniques: Learn how predictive models are built using machine learning techniques for forecasting and decision-making.",
          date: "5 days ago",
          id: 6,
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Your Items</h2>
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

export default Dashboard;
