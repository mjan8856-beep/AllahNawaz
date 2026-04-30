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
    <section id="contact" aria-labelledby="contact-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-white/5 relative overflow-hidden flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Contact Info Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 space-y-12"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5">
               <div className="w-1 h-1 rounded-full bg-accent" />
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tighter leading-[1.1]">
              Let's work <br/><span className="text-white/40 italic font-serif">together.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-2 block">Email</span>
              <a href="mailto:allahnawazmalik175@gmail.com" className="text-xl font-medium text-white group-hover:text-accent transition-colors">allahnawazmalik175@gmail.com</a>
            </div>
            <div className="group cursor-pointer">
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-2 block">Socials</span>
              <div className="flex gap-4">
                {['LinkedIn', 'Behance', 'Twitter'].map((link) => (
                  <a key={link} href="#" className="text-sm font-medium text-white/40 hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-mono tracking-widest text-white/40">AVAILABILITY: Q3 2026</span>
             </div>
             <p className="text-sm text-white/30 leading-relaxed font-light">I'm currently available for freelance projects and full-time opportunities. Drop me a line!</p>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 bg-white/[0.01] border border-white/5 p-10 sm:p-16 rounded-[3rem]"
        >
          <form onSubmit={handleSubmit} className="space-y-10" noValidate>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-4">Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter full name"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                  />
                  {touched.name && errors.name && <p className="text-[10px] text-red-400 mt-2 ml-4 font-mono uppercase">{errors.name}</p>}
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-4">Email Address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@organization.com"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                  />
                  {touched.email && errors.email && <p className="text-[10px] text-red-400 mt-2 ml-4 font-mono uppercase">{errors.email}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 ml-4">How can I help you?</label>
              <div className="relative">
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.03] border border-white/5 rounded-[2rem] px-6 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all resize-none"
                />
                {touched.message && errors.message && <p className="text-[10px] text-red-400 mt-2 ml-4 font-mono uppercase">{errors.message}</p>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting || submitSuccess}
                className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-accent hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : submitSuccess ? 'Message Sent' : 'Send Message'}
              </button>
              
              <div className="flex items-center gap-4 text-white/20">
                 <div className="w-12 h-px bg-white/5" />
                 <span className="text-[9px] font-mono tracking-widest">SECURE SUBMISSION</span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
