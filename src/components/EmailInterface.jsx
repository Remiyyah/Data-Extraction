import React, { useState } from "react";

const EmailInterface = ({ emails, onAnonymize }) => {
  const [selectedEmails, setSelectedEmails] = useState([]);
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

  // Toggle email selection
  const handleEmailSelection = (emailId) => {
    setSelectedEmails((prev) =>
      prev.includes(emailId)
        ? prev.filter((id) => id !== emailId) // Deselect
        : [...prev, emailId] // Select
    );
  };

  // Toggle field selection
  const handleToggleField = (field) => {
    setFieldsToAnonymize((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Anonymize selected emails
  const handleAnonymize = () => {
    const selectedEmailData = emails.filter((email) =>
      selectedEmails.includes(email.id)
    );
    onAnonymize(selectedEmailData, fieldsToAnonymize);
  };

  return (
    <div className="email-interface">
      <h3 className="section-title">Email Interface</h3>
      <div className="email-list">
        {emails.map((email) => (
          <div key={email.id} className="email-item">
            <label>
              <input
                type="checkbox"
                checked={selectedEmails.includes(email.id)}
                onChange={() => handleEmailSelection(email.id)}
              />
              <span className="email-subject">{email.subject}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Field Selection */}
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

      {/* Anonymize Button */}
      <button className="anonymize-button" onClick={handleAnonymize}>
        Anonymize Selected Emails
      </button>
    </div>
  );
};

export default EmailInterface;