import React, { useState } from 'react';
import { AgencyConfig, agencyConfig } from '../agencyConfig';
import { FileDown, Send, MessageCircle, Calendar, User, Phone, Map, CheckCircle2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  config: AgencyConfig;
}

export const ContactForm: React.FC<ContactFormProps> = ({ config }) => {

  // Lead Form State management
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    travelMonth: '',
    specialRequest: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    // Format date input (YYYY-MM) to "Month YYYY" format
    if (name === 'travelMonth' && value) {
      const [year, month] = value.split('-');
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      formattedValue = `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    
    // Pakistani Phone validator: 03xx-xxxxxxx or general 10-12 numbers
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 10 || cleanPhone.length > 12) {
      errors.phone = 'Please provide a valid phone number (e.g., 03001234567)';
    }

    if (!formData.destination) errors.destination = 'Please pick a destination option';
    if (!formData.travelMonth) errors.travelMonth = 'Please select your preferred travel month';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Open WhatsApp directly with form data
    window.open(generateWhatsAppBackupString(), '_blank');
    
    // Reset form after submission
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      destination: '',
      travelMonth: '',
      specialRequest: ''
    });
    setSubmitSuccess(false);
    setFormErrors({});
  };

  // Generate WhatsApp prefilled string based on form responses
  const generateWhatsAppBackupString = () => {
    const customText = `Assalam-o-Alaikum ${config.agencyName}, my name is ${formData.name}. I am looking to book a travel package to *${formData.destination}* in *${formData.travelMonth}*. My phone is ${formData.phone}.${formData.specialRequest ? ` Note: ${formData.specialRequest}` : ''} Please send me custom quotes.`;
    return `https://wa.me/${config.phone}?text=${encodeURIComponent(customText)}`;
  };

  return (
    <section className="py-24 bg-transparent" id="booking-inquiry-form-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="form-grid-container">
          
          {/* Supportive left pitch panel explaining process & conversion guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="form-narrative-pitch animate-fade-in">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Begin Your Sacred Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mt-3 mb-6">
                Receive a Fully Detailed Quote in Under 120 Minutes
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Submit your basics, and our booking desk in Karachi will instantly assign an active travel manager to outline optimal flight itineraries, arrange verified star lodging combinations, and prepare legal contracts.
              </p>

              {/* Steps timeline illustration */}
              <div className="space-y-6" id="form-steps-timeline">
                {[
                  { step: '01', title: 'Submit Custom Travel Parameters', desc: 'State your passengers density, selected spot context and travel month.' },
                  { step: '02', title: 'Route Validation & Allocations', desc: 'Our Karachi travel desk coordinates direct flight seat inventory.' },
                  { step: '03', title: 'Instant Proposal Despatch', desc: 'Secure customized itinerary options shared transparently over WhatsApp or Call.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4" id={`timeline-step-${idx}`}>
                    <div className="w-8 h-8 rounded-full text-xs font-bold font-mono flex items-center justify-center shrink-0 border bg-emerald-950/40 text-emerald-400 border-emerald-500/10">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-slate-450 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick emergency help line */}
            <div className="mt-12 p-5 rounded-2xl bg-zinc-950/40 border border-white/[0.06]" id="form-under-card-emergency">
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                Prefer direct consultations without forms? Drop in at our Karachi office or click our floating WhatsApp anchor to speak immediately.
              </p>
              <p className="text-xs font-bold text-white mt-2 font-mono">
                📞 CALL DESK: {config.phoneFormatted}
              </p>
            </div>
          </div>

          {/* Core Interactive Form Card */}
          <div className="lg:col-span-7" id="interactive-form-pane">
            <div className="bg-zinc-950/40 p-6 sm:p-10 rounded-3xl border border-white/[0.06] shadow-2xl relative h-full flex flex-col justify-center overflow-hidden" id="form-card-element">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                    id="client-booking-form"
                  >
                    <div id="form-title-block">
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
                        Secure Your Travel Deal
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Completely legal processing • No static dummy bookings used
                      </p>
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col space-y-1.5" id="field-wrap-name">
                      <label className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        <span>Full Traveler Name: <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Bilal Muhammad"
                        className={`w-full bg-zinc-905 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 text-white ${
                          formErrors.name ? 'border-red-500 bg-zinc-900' : 'border-white/[0.08] bg-zinc-900'
                        } transition`}
                        id="form-input-name"
                      />
                      {formErrors.name && <p className="text-[11px] text-red-500 font-medium">{formErrors.name}</p>}
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col space-y-1.5" id="field-wrap-phone">
                      <label className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-500" />
                        <span>Active Phone Number (WhatsApp preferred): <span className="text-red-500">*</span></span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 03001234567"
                        className={`w-full bg-zinc-905 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 text-white ${
                          formErrors.phone ? 'border-red-500 bg-zinc-900' : 'border-white/[0.08] bg-zinc-900'
                        } transition`}
                        id="form-input-phone"
                      />
                      {formErrors.phone && <p className="text-[11px] text-red-500 font-medium">{formErrors.phone}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" id="form-dropdowns-group">
                      {/* Destination Dropdown */}
                      <div className="flex flex-col space-y-1.5" id="field-wrap-dest">
                        <label className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                          <Map className="w-3.5 h-3.5 text-slate-500" />
                          <span>Destination Package: <span className="text-red-500">*</span></span>
                        </label>
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-900 border text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 ${
                            formErrors.destination ? 'border-red-500' : 'border-white/[0.08]'
                          } transition cursor-pointer`}
                          id="form-select-destination"
                        >
                          <option value="">-- Choose Package --</option>
                          {config.packages.map((pkg, i) => (
                            <option key={i} value={pkg.title} className="bg-zinc-950 text-white">{pkg.title}</option>
                          ))}
                        </select>
                        {formErrors.destination && <p className="text-[11px] text-red-500 font-medium">{formErrors.destination}</p>}
                      </div>

                      {/* Travel Month Calendar Picker */}
                      <div className="flex flex-col space-y-1.5" id="field-wrap-month">
                        <label className="text-xs font-semibold text-slate-200 flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>Preferred Travel Month: <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="month"
                          name="travelMonth"
                          min={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`}
                          max={`${new Date().getFullYear() + 2}-12`}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-900 border text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 ${
                            formErrors.travelMonth ? 'border-red-500' : 'border-white/[0.08]'
                          } transition cursor-pointer`}
                          id="form-input-month"
                        />
                        {formErrors.travelMonth && <p className="text-[11px] text-red-500 font-medium">{formErrors.travelMonth}</p>}
                      </div>
                    </div>

                    {/* Special Requests Textarea */}
                    <div className="flex flex-col space-y-1.5" id="field-wrap-desc">
                      <label className="text-xs font-semibold text-slate-200">Special Instructions / Custom Notes (optional):</label>
                      <textarea
                        name="specialRequest"
                        value={formData.specialRequest}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="e.g., VIP rooms requested, wheelchair companion guide, customized food plans..."
                        className="w-full bg-zinc-900 border border-white/[0.08] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition resize-none"
                        id="form-textarea-requests"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold uppercase text-[13px] tracking-wider text-white shadow-md flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-150 cursor-pointer bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/10"
                      id="form-submit-action-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4.5 w-4.5 border-2 border-white b-t-transparent" />
                          <span>Generating Safe Route...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Booking Request</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Thank you Success interactive state */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6"
                    id="form-success-wrapper"
                  >
                    <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center border bg-emerald-950/40 text-emerald-400 border-emerald-500/10" id="success-icon-badge">
                      <CheckCircle2 className="w-10 h-10 animate-bounce-slow" />
                    </div>

                    <h3 className="font-sans font-bold text-white text-2xl tracking-tight mb-2">
                      Inquiry Logged Successfully!
                    </h3>
                    <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 font-light font-sans">
                      Assalam-o-Alaikum <strong>{formData.name}</strong>, thank you for choosing us! A senior travel coordinator from our Karachi central branch will formulate your itinerary options and reach out shortly.
                    </p>

                    {/* Stateful Summary List */}
                    <div className="bg-zinc-900 p-5 rounded-2xl border border-white/[0.06] text-left max-w-md mx-auto mb-8 text-xs space-y-2.5" id="success-data-summary">
                      <p className="font-mono text-slate-500 uppercase tracking-widest text-[9px] mb-2 border-b border-white/[0.06] pb-1">
                        ROUTED PARAMETERS SUMMARY:
                      </p>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Destination:</span>
                        <span className="font-semibold text-slate-100">{formData.destination}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Travel Month:</span>
                        <span className="font-semibold text-slate-100">{formData.travelMonth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Phone Code:</span>
                        <span className="font-semibold text-slate-100 font-mono">{formData.phone}</span>
                      </div>
                      {formData.specialRequest && (
                        <div className="pt-2 border-t border-white/[0.06]">
                          <span className="text-slate-400 block mb-1">Notes:</span>
                          <span className="text-slate-200 block italic">"{formData.specialRequest}"</span>
                        </div>
                      )}
                    </div>

                    {/* Dual success action button triggers */}
                    <div className="flex flex-col sm:flex-row items-stretch justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto" id="success-action-group">
                      <a
                        href={generateWhatsAppBackupString()}
                        target="_blank"
                        rel="noreferrer"
                        className="py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 text-white shadow-md active:scale-95 duration-100 bg-emerald-600 hover:bg-emerald-700"
                        id="success-wa-dispatch-btn"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Direct WhatsApp Clear</span>
                      </a>
                      
                      <button
                        onClick={resetForm}
                        className="py-3.5 px-6 rounded-xl text-xs font-semibold text-slate-300 border border-white/[0.08] hover:bg-white/5 flex items-center justify-center space-x-1.5 active:scale-95 cursor-pointer transition-colors duration-150"
                        id="success-reset-form-btn"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Submit New Inquiry</span>
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};