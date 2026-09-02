import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalImage, setModalImage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // เพิ่ม State สำหรับเมนูมือถือ

  // ระบบเช็กการเลื่อนหน้าจอสำหรับเมนู
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'certificates'];
      const scrollPosition = window.scrollY + 100;
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

  // ฟังก์ชันสลับสีปุ่มเมนู (คอมพิวเตอร์)
  const getNavClass = (section) => {
    return activeSection === section
      ? "px-6 py-2 rounded-full bg-[#0f172a] text-[#38bdf8] font-semibold tracking-wide shadow-md transition-all duration-300"
      : "px-6 py-2 rounded-full text-slate-600 hover:text-[#0f172a] hover:bg-slate-100 font-medium transition-all duration-300";
  };

  // ฟังก์ชันสลับสีปุ่มเมนู (มือถือ)
  const getMobileNavClass = (section) => {
    return activeSection === section
      ? "block w-full text-center px-4 py-3 rounded-xl bg-[#0f172a] text-[#38bdf8] font-semibold tracking-wide shadow-md transition-all duration-300"
      : "block w-full text-center px-4 py-3 rounded-xl text-slate-600 hover:text-[#0f172a] hover:bg-slate-50 font-medium transition-all duration-300";
  };

  // ข้อมูลไอคอนสำหรับส่วน About Me
  const skillIcons = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'C# .NET', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
    { name: 'Git/GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' }
  ];

  return (
    <div className="min-h-screen bg-[#f4f9ff] text-slate-700 font-sans selection:bg-[#38bdf8]/30">
      
      {/* --- ระบบคลิกขยายรูป (Modal) --- */}
      {modalImage && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity" onClick={() => setModalImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full font-medium transition-all" onClick={() => setModalImage(null)}>
              ✕ ปิดหน้าต่าง
            </button>
            <img src={modalImage} alt="Zoomed" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-white" />
          </div>
        </div>
      )}

      {/* --- NAVBAR (Floating Style + Mobile Menu) --- */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-50 transition-all">
        <div className="px-4 md:px-6 h-16 flex items-center justify-between relative">
          
          {/* โลโก้ */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0f172a] rounded-full flex items-center justify-center text-[#38bdf8] font-bold shadow-md">
              {'{ }'}
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0f172a] to-slate-600 bg-clip-text text-transparent">
              Nanthapat.dev
            </span>
          </div>

          {/* เมนูสำหรับ Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#home" className={getNavClass('home')}>หน้าแรก</a>
            <a href="#about" className={getNavClass('about')}>เกี่ยวกับฉัน</a>
            <a href="#resume" className={getNavClass('resume')}>เรซูเม่</a>
            <a href="#projects" className={getNavClass('projects')}>ผลงาน</a>
            <a href="#certificates" className={getNavClass('certificates')}>ใบรับรอง</a>
          </div>

          {/* ปุ่ม Hamburger สำหรับ มือถือ */}
          <button 
            className="md:hidden p-2 text-[#0f172a] hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
               <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* แถบเมนูเด้งลงมา (Dropdown) สำหรับมือถือ */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl flex flex-col p-3 gap-1 animate-fade-in">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={getMobileNavClass('home')}>หน้าแรก</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={getMobileNavClass('about')}>เกี่ยวกับฉัน</a>
            <a href="#resume" onClick={() => setIsMobileMenuOpen(false)} className={getMobileNavClass('resume')}>เรซูเม่</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={getMobileNavClass('projects')}>ผลงาน</a>
            <a href="#certificates" onClick={() => setIsMobileMenuOpen(false)} className={getMobileNavClass('certificates')}>ใบรับรอง</a>
          </div>
        )}
      </nav>

      {/* --- 1. HOME SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0f172a]/5 rounded-full blur-3xl"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38bdf8]"></span>
          </span>
          Available for Work & Internship
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-6">
          Hi, I'm <span className="text-[#38bdf8] relative">
            Nanthapat
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#38bdf8]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          นักศึกษาวิทยาการคอมพิวเตอร์ ผู้หลงใหลในการสร้างสรรค์ระบบ Web Application และ Database ด้วยโค้ดที่สะอาดและ UI ที่ใช้งานง่าย
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a href="#projects" className="px-8 py-3.5 bg-[#0f172a] hover:bg-slate-800 text-[#38bdf8] rounded-full font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
            ดูผลงานของฉัน
          </a>
          <a href="#about" className="px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-[#0f172a] hover:text-[#0f172a] text-slate-600 rounded-full font-semibold transition-all hover:-translate-y-1 w-full sm:w-auto">
            ข้อมูลเพิ่มเติม
          </a>
        </div>
      </section>

      {/* --- 2. ABOUT ME SECTION --- */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] mb-3">เกี่ยวกับฉัน</h2>
            <div className="h-1.5 w-16 bg-[#38bdf8] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                <span className="p-2 bg-[#f4f9ff] text-[#38bdf8] rounded-full">👋</span> 
                สวัสดีค่ะ
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                ดิฉัน นางสาวนันทพัทธ์ เกิดสาสน์ ปัจจุบันกำลังศึกษาอยู่สาขา <span className="font-semibold text-[#38bdf8]">วิทยาการคอมพิวเตอร์ (Computer Science)</span> มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                มีความสนใจสายงาน Web Developer, Backend และ Full-Stack ชอบวิเคราะห์และออกแบบระบบฐานข้อมูลที่ซับซ้อนให้ทำงานได้จริง เคยพัฒนาโปรเจกต์ทั้งระบบ Front-end และ Back-end รวมถึงระบบจัดการสินค้าที่มีผู้ใช้งานจริง
              </p>

              {/* 🌟 Hard Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#0f172a] mb-4">Hard Skills</h4>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {skillIcons.map((skill, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 hover:border-[#38bdf8] hover:shadow-md transition-all duration-300">
                        <img src={skill.src} alt={skill.name} className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0f172a] text-[#38bdf8] text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-10">
                        {skill.name}
                        <svg className="absolute text-[#0f172a] h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                <a href="mailto:16632046@aru.ac.th" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#38bdf8] transition-colors font-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  mixqvx@gmail.com
                </a>
                <a href="https://github.com/mixxxxz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#38bdf8] transition-colors font-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  GitHub: mixxxxz
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 bg-[#0f172a] rounded-[2.5rem] rotate-6 opacity-5"></div>
              <div className="absolute inset-0 bg-[#38bdf8] rounded-[2.5rem] -rotate-3 opacity-10"></div>
              <div className="w-full aspect-[4/5] bg-white border border-slate-100 rounded-[2.5rem] relative z-10 shadow-xl flex items-center justify-center p-8">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg">👩‍💻</div>
                    <p className="text-slate-400 font-medium">[ใส่รูปถ่ายของคุณที่นี่]</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. RESUME & SKILLS SECTION --- */}
      <section id="resume" className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0f172a] mb-3">ประสบการณ์และทักษะ</h2>
            <div className="h-1.5 w-16 bg-[#38bdf8] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#f4f9ff] p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                <span className="p-2 bg-[#0f172a] text-[#38bdf8] rounded-full shadow-md">🎓</span> ประวัติการศึกษา
              </h3>
              <div className="relative pl-6 border-l-2 border-[#38bdf8]/30">
                <div className="absolute w-4 h-4 bg-[#38bdf8] rounded-full -left-[9px] top-1 border-4 border-[#f4f9ff]"></div>
                <h4 className="text-lg font-bold text-[#0f172a]">ปริญญาตรี วิทยาการคอมพิวเตอร์</h4>
                <p className="text-[#38bdf8] text-sm font-semibold mt-1">มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา</p>
                <p className="text-slate-500 text-sm mt-2 font-medium">กำลังศึกษา</p>
              </div>
            </div>

            <div className="bg-[#f4f9ff] p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                <span className="p-2 bg-[#0f172a] text-[#38bdf8] rounded-full shadow-md">💻</span> ประสบการณ์พัฒนาซอฟต์แวร์
              </h3>
              <div className="relative pl-6 border-l-2 border-[#38bdf8]/30">
                <div className="absolute w-4 h-4 bg-[#38bdf8] rounded-full -left-[9px] top-1 border-4 border-[#f4f9ff]"></div>
                <h4 className="text-lg font-bold text-[#0f172a]">Full-Stack Development</h4>
                <p className="text-[#38bdf8] text-sm font-semibold mt-1">ระบบร้านซ่อมรถ & เว็บร้านเครื่องเขียน</p>
                <p className="text-slate-500 text-sm mt-2 font-medium">ออกแบบฐานข้อมูล, ระบบจัดการคลังสินค้า, ระบบหลังบ้าน</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-[#38bdf8]/50 transition-all">
              <h4 className="text-xl font-bold text-[#0f172a] italic mb-5" style={{ fontFamily: 'serif' }}>Front-end</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">React</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">Tailwind CSS</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">JavaScript</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">HTML/CSS</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-[#38bdf8]/50 transition-all">
              <h4 className="text-xl font-bold text-[#0f172a] italic mb-5" style={{ fontFamily: 'serif' }}>Back-end</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">PHP</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">C# .NET</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-[#38bdf8]/50 transition-all">
              <h4 className="text-xl font-bold text-[#0f172a] italic mb-5" style={{ fontFamily: 'serif' }}>Database & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">MySQL</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">SQL Server</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">Git/GitHub</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-[#38bdf8]/50 transition-all">
              <h4 className="text-xl font-bold text-[#0f172a] italic mb-5" style={{ fontFamily: 'serif' }}>Others</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">Bootstrap</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">Word</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">Excel</span>
                <span className="px-4 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-sm font-medium hover:border-[#38bdf8] transition-colors">PowerPoint</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0f172a] mb-3">ผลงานโดดเด่น</h2>
            <div className="h-1.5 w-16 bg-[#38bdf8] rounded-full mx-auto"></div>
          </div>

          <div className="space-y-24">
            
            <div className="group">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 cursor-pointer" onClick={() => openModal('https://via.placeholder.com/1200x800/e0f2fe/0f172a?text=Stationery+Shop+Screenshot')}>
                  <div className="bg-white p-3 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0f172a]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                       <span className="bg-[#0f172a] px-6 py-2.5 rounded-full text-[#38bdf8] font-bold text-sm shadow-xl">🔍 คลิกเพื่อขยาย</span>
                    </div>
                    <div className="aspect-[4/3] bg-slate-100 rounded-3xl flex items-center justify-center">
                       <span className="text-slate-400 font-medium">รูปเว็บร้านเครื่องเขียน</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full text-xs font-bold mb-4 tracking-wide">C# ASP.NET</div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Stationery Shop Web Application</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    ระบบเว็บไซต์อีคอมเมิร์ซร้านเครื่องเขียน พัฒนาด้วย C# จัดการตะกร้าสินค้า ระบบชำระเงิน และระบบหลังบ้าน (Dashboard) สำหรับผู้ดูแลระบบเพื่อตรวจสอบออเดอร์และคลังสินค้า
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">C# .NET</span>
                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">SQL Server</span>
                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">Bootstrap</span>
                  </div>
                  <a href="https://github.com/mixxxxz/stationery-shop-web" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0f172a] hover:bg-slate-800 text-[#38bdf8] font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                    ดู Source Code บน GitHub <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2 cursor-pointer" onClick={() => openModal('https://via.placeholder.com/1200x800/e0f2fe/0f172a?text=Motorcycle+Repair+Shop+Screenshot')}>
                  <div className="bg-white p-3 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0f172a]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                       <span className="bg-[#0f172a] px-6 py-2.5 rounded-full text-[#38bdf8] font-bold text-sm shadow-xl">🔍 คลิกเพื่อขยาย</span>
                    </div>
                    <div className="aspect-[4/3] bg-slate-100 rounded-3xl flex items-center justify-center">
                       <span className="text-slate-400 font-medium">รูประบบร้านซ่อมรถ</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full text-xs font-bold mb-4 tracking-wide">PHP & MySQL</div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Motorcycle Repair Shop System</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    ระบบแอปพลิเคชันจัดการร้านซ่อมรถจักรยานยนต์แบบครบวงจร ครอบคลุมระบบจองคิว ติดตามสถานะงานซ่อม พิมพ์ใบเสร็จ และการจัดการสต็อกอะไหล่
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">PHP</span>
                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">MySQL</span>
                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full">HTML/CSS</span>
                  </div>
                  <a href="https://github.com/mixxxxz/motorcycle-repair-shop" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0f172a] hover:bg-slate-800 text-[#38bdf8] font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto">
                    ดู Source Code บน GitHub <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. CERTIFICATES SECTION --- */}
      <section id="certificates" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-extrabold text-[#0f172a] mb-3">ประกาศนียบัตร</h2>
              <div className="h-1.5 w-16 bg-[#38bdf8] rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-slate-500 font-medium">ใบรับรองเพื่อยืนยันการพัฒนาทักษะ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f4f9ff] p-4 rounded-3xl border border-slate-200 hover:border-[#38bdf8]/50 transition-colors">
              <div className="aspect-[4/3] bg-white rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-all mb-6 border border-slate-100 flex items-center justify-center overflow-hidden group"
                   onClick={() => openModal('https://via.placeholder.com/800x600/ffffff/0f172a?text=Udemy+IoT+Course')}>
                <div className="text-center group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 bg-[#0f172a] text-[#38bdf8] rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">📜</div>
                  <span className="text-sm text-slate-500 font-semibold">คลิกดูรูป</span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-[#0f172a] leading-tight mb-2">Internet of Things (IoT) สำหรับผู้เริ่มต้น</h3>
                <p className="text-[#38bdf8] text-sm font-semibold">Udemy Online Course</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200 border-dashed opacity-70">
              <div className="aspect-[4/3] bg-white rounded-2xl mb-6 flex items-center justify-center shadow-sm">
                <span className="text-slate-400 font-semibold text-sm">พื้นที่สำหรับใบรับรองเพิ่มเติม</span>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-400 mb-2">Certificate Name</h3>
                <p className="text-slate-400 text-sm font-medium">Issuer Organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-white border-t border-slate-100">
        <p className="text-slate-400 font-medium text-sm">
          
        </p>
      </footer>
      
    </div>
  );
}