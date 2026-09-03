import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const [heroText, setHeroText] = useState('');
  const fullText = "Computer Science Student | Aspiring Web Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setHeroText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'aboutme', 'skills', 'projects', 'resume', 'certificates'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillIcons = [
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' }
  ];

  // แก้ไขชื่อไฟล์ภาพที่นี่ให้สั้นลง และไม่มีเว้นวรรค
  const projectsData = [
    {
      id: 1,
      title: 'ระบบเว็บไซต์ร้านเครื่องเขียน',
      techs: ['C#', 'ASP.NET', 'SQL Server', 'HTML/CSS'],
      status: 'Completed',
      desc: 'ระบบเว็บไซต์อีคอมเมิร์ซสำหรับร้านเครื่องเขียนแบบครบวงจร (Full-Stack) แบ่งการทำงานเป็น 2 ส่วนหลักคือ ฝั่งลูกค้า (หน้าเว็บ) ที่สามารถเลือกซื้อสินค้าและชำระเงินผ่านระบบสแกนคิวอาร์โค้ด และฝั่งผู้ดูแลระบบ (Admin Dashboard) สำหรับสรุปยอดขาย จัดการสต็อกสินค้า และตรวจสอบคำสั่งซื้ออย่างเป็นระบบ',
      features: [
        'ระบบหน้าร้าน (Customer): ค้นหาและแยกหมวดหมู่สินค้า (เช่น อุปกรณ์สำนักงาน, งานศิลปะ), ดูรายละเอียดสินค้า และจัดการตะกร้าสินค้า (Cart)',
        'ระบบชำระเงิน: สรุปยอดสั่งซื้อ, สแกนชำระเงินผ่าน PromptPay QR Code และอัปโหลดสลิปหลักฐานการโอนเงิน',
        'ระบบหลังบ้าน (Admin Dashboard): หน้าแสดงสถิติภาพรวม (จำนวนลูกค้า, ออเดอร์ทั้งหมด, รายได้รวม) และจัดอันดับสินค้าขายดี',
        'ระบบจัดการคลังสินค้า (Stock Management): เพิ่ม/ลบ/แก้ไขข้อมูลสินค้า พร้อมฟังก์ชัน Quick Edit ปรับลดเพิ่มสต็อกได้ทันที',
        'ระบบจัดการคำสั่งซื้อ (Order Management): ตรวจสอบสลิปโอนเงิน, อนุมัติ/ยกเลิกคำสั่งซื้อ และอัปเดตสถานะการจัดส่งพร้อมเลขพัสดุ'
      ],
      link: 'https://github.com/mixxxxz/stationery-shop-web',
      image: '/shop1.png',
      gallery: [
        '/shop1.png', //
        '/shop2.png', //
        '/shop3.png',
        '/shop4.png',
        '/shop5.png',
        '/shop6.png',
        '/shop7.png',
        '/shop8.png'
      ]
    },
    {
      id: 2,
      title: 'ระบบบริหารจัดการร้านซ่อมรถจักรยานยนต์',
      techs: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      status: 'Completed',
      desc: 'ระบบแอปพลิเคชันบนเว็บสำหรับบริหารจัดการร้านซ่อมรถจักรยานยนต์ ออกแบบมารองรับผู้ใช้งาน 3 สิทธิ์ (ลูกค้า, ช่าง, เจ้าของร้าน) ช่วยยกระดับการให้บริการตั้งแต่การจัดการคิวรถเข้าซ่อม การเบิกจ่ายอะไหล่ ไปจนถึงการชำระเงิน',
      features: [
        'ลูกค้า (Customer): กรอกข้อมูลรถจักรยานยนต์ส่วนตัว, จองคิวซ่อมรถล่วงหน้า และติดตามสถานะงานซ่อม',
        'ช่าง (Mechanic): ดูใบงานซ่อมที่รับผิดชอบ, ทำรายการขอเบิกอะไหล่จากคลังสำหรับใช้ในงานซ่อม และดูประวัติงานที่ซ่อมเสร็จสิ้น',
        'เจ้าของร้าน (Admin) - จัดการคิวและจัดการข้อมูลผู้ใช้งาน: จัดการอนุมัติ/ยกเลิกการนัดหมายคิวซ่อม, เปิดใบงานซ่อม และจัดการข้อมูลผู้ใช้งานในระบบ(ลูกค้า,ช่าง)',
        'เจ้าของร้าน (Admin) - คลังสินค้า: จัดการสต็อกอะไหล่ และพิจารณาอนุมัติ/ปฏิเสธคำขอเบิกอะไหล่จากช่าง',
        'เจ้าของร้าน (Admin) - ระบบการเงิน: จัดการใบเสนอราคา, ระบบรับชำระเงิน (รองรับการหักมัดจำ), ตรวจสอบและอนุมัติสลิปโอนเงิน พร้อมออกใบเสร็จ'
      ],
      link: 'https://github.com/mixxxxz/motorcycle-repair-shop',
      image: '/moto1.png',
      gallery: [
        '/moto1.png', //หน้าแดชบอร์ดเจ้าของร้าน
        '/moto2.png',
        '/moto3.png',
        '/moto4.png',
        '/moto5.png',
        '/moto6.png',
        '/moto7.jpg',
        '/moto8.png',
        '/moto9.jpg'
      ]
    },
    {
      id: 3,
      title: 'วิเคราะห์ข้อมูลผลผลิตสัตว์น้ำจืด',
      techs: ['Python', 'Google Colab', 'Data Analysis'],
      status: 'Mini Project',
      desc: 'มินิโปรเจกต์วิเคราะห์และประมวลผลข้อมูลปริมาณและมูลค่าผลผลิตสัตว์น้ำจากการเพาะเลี้ยงสัตว์น้ำจืด โดยใช้ Python ในการจัดการข้อมูลและแสดงผล',
      features: [
        'ทำความสะอาดและจัดการข้อมูล (Data Preparation)',
        'สร้างกราฟแสดงผลการวิเคราะห์ (Data Visualization)',
        'รันบน Google Colab'
      ],
      link: 'https://github.com/mixxxxz/aquaculture-data-analysis',
      image: null,
      gallery: []
    }
  ];

  const skillCategories = [
    {
      title: 'การเขียนโปรแกรม',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'C#', 'PHP', 'Java', 'Bootstrap']
    },
    {
      title: 'ฐานข้อมูล',
      skills: ['MySQL', 'SQL Server']
    },
    {
      title: 'เครื่องมือและซอฟต์แวร์',
      skills: ['Visual Studio', 'VS Code', 'XAMPP', 'GitHub', 'Canva']
    },
    {
      title: 'ทักษะด้านอื่นๆ',
      skills: ['Word', 'Excel', 'PowerPoint']
    }
  ];

  const certificatesData = [
    {
      id: 1,
      title: 'ผ่านการประเมินสมรรถนะสนับสนุนการทำงานด้านการใช้ดิจิทัล (ระดับ 2)',
      issuer: 'สถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน)',
      date: '18 มีนาคม 2569',
      desc: 'ใบรายงานผลการประเมินคุณวุฒิ ผ่านเกณฑ์สมรรถนะสนับสนุนการทำงานด้านการใช้ดิจิทัล ระดับ 2 ทักษะขั้นต้นสำหรับการทำงาน ครอบคลุมการใช้งานคอมพิวเตอร์ อินเทอร์เน็ต และโปรแกรมสำนักงาน',
      image: '/S__9355269.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#38bdf8] selection:text-white smooth-scroll">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#home" className="text-2xl font-bold tracking-tight text-slate-900 group">
            &lt;Portfolio<span className="text-[#38bdf8]">/</span>&gt;
          </a>

          <div className="hidden md:flex items-center gap-2">
            {['Home', 'About me', 'Skills', 'Projects', 'Resume', 'Certificates'].map((item) => {
              const lowerItem = item.toLowerCase().replace(' ', '');
              const isActive = activeSection === lowerItem || (activeSection === 'home' && lowerItem === 'home');
              return (
                <a
                  key={item}
                  href={`#${lowerItem}`}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                      ? 'bg-[#38bdf8] text-white shadow-md shadow-[#38bdf8]/30 transform -translate-y-0.5'
                      : 'text-slate-600 hover:text-[#38bdf8] hover:bg-sky-50'
                    }`}
                >
                  {item}
                </a>
              );
            })}
          </div>

          <button
            className="md:hidden text-slate-600 hover:text-[#38bdf8]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col p-6 space-y-4 md:hidden border-t border-slate-100 shadow-xl">
          {['Home', 'About me', 'Skills', 'Projects', 'Resume', 'Certificates'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-600 hover:text-[#38bdf8] p-2 border-b border-slate-100"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="z-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 tracking-tight italic relative inline-block">
            Portfolio
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-2xl md:text-3xl text-[#38bdf8] opacity-80 z-[-1]">
              Portfolio
            </span>
          </h1>
          <div className="mt-8 h-8 font-mono text-slate-500 text-lg md:text-xl flex items-center justify-center">
            <span className="text-[#38bdf8] mr-2">const</span> role = "<span className="text-slate-800 font-bold">{heroText}</span>"
            <span className="animate-pulse ml-1 inline-block w-2 h-5 bg-[#38bdf8]"></span>
          </div>
          <div className="pt-8 flex gap-4 justify-center">
            <a href="#aboutme" className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-medium hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all hover:shadow-lg hover:-translate-y-1">
              Know More
            </a>
            <a href="#projects" className="px-8 py-3 bg-[#38bdf8] text-white rounded-full font-medium hover:bg-sky-500 transition-all hover:shadow-lg shadow-[#38bdf8]/40 hover:-translate-y-1">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="aboutme" className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-black text-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">

          <div className="mb-10 relative">
            <h2 className="text-5xl md:text-6xl font-serif italic text-white tracking-wide">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                  Hello, I'm Nanthapat Kerdsat
                </h3>
                <p className="text-slate-200 leading-relaxed mb-6">
                  นักศึกษาสาขา <span className="font-semibold text-[#38bdf8]">วิทยาการคอมพิวเตอร์ (Computer Science)</span> คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา
                </p>
                <p className="text-slate-200 leading-relaxed mb-8">
                  สนใจด้าน Web Development, Backend และ Full-Stack Development มีประสบการณ์พัฒนา Web Application ทั้ง Front-end และ Back-end รวมถึงการออกแบบและจัดการฐานข้อมูล ชอบเรียนรู้และทดลองเทคโนโลยีใหม่ ๆ และกำลังมองหาโอกาสในการนำความรู้ที่มีไปพัฒนาต่อยอดผ่านการทำงานจริง
                </p>
              </div>

              {/* Bottom Skills & Contact Row */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Hard Skills</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {skillIcons.map((skill, idx) => (
                      <div
                        key={idx}
                        className="relative group w-12 h-12 bg-zinc-900 rounded-xl p-2.5 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-800"
                      >
                        <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" />
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-zinc-900 text-xs font-bold rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 shadow-lg">
                          {skill.name}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
                  <div className="space-y-3 text-sm text-slate-300">
                    <a href="https://github.com/mixxxxz" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#38bdf8] hover:translate-x-1 transition-all duration-300 p-1 -ml-1 rounded-lg hover:bg-zinc-800/50">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                      GitHub: mixxxxz
                    </a>
                    <a href="mailto:mixqvx@gmail.com" className="flex items-center gap-3 hover:text-[#38bdf8] hover:translate-x-1 transition-all duration-300 p-1 -ml-1 rounded-lg hover:bg-zinc-800/50">
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      mixqvx@gmail.com
                    </a>
                    <a href="tel:083-2135292" className="flex items-center gap-3 hover:text-[#38bdf8] hover:translate-x-1 transition-all duration-300 p-1 -ml-1 rounded-lg hover:bg-zinc-800/50">
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      083-2135292
                    </a>
                    <div className="flex items-center gap-3 text-slate-300 p-1 -ml-1 cursor-default hover:text-[#38bdf8] transition-colors">
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      LINE ID: mixxxxk1214
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Profile Picture */}
            <div className="md:col-span-5 relative group mx-auto w-full max-w-[280px] md:max-w-full">
              <div className="absolute -right-4 -bottom-4 text-3xl z-10 animate-bounce">✨</div>
              <div className="bg-zinc-900 p-2 rounded-[2rem] border border-zinc-800">
                <div className="bg-sky-200 rounded-[1.5rem] overflow-hidden aspect-[3/4] relative">
                  <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-2">Skills</h2>
            <div className="flex items-center gap-2 text-slate-500 text-sm tracking-widest uppercase">
              <span className="text-[#38bdf8]">✦</span> TECHNICAL EXPERTISE
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-300 group hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-[#38bdf8] transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 bg-slate-100 text-slate-600 text-sm rounded-full font-medium hover:bg-[#38bdf8] hover:text-white transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-2">Projects</h2>
            <div className="flex items-center gap-2 text-slate-500 text-sm tracking-widest uppercase">
              <span className="text-[#38bdf8]">✦</span> RECENT WORKS
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 group flex flex-col overflow-hidden"
              >
                {/* หน้าปก Project การ์ด */}
                <div className="w-full h-48 bg-slate-200 overflow-hidden relative">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-sm">No Image Preview</div>
                  )}
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techs.slice(0, 2).map(tech => (
                          <span key={tech} className="px-3 py-1 bg-sky-100 text-[#38bdf8] text-xs font-bold rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.status !== 'Completed' && (
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1 whitespace-nowrap">
                          ⏳ {project.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[#38bdf8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex justify-between items-center mt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-slate-800 font-bold hover:text-[#38bdf8] transition-colors flex items-center gap-2"
                    >
                      View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-mono text-slate-500 hover:text-[#38bdf8] underline">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL อัปเดตปรับขนาดรูปให้เล็กลง ไม่บีบข้อความ */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-6" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl transform scale-100 transition-transform" onClick={e => e.stopPropagation()}>

            <div className="flex justify-between items-start mb-4 shrink-0">
              <h3 className="text-2xl font-bold text-slate-800 pr-6">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-800 text-3xl font-bold leading-none -mt-1">×</button>
            </div>

            <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">

              {/* แกลเลอรีภาพ ปรับลดความสูงรูปภาพให้เล็กลง (h-32 หรือ h-40) */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="flex gap-4 overflow-x-auto pb-4 mb-4 custom-scrollbar snap-x">
                  {selectedProject.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`screenshot-${index}`}
                      className="h-32 md:h-40 w-auto rounded-xl object-contain border border-slate-200 snap-center shadow-sm bg-slate-100"
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6 mt-1">
                {selectedProject.techs.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">{tech}</span>
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">{selectedProject.desc}</p>

              <div className="bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-100 mb-2">
                <h4 className="font-bold text-slate-800 mb-4">Key Features</h4>
                <ul className="list-disc list-outside ml-4 text-slate-600 space-y-2 text-sm">
                  {selectedProject.features.map((feat, i) => <li key={i} className="leading-relaxed">{feat}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end shrink-0">
              <a href={selectedProject.link} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-medium hover:bg-[#38bdf8] transition-colors shadow-md flex items-center gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                ดูโค้ดบน GitHub
              </a>
            </div>

          </div>
        </div>
      )}

      {/* RESUME SECTION */}
      <section id="resume" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-2">Resume</h2>
              <div className="flex items-center gap-2 text-slate-500 text-sm tracking-widest uppercase">
                <span className="text-[#38bdf8]">✦</span> MY JOURNEY
              </div>
            </div>
            <button
              onClick={() => setShowResumeModal(true)}
              className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#38bdf8] text-white rounded-full font-medium hover:bg-sky-500 transition-all shadow-md hover:-translate-y-0.5"
            >
              เปิด Resume ฉบับเต็ม
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                🎓 การศึกษา
              </h3>
              <div className="relative pl-6 border-l-2 border-sky-100">
                <div className="absolute w-3 h-3 bg-[#38bdf8] rounded-full -left-[7px] top-2"></div>
                <h4 className="font-bold text-lg text-slate-800">ปริญญาตรี วิทยาการคอมพิวเตอร์</h4>
                <p className="text-slate-500 text-sm mt-1">มหาวิทยาลัยราชภัฏพระนครศรีอยุธยา · กำลังศึกษา</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                📅 ประสบการณ์และผลงาน
              </h3>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-sky-100">
                  <div className="absolute w-3 h-3 bg-[#38bdf8] rounded-full -left-[7px] top-2 shadow-[0_0_0_4px_#e0f2fe]"></div>
                  <h4 className="font-bold text-lg text-slate-800">พัฒนาเว็บแอปพลิเคชันบริหารจัดการร้านซ่อมรถจักรยานยนต์</h4>
                  <p className="text-[#38bdf8] text-sm mt-1 mb-2 font-medium">โปรเจกต์จบ</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    ระบบสามารถจองคิว ติดตามสถานะงานซ่อม จัดการอะไหล่ และจัดการข้อมูลผู้ใช้งาน พัฒนาด้วย PHP, HTML5, CSS3, JavaScript, Bootstrap และ MySQL
                  </p>
                </div>
                <div className="relative pl-6 border-l-2 border-sky-100">
                  <div className="absolute w-3 h-3 bg-[#38bdf8] rounded-full -left-[7px] top-2"></div>
                  <h4 className="font-bold text-lg text-slate-800">พัฒนาเว็บไซต์ร้านเครื่องเขียน</h4>
                  <p className="text-[#38bdf8] text-sm mt-1 mb-2 font-medium">2024</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    ออกแบบหน้าเว็บไซต์และจัดการข้อมูลสินค้า ระบบสามารถสั่งซื้อ เพิ่ม-ลบสินค้าในตะกร้า เลือกดูสินค้าตามหมวดหมู่ ชำระเงิน พัฒนาด้วย C#, HTML, CSS, SQL Server
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowResumeModal(true)}
            className="mt-8 w-full md:hidden py-3 bg-[#38bdf8] text-white rounded-full font-medium hover:bg-sky-500 transition-all shadow-md"
          >
            เปิด Resume ฉบับเต็ม
          </button>
        </div>
      </section>

      {/* FULL RESUME MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowResumeModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full h-[80vh] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800">Full Resume</h3>
              <div className="flex gap-4">
                <a href="#" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">Download PDF</a>
                <button onClick={() => setShowResumeModal(false)} className="text-slate-400 hover:text-slate-800 text-2xl font-bold">×</button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
              <div className="aspect-[1/1.4] bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                <span className="text-slate-400 font-mono">[ Resume Document View ]</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-2">Certificates</h2>
            <div className="flex items-center gap-2 text-slate-500 text-sm tracking-widest uppercase">
              <span className="text-[#38bdf8]">✦</span> MY ACHIEVEMENTS
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 group flex flex-col cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white border border-slate-200 flex justify-center items-center p-2">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-center">
                    <div className="text-[#38bdf8] text-sm font-bold mb-2">{cert.date}</div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#38bdf8] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4">
                      ออกโดย: {cert.issuer}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
          <div className="relative flex flex-col items-center justify-center w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 md:-right-8 md:-top-8 w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold hover:bg-[#38bdf8] hover:text-white transition-all shadow-xl z-50 border-4 border-slate-900"
            >
              ×
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-white"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p className="mt-2 font-mono text-xs opacity-50"></p>
      </footer>
    </div>
  );
}