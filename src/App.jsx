import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalImage, setModalImage] = useState(null);

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

  // ฟังก์ชันสลับสีปุ่มเมนู
  const getNavClass = (section) => {
    return activeSection === section
      ? "px-5 py-2 rounded-xl bg-blue-500 text-white font-medium shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all duration-300"
      : "px-5 py-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300";
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
    <div className="min-h-screen bg-[#f4f9ff] text-slate-700 font-sans selection:bg-blue-200">
      
      {/* --- ระบบคลิกขยายรูป (Modal) --- */}
      {modalImage && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity" onClick={() => setModalImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-all" onClick={() => setModalImage(null)}>
              ✕ ปิดหน้าต่าง
            </button>
            <img src={modalImage} alt="Zoomed" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-white" />
          </div>
        </div>
      )}

      {/* --- NAVBAR (Floating Style) --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/80 backdrop-blur-xl border border-blue-100/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-50 transition-all">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
              {'{ }'}
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent hidden sm:block">
              Nanthapat.dev
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <a href="#home" className={getNavClass('home')}>หน้าแรก</a>
            <a href="#about" className={getNavClass('about')}>เกี่ยวกับฉัน</a>
            <a href="#resume" className={getNavClass('resume')}>เรซูเม่</a>
            <a href="#projects" className={getNavClass('projects')}>ผลงาน</a>
            <a href="#certificates" className={getNavClass('certificates')}>ใบรับรอง</a>
          </div>
        </div>
      </nav>

      {/* --- 1. HOME SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl"></div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Available for Work & Internship
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight mb-6">
          Hi, I'm <span className="text-blue-500 relative">
            Nanthapat
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          นักศึกษาวิทยาการคอมพิวเตอร์ ผู้หลงใหลในการสร้างสรรค์ระบบ Web Application และ Database ด้วยโค้ดที่สะอาดและ UI ที่ใช้งานง่าย
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <a href="#projects" className="px-8 py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-1">
            ดูผลงานของฉัน
          </a>
          <a href="#about" className="px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-600 rounded-xl font-medium transition-all hover:-translate-y-1">
            ข้อมูลเพิ่มเติม
          </a>
        </div>
      </section>

      {/* --- 2. ABOUT ME SECTION --- */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-3">เกี่ยวกับฉัน</h2>
            <div className="h-1.5 w-16 bg-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-500 rounded-lg">👋</span> 
                สวัสดีค่ะ
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                ดิฉัน นางสาวนันทพัทธ์ เกิดสาสน์ ปัจจุบันกำลังศึกษาอยู่สาขา <span className="font-semibold text-blue-600">วิทยาการคอมพิวเตอร์ (Computer Science)</span> มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                มีความสนใจสายงาน Web Developer, Backend และ Full-Stack ชอบวิเคราะห์และออกแบบระบบฐานข้อมูลที่ซับซ้อนให้ทำงานได้จริง เคยพัฒนาโปรเจกต์ทั้งระบบ Front-end และ Back-end รวมถึงระบบจัดการสินค้าที่มีผู้ใช้งานจริง
              </p>

              {/* 🌟 Hard Skills (แบบไอคอนชี้แล้วชื่อโปรแกรมเด้ง) */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Hard Skills</h4>
                <div className="flex flex-wrap gap-4">
                  {skillIcons.map((skill, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                        <img src={skill.src} alt={skill.name} className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      </div>
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-10">
                        {skill.name}
                        <svg className="absolute text-slate-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                <a href="mailto:16632046@aru.ac.th" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  mixqvx@gmail.com
                </a>
                <a href="https://github.com/mixxxxz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  GitHub: mixxxxz
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 bg-blue-500 rounded-[2.5rem] rotate-6 opacity-10"></div>
              <div className="absolute inset-0 bg-blue-400 rounded-[2.5rem] -rotate-3 opacity-20"></div>
              <div className="w-full aspect-[4/5] bg-white border border-slate-100 rounded-[2.5rem] relative z-10 shadow-xl flex items-center justify-center p-8">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">👩‍💻</div>
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
            <h2 className="text-4xl font-extrabold text-slate-800 mb-3">ประสบการณ์และทักษะ</h2>
            <div className="h-1.5 w-16 bg-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#f4f9ff] p-8 rounded-3xl border border-blue-50 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-500 text-white rounded-lg">🎓</span> ประวัติการศึกษา
              </h3>
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-[#f4f9ff]"></div>
                <h4 className="text-lg font-bold text-slate-800">ปริญญาตรี วิทยาการคอมพิวเตอร์</h4>
                <p className="text-blue-600 text-sm font-medium mt-1">มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา</p>
                <p className="text-slate-500 text-sm mt-2">กำลังศึกษา</p>
              </div>
            </div>

            <div className="bg-[#f4f9ff] p-8 rounded-3xl border border-blue-50 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-500 text-white rounded-lg">💻</span> ประสบการณ์พัฒนาซอฟต์แวร์
              </h3>
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-[#f4f9ff]"></div>
                <h4 className="text-lg font-bold text-slate-800">Full-Stack Development</h4>
                <p className="text-blue-600 text-sm font-medium mt-1">ระบบร้านซ่อมรถ & เว็บร้านเครื่องเขียน</p>
                <p className="text-slate-500 text-sm mt-2">ออกแบบฐานข้อมูล, ระบบจัดการคลังสินค้า, ระบบหลังบ้าน</p>
              </div>
            </div>
          </div>

          {/* 🌟 Hard Skills แบบ Text Pill คลีนๆ ตรง Resume (ไม่ใส่ไอคอน) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#fcfdff] p-6 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-slate-700 italic mb-5" style={{ fontFamily: 'serif' }}>Front-end</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">HTML/CSS</span>
              </div>
            </div>
            
            <div className="bg-[#fcfdff] p-6 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-slate-700 italic mb-5" style={{ fontFamily: 'serif' }}>Back-end</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">PHP</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">C# .NET</span>
              </div>
            </div>

            <div className="bg-[#fcfdff] p-6 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-slate-700 italic mb-5" style={{ fontFamily: 'serif' }}>Database & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">MySQL</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">SQL Server</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">Git/GitHub</span>
              </div>
            </div>

            <div className="bg-[#fcfdff] p-6 rounded-[2rem] border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-slate-700 italic mb-5" style={{ fontFamily: 'serif' }}>Others</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">Bootstrap</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">Word</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">Excel</span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium">PowerPoint</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-3">ผลงานโดดเด่น</h2>
            <div className="h-1.5 w-16 bg-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-24">
            
            <div className="group">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 cursor-pointer" onClick={() => openModal('https://via.placeholder.com/1200x800/e0f2fe/0369a1?text=Stationery+Shop+Screenshot')}>
                  <div className="bg-white p-3 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-blue-50 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                       <span className="bg-white px-4 py-2 rounded-full text-blue-600 font-bold text-sm shadow-lg">🔍 คลิกเพื่อขยาย</span>
                    </div>
                    <div className="aspect-[4/3] bg-slate-100 rounded-3xl flex items-center justify-center">
                       <span className="text-slate-400">รูปเว็บร้านเครื่องเขียน</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold mb-4">C# ASP.NET</div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Stationery Shop Web Application</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    ระบบเว็บไซต์อีคอมเมิร์ซร้านเครื่องเขียน พัฒนาด้วย C# จัดการตะกร้าสินค้า ระบบชำระเงิน และระบบหลังบ้าน (Dashboard) สำหรับผู้ดูแลระบบเพื่อตรวจสอบออเดอร์และคลังสินค้า
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">C# .NET</span>
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">SQL Server</span>
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">Bootstrap</span>
                  </div>
                  <a href="https://github.com/mixxxxz/stationery-shop-web" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                    ดู Source Code บน GitHub <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="w-full md:w-1/2 cursor-pointer" onClick={() => openModal('https://via.placeholder.com/1200x800/e0f2fe/0369a1?text=Motorcycle+Repair+Shop+Screenshot')}>
                  <div className="bg-white p-3 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-blue-50 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-[2px]">
                       <span className="bg-white px-4 py-2 rounded-full text-blue-600 font-bold text-sm shadow-lg">🔍 คลิกเพื่อขยาย</span>
                    </div>
                    <div className="aspect-[4/3] bg-slate-100 rounded-3xl flex items-center justify-center">
                       <span className="text-slate-400">รูประบบร้านซ่อมรถ</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold mb-4">PHP & MySQL</div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Motorcycle Repair Shop System</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    ระบบแอปพลิเคชันจัดการร้านซ่อมรถจักรยานยนต์แบบครบวงจร ครอบคลุมระบบจองคิว ติดตามสถานะงานซ่อม พิมพ์ใบเสร็จ และการจัดการสต็อกอะไหล่
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">PHP</span>
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">MySQL</span>
                    <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">HTML/CSS</span>
                  </div>
                  <a href="https://github.com/mixxxxz/motorcycle-repair-shop" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                    ดู Source Code บน GitHub <span className="text-xl">→</span>
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-800 mb-3">ประกาศนียบัตร</h2>
              <div className="h-1.5 w-16 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-slate-500 font-medium">ใบรับรองเพื่อยืนยันการพัฒนาทักษะ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f4f9ff] p-4 rounded-3xl border border-blue-50">
              <div className="aspect-[4/3] bg-white rounded-2xl cursor-pointer hover:shadow-lg transition-all mb-6 border border-slate-100 flex items-center justify-center overflow-hidden group"
                   onClick={() => openModal('https://via.placeholder.com/800x600/ffffff/3b82f6?text=Udemy+IoT+Course')}>
                <div className="text-center group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">📜</div>
                  <span className="text-sm text-slate-400 font-medium">คลิกดูรูป</span>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2">Internet of Things (IoT) สำหรับผู้เริ่มต้น</h3>
                <p className="text-blue-500 text-sm font-medium">Udemy Online Course</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 border-dashed opacity-70">
              <div className="aspect-[4/3] bg-white rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-slate-300 font-medium text-sm">พื้นที่สำหรับใบรับรองเพิ่มเติม</span>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-400 mb-2">Certificate Name</h3>
                <p className="text-slate-300 text-sm">Issuer Organization</p>
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