import React, { useState, useContext, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Server, Target, Users, Rocket, Lock, Cog ,X,Folder, Award,  Sparkles , Download, User, ArrowRight, Code, Globe, Database, Mail, Phone, MapPin, Github, Linkedin, Facebook, Zap, MessageCircle, Sun, Moon, Package, Code2, Cloud, Laptop } from 'lucide-react';
import { ThemeContext, useTheme } from './Context/useTheme';


const colors = {
  primary: '#7B66FF',      
  secondary: '#00E0FF',    
  accent: '#FFD700',       
  dark: '#070A1A',         
  darkCard: '#151A30',     
  darkHover: '#202845',
  light: '#FAFAFA',        
  lightCard: '#FFFFFF',
  lightHover: '#F0F3F7'
};


function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: 'accueil' },
    { label: 'À propos', href: 'apropos' },
    { label: 'Compétences', href: 'compétences' },
    { label: 'Projets', href: 'projets' },
    { label: 'Expériences', href: 'expériences' },
    { label: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    setMobileOpen(false);

    setTimeout(() => {
      if (element) {
        element.scrollIntoView();
      }
    }, 300);
  };

  const headerBg = theme === 'dark'
    ? 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 31, 58, 0.9) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 247, 250, 0.9) 100%)';

  return (
    <motion.header
      style={{
        background: headerBg,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme === 'dark' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(0, 217, 255, 0.2)'}`,
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer'
        }}
          whileHover={{ scale: 1.05 }}
        >
          <Zap size={28} style={{ color: colors.primary }} />
          VANÔ
        </motion.div>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }} className="desktop-nav">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.href == "À propos" ? "apropos" : item.href.toLowerCase()}`}
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: theme === 'dark' ? '#cbd5e1' : '#64748b',
                textDecoration: 'none',
                cursor: 'pointer',
                position: 'relative'
              }}
              whileHover={{ color: colors.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme === 'dark' ? '#cbd5e1' : '#64748b';
              }}
            >
              {item.label}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  height: '2px',
                  background: colors.primary,
                  width: 0
                }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <motion.button
            onClick={toggleTheme}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              background: theme === 'dark' ? colors.darkCard : colors.lightHover,
              border: `1px solid ${theme === 'dark' ? colors.primary : colors.primary}20`,
              cursor: 'pointer',
              fontSize: '18px',
              color: colors.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            whileHover={{ scale: 1.1, background: theme === 'dark' ? colors.darkHover : colors.lightCard }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? (
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sun size={20} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Moon size={20} />
              </motion.div>
            )}
          </motion.button>

          <button
            style={{
              display: 'none',
              padding: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: colors.primary
            }}
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: theme === 'dark' ? colors.darkCard : colors.lightCard,
              borderTop: `1px solid ${colors.primary}30`
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap: '12px' }}>
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: theme === 'dark' ? '#cbd5e1' : '#64748b',
                    textDecoration: 'none',
                    padding: '8px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
function Hero() {
  const { theme } = useTheme();
  const [hoveredStat, setHoveredStat] = useState(null);

  const bgGradient = theme === 'dark'
    ? `linear-gradient(135deg, ${colors.dark} 0%, #0f1a3a 50%, #0a0e27 100%)`
    : `linear-gradient(135deg, ${colors.light} 0%, #f0f9ff 50%, ${colors.light} 100%)`;

  const textPrimary = theme === 'dark' ? colors.light : colors.dark;
  const textSecondary = theme === 'dark' ? '#a8b5d1' : '#64748b';
  const cardBg = theme === 'dark' ? `${colors.primary}10` : `${colors.primary}15`;
  const cardBorder = theme === 'dark' ? `${colors.primary}30` : `${colors.primary}20`;
  const gridBg = theme === 'dark' ? `${colors.primary}05` : `${colors.primary}08`;

  return (
    <motion.section
      id="accueil"
      style={{
        background: bgGradient,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(0deg, transparent 24%, ${gridBg} 25%, ${gridBg} 26%, transparent 27%, transparent 74%, ${gridBg} 75%, ${gridBg} 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, ${gridBg} 25%, ${gridBg} 26%, transparent 27%, transparent 74%, ${gridBg} 75%, ${gridBg} 76%, transparent 77%, transparent)`,
        backgroundSize: '50px 50px',
        opacity: 0.3
      }} />

      {/* Floating Orbs */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
          borderRadius: '50%',
          top: '10%',
          left: '5%',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          background: `radial-gradient(circle, ${colors.secondary}25 0%, transparent 70%)`,
          borderRadius: '50%',
          bottom: '10%',
          right: '5%',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <div className="hero-container" style={{
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
              border: `1px solid ${colors.primary}40`,
              padding: '10px 18px',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: 600,
              color: colors.primary,
              marginBottom: '24px'
            }}
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles size={16} />
            </motion.div>
            Bienvenue sur mon portfolio
          </motion.div>

          {/* Main Heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '16px',
              color: textPrimary
            }}>
              Elias
            </h1>
            <motion.h2 style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: '800',
              marginBottom: '24px',
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Sylvano
            </motion.h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(16px, 3vw, 20px)',
              fontWeight: '600',
              color: colors.primary,
              marginBottom: '12px'
            }}
          >
            Full-Stack Developer & DevOps
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(13px, 2.5vw, 15px)',
              lineHeight: '1.6',
              color: textSecondary,
              marginBottom: '32px',
              maxWidth: '450px'
            }}
          >
            Créateur de solutions web modernes et d'infrastructures cloud scalables. Passionné par la performance, l'innovation et l'excellence technique.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                color: colors.dark,
                padding: '12px 24px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: `0 10px 30px ${colors.primary}40`,
                cursor: 'pointer'
              }}
              href="/assets/Elias_Sylvano_CV.pdf"
              download
            >
              <Download size={18} />
              Télécharger CV
            </motion.a>

            <motion.a
              href="#apropos"
              whileHover={{ scale: 1.05, y: -4, borderColor: colors.primary, boxShadow: `0 10px 30px ${colors.primary}20` }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 24px',
                borderRadius: '10px',
                border: `2px solid ${colors.primary}40`,
                color: colors.primary,
                background: 'transparent',
                fontWeight: '700',
                fontSize: 'clamp(13px, 2.5vw, 15px)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Découvrir plus
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={18} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Stats - Will move on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="stats-section"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '32px',
              borderTop: `1px solid ${colors.primary}20`,
              marginBottom: '0'
            }}
          >
            {[
              { icon: Folder, label: 'Projets', value: '10+' },
              { icon: Code2, label: 'Technologies', value: '15+' },
              { icon: Award, label: 'Expérience', value: '3 ans' }
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={i}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ y: -8, scale: 1.05 }}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <motion.div
                    style={{
                      marginBottom: '8px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                    animate={{ rotate: hoveredStat === i ? [0, 10, 0] : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <StatIcon size={22} color={colors.primary} />
                  </motion.div>
                  <motion.div
                    style={{
                      fontSize: 'clamp(16px, 3vw, 20px)',
                      fontWeight: '800',
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '4px'
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: textSecondary }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="profile-image-container"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateY(-40px)',
            order: 2
          }}
        >
          {/* Glowing Background */}
          <motion.div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(40px)',
              zIndex: -1
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Image Container */}
          <motion.div
            style={{
              position: 'relative',
              width: 'clamp(200px, 90vw, 280px)',
              height: 'clamp(200px, 90vw, 280px)',
              borderRadius: '20px',
              background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40)`,
              padding: '4px',
              boxShadow: `0 25px 50px ${colors.primary}30, inset 0 0 30px ${colors.primary}20`,
              overflow: 'hidden'
            }}
            animate={{ 
              boxShadow: [
                `0 25px 50px ${colors.primary}30, inset 0 0 30px ${colors.primary}20`,
                `0 25px 60px ${colors.primary}40, inset 0 0 40px ${colors.primary}30`,
                `0 25px 50px ${colors.primary}30, inset 0 0 30px ${colors.primary}20`
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.img
              src="/assets/Polish_20251108_133226388.jpg"
              alt="Elias Sylvano"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Overlay Gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${colors.primary}20 0%, transparent 50%, ${colors.secondary}20 100%)`,
              pointerEvents: 'none',
              borderRadius: '16px'
            }} />
          </motion.div>

          {/* Floating Code Icon */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '-40px',
              background: theme === 'dark' ? colors.dark : colors.light,
              border: `2px solid ${colors.primary}`,
              borderRadius: '16px',
              padding: '12px',
              boxShadow: `0 10px 30px ${colors.primary}30`
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            <Code2 size={24} color={colors.primary} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function About() {
  const { theme } = useTheme();

  const values = [
    { icon: Zap, title: 'Performance', desc: 'Code optimisé et infrastructures rapides' },
    { icon: Target, title: 'Qualité', desc: 'Excellence dans chaque détail' },
    { icon: Users, title: 'Collaboration', desc: 'Travail en équipe efficace' },
    { icon: Rocket, title: 'Innovation', desc: 'Toujours explorer le nouveau' },
    { icon: Lock, title: 'Sécurité', desc: 'Données et infrastrutures sécurisées' },
    { icon: Cog, title: 'Automatisation', desc: 'Processus optimisés et scalables' }
  ];

  return (
    <motion.section
      id="apropos"
      style={{
        background: theme === 'dark' ? colors.darkCard : colors.lightCard,
        padding: '80px 24px'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center',
            color: theme === 'dark' ? colors.light : colors.dark
          }}
        >
          À Propos de <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Moi</span>
        </motion.h2>

        {/* Profile Image - Only shown on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="about-profile-image"
            style={{
              display: 'none',
              marginTop: '48px',
              paddingTop: '48px',
              borderTop: `1px solid ${colors.primary}20`,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <motion.div
              style={{
                position: 'relative',
                width: 'clamp(200px, 90vw, 280px)',
                height: 'clamp(200px, 90vw, 280px)',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${colors.primary}40, ${colors.secondary}40)`,
                padding: '4px',
                boxShadow: `0 25px 50px ${colors.primary}30, inset 0 0 30px ${colors.primary}20`,
                overflow: 'hidden',
                margin: '0 auto'
              }}
              animate={{ 
                boxShadow: [
                  `0 25px 50px ${colors.primary}30, inset 0 0 30px ${colors.primary}20`,
                  `0 25px 60px ${colors.primary}40, inset 0 0 40px ${colors.primary}30`,
                  `0 25px 50px ${colors.primary}30, inset 0 0 30px ${colors.primary}20`
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.img
                src="/assets/Polish_20251108_133226388.jpg"
                alt="Elias Sylvano"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px'
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${colors.primary}20 0%, transparent 50%, ${colors.secondary}20 100%)`,
                pointerEvents: 'none',
                borderRadius: '16px'
              }} />
            </motion.div>

            {/* Floating Code Icon */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: theme === 'dark' ? colors.dark : colors.light,
                border: `2px solid ${colors.primary}`,
                borderRadius: '16px',
                padding: '12px',
                boxShadow: `0 10px 30px ${colors.primary}30`
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <Code2 size={24} color={colors.primary} />
            </motion.div>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            borderRadius: '16px',
            padding: '40px',
            background: theme === 'dark' ? colors.dark : colors.light,
            boxShadow: `0 20px 60px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
            border: `1px solid ${colors.primary}20`,
            lineHeight: '1.8'
          }}
        >
          <p style={{
            fontSize: '18px',
            marginBottom: '24px',
            color: theme === 'dark' ? '#cbd5e1' : '#475569'
          }}>
            Bienvenue ! Je suis Elias Sylvano, un développeur full-stack et DevOps passionné basé à Madagascar. Mon expertise couvre l'ensemble du cycle de développement, de la conception et réalisation de solutions web modernes jusqu'au déploiement et à la gestion d'infrastructures cloud scalables.
          </p>

          <p style={{
            fontSize: '18px',
            marginBottom: '24px',
            color: theme === 'dark' ? '#cbd5e1' : '#475569'
          }}>
            En tant que développeur full-stack, je maîtrise les technologies front-end (React, Angular) et back-end (Laravel, NestJS, SpringBoot). En tant que DevOps, je suis compétent dans la containerisation (Docker), l'orchestration, l'intégration continue (CI/CD) et la gestion d'infrastructures cloud. Je suis particulièrement enthousiaste à l'idée de construire des pipelines robustes et de créer des expériences utilisateur remarquables.
          </p>

          <p style={{
            fontSize: '18px',
            marginBottom: '24px',
            color: theme === 'dark' ? '#cbd5e1' : '#475569'
          }}>
            Chaque projet est une opportunité d'apprendre quelque chose de nouveau et de repousser mes limites techniques. Je crois fermement que la collaboration, l'automatisation et l'apprentissage continu sont les clés du succès dans ce domaine en constante évolution.
          </p>

          {/* Section Valeurs */}
          <div style={{
            marginTop: '32px',
            paddingTop: '32px',
            borderTop: `1px solid ${colors.primary}20`
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: theme === 'dark' ? colors.light : colors.dark,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Cog size={24} color={colors.primary} />
              </motion.div>
              Mes Valeurs
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {values.map((value, i) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, borderColor: colors.primary, boxShadow: `0 10px 30px ${colors.primary}20` }}
                    style={{
                      padding: '16px',
                      borderRadius: '10px',
                      background: theme === 'dark' ? `${colors.primary}10` : `${colors.primary}15`,
                      border: `1px solid ${colors.primary}20`,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    <motion.div
                      style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <IconComponent size={28} color={colors.primary} />
                    </motion.div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: theme === 'dark' ? colors.light : colors.dark,
                      marginBottom: '4px'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: theme === 'dark' ? '#cbd5e1' : '#64748b'
                    }}>
                      {value.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Formations() {
  const { theme } = useTheme();

  const formations = [
    {
      id: 1,
      diplome: 'Licence 3 en Développement d\'Application Internet-Intranet (DA2I)',
      ecole: 'EMIT - École de Management et d\'Innovation Technologique à Fianarantsoa',
      annee: '2024-2025',
      status: 'Validée',
      description: 'Formation complète en développement web full-stack avec focus sur les technologies modernes.',
      icon: '🎓'
    },
    {
      id: 2,
      diplome: 'Licence 2 en Développement d\'Application Internet-Intranet (DA2I)',
      ecole: 'EMIT - École de Management et d\'Innovation Technologique à Fianarantsoa',
      annee: '2023-2024',
      status: 'Validée',
      description: 'Approfondissement des compétences en développement web et gestion de projets informatiques.',
      icon: '📚'
    },
    {
      id: 3,
      diplome: 'Licence 1 en Développement d\'Application Internet-Intranet (DA2I)',
      ecole: 'EMIT - École de Management et d\'Innovation Technologique à Fianarantsoa',
      annee: '2022-2023',
      status: 'Validée',
      description: 'Introduction aux fondamentaux du développement web et des langages de programmation.',
      icon: '📖'
    }
  ];

  return (
    <section
      id="formations"
      style={{
        background: theme === 'dark' ? colors.dark : colors.light,
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center',
            color: theme === 'dark' ? colors.light : colors.dark
          }}
        >
          Mes <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Formations</span>
        </motion.h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {formations.map((formation, i) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ x: 10 }}
              style={{
                padding: '32px',
                borderRadius: '14px',
                background: theme === 'dark' ? colors.darkCard : colors.lightCard,
                boxShadow: `0 10px 30px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
                border: `1px solid ${colors.primary}20`,
                borderLeft: `4px solid ${colors.primary}`,
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = `0 20px 50px ${colors.primary}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${colors.primary}20`;
                e.currentTarget.style.boxShadow = `0 10px 30px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`;
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '32px' }}>{formation.icon}</div>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: theme === 'dark' ? colors.light : colors.dark,
                      marginBottom: '4px'
                    }}>
                      {formation.diplome}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: colors.primary,
                      fontWeight: '600',
                      marginBottom: '4px'
                    }}>
                      {formation.ecole}
                    </p>
                  </div>
                </div>
                <div style={{
                  background: formation.status === 'En cours'
                    ? `linear-gradient(135deg, ${colors.secondary}, #ff8c42)`
                    : `linear-gradient(135deg, ${colors.accent}, #00e5b8)`,
                  color: colors.dark,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap'
                }}>
                  {formation.status}
                </div>
              </div>

              <p style={{
                fontSize: '14px',
                color: theme === 'dark' ? '#cbd5e1' : '#64748b',
                lineHeight: '1.6',
                marginBottom: '12px'
              }}>
                {formation.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: `1px solid ${colors.primary}20`
              }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: colors.primary
                }}>
                  📅 {formation.annee}
                </span>
                {/* <span style={{
                  fontSize: '13px',
                  color: theme === 'dark' ? '#cbd5e1' : '#64748b'
                }}>
                  {i === 0 ? 'Actuellement inscrit(e)' : 'Diplôme obtenu'}
                </span> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Skills() {
  const { theme } = useTheme();

  const skillCategories = [
    { name: 'Frontend', icon: Globe, skills: ['ReactJS', 'Next.js', 'Angular', 'Tailwind V4', 'CSS/HTML'] },
    { name: 'Backend', icon: Code, skills: ['Laravel', 'SpringBoot', 'NestJS', 'Flask'] },
    { name: 'Languages', icon: Code2, skills: ['JavaScript', 'Java', 'Python', 'C', 'PHP'] },
    { name: 'Database', icon: Database, skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'] },
    { name: 'DevOps', icon: Server, skills: ['Docker', 'Git/Github', 'Linux', 'CI/CD', 'Jenkins', 'Cloud'] }
  ];

  return (
    <section
      id="compétences"
      style={{
        background: theme === 'dark' ? colors.dark : colors.light,
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center',
            color: theme === 'dark' ? colors.light : colors.dark
          }}
        >
          Mes <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Compétences</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                style={{
                  padding: '28px',
                  borderRadius: '14px',
                  background: theme === 'dark' ? colors.darkCard : colors.lightCard,
                  cursor: 'pointer',
                  border: `1px solid ${colors.primary}20`,
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.background = theme === 'dark' ? colors.darkHover : colors.lightHover;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${colors.primary}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${colors.primary}20`;
                  e.currentTarget.style.background = theme === 'dark' ? colors.darkCard : colors.lightCard;
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Badge DevOps */}
                {cat.name === 'DevOps' && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
                    color: colors.dark,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700'
                  }}>
                    🚀 Spécialité
                  </div>
                )}

                <Icon style={{ marginBottom: '16px', color: colors.primary }} size={36} />
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: theme === 'dark' ? colors.light : colors.dark
                }}>
                  {cat.name}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {cat.skills.map((skill, j) => (
                    <li key={j} style={{
                      fontSize: '14px',
                      marginBottom: '8px',
                      color: theme === 'dark' ? '#cbd5e1' : '#64748b'
                    }}>
                      <span style={{ color: colors.accent }}>✓</span> {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { theme } = useTheme();

  const projects = [
     {
      name: 'VANÔ',
      desc: 'Portfolio moderne et dynamique mettant en valeur mon savoir-faire.',
      tech: ['React', 'Docker', 'Nginx'],
      link: 'https://github.com/Sylvano96/MonPortfolio'
    },
    {
      name: 'ExpenseTracker',
      desc: 'App web pour faire la gestion de dépense quotidienne avec authentification JWT.',
      tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/Sylvano96/Gestion_depense'
    },
    {
      name: 'Evo-Blog',
      desc: 'Platforme de blogs avec authentification et CRUD complet.',
      tech: ['Angular', 'SpringBoot', 'PostgreSQL'],
      link: 'https://github.com/Sylvano96/EvoBlog'
    },
    {
      name: 'SpeedService',
      desc: 'Site web qui propose des services numériques avec chat en temps réel et authentification.',
      tech: ['Laravel', 'JavaScript', 'MySQL'],
      link: 'https://github.com/Sylvano96/speedService'
    },
    {
      name: 'Gestion de Tâches',
      desc: 'Application web complète pour gérer les tâches quotidiennes.',
      tech: ['React', 'Laravel', 'MySQL'],
      link: 'https://github.com/Sylvano96/gestion-tache'
    },
    {
      name: 'Note Ai',
      desc: 'Application mobile de prise de notes avec assistant IA.',
      tech: ['Flutter', 'Flask', 'API Gemini'],
      link: 'https://github.com/Sylvano96/mobile-flutter'
    }
  ];

  return (
    <section
      id="projets"
      style={{
        background: theme === 'dark' ? colors.darkCard : colors.lightCard,
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center',
            color: theme === 'dark' ? colors.light : colors.dark
          }}
        >
          Quelques <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Projets</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -15 }}
              style={{
                padding: '28px',
                borderRadius: '14px',
                background: theme === 'dark' ? colors.dark : colors.light,
                boxShadow: `0 20px 50px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
                cursor: 'pointer',
                transition: 'all 0.3s',
                border: `1px solid ${colors.primary}20`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = `0 30px 70px ${colors.primary}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${colors.primary}20`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`;
              }}
            >
              <h3 style={{
                fontSize: '22px',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: theme === 'dark' ? colors.light : colors.dark
              }}>
                {project.name}
              </h3>

              <p style={{
                fontSize: '15px',
                marginBottom: '16px',
                color: theme === 'dark' ? '#cbd5e1' : '#64748b',
                lineHeight: '1.6'
              }}>
                {project.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{
                    fontSize: '12px',
                    background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.secondary}40 100%)`,
                    color: colors.primary,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: `1px solid ${colors.primary}60`
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: colors.primary,
                  fontWeight: '700',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.secondary;
                  e.currentTarget.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.primary;
                  e.currentTarget.style.gap = '8px';
                }}
              >
                Voir sur GitHub <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      id: 1,
      position: 'Développeur Web',
      company: 'DREN AMORON\'I MANIA',
      location: 'Ambositra',
      startDate: 'Juin 2024',
      endDate: 'Août 2024',
      description: 'J\'ai travaillé en tant que développeur web stagiaire au sein de la DREN. Mon projet principal a consisté à créer une application web complète d\'analyse d\'indicateurs d\'efficacité interne de la classe primaire sur la région Amoron\'i Mania.',
      skills: ['React.js', 'Node.js', 'Data Analysis'],
      icon: <Laptop/>
    },
    {
      id: 2,
      position: 'Développeur Full-Stack',
      company: 'Rapex Group',
      location: 'Talatamaty, Antananarivo',
      startDate: 'Juin 2025',
      endDate: 'Septembre 2025',
      description: 'Développement d\'une plateforme web complète de gestion d\'événements avec React.js, Nest.js et PostgreSQL. Conception et implémentation de l\'architecture three-tier avec API RESTful et communications temps réel via WebSocket. J\'ai eu la chance de collaborer avec un groupe de développeurs et désigné en tant que responsable du développement du module administrateur : tableau de bord avec statistiques, gestion des organisateurs et forfaits, système de notifications en temps réel, et messagerie intégrée avec Nodemailer. Déploiement en production sur serveur LWS.',
      skills: ['React.js', 'Nest.js', 'PostgreSQL', 'TypeScript', 'WebSocket', 'Socket.io', 'TypeORM', 'JWT', 'OAuth Google', 'Nodemailer', 'Git/Github', 'Figma', 'Agile SCRUM', 'RESTful API', 'LWS', 'Apache'],
      icon: <Cloud/>
    }
  ];

  return (
    <section
      id="expériences"
      style={{
        background: theme === 'dark' ? colors.dark : colors.light,
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 'clamp(32px, 6vw, 42px)',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center',
            color: theme === 'dark' ? colors.light : colors.dark
          }}
        >
          Mes <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Expériences</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              style={{
                borderRadius: '14px',
                padding: 'clamp(24px, 5vw, 40px)',
                background: theme === 'dark' ? colors.darkCard : colors.lightCard,
                boxShadow: `0 20px 60px ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
                border: `1px solid ${colors.primary}20`,
                borderLeft: `4px solid ${colors.primary}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Élément flottant en arrière-plan */}
              {/* <motion.div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
                  borderRadius: '50%',
                  zIndex: 0
                }}
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              /> */}

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <div style={{
                        fontSize: 'clamp(28px, 5vw, 32px)',
                        marginBottom: '8px'
                      }}>
                        {exp.icon}
                      </div>
                      <h3 style={{
                        fontSize: 'clamp(18px, 4vw, 24px)',
                        fontWeight: 'bold',
                        color: theme === 'dark' ? colors.light : colors.dark,
                        marginBottom: '4px'
                      }}>
                        {exp.position}
                      </h3>
                      <p style={{
                        fontSize: 'clamp(14px, 3vw, 16px)',
                        color: colors.primary,
                        fontWeight: '600'
                      }}>
                        {exp.company}
                      </p>
                    </div>
                    <div style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      color: colors.dark,
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontWeight: '700',
                      fontSize: '11px',
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                      minWidth: '120px'
                    }}>
                      <div>📅 {exp.startDate}</div>
                      <div style={{ fontSize: '9px', marginTop: '4px' }}>→ {exp.endDate}</div>
                    </div>
                  </div>
                </div>

                {/* Infos en tableau */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: `1px solid ${colors.primary}20`
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      color: colors.primary,
                      fontWeight: '600',
                      fontSize: '13px',
                      minWidth: '60px'
                    }}>
                      Lieu
                    </span>
                    <span style={{
                      color: theme === 'dark' ? '#cbd5e1' : '#475569',
                      fontSize: 'clamp(13px, 3vw, 14px)',
                      flex: 1
                    }}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p style={{
                  fontSize: 'clamp(13px, 3vw, 15px)',
                  lineHeight: '1.8',
                  color: theme === 'dark' ? '#cbd5e1' : '#475569',
                  marginBottom: '20px'
                }}>
                  {exp.description}
                </p>

                <div style={{
                  paddingTop: '20px',
                  borderTop: `1px solid ${colors.primary}20`
                }}>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    color: theme === 'dark' ? colors.accent : colors.primary
                  }}>
                    🛠️ Compétences utilisées :
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} style={{
                        fontSize: '11px',
                        background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                        color: colors.primary,
                        padding: '5px 12px',
                        borderRadius: '6px',
                        border: `1px solid ${colors.primary}40`,
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'eliasvano78@gmail.com', link: 'mailto:eliasvano78@gmail.com' },
    { icon: Phone, label: 'Téléphone', value: '+261 38 99 192 01', link: 'tel:+261389919201' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+261 38 50 282 34', link: 'https://wa.me/261385028234' },
    { icon: MapPin, label: 'Localisation', value: 'Ambodirano, Fianarantsoa, Madagascar', link: '#' },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Sylvano96', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/eliassylvano', label: 'LinkedIn' },
    { icon: Facebook, link: 'https://www.facebook.com/profile.php?id=100071403272939', label: 'Facebook' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      // Utilisez Formspree ou EmailJS pour envoyer l'email
      const response = await fetch('https://formspree.io/f/mwpoylpl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: theme === 'dark' ? colors.darkCard : colors.lightCard,
        padding: '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center',
            color: theme === 'dark' ? colors.light : colors.dark
          }}
        >
          Me <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Contacter</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '60px'
        }} className="contact-grid">
          {/* Infos de contact à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '32px',
              color: theme === 'dark' ? colors.light : colors.dark
            }}>
              Informations de Contact
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    style={{
                      padding: '20px',
                      borderRadius: '12px',
                      background: theme === 'dark' ? colors.dark : colors.light,
                      textDecoration: 'none',
                      border: `1px solid ${colors.primary}20`,
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.primary;
                      e.currentTarget.style.background = theme === 'dark' ? colors.darkHover : colors.lightHover;
                      e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${colors.primary}20`;
                      e.currentTarget.style.background = theme === 'dark' ? colors.dark : colors.light;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon style={{ color: colors.primary, flexShrink: 0 }} size={28} />
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: theme === 'dark' ? colors.light : colors.dark, marginBottom: '4px' }}>
                        {info.label}
                      </p>
                      <p style={{ fontSize: '14px', color: theme === 'dark' ? '#cbd5e1' : '#64748b' }}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Réseaux sociaux */}
            <div style={{ marginTop: '40px' }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: theme === 'dark' ? colors.light : colors.dark
              }}>
                Me suivre sur les réseaux
              </h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: colors.dark,
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: '600',
                        fontSize: '13px',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Icon size={18} />
                      {social.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Formulaire à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '32px',
              color: theme === 'dark' ? colors.light : colors.dark
            }}>
              Envoyez-moi un Message
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  background: `${colors.accent}20`,
                  border: `1px solid ${colors.accent}`,
                  color: colors.accent,
                  marginBottom: '20px',
                  fontWeight: '600'
                }}
              >
                ✓ Message envoyé avec succès ! 🎉
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {/* Nom */}
              <div>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: theme === 'dark' ? colors.light : colors.dark,
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${colors.primary}30`,
                    background: theme === 'dark' ? colors.darkCard : colors.light,
                    color: theme === 'dark' ? colors.light : colors.dark,
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.primary;
                    e.target.style.boxShadow = `0 0 20px ${colors.primary}30`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: theme === 'dark' ? colors.light : colors.dark,
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Adresse Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${colors.primary}30`,
                    background: theme === 'dark' ? colors.darkCard : colors.light,
                    color: theme === 'dark' ? colors.light : colors.dark,
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.primary;
                    e.target.style.boxShadow = `0 0 20px ${colors.primary}30`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Sujet */}
              <div>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: theme === 'dark' ? colors.light : colors.dark,
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet du message"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${colors.primary}30`,
                    background: theme === 'dark' ? colors.darkCard : colors.light,
                    color: theme === 'dark' ? colors.light : colors.dark,
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.primary;
                    e.target.style.boxShadow = `0 0 20px ${colors.primary}30`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: theme === 'dark' ? colors.light : colors.dark,
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message..."
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: `1px solid ${colors.primary}30`,
                    background: theme === 'dark' ? colors.darkCard : colors.light,
                    color: theme === 'dark' ? colors.light : colors.dark,
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.primary;
                    e.target.style.boxShadow = `0 0 20px ${colors.primary}30`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${colors.primary}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Bouton Envoyer */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '14px 32px',
                  borderRadius: '8px',
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.dark,
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '15px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  opacity: loading ? 0.7 : 1,
                  boxShadow: `0 10px 30px ${colors.primary}30`
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.boxShadow = `0 15px 40px ${colors.primary}50`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}30`;
                }}
              >
                {loading ? '⏳ Envoi en cours...' : '✉️ Envoyer le message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { theme } = useTheme();

  return (
    <motion.footer
      style={{
        background: theme === 'dark' ? colors.dark : colors.light,
        borderTop: `1px solid ${colors.primary}20`,
        padding: '40px 24px',
        textAlign: 'center'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p style={{
        fontSize: '14px',
        color: theme === 'dark' ? '#64748b' : '#94a3b8',
        fontWeight: '500'
      }}>
        © 2025 Elias Sylvano. Tous droits réservés.
      </p>
    </motion.footer>
  );
}


export default function App() {
  const { theme } = useTheme();

  return (
    <div style={{
      background: theme === 'dark' ? colors.dark : colors.light,
      color: theme === 'dark' ? colors.light : colors.dark,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      minHeight: '100vh',
      transition: 'background 0.5s, color 0.5s'
    }}>
      <Header />
      <Hero />
      <About />
      <Formations />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}