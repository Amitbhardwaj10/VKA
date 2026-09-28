import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Target,
  Eye,
  Diamond,
  Globe,
  Handshake,
  TrendingUp,
  Users,
  Compass,
  Shield,
  Play
} from 'lucide-react'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/footer/Footer'
import { SEO } from '../components/common/SEO'
import { SplitTextReveal } from '../components/animations/SplitTextReveal'
import { AnimatedCounter } from '../components/animations/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

export function AboutPage() {
  const scrollToStory = () => {
    const el = document.getElementById('story')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="site about-page-site">
      <SEO
        title="About Us | Strategic Advisory & Investment Platform | VKA Capital Bridge"
        description="Building value through strategic partnerships. VKA Capital Bridge connects businesses, investors and opportunities across global markets."
      />
      <div className="noise" />
      <Navbar />

      <main className="about-main">
        {/* ========================================================= */}
        {/* 1. HERO / ABOUT INTRO SECTION                            */}
        {/* ========================================================= */}
        <section className="about-hero-section">
          <div className="about-hero-bg">
            <img src="/images/about/about-hero-skyscrapers.jpg" alt="VKA Capital Bridge" />
          </div>
          <div className="about-hero-bg-overlay" />
          <div className="section about-hero-content">
            <motion.div
              className="about-hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="about-eyebrow">
                <span className="about-dash-line" />
                <span className="about-eyebrow-text">ABOUT US</span>
              </div>

              <h1 className="about-hero-headline">
                <SplitTextReveal>
                  Building value<br />
                  through<br />
                  <span className="about-accent-blue">strategic partnerships.</span>
                </SplitTextReveal>
              </h1>

              <p className="about-hero-lead">
                VKA Capital Bridge is a strategic advisory and investment platform, connecting
                businesses, investors and opportunities across global markets.
              </p>

              <div className="about-story-cta" onClick={scrollToStory} role="button" tabIndex={0}>
                <div className="about-play-circle">
                  <Play size={15} className="about-play-icon" />
                </div>
                <span className="about-story-text">Our story</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OUR STORY / COMPANY INTRODUCTION                     */}
        {/* ========================================================= */}
        <section id="story" className="about-story-section">
          <div className="section about-story-container">
            <div className="about-story-grid">
              {/* Left Column: Heading & Description */}
              <motion.div
                className="about-story-left"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">OUR STORY</span>
                </div>

                <h2 className="about-story-headline">
                  <SplitTextReveal>
                    More than a consultancy.<br />
                    <span className="about-accent-blue">A bridge to opportunity.</span>
                  </SplitTextReveal>
                </h2>

                <p className="about-story-desc">
                  VKA Capital Bridge was founded with a clear vision — to bridge the gap between
                  capital and opportunity. With deep market knowledge, a global network and a
                  commitment to excellence, we help clients navigate complex markets and achieve
                  sustainable growth.
                </p>
              </motion.div>

              {/* Right Column: Mission, Vision, Values */}
              <div className="about-story-columns">
                {/* 1. Our Mission */}
                <motion.div
                  className="about-pillar-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="pillar-icon-wrap">
                    <Target size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">Our Mission</h3>
                  <p className="pillar-text">
                    To create long-term value for our clients, partners and communities through
                    strategic advisory and innovative investment solutions.
                  </p>
                </motion.div>

                {/* 2. Our Vision */}
                <motion.div
                  className="about-pillar-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="pillar-icon-wrap">
                    <Eye size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">Our Vision</h3>
                  <p className="pillar-text">
                    To be a leading global platform, recognised for trust, expertise and impactful
                    partnerships across industries and regions.
                  </p>
                </motion.div>

                {/* 3. Our Values */}
                <motion.div
                  className="about-pillar-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="pillar-icon-wrap">
                    <Diamond size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">Our Values</h3>
                  <ul className="pillar-values-list">
                    <li>Integrity</li>
                    <li>Excellence</li>
                    <li>Collaboration</li>
                    <li>Innovation</li>
                    <li>Sustainable Growth</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CORE ADVISORY PRACTICE AREAS                              */}
        {/* ========================================================= */}
        <section className="about-roles-section">
          <div className="section about-roles-container">
            <div className="about-roles-header">
              <div className="about-eyebrow">
                <span className="about-dash-line" />
                <span className="about-eyebrow-text">ADVISORY PRACTICE</span>
              </div>
              <h2 className="about-story-headline">
                Strategic Consulting & Advisory Roles
              </h2>
            </div>

            <div className="about-roles-grid">
              <motion.div
                className="about-role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="role-card-number">01</div>
                <h3 className="role-card-title">Management Consultant to SMEs in the Infrastructure Sector</h3>
                <p className="role-card-areas">
                  <strong>Areas:</strong> Roads & Highways, Railways, Metro, Airport, Factory & Industrial Buildings, and Water Infrastructure.
                </p>
              </motion.div>

              <motion.div
                className="about-role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="role-card-number">02</div>
                <h3 className="role-card-title">Insurance Risk Management Advisor</h3>
              </motion.div>

              <motion.div
                className="about-role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="role-card-number">03</div>
                <h3 className="role-card-title">Dubai: Real Estate Investment Advisor & Channel Partner</h3>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. IMPACT / STATISTICS BAND (DEEP NAVY)                  */}
        {/* ========================================================= */}
        <section className="about-impact-section">
          <div className="about-impact-bg-pattern" />
          <div className="section about-impact-container">
            <div className="about-impact-grid">
              {/* Left Headline */}
              <motion.div
                className="about-impact-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow dark-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">OUR IMPACT</span>
                </div>

                <h2 className="about-impact-headline">
                  <SplitTextReveal>
                    Numbers that<br />
                    <span className="about-accent-blue">build confidence.</span>
                  </SplitTextReveal>
                </h2>
              </motion.div>

              {/* Right 4 Stats */}
              <div className="about-impact-stats-row">
                <div className="about-impact-stat-item">
                  <div className="stat-big-number">
                    <AnimatedCounter>35+</AnimatedCounter>
                  </div>
                  <div className="stat-label">Years of Experience</div>
                </div>

                <div className="about-impact-stat-item">
                  <div className="stat-big-number">
                    <AnimatedCounter>50+</AnimatedCounter>
                  </div>
                  <div className="stat-label">Strategic Partnerships</div>
                </div>

                <div className="about-impact-stat-item">
                  <div className="stat-big-number">
                    <AnimatedCounter>03</AnimatedCounter>
                  </div>
                  <div className="stat-label">Continents</div>
                </div>

                <div className="about-impact-stat-item">
                  <div className="stat-big-number stat-corridor-text">
                    IN <span className="stat-arrow">→</span> UAE
                  </div>
                  <div className="stat-label">Capital Bridge</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. WHAT SETS US APART                                    */}
        {/* ========================================================= */}
        <section className="about-apart-section">
          <div className="section about-apart-container">
            <div className="about-apart-grid">
              {/* Left Headline & CTA */}
              <motion.div
                className="about-apart-left"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">WHAT SETS US APART</span>
                </div>

                <h2 className="about-apart-headline">
                  <SplitTextReveal>
                    Expertise. Access.<br />
                    <span className="about-accent-blue">Results.</span>
                  </SplitTextReveal>
                </h2>

                <p className="about-apart-desc">
                  We combine global insight with local expertise to deliver customised solutions.
                  Our approach is built on trust, transparency and a deep understanding of market
                  dynamics — ensuring lasting value for our clients and partners.
                </p>

                <Link to="/services" className="about-dark-pill-btn">
                  Our Services <ArrowUpRight size={16} />
                </Link>
              </motion.div>

              {/* Right 4 Columns */}
              <div className="about-apart-columns">
                {/* 1. Global Network */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="feature-icon-wrap">
                    <Globe size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Global Network</h4>
                  <p className="feature-desc">
                    Access to international markets, partners and opportunities.
                  </p>
                </motion.div>

                {/* 2. Trusted Partnerships */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="feature-icon-wrap">
                    <Handshake size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Trusted Partnerships</h4>
                  <p className="feature-desc">
                    Strong relationships with leading institutions, investors and industry experts.
                  </p>
                </motion.div>

                {/* 3. Proven Track Record */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="feature-icon-wrap">
                    <TrendingUp size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Proven Track Record</h4>
                  <p className="feature-desc">
                    A history of successful transactions and sustainable growth.
                  </p>
                </motion.div>

                {/* 4. Client-Centric Approach */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="feature-icon-wrap">
                    <Users size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Client-Centric Approach</h4>
                  <p className="feature-desc">
                    Tailored solutions for long-term success and value creation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>



        {/* ========================================================= */}
        {/* 6. FINAL CTA / GLOBAL AMBITIONS (PANORAMIC DUBAI)        */}
        {/* ========================================================= */}
        <section className="about-cta-section">
          <div
            className="about-cta-bg"
            style={{ backgroundImage: `url('/images/about/dubai-canal-skyline.jpg')` }}
          />
          <div className="about-cta-overlay" />

          <div className="section about-cta-container">
            <div className="about-cta-flex">
              <motion.div
                className="about-cta-copy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow dark-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">LET'S BUILD TOGETHER</span>
                </div>

                <h2 className="about-cta-headline">
                  <SplitTextReveal>
                    Your global ambitions.<br />
                    <span className="about-accent-blue">Our strategic support.</span>
                  </SplitTextReveal>
                </h2>

                <p className="about-cta-desc">
                  Partner with VKA Capital Bridge and unlock new opportunities across markets,
                  industries and borders.
                </p>
              </motion.div>

              <motion.div
                className="about-cta-btn-wrap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <a href="/#contact" className="about-cta-white-btn">
                  Start a conversation <ArrowUpRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
