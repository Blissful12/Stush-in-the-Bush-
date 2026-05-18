/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Calendar, 
  Users, 
  Utensils, 
  Sun, 
  Droplets, 
  Recycle, 
  Sprout, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  Award, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

// --- Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <span className={`block text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${light ? 'text-cream/80' : 'text-terracotta'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl ${light ? 'text-cream' : 'text-forest'} leading-tight text-balance`}>
      {children}
    </h2>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'The Experience', href: '#experience' },
    { name: 'Our Story', href: '#farm' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-forest py-4 shadow-xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Leaf className={`w-8 h-8 ${isScrolled ? 'text-gold' : 'text-cream'}`} />
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            Stush <span className="text-gold font-normal italic">in the</span> Bush
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-cream/90 hover:text-gold transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reservations" 
            className="bg-terracotta hover:bg-terracotta/90 text-cream px-6 py-3 rounded-none text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-cream"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-forest z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-gold" />
                <span className="text-xl font-serif text-cream">Stush in the Bush</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-cream hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto">
              <a 
                href="#reservations" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-terracotta text-cream text-center py-5 uppercase tracking-widest font-bold"
              >
                Reserve Your Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [showStickyReserve, setShowStickyReserve] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyReserve(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Gradient & Animated Overlays */}
        <div className="absolute inset-0 bg-forest">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)]" />
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50 transition-transform duration-[20s] hover:scale-110"
            style={{ backgroundImage: 'linear-gradient(rgba(26,58,42,0.8), rgba(26,58,42,0.8)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920")' }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/30 px-4 py-2 mb-8 rounded-full">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                #49 North America's 50 Best Restaurants 2025
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl text-cream mb-8 leading-tight tracking-tight text-balance"
          >
            Dine Inside a <br />
            <span className="text-gold italic">Living Farm</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/80 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance"
          >
            Jamaica's most celebrated plant-based dining experience — where farm-to-table meets Ital consciousness in the hills of St. Ann.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#reservations" 
              className="group relative w-full sm:w-auto overflow-hidden bg-terracotta text-cream px-10 py-5 text-sm uppercase tracking-widest font-bold transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Reserve Your Table</span>
              <div className="absolute inset-0 bg-forest/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="#experience" 
              className="w-full sm:w-auto border border-cream/30 text-cream hover:bg-cream hover:text-forest px-10 py-5 text-sm uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
            >
              Explore the Experience <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/60"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </header>

      {/* 2. SOCIAL PROOF BAR */}
      <section className="bg-charcoal py-4 overflow-hidden border-y border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              <span className="text-cream/40 flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-medium italic">
                <Award className="w-5 h-5 text-gold" /> Nominated: North America's 50 Best Restaurants 2025
              </span>
              <span className="text-cream/40 flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-medium">
                <Leaf className="w-5 h-5 text-gold" /> Jamaica's First Plant-Based Fine Dining
              </span>
              <span className="text-cream/40 flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-medium italic">
                <Star className="w-5 h-5 text-gold" /> Multiple Jamaica Observer Table Talk Awards
              </span>
              <span className="text-cream/40 flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-medium">
                <Users className="w-5 h-5 text-gold" /> Guests from Across the Globe
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE EXPERIENCE SECTION */}
      <section id="experience" className="py-24 md:py-32 bg-cream text-charcoal overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Discover the Journey">
            Not Just a Meal. <br />An <span className="italic">Immersion</span>.
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            {[
              {
                icon: <Sprout className="w-10 h-10" />,
                title: 'The Farm Walk',
                text: 'Begin with a guided tour through ZionItes Farm with Christopher — barefoot optional. Discover medicinal herbs, sample fresh produce, and plant seeds for your next visit.'
              },
              {
                icon: <Utensils className="w-10 h-10" />,
                title: 'The Table',
                text: 'A 5-hour prix fixe journey through reinvented Jamaican flavours — plantain gnocchi, jackfruit tacos, roasted pumpkin hummus — all crafted from the garden surrounding you.'
              },
              {
                icon: <Sun className="w-10 h-10" />,
                title: 'The Philosophy',
                text: 'Ital principles. Zero-waste. Solar powered. Rainwater harvested. Fine dining and environmental consciousness, united in every bite.'
              }
            ].map((card, idx) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group p-8 border border-charcoal/5 hover:border-gold/30 transition-all duration-500 bg-white shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-forest/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <div className="text-terracotta mb-6 flex justify-center md:justify-start">{card.icon}</div>
                <h3 className="font-serif text-2xl mb-4 text-forest">{card.title}</h3>
                <p className="text-charcoal/70 leading-relaxed font-light">{card.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-20 md:mt-32 text-center"
          >
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-forest/40 italic leading-tight text-balance max-w-4xl mx-auto">
              "A five-hour immersion into sustainable luxury where simplicity meets sophistication."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. SIGNATURE DISHES SECTION */}
      <section className="py-24 md:py-32 bg-forest relative overflow-hidden">
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Seasonal Artistry" light>
            From the Garden to the Plate
          </SectionHeading>

          <div className="flex overflow-x-auto pb-12 gap-6 snap-x no-scrollbar">
            {[
              { name: "Plantain Gnocchi", desc: "Hand-rolled with callaloo pesto", color: "bg-[#c4633a]" },
              { name: "Jackfruit Tacos", desc: "Blow Fiyah house-made sauce", color: "bg-[#8b9138]" },
              { name: "Roasted Pumpkin Hummus", desc: "Caribbean-Middle Eastern fusion", color: "bg-[#e5a84b]" },
              { name: "Almond Ricotta", desc: "Handcrafted on-site daily", color: "bg-[#f5f0e8]" },
              { name: "Scotch Bonnet Condiment", desc: "Garden-fresh heat in every jar", color: "bg-[#d44026]" }
            ].map((dish, i) => (
              <motion.div 
                key={dish.name}
                className="shrink-0 w-[300px] md:w-[400px] snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-[4/5] relative mb-6 overflow-hidden group">
                  <div className={`absolute inset-0 ${dish.color} transition-transform duration-700 group-hover:scale-110 opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-white/20 font-serif text-8xl uppercase leading-none select-none text-center">
                        {dish.name.split(' ')[0]}
                     </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-cream mb-3 rounded-full">
                      🌿 100% Plant-Based
                    </span>
                    <h4 className="text-2xl md:text-3xl font-serif text-cream mb-2">{dish.name}</h4>
                    <p className="text-cream/60 text-sm font-light uppercase tracking-widest">{dish.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-cream/40 italic text-center md:text-left">
            * Menu changes with the seasons and what the land provides.
          </div>
        </div>
      </section>

      {/* 5. THE FARM SECTION */}
      <section id="farm" className="py-24 md:py-48 bg-cream flex flex-col items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-forest rounded-2xl rotate-3 scale-95" />
              <div className="absolute inset-0 border-2 border-forest/20 rounded-2xl -rotate-3" />
              <div 
                className="relative w-full h-full bg-cover bg-center rounded-xl shadow-2xl overflow-hidden"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1592417817098-8fd3d92c8bb4?q=80&w=1000")' }}
              >
                 <div className="absolute inset-0 bg-forest/20 mix-blend-overlay" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="block text-xs uppercase tracking-[0.3em] font-bold text-terracotta mb-4">
              ZionItes Farm — Free Hill, St. Ann
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-forest mb-8 leading-tight">
               Grown Here. Served Here. Always.
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8 leading-relaxed font-light font-serif">
              Our regenerative farm is the beating heart of Stush in the Bush. We practice the Ital way of life — 
              a vegan Rastafarian philosophy that respects all living beings and the soil that feeds us.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-12">
              From our solar-powered kitchens to our rainwater harvesting systems, every drop and every watt is measured. 
              We produce our own plant-based milks, artisanal condiments, and organic produce, ensuring that nothing goes to waste and 
              everything returns to the earth that gifted it to us.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-charcoal/10">
              {[
                { icon: <Sun className="w-6 h-6" />, label: "Solar Powered" },
                { icon: <Droplets className="w-6 h-6" />, label: "Rain Harvested" },
                { icon: <Recycle className="w-6 h-6" />, label: "Zero Waste" },
                { icon: <Leaf className="w-6 h-6" />, label: "Regenerative" }
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center mx-auto mb-3 text-forest">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-forest/70">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDERS SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="The Visionaries">
             The Hands Behind the Vision
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {[
              {
                name: 'Lisa Binns',
                role: 'Chef / On the Pass',
                bio: 'Pioneer of Caribbean plant-based fine dining. Her kitchen transforms garden provisions into edible artistry, blending bold Jamaican spices with refined techniques.',
                initials: 'LB'
              },
              {
                name: 'Christopher Binns',
                role: 'Farm Guide & Co-founder',
                bio: 'He walks you through the land barefoot, teaching the deep ancestral story of every plant before it reaches your plate. A bridge between the earth and the table.',
                initials: 'CB'
              }
            ].map((founder, i) => (
              <motion.div 
                key={founder.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[3/4] md:aspect-square mb-10 overflow-hidden relative">
                   <div className={`absolute inset-0 ${i === 0 ? 'bg-[#c4633a]/20' : 'bg-[#1a3a2a]/20'} group-hover:scale-105 transition-transform duration-1000`} />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[15rem] font-serif font-black text-forest/5 pointer-events-none select-none">
                        {founder.initials}
                      </span>
                   </div>
                   <div className="absolute bottom-8 left-8">
                     <h3 className="font-serif text-3xl md:text-4xl text-forest mb-1">{founder.name}</h3>
                     <span className="text-terracotta text-sm uppercase tracking-widest font-bold italic">{founder.role}</span>
                   </div>
                </div>
                <p className="text-xl text-charcoal/70 leading-relaxed font-light italic font-serif max-w-lg">
                  "{founder.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRESS & ACCOLADES SECTION */}
      <section className="py-24 md:py-48 bg-forest text-cream">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Acclaimed Globally" light>
            The World Is Talking
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                quote: "One of the most transformative dining experiences in the Caribbean.",
                source: "Food & Travel"
              },
              {
                quote: "Stush in the Bush makes you rethink everything you know about plant-based cuisine.",
                source: "Condé Nast Traveller"
              },
              {
                quote: "Jamaica's most exciting table — and the farm it sits on is the real star.",
                source: "The Guardian"
              }
            ].map((press, i) => (
              <motion.div 
                key={press.source}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-8 border-l border-gold/30"
              >
                <p className="text-2xl md:text-3xl font-serif mb-6 italic leading-relaxed text-balance">
                  "{press.quote}"
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-8 h-[1px] bg-gold" />
                   <span className="text-sm uppercase tracking-[0.2em] font-bold text-gold">{press.source}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-white/10 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
             <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter">North America's 50 Best</span>
             <span className="text-xl md:text-2xl font-serif italic">Condé Nast</span>
             <span className="text-xl md:text-2xl font-sans uppercase tracking-[0.3em] font-black">Food & Drink</span>
             <span className="text-xl md:text-2xl font-serif">Relais & Châteaux</span>
          </div>
        </div>
      </section>

      {/* 8. VISIT INFORMATION SECTION */}
      <section id="visit" className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="The Logistics">
            Plan Your Visit
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-charcoal/5 shadow-sm">
               <Calendar className="w-8 h-8 text-terracotta mb-6" />
               <h4 className="font-serif text-2xl text-forest mb-4">When We're Open</h4>
               <p className="text-charcoal/70 leading-relaxed mb-4">
                  We host our intimate farm dining experiences exclusively on:
               </p>
               <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center py-2 border-b border-charcoal/5">
                     <span className="font-bold">Friday</span>
                     <span className="text-terracotta">1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-charcoal/5">
                     <span className="font-bold">Sunday</span>
                     <span className="text-terracotta">1:00 PM</span>
                  </div>
               </div>
            </div>

            <div className="bg-white p-10 border border-charcoal/5 shadow-sm">
               <MapPin className="w-8 h-8 text-terracotta mb-6" />
               <h4 className="font-serif text-2xl text-forest mb-4">Where to Find Us</h4>
               <p className="text-charcoal/70 leading-relaxed mb-6">
                  111 Bamboo Way, Freehill,<br />St. Ann, Jamaica
               </p>
               <div className="aspect-[16/9] bg-forest/5 flex items-center justify-center rounded-lg overflow-hidden border border-forest/10 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Pseudo Map */}
                  <div className="text-center p-4">
                    <MapPin className="w-6 h-6 text-terracotta mx-auto mb-2 animate-bounce" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Free Hill Hills</span>
                  </div>
               </div>
            </div>

            <div className="bg-white p-10 border border-charcoal/5 shadow-sm">
               <Phone className="w-8 h-8 text-terracotta mb-6" />
               <h4 className="font-serif text-2xl text-forest mb-4">Get in Touch</h4>
               <div className="flex flex-col gap-6">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-forest/40 mb-1">Phone</span>
                    <a href="tel:+18765629760" className="text-lg hover:text-terracotta transition-colors font-bold">+1 876 562 9760</a>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-forest/40 mb-1">Email</span>
                    <a href="mailto:love@stushinthebush.com" className="text-lg hover:text-terracotta transition-colors font-bold whitespace-nowrap">love@stushinthebush.com</a>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-forest/40 mb-1">Social</span>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="p-2 bg-forest/5 rounded-full hover:bg-gold hover:text-forest transition-all"><Instagram className="w-5 h-5" /></a>
                      <a href="#" className="p-2 bg-forest/5 rounded-full hover:bg-gold hover:text-forest transition-all"><Facebook className="w-5 h-5" /></a>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-forest/5 border border-forest/10 text-center">
             <div className="flex items-center justify-center gap-3 text-forest mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-xs">Arrive Early</span>
             </div>
             <p className="text-charcoal/70 text-sm max-w-xl mx-auto">
               Reservations are essential. We are a small, intimate experience — seats fill quickly. 
               Please arrive 15 minutes before your scheduled tour.
             </p>
          </div>
        </div>
      </section>

      {/* 9. RESERVATIONS SECTION */}
      <section id="reservations" className="py-24 md:py-48 bg-cream relative">
        <div className="absolute inset-0 bg-terracotta translate-y-1/4 -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Form Info Side */}
            <div className="lg:w-1/3 bg-forest p-12 text-cream flex flex-col">
               <h3 className="font-serif text-4xl mb-6">Reserve Your Place</h3>
               <p className="text-cream/70 mb-12 font-light leading-relaxed">
                  Open Fridays & Sundays at 1PM. Our table is common, our food is local, and our vibe is pure Jamaica.
               </p>
               
               <div className="mt-auto space-y-6">
                 {[
                   { text: "No payment required to request", icon: <CheckCircle2 className="w-5 h-5 text-gold" /> },
                   { text: "Confirmation via email/WhatsApp", icon: <CheckCircle2 className="w-5 h-5 text-gold" /> },
                   { text: "Flexible rescheduling", icon: <CheckCircle2 className="w-5 h-5 text-gold" /> }
                 ].map(item => (
                   <div key={item.text} className="flex items-center gap-3 text-sm tracking-wide">
                     {item.icon} <span>{item.text}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Form Input Side */}
            <form className="lg:w-2/3 p-8 md:p-16 space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Full Name</label>
                    <input type="text" placeholder="Lisa Binns" className="w-full border-b border-charcoal/20 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Email Address</label>
                    <input type="email" placeholder="lisa@example.com" className="w-full border-b border-charcoal/20 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Phone Number</label>
                    <input type="tel" placeholder="+1 876..." className="w-full border-b border-charcoal/20 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Preferred Day</label>
                    <div className="flex gap-6 py-3">
                       <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="day" className="accent-terracotta" defaultChecked />
                          <span className="text-sm">Friday</span>
                       </label>
                       <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="day" className="accent-terracotta" />
                          <span className="text-sm">Sunday</span>
                       </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Party Size</label>
                    <select className="w-full border-b border-charcoal/20 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent appearance-none">
                       <option>2 Guests</option>
                       <option>3 Guests</option>
                       <option>4 Guests</option>
                       <option>5 Guests</option>
                       <option>6+ Guests (Large Party)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">How did you hear about us?</label>
                    <select className="w-full border-b border-charcoal/20 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent appearance-none">
                       <option>Social Media</option>
                       <option>Friend/Word of Mouth</option>
                       <option>50 Best List</option>
                       <option>Google Search</option>
                       <option>Other</option>
                    </select>
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40">Special Dietary Notes (Optional)</label>
                  <textarea rows={3} placeholder="Allergies, specific preferences..." className="w-full border-b border-charcoal/20 py-3 focus:outline-none focus:border-terracotta transition-colors bg-transparent resize-none" />
               </div>

               <button className="w-full bg-terracotta text-cream py-5 uppercase tracking-[0.2em] font-black text-sm hover:bg-forest transition-colors flex items-center justify-center gap-4 group">
                  Request My Reservation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </button>

               <p className="text-center text-charcoal/40 text-[10px] uppercase tracking-widest mt-6">
                 We'll confirm your reservation within 24 hours. For immediate assistance call +1 876 562 9760.
               </p>
            </form>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SECTION */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-2xl mx-auto">
             <SectionHeading subtitle="Stay Connected">
                Join the ZionItes Community
             </SectionHeading>
             <p className="text-charcoal/60 mb-10 leading-relaxed font-light text-balance italic">
               Be first to hear about seasonal menus, farm events, and special experiences from the heart of the Free Hill hills.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your world-traveler email" 
                  className="flex-1 border-b-2 border-forest/10 focus:border-forest py-4 px-4 bg-transparent focus:outline-none transition-colors text-lg" 
                />
                <button className="bg-forest text-cream px-10 py-4 uppercase tracking-widest font-bold text-sm whitespace-nowrap hover:bg-terracotta transition-colors">
                  Join Us
                </button>
             </div>
             <p className="mt-6 text-[10px] uppercase tracking-widest text-charcoal/30">
               No spam. Ever. Just real food and real stories from the farm.
             </p>
           </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-forest text-cream pt-24 pb-12 overflow-hidden relative">
        {/* Subtle background decoration */}
        <Leaf className="absolute -bottom-10 -left-10 w-64 h-64 text-cream/5 -rotate-12" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
             {/* Brand */}
             <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-8">
                   <Leaf className="w-8 h-8 text-gold" />
                   <span className="text-2xl font-serif font-bold">Stush <span className="text-gold italic font-normal">in the</span> Bush</span>
                </div>
                <p className="text-cream/50 leading-relaxed font-light mb-8 max-w-xs">
                  A plant-based paradise where farm-to-table meets Ital consciousness. Ranked #49 in North America's 50 Best Restaurants.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:text-gold transition-all"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:text-gold transition-all"><Facebook className="w-5 h-5" /></a>
                </div>
             </div>

             {/* Links */}
             <div>
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-8">Navigation</h5>
                <ul className="space-y-4">
                   {['Home', 'The Experience', 'Our Story', 'Reservations', 'Visit Us'].map(l => (
                     <li key={l}>
                       <a href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-cream/70 hover:text-white transition-colors tracking-widest text-xs uppercase">{l}</a>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Contact */}
             <div>
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-8">Contact</h5>
                <ul className="space-y-4 text-cream/70 text-sm leading-relaxed">
                   <li>111 Bamboo Way,<br />Freehill, St. Ann, Jamaica</li>
                   <li><a href="tel:+18765629760" className="hover:text-gold transition-colors font-bold">+1 876 562 9760</a></li>
                   <li><a href="mailto:love@stushinthebush.com" className="hover:text-gold transition-colors font-bold">love@stushinthebush.com</a></li>
                   <li>Open Fri & Sun: 1:00 PM — Close</li>
                </ul>
             </div>

             {/* Newsletter/Small */}
             <div>
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-black text-gold mb-8">Roots</h5>
                <p className="text-xs text-cream/40 leading-[1.8] italic">
                   "The farm is in the bush, but the service is stush. We believe in the healing power of the land and the joy of shared communion."
                </p>
             </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-cream/40">
             <span>© 2025 STUSH IN THE BUSH · FREE HILL, ST. ANN, JAMAICA</span>
             <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-gold fill-gold" />
                <span>#49 North America's 50 Best Restaurants</span>
             </div>
          </div>
        </div>
      </footer>

      {/* STICKY FLOATING RESERVE BUTTON (Appears on scroll) */}
      <AnimatePresence>
        {showStickyReserve && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-[40] sm:bottom-12 sm:right-12"
          >
            <a 
              href="#reservations" 
              className="flex items-center gap-3 bg-terracotta hover:bg-forest text-cream px-8 py-5 rounded-none shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group font-bold tracking-widest text-xs uppercase"
            >
              Reserve Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
