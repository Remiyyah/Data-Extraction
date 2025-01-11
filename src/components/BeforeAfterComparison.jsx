// import React, { useState } from "react";


// const BeforeAfterComparison = () => {
//   const [inputData, setInputData] = useState("");
//   const [processedData, setProcessedData] = useState("");

//   const handleInputChange = (e) => {
//     setInputData(e.target.value);
//   };

//   const handleProcessData = () => {
//     // Simulate AI processing (replace with actual API call)
//     const processed = inputData
//       .split(" ")
//       .map((word) => word.toUpperCase())
//       .join(" ");
//     setProcessedData(processed);
//   };

//   return (
//     <div className="comparison-page">
//       <div className="comparison-container">
//         <h2 className="comparison-title">Before and After Comparison</h2>
//         <p className="comparison-description">
//           See how your data transforms after AI analysis!
//         </p>

//         <div className="comparison-grid">
//           {/* Before Section */}
//           <div className="comparison-section">
//             <h3 className="section-title">Before</h3>
//             <textarea
//               className="input-textarea"
//               placeholder="Enter your data here..."
//               value={inputData}
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* After Section */}
//           <div className="comparison-section">
//             <h3 className="section-title">After</h3>
//             <div className="output-box">
//               <p>{processedData || "Processed data will appear here..."}</p>
//             </div>
//           </div>
//         </div>

//         {/* Process Button */}
//         <button className="process-button" onClick={handleProcessData}>
//           Process Data
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BeforeAfterComparison;

import React, { useState } from "react";


const BeforeAfterComparison = () => {
  const [inputData, setInputData] = useState("");
  const [processedData, setProcessedData] = useState("");
  const [metrics, setMetrics] = useState({
    wordCount: 0,
    sentiment: "Neutral",
    readability: "High",
  });

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleProcessData = () => {
    // Simulate AI processing (replace with actual API call)
    const processed = inputData
      .split(" ")
      .map((word) => word.toUpperCase())
      .join(" ");

    // Simulate metrics calculation
    const wordCount = inputData.split(" ").length;
    const sentiment = Math.random() > 0.5 ? "Positive" : "Negative";
    const readability = wordCount > 20 ? "Medium" : "High";

    setProcessedData(processed);
    setMetrics({ wordCount, sentiment, readability });
  };

  return (
    <div className="comparison-page">
      <div className="comparison-container">
        <h2 className="comparison-title">Before and After Comparison</h2>
        <p className="comparison-description">
          See how your data transforms after AI analysis!
        </p>

        <div className="comparison-grid">
          {/* Before Section */}
          <div className="comparison-section">
            <h3 className="section-title">Before</h3>
            <textarea
              className="input-textarea"
              placeholder="Enter your data here..."
              value={inputData}
              onChange={handleInputChange}
            />
            <div className="metrics-container">
              <h4>Input Metrics</h4>
              <div className="metric">
                <span className="metric-label">Word Count:</span>
                <span className="metric-value">{inputData.split(" ").length}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Sentiment:</span>
                <span className="metric-value">Analyzing...</span>
              </div>
              <div className="metric">
                <span className="metric-label">Readability:</span>
                <span className="metric-value">Analyzing...</span>
              </div>
            </div>
          </div>

          {/* After Section */}
          <div className="comparison-section">
            <h3 className="section-title">After</h3>
            <div className="output-box">
              <p>{processedData || "Processed data will appear here..."}</p>
            </div>
            <div className="metrics-container">
              <h4>Output Metrics</h4>
              <div className="metric">
                <span className="metric-label">Word Count:</span>
                <span className="metric-value">{metrics.wordCount}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Sentiment:</span>
                <span className="metric-value">{metrics.sentiment}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Readability:</span>
                <span className="metric-value">{metrics.readability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Button */}
        <button className="process-button" onClick={handleProcessData}>
          Process Data
        </button>

        {/* Visualization Section */}
        <div className="visualization-section">
          <h3 className="section-title">Data Visualization</h3>
          <div className="charts">
            <div className="chart">
              <h4>Word Count</h4>
              <div className="bar-chart">
                <div
                  className="bar"
                  style={{ width: `${(metrics.wordCount / 50) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="chart">
              <h4>Sentiment Analysis</h4>
              <div className="sentiment-chart">
                <div
                  className="sentiment-bar positive"
                  style={{
                    width: `${
                      metrics.sentiment === "Positive" ? "100%" : "0%"
                    }`,
                  }}
                ></div>
                <div
                  className="sentiment-bar negative"
                  style={{
                    width: `${
                      metrics.sentiment === "Negative" ? "100%" : "0%"
                    }`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;