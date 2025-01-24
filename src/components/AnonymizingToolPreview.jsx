import React, { useState } from "react";

const AnonymizingToolPreview = () => {
  const [inputData, setInputData] = useState("");
  const [anonymizedData, setAnonymizedData] = useState("");
  const [metrics, setMetrics] = useState({
    sensitiveFields: 0,
    anonymizedFields: 0,
    accuracy: "100%",
  });

  // State for toggling fields
  const [fieldsToAnonymize, setFieldsToAnonymize] = useState({
    id: true,
    subject: true,
    sender: true,
    recipients: true,
    bodyContent: true,
    bodyType: true,
    sentDateTime: true,
    receivedDateTime: true,
    hasAttachments: true,
    conversationId: true,
  });

  // State for email list and selection
  const [emails, setEmails] = useState([
    {
      id: "1",
      subject: "Test Email 1",
      sender: { emailAddress: { address: "john.doe@example.com" } },
      toRecipients: [{ emailAddress: { address: "jane.doe@example.com" } }],
      body: { content: "This is a test email.", contentType: "Text" },
      sentDateTime: "2023-10-01T12:00:00Z",
      receivedDateTime: "2023-10-01T12:05:00Z",
      hasAttachments: false,
      conversationId: "67890",
    },
    {
      id: "2",
      subject: "Test Email 2",
      sender: { emailAddress: { address: "alice@example.com" } },
      toRecipients: [{ emailAddress: { address: "bob@example.com" } }],
      body: { content: "Another test email.", contentType: "Text" },
      sentDateTime: "2023-10-02T12:00:00Z",
      receivedDateTime: "2023-10-02T12:05:00Z",
      hasAttachments: true,
      conversationId: "67891",
    },
  ]);

  const [selectedEmails, setSelectedEmails] = useState([]); // Track selected emails
  const [selectedEmailDetails, setSelectedEmailDetails] = useState(null); // Track email details for popup

  // Handle email selection (checkbox)
  const handleEmailSelection = (email) => {
    const updatedSelectedEmails = selectedEmails.includes(email)
      ? selectedEmails.filter((e) => e !== email) // Deselect
      : [...selectedEmails, email]; // Select

    setSelectedEmails(updatedSelectedEmails);

    // Update input section with selected emails' JSON
    setInputData(JSON.stringify(updatedSelectedEmails, null, 2));
  };

  // Handle email click to view details in popup
  const handleEmailClick = (email) => {
    setSelectedEmailDetails(email);
  };

  // Close the popup
  const closePopup = () => {
    setSelectedEmailDetails(null);
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleToggleField = (field) => {
    setFieldsToAnonymize((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleAnonymizeData = () => {
    // Parse input data as JSON (assuming input is JSON)
    let parsedData;
    try {
      parsedData = JSON.parse(inputData);
    } catch (error) {
      alert("Invalid JSON input!");
      return;
    }

    // Anonymize selected fields
    const anonymized = parsedData.map((email) => {
      const anonymizedEmail = { ...email };
      if (fieldsToAnonymize.id) anonymizedEmail.id = "XXXX";
      if (fieldsToAnonymize.subject) anonymizedEmail.subject = "XXXX";
      if (fieldsToAnonymize.sender)
        anonymizedEmail.sender.emailAddress.address = "*****@*****.***";
      if (fieldsToAnonymize.recipients)
        anonymizedEmail.toRecipients = anonymizedEmail.toRecipients.map(
          (recipient) => ({
            ...recipient,
            emailAddress: { address: "*****@*****.***" },
          })
        );
      if (fieldsToAnonymize.bodyContent) anonymizedEmail.body.content = "XXXX";
      if (fieldsToAnonymize.bodyType) anonymizedEmail.body.contentType = "XXXX";
      if (fieldsToAnonymize.sentDateTime) anonymizedEmail.sentDateTime = "XXXX";
      if (fieldsToAnonymize.receivedDateTime)
        anonymizedEmail.receivedDateTime = "XXXX";
      if (fieldsToAnonymize.hasAttachments)
        anonymizedEmail.hasAttachments = "XXXX";
      if (fieldsToAnonymize.conversationId)
        anonymizedEmail.conversationId = "XXXX";
      return anonymizedEmail;
    });

    // Calculate metrics
    const sensitiveFields = Object.keys(fieldsToAnonymize).length;
    const anonymizedFields = Object.values(fieldsToAnonymize).filter(
      (val) => val
    ).length;
    const accuracy =
      anonymizedFields === sensitiveFields ? "100%" : "Partial";

    setAnonymizedData(JSON.stringify(anonymized, null, 2));
    setMetrics({ sensitiveFields, anonymizedFields, accuracy });
  };

  return (
    <div className="anonymizing-page">
      <div className="anonymizing-container">
        <h2 className="anonymizing-title">Anonymizing Tool Preview</h2>
        <p className="anonymizing-description">
          Input your sensitive data and see how it gets anonymized in real-time!
        </p>

        <div className="anonymizing-grid">
          {/* Input Section */}
          <div className="anonymizing-section">
            <h3 className="section-title">Input Data</h3>
            <textarea
              className="input-textarea"
              placeholder="Enter JSON data here..."
              value={inputData}
              onChange={handleInputChange}
            />
            <div className="metrics-container">
              <h4>Input Metrics</h4>
              <div className="metric">
                <span className="metric-label">Sensitive Fields Detected:</span>
                <span className="metric-value">{metrics.sensitiveFields}</span>
              </div>
            </div>

            {/* Toggle Buttons for Fields */}
            <div className="field-toggles">
              <h4>Select Fields to Anonymize</h4>
              {Object.keys(fieldsToAnonymize).map((field) => (
                <div key={field} className="toggle-field">
                  <label>
                    <input
                      type="checkbox"
                      checked={fieldsToAnonymize[field]}
                      onChange={() => handleToggleField(field)}
                    />
                    {field}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Output Section */}
          <div className="anonymizing-section">
            <h3 className="section-title">Anonymized Data</h3>
            <div className="output-box">
              <pre>{anonymizedData || "Anonymized data will appear here..."}</pre>
            </div>
            <div className="metrics-container">
              <h4>Output Metrics</h4>
              <div className="metric">
                <span className="metric-label">Fields Anonymized:</span>
                <span className="metric-value">{metrics.anonymizedFields}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Anonymization Accuracy:</span>
                <span className="metric-value">{metrics.accuracy}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Anonymize Button */}
        <button className="anonymize-button" onClick={handleAnonymizeData}>
          Anonymize Data
        </button>

        {/* Visualization Section */}
        <div className="visualization-section">
          <h3 className="section-title">Anonymization Visualization</h3>
          <div className="charts">
            <div className="chart">
              <h4>Sensitive Fields Detected</h4>
              <div className="bar-chart">
                <div
                  className="bar"
                  style={{ width: `${(metrics.sensitiveFields / 10) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="chart">
              <h4>Fields Anonymized</h4>
              <div className="bar-chart">
                <div
                  className="bar"
                  style={{ width: `${(metrics.anonymizedFields / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Email List Section */}
        <div className="email-list-section">
          <h3 className="section-title">Email List</h3>
          <div className="email-list">
            {emails.map((email) => (
              <div key={email.id} className="email-item">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(email)}
                    onChange={() => handleEmailSelection(email)}
                  />
                  <span className="email-subject">{email.subject}</span>
                  <span className="email-sender">
                    From: {email.sender.emailAddress.address}
                  </span>
                </label>
                <button
                  className="view-details-button"
                  onClick={() => handleEmailClick(email)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Email Details Popup */}
        {selectedEmailDetails && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3 className="section-title">Email Details</h3>
              <button className="close-button" onClick={closePopup}>
                &times;
              </button>
              <div className="email-content">
                <pre>{JSON.stringify(selectedEmailDetails, null, 2)}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnonymizingToolPreview;