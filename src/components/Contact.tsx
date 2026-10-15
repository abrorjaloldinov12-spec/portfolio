import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, AlertCircle, ArrowUpRight } from 'lucide-react';
import { playCyberClick, playCyberChime } from '../utils/sound.ts';

const DIRECT_EMAIL = 'abrorjaloldinov29@gmail.com';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCyberClick();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      playCyberChime();
      setSubmittedMessage(
        `Thank you ${formData.name}! Your message has been prepared. Click below to send directly to Abror's inbox via your default mail client.`
      );
    }, 600);
  };

  const handleCopyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText(DIRECT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Abror,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    return `mailto:${DIRECT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-400 text-base">
            Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Channel Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-7 border-cyan-500/30 space-y-4 relative overflow-hidden group">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider">Direct Inbox</span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Email Address</span>
                <span className="text-lg font-semibold text-white font-mono break-all selection:bg-cyan-500/30">
                  {DIRECT_EMAIL}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${DIRECT_EMAIL}?subject=Portfolio%20Inquiry`}
                  onClick={() => playCyberClick()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all shadow-sm shadow-cyan-500/20"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability & Social channels status */}
            <div className="glass-card rounded-2xl p-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Collaboration Channels</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Currently open for frontend contracts, interactive 3D web applications, responsive website builds, and remote engineering opportunities.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-medium">Telegram Collaboration</span>
                  </div>
                  <a
                    href="https://t.me/abror_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playCyberClick()}
                    className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span className="font-medium">Live Demos &amp; Code</span>
                  </div>
                  <span className="text-slate-400 font-mono">Netlify Hosted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 sm:p-10 relative">
            <h3 className="text-xl font-bold font-display text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your inquiry details below. All fields are verified locally.
            </p>

            {submittedMessage ? (
              <div className="p-6 rounded-xl bg-slate-900 border border-cyan-500/40 space-y-4 text-center animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white">Message Ready!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    {submittedMessage}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={generateMailto()}
                    onClick={() => playCyberClick()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg shadow-md hover:brightness-110 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedMessage(null);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Validating &amp; Preparing...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
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
