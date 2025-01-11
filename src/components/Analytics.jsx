import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip, Legend);


const Analytics = () => {
  const [email, setEmail] = useState("");
  const [teamsData, setTeamsData] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [velocityMetrics, setVelocityMetrics] = useState(null);
  const [sentimentData, setSentimentData] = useState({
    positive: 60,
    neutral: 30,
    negative: 10,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to submit data and fetch metrics
    setVelocityMetrics({
      responseTime: "2.5s",
      messageFrequency: "15 messages/day",
    });
    setSentimentData({
      positive: 60,
      neutral: 30,
      negative: 10,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Simulate processing the file
      console.log("Uploaded file:", file.name);
    }
  };

  const sentimentChartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [sentimentData.positive, sentimentData.neutral, sentimentData.negative],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  return (
    <div className="analytics">
      <h1 className="analytics-title">Communication Analytics</h1>

      {/* Split-Screen Layout */}
      <div className="split-screen">
        {/* Left Side: Upload Data */}
        <div className="left-side">
          <h2>Upload Data</h2>
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Teams Data</label>
              <textarea
                rows={3}
                placeholder="Enter Teams data"
                value={teamsData}
                onChange={(e) => setTeamsData(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Upload File (CSV/JSON)</label>
              <input type="file" accept=".csv,.json" onChange={handleFileUpload} />
              {uploadedFile && (
                <p className="file-preview">Uploaded: {uploadedFile.name}</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              Analyze
            </button>
          </form>
        </div>

        {/* Right Side: Metrics Display */}
        <div className="right-side">
          <h2>Metrics</h2>
          {velocityMetrics && (
            <div className="metrics-container">
              <div className="card">
                <h3>Communication Velocity</h3>
                <p>
                  <strong>Response Time:</strong> {velocityMetrics.responseTime}
                </p>
                <p>
                  <strong>Message Frequency:</strong> {velocityMetrics.messageFrequency}
                </p>
              </div>
            </div>
          )}

          {/* Sentiment Analysis */}
          <div className="sentiment-analysis">
            <h3>Sentiment Analysis</h3>
            <div className="chart-container">
              <Pie data={sentimentChartData} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>Analyzed data from Marketing team - 12/10/2024</li>
          <li>Analyzed data from Sales team - 12/09/2024</li>
          <li>Analyzed data from IT team - 12/08/2024</li>
        </ul>
      </div>

      {/* Download Report Section */}
      <div className="download-report">
        <button className="download-button">Download Full Report</button>
      </div>
    </div>
  );
};

export default Analytics;