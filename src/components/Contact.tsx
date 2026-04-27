import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.trim().length < 2) error = 'Name is too short';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.trim().length < 10) error = 'Message must be at least 10 characters long';
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);
    
    // Mark all as touched
    setTouched({ name: true, email: true, message: true });

    if (isNameValid && isEmailValid && isMessageValid) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      }, 5000);
    }
  };

  const getInputStatusClass = (fieldName: keyof typeof errors) => {
    if (!touched[fieldName]) return 'border-white/20 focus:border-white';
    if (errors[fieldName]) return 'border-red-500/50 focus:border-red-500';
    return 'border-green-500/50 focus:border-green-500';
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 
            id="contact-title"
            className="text-[11px] sm:text-xs text-white/50 uppercase tracking-[0.2em] font-semibold mb-6"
          >
            Get In Touch
          </h2>
          <p className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-6">
            Let's build something <span className="text-white/40 italic font-serif">exceptional.</span>
          </p>
          <p className="text-white/60 font-light max-w-lg mx-auto text-lg">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
          noValidate
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.1em] text-white/50 mb-3 font-semibold">Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting || submitSuccess}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full bg-transparent border-b px-0 py-4 text-lg text-foreground focus:outline-none transition-all placeholder:text-white/20 ${getInputStatusClass('name')} disabled:opacity-50`}
                  placeholder="John Doe"
                />
                {touched.name && !errors.name && (
                  <CheckCircle2 className="absolute right-0 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />
                )}
                {touched.name && errors.name && (
                  <AlertCircle className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500 w-4 h-4" />
                )}
              </div>
              <AnimatePresence mode="wait">
                {touched.name && errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    id="name-error"
                    className="text-red-400 text-xs mt-2"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.1em] text-white/50 mb-3 font-semibold">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting || submitSuccess}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full bg-transparent border-b px-0 py-4 text-lg text-foreground focus:outline-none transition-all placeholder:text-white/20 ${getInputStatusClass('email')} disabled:opacity-50`}
                  placeholder="contact@domain.com"
                />
                {touched.email && !errors.email && (
                  <CheckCircle2 className="absolute right-0 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />
                )}
                {touched.email && errors.email && (
                  <AlertCircle className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500 w-4 h-4" />
                )}
              </div>
              <AnimatePresence mode="wait">
                {touched.email && errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    id="email-error"
                    className="text-red-400 text-xs mt-2"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="relative mt-8">
            <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.1em] text-white/50 mb-3 font-semibold">Message</label>
            <div className="relative">
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting || submitSuccess}
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full bg-transparent border-b px-0 py-4 text-lg text-foreground focus:outline-none transition-all resize-none placeholder:text-white/20 ${getInputStatusClass('message')} disabled:opacity-50`}
                placeholder="Tell me about your vision..."
              />
              {touched.message && !errors.message && (
                <CheckCircle2 className="absolute right-0 top-6 text-green-500 w-4 h-4" />
              )}
              {touched.message && errors.message && (
                <AlertCircle className="absolute right-0 top-6 text-red-500 w-4 h-4" />
              )}
            </div>
            <AnimatePresence mode="wait">
              {touched.message && errors.message && (
                <motion.p 
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  id="message-error"
                  className="text-red-400 text-xs mt-2"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.div 
            className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
             <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
               <button 
                  type="submit" 
                  disabled={isSubmitting || submitSuccess}
                  className="w-full sm:w-auto bg-foreground text-background px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-white/5 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:scale-100 relative overflow-hidden group"
                >
                  <span className={`flex items-center gap-2 transition-transform duration-300 ${isSubmitting || submitSuccess ? '-translate-y-12' : 'translate-y-0'}`}>
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  
                  <span className={`absolute flex items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isSubmitting ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                   <svg className="animate-spin h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Sending...
                  </span>
  
                  <span className={`absolute flex items-center gap-2 text-green-700 bg-green-400 w-full h-full justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 rounded-full ${submitSuccess ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <CheckCircle2 size={18} /> Sent!
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', message: '' });
                    setTouched({ name: false, email: false, message: false });
                    setErrors({ name: '', email: '', message: '' });
                  }}
                  disabled={isSubmitting || submitSuccess}
                  className="w-full sm:w-auto bg-transparent border border-border-dim text-foreground px-8 py-4 rounded-full font-medium inline-flex items-center justify-center hover:bg-white/[0.02] transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:scale-100"
                >
                  Clear Form
                </button>
              </div>
              
              <AnimatePresence>
                {submitSuccess && (
                   <motion.p 
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0 }}
                     className="text-green-400 text-sm font-medium"
                   >
                     Thank you! Your message has been sent.
                   </motion.p>
                )}
              </AnimatePresence>
          </motion.div>
        </motion.form>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
