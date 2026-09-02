import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalImage, setModalImage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = (imgSrc) => setModalImage(imgSrc);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'certificates'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = (section) => {
    return activeSection === section
      ? "px-5 py-2 rounded-full bg-[#38bdf8] text-[#0f172a] font-semibold transition-all duration-300 shadow-sm"
      : "px-5 py-2 rounded-full text-slate-600 hover:text-[#0f172a] hover:bg-slate-100 font-medium transition-all duration-300";
  };

  const skillIcons = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'C# .NET', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Git/GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#38bdf8]/30">
      
      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setModalImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30" onClick={() => setModalImage(null)}>
              ✕ ปิด
            </button>
            <img src={modalImage} alt="Zoomed" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl bg-white" />
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3.5 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl font-bold tracking-tight text-[#0f172a]">
            &lt;Nanthapat<span className="text-[#38bdf8]">/&gt;</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <a href="#home" className={getNavClass('home')}>Home</a>
          <a href="#about" className={getNavClass('about')}>About me</a>
          <a href="#resume" className={getNavClass('resume')}>Resume</a>
          <a href="#projects" className={getNavClass('projects')}>Projects</a>
          <a href="#certificates" className={getNavClass('certificates')}>Certificates</a>
        </div>

        <button className="md:hidden text-slate-700 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col gap-2 text-center shadow-lg">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('home')}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('about')}>About me</a>
            <a href="#resume" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('resume')}>Resume</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('projects')}>Projects</a>
            <a href="#certificates" onClick={() => setIsMobileMenuOpen(false)} className={getNavClass('certificates')}>Certificates</a>
          </div>
        )}
      </nav>

      {/* 1. HOME SECTION */}
      <section id="home" className="pt-36 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl italic font-serif tracking-wide text-[#0f172a]">
            Portfolio
          </h1>
          <span className="text-2xl md:text-3xl font-serif text-[#38bdf8] italic block -mt-2">Portfolio</span>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION (DARK THEME CONTAINER LIKE REFERENCED SCREENSHOT) */}
      <section id="about" className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#0f172a] text-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Header Title Cursive */}
          <div className="mb-10 relative">
            <h2 className="text-5xl md:text-6xl font-serif italic text-white tracking-wide">
              About Me
            </h2>
            <span className="text-slate-400 text-sm tracking-wider uppercase font-medium block mt-1">
              ✦ About Me
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                  Hello, I'm Nanthapat Kerdsarn
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-8">
                  นักศึกษาวิทยาการคอมพิวเตอร์ สนใจสายงาน Web Developer, Backend และ Full-Stack ชอบวิเคราะห์และออกแบบระบบฐานข้อมูลที่ซับซ้อนให้ทำงานได้จริง เคยพัฒนาโปรเจกต์ทั้งระบบ Front-end และ Back-end รวมถึงระบบจัดการสินค้าที่มีผู้ใช้งานจริง
                </p>
              </div>

              {/* Bottom Skills & Contact Row */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Hard Skills</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {skillIcons.map((skill, i) => (
                      <div key={i} className="w-10 h-10 bg-slate-800/80 rounded-xl p-2 border border-slate-700/60 flex items-center justify-center hover:border-[#38bdf8] transition-all">
                        <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Contact</h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <a href="https://github.com/mixxxxz" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub: mixxxxz
                    </a>
                    <a href="mailto:mixqvx@gmail.com" className="flex items-center gap-2 hover:text-[#38bdf8] transition-colors">
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      mixqvx@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="p-3 bg-[#1e293b] rounded-[2.5rem] border-2 border-slate-700 shadow-xl">
                  <div className="aspect-[3/4] rounded-[2rem] bg-slate-800 overflow-hidden flex items-center justify-center relative">
                    <span className="text-slate-500 text-sm font-medium">[ รูปถ่ายของคุณ ]</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 text-2xl">✨</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. RESUME SECTION (MATCHING 2-COLUMN TIMELINE + BOTTOM 4 SKILL CARDS EXACTLY) */}
      <section id="resume" className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        
        {/* Section Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif italic text-[#0f172a]">
              Resume
            </h2>
            <span className="text-slate-500 text-sm font-medium tracking-wide">✦ Resume</span>
          </div>
          <div>
            <a href="#resume" className="inline-block px-6 py-2.5 rounded-full bg-[#38bdf8] hover:bg-[#0284c7] text-[#0f172a] hover:text-white font-semibold text-sm transition-all shadow-sm">
              เปิด Resume ฉบับเต็ม
            </a>
          </div>
        </div>

        {/* 2 Main Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: การศึกษา */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 flex items-center gap-2">
              <span>🎓</span> การศึกษา
            </h3>

            <div className="relative pl-8 border-l-2 border-[#38bdf8]/40 space-y-8">
              <div className="relative">
                <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-[#0f172a]">ปริญญาตรี วิทยาการคอมพิวเตอร์</h4>
                <p className="text-slate-600 text-sm mt-1">มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา · กำลังศึกษา</p>
                <p className="text-[#38bdf8] text-xs font-semibold mt-1">GPA -</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-[#0f172a]">มัธยมศึกษาตอนปลาย / สายวิทย์-คณิต</h4>
                <p className="text-slate-600 text-sm mt-1">โรงเรียนประจำจังหวัด · 2019–2022</p>
              </div>
            </div>
          </div>

          {/* Card 2: ประสบการณ์ */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 flex items-center gap-2">
              <span>📅</span> ประสบการณ์พัฒนาซอฟต์แวร์
            </h3>

            <div className="relative pl-8 border-l-2 border-[#38bdf8]/40 space-y-8">
              <div className="relative">
                <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-[#0f172a]">Full-Stack Web Developer (Projects)</h4>
                <p className="text-[#38bdf8] text-xs font-semibold mt-1">2024</p>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  พัฒนาระบบร้านซ่อมรถและระบบร้านเครื่องเขียน ครอบคลุมการออกแบบ ฐานข้อมูล (Database Design), ตะกร้าสินค้า, และหน้าจัดการหลังบ้าน (Back-end)
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-white"></div>
                <h4 className="text-lg font-bold text-[#0f172a]">Database & System Design</h4>
                <p className="text-[#38bdf8] text-xs font-semibold mt-1">2023</p>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  วิเคราะห์และออกแบบ ER-Diagram, Relational Database ด้วย MySQL และ SQL Server เพื่อรองรับการทำงานระบบใหญ่
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-sm">
            <h4 className="text-2xl font-serif italic text-[#0f172a] mb-5">Front-end</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">React</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Tailwind CSS</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">JavaScript</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">HTML/CSS</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-sm">
            <h4 className="text-2xl font-serif italic text-[#0f172a] mb-5">Back-end</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">PHP</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">C# .NET</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-sm">
            <h4 className="text-2xl font-serif italic text-[#0f172a] mb-5">Tools & DB</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">MySQL</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">SQL Server</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Git/GitHub</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-sm">
            <h4 className="text-2xl font-serif italic text-[#0f172a] mb-5">Office</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Word</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Excel</span>
              <span className="px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">PowerPoint</span>
            </div>
          </div>

        </div>

      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#0f172a]">
            Projects
          </h2>
          <span className="text-slate-500 text-sm font-medium tracking-wide">✦ Projects</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200/80 shadow-sm">
            <div className="aspect-video bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-slate-400 font-medium cursor-pointer overflow-hidden" onClick={() => openModal('https://via.placeholder.com/1200x800')}>
              [ รูปตัวอย่างเว็บร้านเครื่องเขียน ]
            </div>
            <span className="px-3 py-1 bg-[#38bdf8]/20 text-[#0284c7] rounded-full text-xs font-bold">C# ASP.NET</span>
            <h3 className="text-2xl font-bold text-[#0f172a] mt-3 mb-2">Stationery Shop Web Application</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              ระบบเว็บไซต์อีคอมเมิร์ซร้านเครื่องเขียน พัฒนาด้วย C# จัดการตะกร้าสินค้า ระบบชำระเงิน และระบบหลังบ้านสำหรับผู้ดูแลระบบ
            </p>
            <a href="https://github.com/mixxxxz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] hover:text-[#38bdf8]">
              Source Code <span>→</span>
            </a>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200/80 shadow-sm">
            <div className="aspect-video bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-slate-400 font-medium cursor-pointer overflow-hidden" onClick={() => openModal('https://via.placeholder.com/1200x800')}>
              [ รูปตัวอย่างรูประบบร้านซ่อมรถ ]
            </div>
            <span className="px-3 py-1 bg-[#38bdf8]/20 text-[#0284c7] rounded-full text-xs font-bold">PHP & MySQL</span>
            <h3 className="text-2xl font-bold text-[#0f172a] mt-3 mb-2">Motorcycle Repair Shop System</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              ระบบแอปพลิเคชันจัดการร้านซ่อมรถจักรยานยนต์แบบครบวงจร ครอบคลุมระบบจองคิว ติดตามสถานะงานซ่อม พิมพ์ใบเสร็จ และการจัดการสต็อก
            </p>
            <a href="https://github.com/mixxxxz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] hover:text-[#38bdf8]">
              Source Code <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. CERTIFICATES SECTION */}
      <section id="certificates" className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-serif italic text-[#0f172a]">
            Certificates
          </h2>
          <span className="text-slate-500 text-sm font-medium tracking-wide">✦ Certificates</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-[2rem] border border-slate-200/80 shadow-sm">
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl mb-4 flex items-center justify-center text-slate-400 text-sm font-medium cursor-pointer" onClick={() => openModal('https://via.placeholder.com/800x600')}>
              [ รูปใบประกาศนียบัตร ]
            </div>
            <h3 className="font-bold text-[#0f172a] text-base mb-1">Internet of Things (IoT) สำหรับผู้เริ่มต้น</h3>
            <p className="text-slate-500 text-xs">Udemy Online Course</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-200/60 bg-white">
        
      </footer>

    </div>
  );
}