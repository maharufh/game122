import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    captchaInput: "",
  });

  const [captchaUrl, setCaptchaUrl] = useState(
    "https://cataas.com/cat?ts="  
  );

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const refreshCaptcha = () => {
    setCaptchaUrl("https://cataas.com/cat?ts=");
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.captchaInput.trim()) {
      alert("Please enter captcha");
      return;
    }

    setSubmittedData(formData);

    setFormData({
      name: "",
      email: "",
      captchaInput: "",
    });

    refreshCaptcha();
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-3 text-center">Contact Form</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Captcha</label>
            <div className="d-flex align-items-center gap-3 mb-2">
              <img
                src={captchaUrl}
                alt="captcha"
                width="120"
                height="120"
                className="rounded border"
              />
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={refreshCaptcha}
              >
                Refresh
              </button>
            </div>

            <input
              type="text"
              className="form-control"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              placeholder="Enter captcha text"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="card mt-4 p-3 shadow">
          <h4>Submitted Data</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}
