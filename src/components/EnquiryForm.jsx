import React, { useState } from 'react';

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', size: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return 'Please enter your name';
    if (!/^\+?[0-9\-\s]{7,}$/.test(form.phone)) return 'Enter a valid phone number';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) return 'Enter a valid email';
    if (!form.date) return 'Please select a delivery date';
    if (!form.size || Number(form.size) <= 0) return 'Enter expected headcount';
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus(err);
      return;
    }

    const subject = encodeURIComponent('Bulk Delivery Enquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDate: ${form.date}\nHeadcount: ${form.size}\nMessage: ${form.message}`
    );
    // Replace the email below with your restaurant's email
    window.location.href = `mailto:orders@yourrestaurant.com?subject=${subject}&body=${body}`;
    setStatus('Opening your email app…');
  }

  return (
    <section id="enquiry" className="section">
      <div className="container">
        <h2 className="section__title">Bulk Delivery Enquiry</h2>
        <form className="form card" onSubmit={handleSubmit} noValidate>
          <div className="grid">
            <label className="field">
              <span>Name</span>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label className="field">
              <span>Phone</span>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. +91 98765 43210" required />
            </label>
            <label className="field">
              <span>Email (optional)</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </label>
            <label className="field">
              <span>Delivery date</span>
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
            </label>
            <label className="field">
              <span>Headcount</span>
              <input type="number" min="1" name="size" value={form.size} onChange={handleChange} placeholder="Number of people" required />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Occasion, menu preferences, delivery window…" />
          </label>
          {status && <p className="status">{status}</p>}
          <div className="form__actions">
            <button type="submit" className="btn btn--primary">Send Enquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}


