import { useState } from "react";

const initialValues = { fullName: "", email: "", subject: "", message: "" };
const subjects = ["General Inquiry", "Order Support", "Product Question"];

export default function ContactForm({ onSent }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSent();
    setValues(initialValues);
  };

  return (
    <form className="support__form" onSubmit={handleSubmit}>
      <label className="support__field">
        <span>Full Name</span>
        <input type="text" name="fullName" placeholder="Your Name" value={values.fullName} onChange={handleChange} required />
      </label>
      <label className="support__field">
        <span>Email Address</span>
        <input type="email" name="email" placeholder="Your Email" value={values.email} onChange={handleChange} required />
      </label>
      <label className="support__field">
        <span>Subject</span>
        <select name="subject" value={values.subject} onChange={handleChange} required>
          <option value="" disabled>Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <label className="support__field">
        <span>Your Message</span>
        <textarea name="message" rows="4" placeholder="Type Here..." value={values.message} onChange={handleChange} required />
      </label>
      <button className="support__submit" type="submit">Send Now</button>
    </form>
  );
}
