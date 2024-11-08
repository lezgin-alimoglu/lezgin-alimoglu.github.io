"use client"; // This marks the component as a Client Component

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData(e.target as HTMLFormElement);

    // Make the request to Formspree endpoint
    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      setFormStatus("🚀 Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setFormStatus("😞 Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 text-white rounded-md focus:outline-none mt-4"
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>

        {/* Show message status after the submit button */}
        {formStatus && (
          <div className="mt-4 text-center text-green-500">
            <p>{formStatus}</p>
          </div>
        )}

        {/* Add LinkedIn message */}
        <div className="mt-4 text-center text-gray-600">
          <p>If you cannot reach me, you can use my <a href="https://tr.linkedin.com/in/lezgin-alimo%C4%9Flu-2988b1224" target="_blank" className="text-blue-500 hover:underline">LinkedIn account</a>.</p>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
