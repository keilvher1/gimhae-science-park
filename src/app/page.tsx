"use client";

import { useState } from "react";

/* ─────────────────────── Navigation ─────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "단지소개", href: "#info" },
    { label: "핵심경쟁력", href: "#strengths" },
    { label: "입주확인", href: "#eligibility" },
    { label: "상담신청", href: "#contact" },
    { label: "회사소개", href: "#company" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ background: "var(--primary)" }}>S</div>
            <div>
              <div className="text-sm font-bold" style={{ color: "var(--primary)" }}>김해사이언스</div>
              <div className="text-xs" style={{ color: "var(--text-gray)" }}>일반산업단지</div>
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
              상담신청 →
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
            상담신청 →
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────── Hero Section ─────────────────────── */
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
              김해시 한림면 · 849,675㎡ (약 25.7만평)
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fadeInUp delay-100">
          김해사이언스<br />
          <span style={{ color: "var(--accent)" }}>일반산업단지</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-12 animate-fadeInUp delay-200 leading-relaxed">
          절토 기반 안정적 지반 · 합리적 분양가 · 책임준공 기반<br />
          부산항·김해공항 물류 접근성 우수
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
          <a href="#eligibility" className="btn-gold text-lg !py-4 !px-8">
            입주 가능여부 확인하기
          </a>
          <a href="#info" className="btn-outline text-lg !py-4 !px-8">
            단지 정보 보기
          </a>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-fadeInUp delay-400">
          {[
            { num: "262만원~", label: "추정 조성원가 (㎡)" },
            { num: "75%", label: "취득세 감면" },
            { num: "1분", label: "한림IC 거리" },
            { num: "2027", label: "입주 예정" },
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
  );
}

/* ─────────────────────── Info Section ─────────────────────── */
function InfoSection() {
  return (
    <section id="info" className="py-20 lg:py-28" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>INDUSTRIAL COMPLEX INFO</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            산업단지 기본 정보
          </h2>
          <p style={{ color: "var(--text-gray)" }} className="max-w-xl mx-auto">
            김해사이언스일반산업단지의 핵심 정보를 한눈에 확인하세요
          </p>
        </div>

        {/* Location map placeholder + key info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="aspect-video flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #E8E8E8, #D0D0D0)" }}>
              <div className="text-center p-8">
                <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                  경남 김해시 한림면 명동리 산165-2번지 일원
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--text-light)" }}>
                  위치도 이미지를 추가해 주세요
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: "var(--primary)" }}>광역교통</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🚗", label: "한림IC", value: "1분" },
                  { icon: "🚗", label: "진례IC", value: "5분" },
                  { icon: "✈️", label: "김해공항", value: "20분" },
                  { icon: "🚢", label: "부산항", value: "30분" },
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
                title: "단지 규모",
                desc: "849,675㎡ (약 25.7만평)",
                sub: "총 사업비 2,760억원"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "주요 유치업종",
                desc: "제조업, 지식산업, 정보통신산업",
                sub: "4차산업 중심 첨단산업 유치"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                ),
                title: "분양가격",
                desc: "추정 조성원가 약 262만원/㎡",
                sub: "부산 평당 400~500만원대 대비 합리적"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z" />
                  </svg>
                ),
                title: "세제혜택",
                desc: "취득세·재산세 75% 감면",
                sub: "법인세 감면, 토지 분양가 80% 융자"
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 7v1a3 3 0 003 3h0a3 3 0 003-3V7m0 0V7a3 3 0 003 3h0a3 3 0 003-3V7m0 0h0V3H3v4" />
                  </svg>
                ),
                title: "책임준공",
                desc: "HDC현대산업개발 책임준공",
                sub: "믿을 수 있는 시공 파트너"
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
  );
}

/* ─────────────────────── Strengths Section ─────────────────────── */
function StrengthsSection() {
  const strengths = [
    {
      num: "01",
      title: "절토 기반\n안정적 지반",
      desc: "안정적 공장 건축 환경을 제공하는 절토 기반 조성으로 지반 침하 걱정이 없습니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M9 21V8l-3 3M15 21V8l3 3M12 21V3" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "부산권 대비\n합리적 분양가",
      desc: "부산 평당 400~500만원대 대비 사이언스파크는 약 200만원대로 합리적인 가격입니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "HDC현대산업개발\n책임준공",
      desc: "대한민국 대표 건설사 HDC현대산업개발이 책임준공하여 안정적인 사업 추진이 가능합니다.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "물류 접근성\n우수",
      desc: "부산항과 김해공항 접근이 우수하며 한림IC 1분, 진례IC 5분 거리에 위치해 있습니다.",
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
            핵심 경쟁력
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            김해사이언스일반산업단지만의 차별화된 강점
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

/* ─────────────────────── Eligibility Check (UI only) ─────────────────────── */
function EligibilitySection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      q: "업종 또는 생산품을 선택해 주세요",
      sub: "통계분류포털 C, H코드 기준",
      options: ["제조업", "지식산업", "정보통신업", "기타"],
    },
    {
      q: "필요한 토지의 면적은?",
      options: ["300평 이하", "300~1,000평", "1,000~3,000평", "3,000평 이상"],
    },
    {
      q: "예상 건축면적은?",
      options: ["계획없음", "300평 이하", "300~700평", "700~1,500평", "1,500평 이상"],
    },
    {
      q: "수용성절삭유 사용 여부",
      options: ["사용", "미사용"],
    },
    {
      q: "폐수 발생 여부",
      options: ["없음", "소량", "있음"],
    },
    {
      q: "특정수질 또는 특정대기 유해물질 배출여부",
      options: ["있음", "없음"],
    },
    {
      q: "위험물 사용 여부",
      options: ["없음", "유해화학물질 영업허가"],
    },
    {
      q: "입주 예정 시기",
      options: ["2026년", "2027년", "2028년 이후"],
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
            입주 가능여부 확인
          </h2>
          <p style={{ color: "var(--text-gray)" }}>
            몇 가지 질문에 답하시면 입주 가능 여부를 바로 확인하실 수 있습니다
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
                ※ 핵심기능
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
                ← 이전
              </button>

              {isCompleted ? (
                <a href="#contact" className="btn-gold text-sm">
                  상담 신청하기 →
                </a>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!answers[step]}
                  className="btn-primary text-sm disabled:opacity-40"
                >
                  다음 →
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "var(--text-light)" }}>
          * 판단 로직은 현재 준비 중입니다. 정확한 입주 가능 여부는 전문 상담을 통해 확인해 주세요.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── Contact / Consultation Form ─────────────────────── */
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
            상담 신청
          </h2>
          <p style={{ color: "var(--text-gray)" }}>
            기업 정보를 남겨주시면 전문 상담사가 맞춤 부지를 추천해 드립니다
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
              상담 신청이 완료되었습니다
            </h3>
            <p style={{ color: "var(--text-gray)" }}>
              빠른 시일 내에 전문 상담사가 연락드리겠습니다
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
            style={{ border: "1px solid var(--border)" }}>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  회사명 <span className="text-red-500">*</span>
                </label>
                <input name="company" required value={form.company} onChange={handleChange}
                  className="form-input" placeholder="(주)회사명" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  담당자 <span className="text-red-500">*</span>
                </label>
                <input name="manager" required value={form.manager} onChange={handleChange}
                  className="form-input" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input name="phone" required value={form.phone} onChange={handleChange}
                  className="form-input" placeholder="010-0000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  이메일
                </label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  className="form-input" placeholder="email@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  업종
                </label>
                <select name="industry" value={form.industry} onChange={handleChange} className="form-select">
                  <option value="">선택해주세요</option>
                  <option value="제조업">제조업</option>
                  <option value="지식산업">지식산업</option>
                  <option value="정보통신업">정보통신업</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  필요면적
                </label>
                <select name="area" value={form.area} onChange={handleChange} className="form-select">
                  <option value="">선택해주세요</option>
                  <option value="300평 이하">300평 이하</option>
                  <option value="300~1,000평">300~1,000평</option>
                  <option value="1,000~3,000평">1,000~3,000평</option>
                  <option value="3,000평 이상">3,000평 이상</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  입주예정시기
                </label>
                <select name="moveDate" value={form.moveDate} onChange={handleChange} className="form-select">
                  <option value="">선택해주세요</option>
                  <option value="2026년">2026년</option>
                  <option value="2027년">2027년</option>
                  <option value="2028년 이후">2028년 이후</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                  주소
                </label>
                <input name="address" value={form.address} onChange={handleChange}
                  className="form-input" placeholder="현 사업장 주소" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-dark)" }}>
                기타 문의사항
              </label>
              <textarea name="message" value={form.message}
                onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                rows={4} className="form-input resize-none"
                placeholder="추가 문의사항이 있으시면 입력해 주세요" />
            </div>

            <button type="submit" className="btn-gold w-full justify-center text-lg !py-4">
              상담 신청하기
            </button>

            <p className="text-xs text-center mt-4" style={{ color: "var(--text-light)" }}>
              * 입력하신 정보는 상담 목적으로만 사용되며, 안전하게 관리됩니다.
            </p>
          </form>
        )}

        {/* Direct contact */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { label: "전화상담", value: "055-723-2363", icon: "📞" },
            { label: "이메일", value: "fineindustry24@naver.com", icon: "📧" },
            { label: "현장방문", value: "김해시 한림면 김해대로 1162-1", icon: "📍" },
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

/* ─────────────────────── Company Section ─────────────────────── */
function CompanySection() {
  return (
    <section id="company" className="py-20 lg:py-28" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-3 inline-block"
            style={{ color: "var(--accent)" }}>ABOUT US</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            회사 소개
          </h2>
          <p style={{ color: "var(--text-gray)" }} className="max-w-xl mx-auto">
            산업단지 전문기업으로서 다양한 분양 경험과 신뢰를 바탕으로 함께합니다
          </p>
        </div>

        {/* 분양중인산업단지 */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>
            분양중인 산업단지
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "창원동전일반산업단지",
              "경주명계3일반산업단지",
              "울산GW산업단지",
              "김해사이언스산업단지",
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

        {/* 협력사 */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm" style={{ border: "1px solid var(--border)" }}>
          <h3 className="text-lg font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>
            협력사 네트워크
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { cat: "건설", companies: "건설창도건설, 강명건설" },
              { cat: "설계", companies: "진앤파트너스, 서윤건축사, 청보건축사" },
              { cat: "세무 및 등기", companies: "한양세무사, 노징석 법무사" },
              { cat: "금융", companies: "기업은행, 경남은행, 우리은행" },
              { cat: "광고", companies: "홍인코퍼레이션" },
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

/* ─────────────────────── Footer ─────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "var(--primary)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
                style={{ background: "var(--accent)", color: "var(--primary)" }}>S</div>
              <span className="text-white font-bold">김해사이언스일반산업단지</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              산업단지 전문기업<br />
              4차 산업혁명을 선도하는 산업단지 분양
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">연락처</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>전화: 055-723-2363</p>
              <p>이메일: fineindustry24@naver.com</p>
              <p>주소: 김해시 한림면 김해대로 1162-1<br />(분양홍보관)</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">바로가기</h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "단지소개", href: "#info" },
                { label: "핵심경쟁력", href: "#strengths" },
                { label: "입주 가능여부 확인", href: "#eligibility" },
                { label: "상담 신청", href: "#contact" },
              ].map((l) => (
                <a key={l.href} href={l.href}
                  className="block text-white/60 hover:text-white transition">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            © 2026 김해사이언스일반산업단지 분양. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── Floating CTA ─────────────────────── */
function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="tel:055-723-2363"
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white text-xl transition hover:scale-110"
        style={{ background: "var(--primary)" }}
        title="전화 상담">
        📞
      </a>
      <a href="#contact"
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition hover:scale-110"
        style={{ background: "var(--accent)", color: "var(--primary)" }}
        title="상담 신청">
        ✍️
      </a>
    </div>
  );
}

/* ─────────────────────── Main Page ─────────────────────── */
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
