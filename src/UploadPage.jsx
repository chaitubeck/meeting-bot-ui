import React, { useState } from "react";

function UploadPage() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    department: "",
    summary: "",
    meeting_url: ""
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h1>Upload Meeting Summary</h1>
      <form onSubmit={handleSubmit}>
        {['title', 'date', 'department', 'meeting_url'].map(field => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            required
          />
        ))}
        <textarea
          name="summary"
          placeholder="Meeting Summary"
          value={form.summary}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p style={{ color: 'green' }}>Tags: {response.tags?.join(", ")}</p>}
    </div>
  );
}

export default UploadPage;
