import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Download, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleDownloadResume = () => {
    // Triggers download attempt for /assets/Bhavya-Resume.pdf
    const link = document.createElement('a');
    link.href = '/assets/Bhavya-Resume.pdf';
    link.download = 'Bhavya-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Resume Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E5] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#7C3AED] uppercase">
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              Want to know more about my journey?
            </h3>
            <p className="text-sm text-[#666666] max-w-xl">
              Download my complete UI/UX design resume highlighting education, design tools, certifications, and project experience.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#171717] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-all duration-200 shadow-sm hover:shadow-md shrink-0 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </motion.div>

        {/* Contact Form & Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Heading & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-xs font-mono text-[#7C3AED] mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
                Let's Create Something Meaningful.
              </h2>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed mt-4">
                Have an idea, project or opportunity? I'd love to connect and explore how we can turn it into a meaningful digital experience.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href="mailto:bhavyachappa12@gmail.com"
                className="p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#7C3AED] transition-all duration-200 flex items-center gap-4 group shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] flex items-center justify-center text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#666666] block">Direct Email</span>
                  <span className="text-sm font-bold text-[#171717] group-hover:text-[#7C3AED] transition-colors">
                    bhavyachappa12@gmail.com
                  </span>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] flex items-center gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] flex items-center justify-center text-[#7C3AED]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#666666] block">Current Location</span>
                  <span className="text-sm font-bold text-[#171717]">
                    Visakhapatnam, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#171717]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#666666] max-w-md mx-auto">
                  Thank you for reaching out, Bhavya will review your message and reply back shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-[#7C3AED] transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#171717]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Fill out the form below to get in touch directly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold text-[#171717] uppercase mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] text-sm text-[#171717] placeholder:text-slate-400 focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-[#171717] uppercase mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] text-sm text-[#171717] placeholder:text-slate-400 focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-[#171717] uppercase mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E5E5E5] text-sm text-[#171717] placeholder:text-slate-400 focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#171717] text-white text-sm font-semibold hover:bg-[#7C3AED] transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
