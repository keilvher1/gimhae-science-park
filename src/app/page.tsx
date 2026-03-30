"use client";

import { useState } from "react";

/* âââââââââââââââââââââââ Navigation âââââââââââââââââââââââ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "ë¨ì§ìê°", href: "#info" },
    { label: "íµì¬ê²½ìë ¥", href: "#strengths" },
    { label: "ìì£¼íì¸", href: "#eligibility" },
    { label: "ìë´ì ì²­", href: "#contact" },
    { label: "íì¬ìê°", href: "#company" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ background: "var(--primary)" }}>S</div>
            <div>
              <div className="text-sm font-bold" style={{ color: "var(--primary)" }}>ê¹í´ì¬ì´ì¸ì¤</div>
              <div className="text-xs" style={{ color: "var(--text-gray)" }}>ì¼ë°ì°ìë¨ì§</div>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium hover:opacity-70 transition"
                style={{ color: "var(--text-dark)" }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold text-sm !py-2.5 !px-5">
              ìë´ì ì²­ â
            </a>
          </div>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <path d="M6 6l12 12M6 18L18 6" />
                : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: "var(--text-dark)", borderColor: "var(--border)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="btn-gold text-sm !py-2.5 w-full justify-center mt-3">
            ìë´ì ì²­ â
          </a>
        </div>
      )}
    </nav>
  );
}

/* âââââââââââââââââââââââ Hero Section âââââââââââââââââââââââ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder - dark industrial aesthetic */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, #0B2545 0%, #13406E 40%, #0B2545 100%)"
      }} />
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/30 rotate-45" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-white/20 rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white/10 -rotate-12" />
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
            <span className="text-sm font-medium" style={{ color: "var(--accent-light)" }}>
              ê¹í´ì íë¦¼ë©´ Â· 849,675ã¡ (ì½ 25.7ë§í)
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fadeInUp delay-100">
          ê¹í´ì¬ì´ì¸ì¤<br />
          <span style={{ color: "var(--accent)" }}>ì¼ë°ì°ìë¨ì§</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 animate-fadeInUp delay-200 leading-relaxed">
          ì í  ê¸°ë° ìì ì  ì§ë° Â· í©ë¦¬ì  ë¶ìê° Â· ì±ìì¤ê³µ ê¸°ë°<br />
          ë¶ì°í­Â·ê¹í´ê³µí­ ë¬¼ë¥ ì ê·¼ì± ì°ì
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
          <a href="#eligibility" className="btn-gold text-lg !py-4 !px-8">
            ìì£¼ ê°ë¥ì¬ë¶ íì¸íê¸°
          </a>
          <a href="#info" className="btn-outline text-lg !py-4 !px-8">
            ë¨ì§ ì ë³´ ë³´ê¸°
          </a>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-fadeInUp delay-400">
          {[
            { num: "262ë§ì~", label: "ì¶ì  ì¡°ì±ìê° (ã¡)" },
            { num: "75%", label: "ì·¨ëì¸ ê°ë©´" },
            { num: "1ë¶", label: "íë¦¼IC ê±°ë¦¬" },
            { num: "2027", label: "ìì£¼ ìì " },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--accent)" }}>{s.num}</div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" opacity="0.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  
_m;

/* âââââââââââââââââââââââ Info Section âââââââââââââââââââââââ */
function InfoSection() {
  return (
    <section id="info" className="py-20 lg:py-28" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>INDUSTRIAL COMPLEX INFO</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            ì°ìë¨ì§ ê¸°ë³¸ ì ë³´
          </h2>
          <p style={{ color: "var(--text-gray)" }} className="max-w-xl mx-auto">
            ê¹í´ì¬ì´ì¸ì¤ì¼ë°ì°ìë¨ì§ì íµì¬ ì ë³´ë¥¼ íëì íì¸íì¸ì
          </p>
        </div>

        {/* Location map placeholder + key info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="aspect-video flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #E8E8E8, #D0D0D0)" }}>
              <div className="text-center p-8">
                <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <path d="M21 10c0 7 9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                  ê²½ë¨ ê¹í´ì íë¦¼ë©´ ëªëë¦¬ ì°165-2ë²ì§ ì¼ì
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--text-light)" }}>
                  ìì¹ë ì´ë¯¸ì§ë¥¼ ì¶ê°í´ ì£¼ì¸ì
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: "var(--primary)" }}>ê´ì­êµíµ</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "ð", label: "íë¦¼IC", value: "1ë¶" },
                  { icon: "ð", label: "ì§ë¡IC", value: "5ë¶" },
                  { icon: "âï¸", label: "ê¹í´ê³µí­", value: "20ë¶" },
                  { icon: "ð¢", label: "ë¶ì°í­", value: "30ë¶" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-light)" }}>
                    <span>{t.icon}</span>
                    <div>
                      <div className="text-xs" style={{ color: "var(--text-gray)" }}>{t.label}</div>
                      <div className="text-sm font-bold" style={{ color: "var(--primary)" }}>{t.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ),
                title: "ë¨ì§ ê·ëª¨",
                desc: "849,675ã¡ (ì½ 25.7ë§í)",
                sub: "ì´ ì¬ìë¹ 2,760ìµì"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "ì£¼ì ì ì¹ìì¢",
                desc: "ì ì¡°ì, ì§ìì°ì, ì ë³´íµì ì°ì",
                sub: "4ì°¨ì°ì ì¤ì¬ ì²¨ë¨ì°ì ì ì¹"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                ),
                title: "ë¶ìê°ê²©",
                desc: "ì¶ì  ì¡°ì±ìê° ì½ 262ë§ì/ã¡",
                sub: "ë¶ì° íë¹ 400~500ë§ìë ëë¹ í©ë¦¬ì "
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z" />
                  </svg>
                ),
                title: "ì¸ì íí",
                desc: "ì·¨ëì¸Â·ì¬ì°ì¸ 75% ê°ë©´",
                sub: "ë²ì¸ì¸ ê°ë©´, í ì§ ë¶ìê° 80% ìµì"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 7v1a3 3 0 003 3h0a3 3 0 003-3V7m0 0V3H3v4" />
                  </svg>
                ),
                title: "ì±ìì¤ê³µ",
                desc: "HDCíëì°ìê°ë° ì±ìì¤ê³µ",
                sub: "ë¯¿ì ì ìë ìê³µ íí¸ë"
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-6 shadow-sm flex items-start gap-4"
                style={{ border: "1px solid var(--border)" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--bg-light)", color: "var(--primary)" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "var(--primary)" }}>{item.title}</h3>
                  <p className="text-sm font-medium" style={{ color: "var(--text-dark)" }}>{item.desc}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-gray)" }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  
_m;

/* âââââââââââââââââââââââ Strengths Section âââââââââââââââââââââââ */
function StrengthsSection() {
  const strengths = [
    {
      num: "01",
      title: "ì í  ê¸°ë°\nìì ì  ì§ë°",
      desc: "ìì ì  ê³µì¥ ê±´ì¶ íê²½ì ì ê³µíë ì í  ê¸°ë° ì¡°ì±ì¼ë¡ ì§ë° ì¹¨í ê±±ì ì´ ììµëë¤.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M9 21V8l-3 3M15 21V8l3 3M12 21V3" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "ë¶ì°ê¶ ëë¹\ní©ë¦¬ì  ë¶ìê°",
      desc: "ë¶ì° íë¹ 400~500ë§ìë ëë¹ ì¬ì´ì¸ì¤íí¬ë ì½ 200ë§ìëë¡ í©ë¦¬ì ì¸ ê°ê²©ìëë¤.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 1V22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "HDCíëì°ìê°ë°\nì±ìì¤ê³µ",
      desc: "ëíë¯¼êµ­ ëí ê±´ì¤ì¬ HDCíëì°ìê°ë°ì´ ì±ìì¤ê³µíì¬ ìì ì ì¸ ì¬ì ì¶ì§ì´ ê°ë¥í©ëë¤.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "ë¬¼ë¥ ì ê·¼ì±\nì°ì",
      desc: "ë¶ì°í­ê³¼ ê¹í´ê³µí­ ì ê·¼ì´ ì°ìíë©° íë¦¼IC 1ë¶, ì§ë¡IC 5ë¶ ê±°ë¦¬ì ìì¹í´ ììµëë¤.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  return (
    <section id="strengths" className="py-20 lg:py-28" style={{ background: "var(--primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>COMPETITIVE ADVANTAGES</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ìì³Ücìaê²½ìë ¤
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            ê¹í´ì¬ì´ì¸ì¤ì¼ë°ì¬ìë ë§æ ë°¨ì íê°ê²©
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <div key={i} className="card-hover rounded-2xl p-8 text-center group"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-xs font-bold mb-4 tracking-widest" style={{ color: "var(--accent)" }}>{s.num}</div>
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-colors"
                style={{ background: "rgba(212,168,67,0.1)", color: "var(--accent)" }}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 whitespace-pre-line leading-snug">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* âââââââââââââââââââââââ Eligibility Clck (UI only) âââââââââââââââââââââââ */
function EligibilitySection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      q: "ìì¢ ëë ìì°íì ì íí´ ì£¼ì¸ì",
      sub: "íµê³ë¶ë¥í¬í¸ C, Hì½ë ê¸°ì¤",
      options: ["ì ì¡°ì", "ì§ìì°ì", "ì ë³´íµì ì", "ê¸°í"],
    },
    {
      q: "íìí í ì§ì ë©´ì ì?",
      options: ["300í ì´í", "300~1,000í", "1,000~3,000í", "3,000í ì´ì"],
    },
    {
      q: "ìì ê±´ì¶ë©´ì ì?",
      options: ["ê³íìì", "300í ì´í", "300~700í", "700~1,500í", "1,500í ì´ì"],
    },
    {
      q: "ìì©ì±ì ì­ì  ì¬ì© ì¬ë¶",
      options: ["ì¬ì©", "ë¯¸ì¬ì©"],
    },
    {
      q: "íì ë°ì ì¬ë¶",
      options: ["ìì", "ìë", "ìì"],
    },
    {
      q: "í¹ì ìì§ ëë í¹ì ëê¸° ì í´ë¬¼ì§ ë°°ì¶ì¬ë¶",
      options: ["ìì", "ìì"],
    },
    {
      q: "ìíë¬¼ ì¬ì© ì¬ë¶",
      options: ["ìì", "ì í´ííë¬¼ì§ ììíê°"],
    },
    {
      q: "ìì£¼ ìì  ìê¸°",
      options: ["2026ë", "2023ë", "2028ë ì´í"],
    },
  ];

  const totalSteps = questions.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSelect = (val: string) => {
    setAnswers((prev) => ({ ...prev, [step]: val }));
  };

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const isCompleted = step === totalSteps - 1 && answers[step];

  return (
    <section id="eligibility" className="py-20 lg:py-28" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>ELIGIBILITY CHECK</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            ìì£¼ ê°ë¥ì¬ë¶ íì¸
          </h2>
          <p style={{ color: "var(--text-gray)" }}>
            ëª ê°ì§ ì§ë¬¸ì ëµíìë©´ ìì£¼ ê°ë¥ ì¬ë¶ë¥¼ ë°ë¡ íì¸íì¤ ì ììµëë¤
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          {/* Progress bar */}
          <div className="h-1.5 bg-gray-100">
            <div className="h-full transition-all duration-500 rounded-r"
              style={{ width: `${progress}%`, background: "var(--accent)" }} />
          </div>

          <div className="p-8 lg:p-12">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: "rgba(212,168,67,0.1)", color: "var(--accent)" }}>
                {step + 1} / {totalSteps}
              </span>
              <span className="text-xs" style={{ color: "var(--text-light)" }}>
                â» íµì¬ê¸°ë¥
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
              {questions[step].q}
            </h3>
            {"sub" in questions[step] && (
              <p className="text-sm mb-6" style={{ color: "var(--text-gray)" }}>
                {questions[step].sub}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  className="p-4 rounded-xl text-left text-sm font-medium transition-all"
                  style={{
                    background: answers[step] === opt ? "var(--primary)" : "var(--bg-light)",
                    color: answers[step] === opt ? "white" : "var(--text-dark)",
                    border: answers[step] === opt ? "2px solid var(--primary)" : "2px solid transparent",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrev}
                disabled={step === 0}
                className="text-sm font-medium px-4 py-2 rounded-lg transition disabled:opacity-30"
                style={{ color: "var(--text-gray)" }}
              >
                â ì´ì 
              </button>

              {isCompleted ? (
                <a href="#contact" className="btn-gold text-sm">
                  ìë´ ì ì²­íê¸° â
                </a>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!answers[step]}
                  className="btn-primary text-sm disabled:opacity-40"
                >
                  ë¤ì â
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "var(--text-light)" }}>
          * íë¨ ë¡ì§ì íì¬ ì¤ë¹ ì¤ìëë¤. ì íí ìì£¼ ê°ë¥ ì¬ë¶ë ì ë¬¸ ìë´ì íµí´ íì¸í´ ì£¼ì¸ì.
        </p>
      </div>
    </section>
  );
}

/* âââââââââââââââââââââââ Contact / Consultation Form âââââââââââââââââââââââ */
function ContactSection() {
  const [form, setForm] = useState({
    company: "", address: "", manager: "", phone: "", email: "",
    industry: "", area: "", moveDate: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to Neon DB via API
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>CONSULTATION</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            ìë´ ì ì²­
          </h2>
          <p style={{ color: "var(--text-gray)" }}>
            ê¸°ì ì ë³´ë¥¼ ë¨ê²¨ì£¼ìë©´ ì ë¬¸ ìë´ì¬ê° ë§ì¶¤ ë¶ì§ë¥¼ ì¶ì²í´ ëë¦½ëë¤
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-2xl" style={{ background: "var(--bg-light)" }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "rgba(16,185,129,0.1)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
              ìë´ ì ì²­ì´ ìë£ëììµëë¤
            </h3>
            <p style={{ color: "var(--text-gray)" }}>
              ë¹ ë¥¸ ìì¼ ë´ì ì ë¬¸ ìë´ì¬ê° ì°ë½ëë¦¬ê² ìµëë¤
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
            style={{ border: "1px solid var(--border)" }}>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  íì¬ëª <span className="text-red-500">*</span>
                </label>
                <input name="company" required value={form.company} onChange={handleChange}
                  className="form-input" placeholder="(ì£¼)íì¬ëª" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  ë´ë¹ì <span className="text-red-500">*</span>
                </label>
                <input name="manager" required value={form.manager} onChange={handleChange}
                  className="form-input" placeholder="íê¸¸ë" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  ì°ë½ì² <span className="text-red-500">*</span>
                </label>
                <input name="phone" required value={form.phone} onChange={handleChange}
                  className="form-input" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  ì´ë©ì¼
                </label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  className="form-input" placeholder="email@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  ìì¢
                </label>
                <select name="industry" value={form.industry} onChange={handleChange} className="form-select">
                  <option value="">ì íí´ì£¼ì¸ì</option>
                  <option value="ì ì¡°ì">ì ì¡°ì</option>
                  <option value="ì§ìì°ì">ì§ìì°ì</option>
                  <option value="ì ë³´íµì ì">ì ë³´íµì ì</option>
                  <option value="ê¸°í">ê¸°í</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  íìë©´ì 
                </label>
                <select name="area" value={form.area} onChange={handleChange} className="form-select">
                  <option value="">ì íí´ì£¼ì¸ì</option>
                  <option value="300í ì´í">300í ì´í</option>
                  <option value="300~1,000í">300~1,000í</option>
                  <option value="1,000~3,000í">1,000~3,000í</option>
                  <option value="3,000í ì´ì">3,000í ì´ì</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  ìì£¼ìì ìê¸°*                </label>
                <select name="moveDate" value={form.moveDate} onChange={handleChange} className="form-select">
                  <option value="">ì íí´ì£¼ì¸ì</option>
                  <option value="2026ë">2026ë</option>
                  <option value="2023ë">2023ë</option>
                  <option value="2028ë ì´í">2028ë ì´í</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  ì£¼ì
                </label>
                <input name="address" value={form.address} onChange={handleChange}
                  className="form-input" placeholder="í ì¬ìì¥ ì£¼ì" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                ê¸°í ë¬¸ìì¬í­
              </label>
              <textarea name="message" value={form.message}
                onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                rows={4} className="form-input resize-none"
                placeholder="ì¶ê° ë¬¸ìì¬í­ì´ ìì¼ìë©´ ìë ¥í´ ì£¼ì¸ì" />
            </div>

            <button type="submit" className="btn-gold w-full justify-center text-lg !py-4">
              ìë´ ì ì²­íê¸°
            </button>

            <p className="text-xs text-center mt-4" style={{ color: "var(--text-light)" }}>
              * ìë ¥íì  ì ë³´ë ìë´ ëª©ì ì¼ë¡ë§ ì¬ì©ëë©°, ìì íê² ê´ë¦¬ë©ëë¤.
            </p>
          </form>
        )}

        {/* Direct contact */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { label: "ì íìë´", value: "055-723-2363", icon: "ð" },
            { label: "ì´ë©ì¼", value: "fineindustry24@naver.com", icon: "ð§" },
            { label: "íì¥ë°©ë¬¸", value: "ê¹í´ì íë¦¼ë©´ ê¹í´ëë¡ 1162-1", icon: "ð" },
          ].map((c, i) => (
            <div key={i} className="text-center p-6 rounded-xl card-hover"
              style={{ background: "var(--bg-light)", border: "1px solid var(--border)" }}>
              <span className="text-2xl mb-2 block">{c.icon}</span>
              <div className="text-xs mb-1" style={{ color: "var(--text-gray)" }}>{c.label}</div>
              <div className="text-sm font-bold" style={{ color: "var(--primary)" }}>{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* âââââââââââââââââââââââ Company Section âââââââââââââââââââââââ */
function CompanySection() {
  return (
    <section id="company" className="py-20 lg:py-28" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>ABOUT US</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            íì¬ ìê°
          </h2>
          <p style={{ color: "var(--text-gray)" }} className="max-w-xl mx-auto">
            ì°ìë¨ì§ ì ë¬¸ê¸°ìì¼ë¡ì ë¤ìí ë¶ì ê²½íê³¼ ì è®0ë¥¼ ë°íì¼ë¡ í¨ê»í©ëë¤
          </p>
        </div>

        {/* ë¶ìì¤ì¸ì°ìë¨ì§ */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>
            ë¶ìì¤ì¸ ì°ìë¨ì§
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "ì°½ìëì ì¼ë°ì°ìë¨ì§",
              "ê²½ì£¼ëªê³3ì¼ë°ì°ìë¨ì§",
              "ìê³´ì±Ðíë´ì¬ ë°°ë°ì¬ë¶",
               "ê¸ìµ",
            ].map((name, i) => (
              <div key={i} className="card-hover bg-white rounded-xl p-6 text-center shadow-sm"
                style={{ border: "1px solid var(--border)" }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "rgba(212,168,67,0.1)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--text-dark)" }}>{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* íë ¥ì¬ */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm" style={{ border: "1px solid var(--border)" }}>
          <h3 className="text-lg font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>
            íë ¥ì¬ ë¤í¸ìí¬
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { cat: "ê±´ì¤", companies: "ê±´ì¤ì°½ëê±´ì¤, ê°ëªê±´ì¤" },
              { cat: "ì¤ê³", companies: "ì§ì¤íí¸ëì¤, ìì¤ê±´ì¶ì¬, ì²­ë³´ê±´ì¶ì¬" },
              { cat: "ì¸ë¬´ ë° ë±ê¸°", companies: "íìì¸ë¬´ì¬, ë¸ì§ì ë²ë¬´ì¬" },
              { cat: "ê¸ìµ", companies: "ê¸°ììí, ê²½ë¨ìí, ì°ë¦¬ìí" },
              { cat: "ê´ê³ ", companies: "íì¸ì½í¼ë ì´ì" },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: "var(--bg-light)" }}>
                <div className="text-xs font-bold mb-2 tracking-wider uppercase"
                  style={{ color: "var(--accent)" }}>{p.cat}</div>
                <p className="text-sm" style={{ color: "var(--text-dark)" }}>{p.companies}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* âââââââââââââââââââââââ Footer âââââââââââââââââââââââ */
function Footer() {
  return (
    <footer style={{ background: "var(--primary)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
                style={{ background: "var(--accent)", color: "var(--primary)" }}>S</div>
              <span className="text-white font-bold">ê¹í´ì¬ì´ì¸ì¤ì¼ë°ì°ìë¨ì§</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              ì°ìë¨ì§ ì ë¬¸ê¸°ì<br />
              4ì°¨ ì°ìíëªì ì ëíë ì°ìë¨ì§ ë¶ì
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">ì°ë½ì²</h4>
            <div className="space-y-2 text-sm text-white-60">
              <p>ì í: 055-723-2363</p>
              <p>ì´ë©ì¼: fineindustry24@naver.com</p>
              <p>ì£¼ì: ê¹í´ì íë¦¼ë©´ ê¹í´ëë¡ 1162-1<br />(ë¶ìíë³´ê´)</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">ë°ë¡ê°ê¸°</h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "ë¨ì§ìê°", href: "#info" },
                { label: "íµì¬ê²½ìë ¥", href: "#strengths" },
                { label: "ìì£¼ ê°ë¥ì¬ë¶ íì¸", href: "#eligibility" },
                { label: "ìë´ ì ì²­", href: "#contact" },
              ].map((l) => (
                <a key={l.href} href={l.href}
                  className="block text-white/60 hover:text-white transition">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            Â© 2026 ê¹í´ì¬ì´ì¸ì¤ì¼ë°ì°ìë¨ì§ ë¶ì. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  
_m;

/* âââââââââââââââââââââââ Floating CTA âââââââââââââââââââââââ */
function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="tel:055-723-2363"
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl transition hover:scale-110"
        style={{ background: "var(--primary)" }}
        title="ì í ìë´">
        ð
      </a>
      <a href="#contact"
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition hover:scale-110"
        style={{ background: "var(--accent)", color: "var(--primary)" }}
        title="ìë´ ì ì²­">
        âï¸
      </a>
    </div>
  );
}

/* âââââââââââââââââââââââ Main Page âââââââââââââââââââââââ */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoSection />
      <StrengthsSection />
      <EligibilitySection />
      <ContactSection />
      <CompanySection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
