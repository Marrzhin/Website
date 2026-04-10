import { useState, useEffect, useRef } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Menu, X, ArrowUpRight, Sparkles, Layers, Users, Target, Zap, Building, Globe, Hexagon, Triangle, Circle, Square, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#why-nuku" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass py-4 border-b border-[#142073]/5" data-testid="header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold text-[#142073] tracking-tight" data-testid="logo">
            Nuku Creative
          </a>
          
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[#5A6494] hover:text-[#142073] transition-colors duration-300 link-hover text-sm font-medium"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a 
            href="#contact"
            className="hidden md:flex btn-primary text-sm"
            data-testid="header-cta"
          >
            Start a Project
          </a>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="mobile-menu-button"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-[#142073]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" data-testid="mobile-menu">
          <button 
            className="absolute top-6 right-6 p-2"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="mobile-menu-close"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-[#142073]" />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-[#142073] hover:text-[#C3FF34] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="btn-primary mt-4"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="mobile-header-cta"
          >
            Start a Project
          </a>
        </div>
      )}
    </>
  );
};

// Hero Slider Images
const heroSliderImages = [
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    alt: "Abstract gradient art"
  },
  {
    url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80",
    alt: "Creative design workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1200&q=80",
    alt: "Digital abstract"
  },
  {
    url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
    alt: "Tech innovation"
  }
];

// Hero Section
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Pause auto-rotation briefly after manual navigation
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % heroSliderImages.length;
    goToSlide(next);
  };
  
  const prevSlide = () => {
    const prev = (currentSlide - 1 + heroSliderImages.length) % heroSliderImages.length;
    goToSlide(prev);
  };

  return (
    <section className="hero-section" data-testid="hero-section">
      {/* Edge Gradient Blurs - Blue-Green */}
      <div className="edge-gradient edge-gradient-top-left" />
      <div className="edge-gradient edge-gradient-top-right" />
      <div className="edge-gradient edge-gradient-bottom-left" />
      <div className="edge-gradient edge-gradient-bottom-right" />
      
      {/* Neon Orbs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#C3FF34]/20 blur-[120px] -z-10 neon-orb" />
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full bg-[#C3FF34]/15 blur-[100px] -z-10 neon-orb-delayed" />
      
      <motion.div 
        className="max-w-6xl mx-auto w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <motion.p 
              className="section-title mb-6"
              variants={fadeInUp}
              data-testid="hero-label"
            >
              Creative Tech Agency
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#142073] tracking-tighter leading-[0.95] mb-8"
              variants={fadeInUp}
              data-testid="hero-headline"
            >
              We build <span className="heading-emphasis text-[#C3FF34]">creative systems</span> for{" "}
              <span className="heading-emphasis text-[#C3FF34]">modern</span> brands.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-[#5A6494] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              variants={fadeInUp}
              data-testid="hero-subheadline"
            >
              Nuku Creative is a creative tech agency combining design, strategy, and technology to craft impactful digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              variants={fadeInUp}
            >
              <a href="#portfolio" className="btn-primary flex items-center gap-2" data-testid="hero-cta-portfolio">
                View Portfolio
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-outline" data-testid="hero-cta-project">
                Start a Project
              </a>
            </motion.div>
          </div>

          {/* Right: Image Slider */}
          <motion.div 
            className="relative"
            variants={fadeInUp}
          >
            <div className="hero-slider" data-testid="hero-slider">
              <div className="hero-slider-container">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={heroSliderImages[currentSlide].url}
                    alt={heroSliderImages[currentSlide].alt}
                    className="hero-slider-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                
                {/* Slider Controls */}
                <div className="hero-slider-controls">
                  <button 
                    onClick={prevSlide} 
                    className="hero-slider-btn"
                    data-testid="hero-slider-prev"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="hero-slider-dots">
                    {heroSliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`hero-slider-dot ${currentSlide === index ? 'active' : ''}`}
                        data-testid={`hero-slider-dot-${index}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextSlide} 
                    className="hero-slider-btn"
                    data-testid="hero-slider-next"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Decorative glow behind slider */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#C3FF34]/40 rounded-full blur-[80px] -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#142073]/20 rounded-full blur-[60px] -z-10" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Why Nuku Section
const WhyNukuSection = () => {
  const points = [
    {
      icon: Sparkles,
      title: "Creative Meets Technology",
      description: "We blend design thinking with technical execution to create solutions that are not only beautiful, but functional."
    },
    {
      icon: Layers,
      title: "Tailored, Not Template",
      description: "Every project is built from the ground up — aligned with your goals, not based on generic frameworks."
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "We work closely with you, ensuring transparency, clarity, and alignment at every stage."
    },
    {
      icon: Target,
      title: "Built for Impact",
      description: "Our focus is not just output, but outcome — helping your brand move forward with purpose."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden" id="why-nuku" data-testid="why-nuku-section">
      {/* Decorative blur gradient accent - blue/teal grainy blob */}
      <div className="accent-blob accent-blob-left" />
      <div className="accent-blob accent-blob-right" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p className="section-title" variants={fadeInUp}>Our Approach</motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#142073] tracking-tighter mb-6"
            variants={fadeInUp}
            data-testid="why-nuku-title"
          >
            Why Nuku <span className="heading-emphasis text-[#C3FF34]">Creative</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#5A6494] max-w-2xl mx-auto"
            variants={fadeInUp}
            data-testid="why-nuku-intro"
          >
            We don't just design. We build systems that help brands grow, adapt, and stand out.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {points.map((point, index) => (
            <motion.div 
              key={index}
              className="bento-card"
              variants={fadeInUp}
              data-testid={`why-nuku-point-${index + 1}`}
            >
              <point.icon className="w-8 h-8 text-[#142073] mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-[#142073] mb-4">{point.title}</h3>
              <p className="text-[#5A6494] leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Client Logos Section
const ClientLogosSection = () => {
  const clients = [
    { name: "TechFlow", icon: Zap },
    { name: "BuildCorp", icon: Building },
    { name: "GlobalNet", icon: Globe },
    { name: "HexaSoft", icon: Hexagon },
    { name: "TriForce", icon: Triangle },
    { name: "CircleAI", icon: Circle },
    { name: "SquareUp", icon: Square },
    { name: "SparkLabs", icon: Sparkles }
  ];

  return (
    <section className="py-16 border-y border-[#142073]/5 bg-white/50" data-testid="clients-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.p 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Trusted Partners
        </motion.p>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#142073] tracking-tighter mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          data-testid="clients-title"
        >
          Trusted by <span className="heading-emphasis text-[#C3FF34]">Growing Brands</span>
        </motion.h2>
        <motion.p 
          className="text-[#5A6494] max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We collaborate with startups, organizations, and forward-thinking teams to bring ideas into reality.
        </motion.p>
      </div>

      <Marquee gradient={false} speed={40} pauseOnHover data-testid="clients-marquee">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="client-logo mx-12 flex items-center gap-3 group cursor-pointer"
            data-testid={`client-logo-${index + 1}`}
          >
            <client.icon className="w-8 h-8 text-[#142073] group-hover:text-[#C3FF34] transition-colors" />
            <span className="text-xl font-semibold text-[#142073]">{client.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  const projects = [
    {
      url: "https://images.unsplash.com/photo-1774997282921-f5f9709b1333?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwZGlnaXRhbCUyMGFic3RyYWN0JTIwM2R8ZW58MHx8fHwxNzc1NzQ5NTI0fDA&ixlib=rb-4.1.0&q=85",
      title: "Project Alpha",
      category: "Brand Identity"
    },
    {
      url: "https://images.unsplash.com/photo-1676116777245-1cc40079cd38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwbWluaW1hbGlzdCUyMGJyYW5kaW5nJTIwbW9ja3VwfGVufDB8fHx8MTc3NTc0OTUyM3ww&ixlib=rb-4.1.0&q=85",
      title: "Project Beta",
      category: "Digital Product"
    },
    {
      url: "https://images.unsplash.com/photo-1615182786727-2651cbf754eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwbWluaW1hbGlzdCUyMGJyYW5kaW5nJTIwbW9ja3VwfGVufDB8fHx8MTc3NTc0OTUyM3ww&ixlib=rb-4.1.0&q=85",
      title: "Project Gamma",
      category: "Web Experience"
    },
    {
      url: "https://images.unsplash.com/photo-1769882068890-1a57d4fc5a24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwZGlnaXRhbCUyMGFic3RyYWN0JTIwM2R8ZW58MHx8fHwxNzc1NzQ5NTI0fDA&ixlib=rb-4.1.0&q=85",
      title: "Project Delta",
      category: "Interactive Design"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12" id="portfolio" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p className="section-title" variants={fadeInUp}>Portfolio</motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#142073] tracking-tighter mb-6"
            variants={fadeInUp}
            data-testid="portfolio-title"
          >
            Selected <span className="heading-emphasis text-[#C3FF34]">Work</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#5A6494] max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            A collection of our recent explorations across branding, digital products, and interactive experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`portfolio-card h-[300px] md:h-[400px] ${index % 2 === 1 ? 'md:mt-16' : ''}`}
              variants={fadeInUp}
              data-testid={`portfolio-item-${index + 1}`}
            >
              <img 
                src={project.url} 
                alt={project.title}
                className="w-full h-full"
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <div className="text-center text-white">
                  <p className="text-sm uppercase tracking-widest mb-2 opacity-80">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <button className="btn-neon text-sm" data-testid={`portfolio-view-${index + 1}`}>
                    View Case
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#C3FF34] relative overflow-hidden about-section-bg" 
      id="about" 
      data-testid="about-section"
    >
      {/* Mouse spotlight effect */}
      <div 
        className="mouse-spotlight"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />
      
      {/* Secondary ambient blobs */}
      <div className="about-ambient-blob about-blob-1" />
      <div className="about-ambient-blob about-blob-2" />
      <div className="about-ambient-blob about-blob-3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <p className="section-title text-[#142073]/60">About Us</p>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#142073] tracking-tighter mb-8 leading-[1.1]"
              data-testid="about-title"
            >
              <span className="heading-emphasis text-[#142073]">About</span> Nuku Creative
            </h2>
            <div className="space-y-6 text-[#142073]/80 text-lg leading-relaxed" data-testid="about-content">
              <p>
                Nuku Creative is a creative tech agency driven by curiosity, experimentation, and purpose.
              </p>
              <p>
                We believe that great ideas deserve thoughtful execution — where design, technology, and strategy work as one system.
              </p>
              <p>
                Our mission is to help brands rethink how they communicate, build, and grow in the digital era.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={fadeInUp}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHN0dWRpbyUyMGJyaWdodHxlbnwwfHx8fDE3NzU3NDk1Mzd8MA&ixlib=rb-4.1.0&q=85"
                alt="Nuku Creative Studio"
                className="w-full h-auto object-cover"
                loading="lazy"
                data-testid="about-image"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C3FF34]/30 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA & Contact Section
const CTASection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.brief) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 md:py-24 px-6 md:px-12" id="contact" data-testid="cta-section">
      <div className="cta-section max-w-7xl mx-auto p-8 md:p-16 lg:p-24 text-center relative z-10">
        {/* Noise overlay for CTA section */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[3rem]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        
        <motion.div 
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p 
            className="text-white/60 text-sm uppercase tracking-widest mb-6"
            variants={fadeInUp}
          >
            Get Started
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6"
            variants={fadeInUp}
            data-testid="cta-headline"
          >
            Let's build something <span className="heading-emphasis">impactful</span>.
          </motion.h2>
          
          <motion.p 
            className="text-white/70 text-lg max-w-xl mx-auto mb-12"
            variants={fadeInUp}
            data-testid="cta-subtext"
          >
            Tell us about your ideas, and we'll help you turn them into a powerful digital experience.
          </motion.p>

          {!submitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
              variants={fadeInUp}
              data-testid="contact-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="cta-input"
                  required
                  data-testid="contact-input-name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="cta-input"
                  required
                  data-testid="contact-input-email"
                />
              </div>
              <textarea
                name="brief"
                placeholder="Tell us about your project..."
                value={formData.brief}
                onChange={handleChange}
                rows={4}
                className="cta-input resize-none"
                required
                data-testid="contact-input-brief"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button type="submit" className="btn-neon" data-testid="contact-form-submit">
                  Start a Project
                </button>
                <a href="mailto:hello@nukucreative.com" className="text-white/70 hover:text-[#C3FF34] transition-colors" data-testid="contact-email-link">
                  or email us directly
                </a>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              data-testid="contact-success"
            >
              <div className="w-16 h-16 bg-[#C3FF34] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#142073]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-white/70 text-lg">We'll get back to you as soon as possible.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/nukucreative" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/nukucreative" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/nukucreative" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/nukucreative" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@nukucreative" }
  ];

  return (
    <footer className="bg-[#142073] text-white py-16 px-6 md:px-12" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <a href="#" className="text-2xl font-bold text-white tracking-tight mb-4 block" data-testid="footer-logo">
              Nuku Creative
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Creative systems for modern brands. We combine design, strategy, and technology to craft impactful digital experiences.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4" data-testid="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C3FF34] hover:text-[#142073] transition-all duration-300"
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-white/60 hover:text-[#C3FF34] transition-colors text-sm" data-testid="footer-link-work">Our Work</a></li>
              <li><a href="#about" className="text-white/60 hover:text-[#C3FF34] transition-colors text-sm" data-testid="footer-link-about">About Us</a></li>
              <li><a href="#why-nuku" className="text-white/60 hover:text-[#C3FF34] transition-colors text-sm" data-testid="footer-link-services">Services</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-[#C3FF34] transition-colors text-sm" data-testid="footer-link-contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C3FF34] mt-0.5 flex-shrink-0" />
                <a href="tel:082394707711" className="text-white/60 hover:text-[#C3FF34] transition-colors text-sm" data-testid="footer-phone">
                  082394707711
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C3FF34] mt-0.5 flex-shrink-0" />
                <a href="mailto:hai@nukucreative.com" className="text-white/60 hover:text-[#C3FF34] transition-colors text-sm" data-testid="footer-email">
                  hai@nukucreative.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C3FF34] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm" data-testid="footer-address">
                  Sengkang, Sulawesi Selatan, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-semibold mb-6">Find Us</h4>
            <div className="rounded-xl overflow-hidden h-40 bg-white/10" data-testid="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127169.32674776347!2d120.00095565!3d-4.1327725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95bb7083e7c2f3%3A0x9e46e5f53af0d7e8!2sSengkang%2C%20Tempe%2C%20Wajo%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1704067200000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nuku Creative Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm" data-testid="footer-copyright">
            © {new Date().getFullYear()} Nuku Creative. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-[#C3FF34] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-[#C3FF34] transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <>
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      <Header />
      <main>
        <HeroSection />
        <WhyNukuSection />
        <ClientLogosSection />
        <PortfolioSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
