import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import Hls from "hls.js";
import { Droplet, Instagram, Linkedin, Twitter, Bell, Target, BarChart3, Settings2, Menu, X } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import WaveDivider from "@/components/WaveDivider";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

/* ─── Navbar ─── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-28 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Droplet className="w-6 h-6 md:w-7 md:h-7 text-foreground/80" />
          <span className="text-foreground font-bold text-base md:text-lg">Drink More</span>
        </div>
        <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {["Home", "How It Works", "Features", "Download"].map((l, i) => (
            <span key={l}>
              {i > 0 && <span className="mx-2">•</span>}
              <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:text-foreground transition-colors">{l}</a>
            </span>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2">
          {[Instagram, Twitter, Linkedin].map((Icon, i) => (
            <button key={i} className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors">
              <Icon size={16} />
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden mt-4 liquid-glass rounded-2xl p-6 flex flex-col gap-4">
          {["Home", "How It Works", "Features", "Download"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMenuOpen(false)} className="text-foreground/80 hover:text-foreground transition-colors text-sm">{l}</a>
          ))}
          <div className="flex gap-3 pt-2">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <button key={i} className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-foreground/70">
                <Icon size={14} />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

/* ─── Hero ─── */
const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
      <source src="https://videos.pexels.com/video-files/2499611/2499611-hd_1920_1080_30fps.mp4" type="video/mp4" />
    </video>
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[1]" />
    <div className="absolute inset-0 bg-background/40 z-[1]" />

    <div className="relative z-10 text-center px-6 pt-28 md:pt-32 max-w-4xl mx-auto">
      <motion.div {...fadeUp(0)} className="flex items-center justify-center mb-8">
        <div className="flex -space-x-2">
          {[avatar1, avatar2, avatar3].map((src, i) => (
            <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-background object-cover" width={32} height={32} />
          ))}
        </div>
        <span className="ml-3 text-sm text-muted-foreground">12,000+ people staying hydrated</span>
      </motion.div>

      <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-1.5px] md:tracking-[-2px] mb-5 md:mb-6">
        Stay Hydrated, Stay <span className="font-serif italic font-normal">Alive</span>
      </motion.h1>

      <motion.p {...fadeUp(0.2)} className="text-base md:text-lg mb-8 md:mb-10 px-2" style={{ color: "hsl(var(--hero-subtitle))" }}>
        Smart reminders that help you build the habit of drinking enough water every day.
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="liquid-glass rounded-full p-1.5 md:p-2 max-w-lg mx-auto flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent border-none outline-none px-3 md:px-4 py-2 text-foreground placeholder:text-muted-foreground text-sm min-w-0"
        />
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-foreground text-background rounded-full px-5 md:px-8 py-2.5 md:py-3 text-xs md:text-sm font-semibold whitespace-nowrap"
        >
          JOIN WAITLIST
        </motion.button>
      </motion.div>
    </div>
  </section>
);

/* ─── Stats ─── */
const stats = [
  { icon: Droplet, value: "60%", desc: "of your body is water" },
  { icon: Target, value: "2%", desc: "dehydration hurts focus" },
  { icon: BarChart3, value: "50%", desc: "of people drink too little" },
];

const StatsSection = () => (
  <section id="how-it-works" className="px-5 md:px-28 pt-32 md:pt-64 pb-6 md:pb-9">
    <motion.h2 {...fadeUp(0)} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-1px] md:tracking-[-2px] text-center mb-6">
      Your body runs on water.<br />Are you giving it <span className="font-serif italic font-normal">enough</span>?
    </motion.h2>
    <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-24">
      Most people don't realize how dehydrated they are — until it starts affecting their health, energy, and focus.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-4xl mx-auto">
      {stats.map((s, i) => (
        <motion.div key={i} {...fadeUp(0.1 * i)} className="text-center">
          <div className="w-16 h-16 rounded-2xl liquid-glass flex items-center justify-center mx-auto mb-6">
            <s.icon size={28} className="text-foreground/70" />
          </div>
          <p className="text-4xl font-semibold mb-2">{s.value}</p>
          <p className="text-muted-foreground text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-sm text-center">
      Your body is asking for water. Are you listening?
    </motion.p>
  </section>
);

/* ─── Mission (scroll word reveal) ─── */
const WordReveal = ({ text, highlight, className }: { text: string; highlight: string[]; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} isHighlight={highlight.includes(word.replace(/[^a-zA-Z]/g, ""))} />;
      })}
    </div>
  );
};

const Word = ({ word, range, progress, isHighlight }: { word: string; range: [number, number]; progress: any; isHighlight: boolean }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.3em] ${isHighlight ? "text-foreground" : ""}`}
    >
      {word}
    </motion.span>
  );
};

const MissionSection = () => (
  <section className="px-5 md:px-28 pt-0 pb-20 md:pb-44">
    <motion.div {...fadeUp(0)} className="flex justify-center mb-16">
      <video
        autoPlay loop muted playsInline
        className="w-full max-w-[500px] aspect-square object-cover rounded-3xl"
        src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"
      />
    </motion.div>

    <div className="max-w-5xl mx-auto">
      <WordReveal
        className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px]"
        text="We believe hydration is the simplest upgrade to your health — a tiny habit with massive impact on your energy, focus, and well-being."
        highlight={["hydration", "simplest", "upgrade", "health"]}
      />
      <WordReveal
        className="text-xl md:text-2xl lg:text-3xl font-medium mt-10"
        text="Drink More makes it effortless with smart reminders, progress tracking, and gentle nudges throughout your day."
        highlight={["effortless", "smart", "reminders"]}
      />
    </div>
  </section>
);

/* ─── Features ─── */
const features = [
  { icon: Bell, title: "Smart Reminders", desc: "Personalized notifications based on your schedule, activity level, and local weather." },
  { icon: Target, title: "Daily Goals", desc: "Set and track your daily water intake goal with visual progress indicators." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Beautiful charts and streaks that keep you motivated day after day." },
  { icon: Settings2, title: "Personalized Plans", desc: "AI-powered hydration plans that adapt to your body weight, activity, and climate." },
];

const FeaturesSection = () => (
  <section id="features" className="px-5 md:px-28 py-20 md:py-44 border-t border-border/30">
    <motion.p {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">FEATURES</motion.p>
    <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-[-1px] mb-10 md:mb-16">
      The app for <span className="font-serif italic font-normal">effortless</span> hydration
    </motion.h2>

    <motion.div {...fadeUp(0.2)} className="mb-20">
      <video
        autoPlay loop muted playsInline
        className="w-full rounded-2xl aspect-[3/1] object-cover"
        src="https://videos.pexels.com/video-files/1918465/1918465-uhd_2560_1440_25fps.mp4"
      />
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {features.map((f, i) => (
        <motion.div key={i} {...fadeUp(0.1 * i)}>
          <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center mb-4">
            <f.icon size={20} className="text-foreground/70" />
          </div>
          <h3 className="font-semibold text-base mb-2">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ─── CTA ─── */
const CTASection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }
  }, []);

  return (
    <section id="download" className="relative px-5 md:px-28 py-20 md:py-44 border-t border-border/30 overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <div className="relative w-10 h-10 rounded-full border-2 border-foreground/60 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border border-foreground/60" />
          </div>
        </motion.div>

        <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-[-1px] mb-6">
          Start Drinking <span className="font-serif italic font-normal">More</span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg mb-10">
          Join thousands who've transformed their health with one simple habit. Your body will thank you.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 text-sm font-semibold"
          >
            Join the Waitlist
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-semibold text-foreground"
          >
            Download App
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Footer ─── */
const Footer = () => (
  <footer className="flex flex-col md:flex-row items-center justify-between py-8 md:py-12 px-5 md:px-28 text-muted-foreground text-xs md:text-sm">
    <p>© 2026 Drink More. All rights reserved.</p>
    <div className="flex gap-6 mt-4 md:mt-0">
      {["Privacy", "Terms", "Contact"].map((l) => (
        <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>
      ))}
    </div>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <Navbar />
    <Hero />
    <StatsSection />
    <MissionSection />
    <FeaturesSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
