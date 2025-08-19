"use client"

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Mail, Github, Linkedin, Phone, MapPin, Globe, Download, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const copy = {
  id: {
    role: "Web Developer",
    heroTitle: "Halo, saya ",
    heroSubtitle: "Saya membangun website cepat, modern, dan responsif.",
    aboutTitle: "Tentang Saya",
    aboutBody:
      "Siswa SMK / Mahasiswa (TKJ/Software Engineering). Tertarik pada Frontend, Backend, serta DevOps dasar. Fokus pada pembuatan aplikasi web yang rapi, mudah digunakan, dan scalable.",
    skillsTitle: "Keahlian Utama",
    projectsTitle: "Proyek Pilihan",
    experienceTitle: "Pengalaman",
    contactTitle: "Kontak",
    locationLabel: "Berdomisili",
    toolsTitle: "Alat & Teknologi",
    downloadCV: "Unduh CV",
    formName: "Nama",
    formEmail: "Email",
    formMessage: "Pesan",
    formSend: "Kirim Pesan",
    roleschool: "Web Developer | Teknik Komputer Dan Jaringan",
    summary: "Tentang Saya",
    education: "Edukasi",
    certification: "Sertifikasi",
    about: "Siswa aktif dan antusias jurusan Teknik Komputer dan Jaringan di SMKN 1 Blitar dengan minat besar pada pengembangan web dan infrastruktur IT. Terampil dalam pengembangan frontend, manajemen proyek, serta desain UI/UX. Memiliki pengalaman nyata dalam membangun proyek seperti platform e-commerce dan desain portofolio freelance untuk klien internasional. Mampu berkomunikasi dalam Bahasa Inggris (bersertifikat TOEIC) dan bersemangat untuk menambah pengalaman profesional melalui program magang.",
  },
  en: {
    role: "Web Developer",
    heroTitle: "Hi, I'm ",
    heroSubtitle: "I build fast, modern, responsive websites.",
    aboutTitle: "About Me",
    aboutBody:
      "Vocational student / undergraduate (TKJ/Software Engineering). Interested in Frontend, Backend, and basic DevOps. I focus on clean, usable, and scalable web apps.",
    skillsTitle: "Core Skills",
    projectsTitle: "Selected Projects",
    experienceTitle: "Experience",
    contactTitle: "Contact",
    locationLabel: "Based in",
    toolsTitle: "Tools & Tech",
    downloadCV: "Download CV",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send Message",
    roleschool: "Web Developer | Computer & Network Engineering Student",
    summary: "Summary",
    education: "Education",
    certification: "Certifications",
    about: "Enthusiastic and active Computer and Network Engineering student at SMKN 1 Blitar with strong interest in web development and IT infrastructure. Skilled in frontend development, project management, and UI/UX design. Proven experience in building real projects such as e-commerce platforms and freelance portfolio designs for international clients. Able to communicate in English (TOEIC certified) and eager to gain more professional experience through internship.",
  },
};

export default function Portfolio() {
  const [lang, setLang] = React.useState("id");
  const [isOpen, setIsOpen] = React.useState(false);
  const t = copy[lang];

  const profile = {
    name: "Mohammad Ardan Rizky Alfiantoro",
    role: t.role,
    summary:
      lang === "id"
        ? "Web developer pemula dengan portofolio nyata. Terbiasa dengan React, Node.js, dan REST API. Berpengalaman membangun landing page, dashboard, dan sistem auth."
        : "Entry-level web developer with real-world projects. Comfortable with React, Node.js, and REST APIs. Experienced in building landing pages, dashboards, and auth systems.",
    location: "Blitar, Indonesia",
    email: "ardankerja@gmail.com",
    phone: "+6287860383724",
    website: "ardanalfian.vercel.app",
    github: "https://github.com/danssui2",
    linkedin: "https://www.linkedin.com/in/ardan-alfian/",
    cvUrl: "https://drive.google.com/file/d/1MVBz4G91_RjSJxoSiIorOV_0jegWpzjC/view?usp=sharing", 
  };

  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express", "REST API", "MongoDB", "Git", "Vite",
  ];

  const tools = ["VS Code", "Postman", "Figma", "GitHub", "Linux", "Nginx", "Docker (dasar)"];

  const projects = [
    {
  title: "Quransaneba App",
  desc:
    lang === "id"
      ? "Aplikasi website untuk pembelajaran Al-Qur’an dengan tampilan modern dan mudah digunakan."
      : "Web application for Qur’an learning with modern and user-friendly design.",
  tech: ["React", "Node.js", "Express", "MongoDB"],
  link: "https://quransaneba.vercel.app",
  repo: "https://github.com/danssui2/quran-react",
  img: "/qurans.png",
  impact:
    lang === "id"
      ? "Digunakan oleh puluhan pelajar lokal, mempermudah akses materi pembelajaran."
      : "Adopted by dozens of local students, improved accessibility to learning materials.",
},
{
  title: "Smekenshop E-Commerce",
  desc:
    lang === "id"
      ? "Aplikasi e-commerce sekolah untuk jual beli produk siswa. Fokus pada frontend responsif dan manajemen proyek."
      : "School e-commerce web app for student products. Focused on responsive frontend and project management.",
  tech: ["React", "Tailwind", "Firebase"],
  link: "https://smekenshop.vercel.app",
  repo: "https://github.com/danssui2/smekenshop-frontend",
  img: "/smekenshop.png",
  impact:
    lang === "id"
      ? "Digunakan oleh warga sekolah, membantu siswa mempraktikkan transaksi digital nyata."
      : "Used by school community, helping students practice real digital transactions.",
},
{
  title: "Web Design – Dinas Pendidikan Jatim",
  desc:
    lang === "id"
      ? "Website resmi dengan tampilan modern, responsif, dan sesuai standar pemerintah."
      : "Official website with modern, responsive design aligned with government standards.",
  tech: ["HTML", "CSS", "JavaScript"],
  link: "https://www.figma.com/design/Det48qDidimKTErTOv7zGm/Project--Mohammad-Ardan-R.A?node-id=57-683&t=OpLnVJXD5usbHcd0-1",
  repo: "https://www.figma.com/design/Det48qDidimKTErTOv7zGm/Project--Mohammad-Ardan-R.A?node-id=57-683&t=OpLnVJXD5usbHcd0-1",
  img: "/dindik.jpeg",
  impact:
    lang === "id"
      ? "Meningkatkan aksesibilitas informasi publik dan kemudahan navigasi pengguna."
      : "Improved public information accessibility and user navigation experience.",
},

  ];

  const experiences = [
    {
  org: "SMKN 1 Blitar",
  role: lang === "id" ? "Ketua Panitia Diesnatalis 59" : "Chairman of Diesnatalis 59 Committee",
  date: "2025",
  points:
    lang === "id"
      ? [
          "Memimpin kepanitiaan besar dengan ribuan peserta.",
          "Mengkoordinasikan lebih dari 50 anggota panitia lintas divisi.",
          "Mengelola anggaran, sponsor, dan komunikasi eksternal.",
          "Berhasil menghadirkan guest star dan menarik >5.000 pengunjung.",
        ]
      : [
          "Led a large committee with thousands of participants.",
          "Coordinated over 50 committee members across divisions.",
          "Managed budget, sponsorships, and external communications.",
          "Successfully invited guest star and attracted >5,000 visitors.",
        ],
},
{
  org: "Universitas Negeri Surabaya (UNESA)",
  role: lang === "id" ? "Peserta Pelatihan Vokasi" : "Vocational Training Participant",
  date: "2025",
  points:
    lang === "id"
      ? [
          "Mengikuti pelatihan vokasi di bidang teknologi informasi.",
          "Mendapat pengalaman langsung praktik bersama dosen & mahasiswa UNESA.",
          "Memperluas jaringan akademik dan profesional di bidang IT.",
        ]
      : [
          "Participated in vocational training in information technology.",
          "Gained hands-on experience with UNESA lecturers and students.",
          "Expanded academic and professional networks in IT.",
        ],
},
{
  org: "Smekenshop E-Commerce",
  role: lang === "id" ? "Frontend Developer & Project Manager" : "Frontend Developer & Project Manager",
  date: "2024",
  points:
    lang === "id"
      ? [
          "Memimpin tim kecil untuk membangun aplikasi e-commerce sekolah.",
          "Mengimplementasikan frontend responsif dengan React & Tailwind.",
          "Membagi tugas tim dan mengatur timeline proyek.",
        ]
      : [
          "Led a small team to build a school e-commerce app.",
          "Implemented responsive frontend with React & Tailwind.",
          "Distributed tasks and managed project timeline.",
        ],
},
{
  org: "Quransaneba App",
  role: lang === "id" ? "Fullstack Developer" : "Fullstack Developer",
  date: "2023",
  points:
    lang === "id"
      ? [
          "Mengembangkan aplikasi web untuk pembelajaran Al-Qur’an.",
          "Membangun backend dengan Express & MongoDB.",
          "Mendesain UI modern dan mudah digunakan.",
        ]
      : [
          "Developed a web application for Qur’an learning.",
          "Built backend with Express & MongoDB.",
          "Designed modern and user-friendly UI.",
        ],
},

  ];

  const contacts = [
    { icon: <Mail size={18} />, label: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={18} />, label: profile.phone, href: `https://wa.me/${profile.phone.replace(/\s|-/g, "")}` },
    { icon: <Github size={18} />, label: "GitHub", href: profile.github },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: profile.linkedin },
    { icon: <Globe size={18} />, label: profile.website, href: `https://${profile.website}` },
  ];

  // --- UI helpers ---
  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinks = {
    en: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    id: [
      { href: "#home", label: "Beranda" },
      { href: "#about", label: "Tentang" },
      { href: "#experience", label: "Pengalaman" },
      { href: "#contact", label: "Kontak" },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-yellow-400/30 selection:text-yellow-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
              <Code2 className="w-5 h-5 text-black" />
            </div>
            <span className="font-semibold tracking-wide">Ardan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-6 mr-6">
              {navLinks[lang].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-200 hover:text-yellow-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 110 }}
          className="md:hidden absolute bg-black/90 px-4 py-4 flex flex-col gap-3"
        >
          {navLinks[lang].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-200 hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300" onClick={() => setLang(lang === "id" ? "en" : "id")}> {lang === "id" ? "EN" : "ID"} </Button>
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl">
                <Download className="w-4 h-4 mr-2" /> {t.downloadCV}
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <motion.div variants={fade} initial="hidden" animate="show" className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {t.heroTitle}
              <span className="text-yellow-400">{profile.name}</span>
            </h1>
            <p className="mt-3 text-neutral-300">{profile.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-yellow-500 text-black">{profile.role}</Badge>
              <Badge variant="outline" className="border-yellow-600/60 text-yellow-400">JavaScript</Badge>
              <Badge variant="outline" className="border-yellow-600/60 text-yellow-400">React</Badge>
              <Badge variant="outline" className="border-yellow-600/60 text-yellow-400">Node.js</Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {contacts.map((c, i) => (
                <a key={i} href={c.href} className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-yellow-700/40 hover:border-yellow-400/80 transition">
                  {c.icon}
                  <span className="text-sm">{c.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-neutral-400 text-sm">
              <MapPin size={16} /> {t.locationLabel}: {profile.location}
            </div>
          </motion.div>
          <motion.div>
            <Image src="/Hero.png" width="400" height="600" alt="profile"/>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Card className="bg-neutral-900/60 border-yellow-700/30 rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-col md:flex-row items-center gap-6">
              {/* Foto Profil */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

        {/* Nama dan Role */}
        <div>
          <CardTitle className="text-2xl md:text-3xl text-slate-100 font-bold">
            {profile.name}
          </CardTitle>
          <CardDescription className="text-yellow-400 text-lg">
            {t.roleschool}
          </CardDescription>
          <p className="text-neutral-400 text-sm mt-2">
            Blitar, Indonesia • ardankerja@gmail.com
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.summary}</h3>
          <p className="text-neutral-300 leading-relaxed">{t.about}</p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">Skills & Tools</h3>
          <ul className="grid grid-cols-2 gap-2 text-neutral-300">
            <li>Web Development: HTML, CSS, JavaScript, React, Node.js, Express, Next.js</li>
            <li>Network Engineering: LAN/WLAN installation & troubleshooting</li>
            <li>Project Management: Team coordination, task planning</li>
            <li>Tools: GitHub, Figma, VS Code</li>
            <li>Languages: Bahasa Indonesia, English, Java</li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.certification}</h3>
          <ul className="list-disc list-inside text-neutral-300 space-y-1">
            <li>UPT. PTKK MJC CLASS 2025 – Web Design</li>
            <li>TOEIC Test</li>
            <li>Duta Pancasila PIP</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.education}</h3>
          <ul className="space-y-3 text-neutral-300">
            <li>
              <b>MTsN 1 Kota Blitar – Junior High School</b>
              <p className="text-neutral-400 text-sm">
                Joined IT extracurriculars, represented school in science & technology competitions.
              </p>
            </li>
            <li>
              <b>SMKN 1 Blitar – Computer and Network Engineering (TKJ)</b>
              <p className="text-neutral-400 text-sm">
                Relevant Courses: Networking, Security, Web Dev, Database, OS, Troubleshooting.  
                Projects: LAN classroom system, Smekenshop E-Commerce app, lab maintenance, 
                local web design competitions.
              </p>
            </li>
          </ul>
        </div>        
      </CardContent>
    </Card>
  </motion.div>
</section>


      {/* SKILLS */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{t.skillsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <motion.div key={s} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="bg-neutral-900/60 hover:bg-gradient-to-bl hover:scale-[102%] transition-all from-yellow-500 to-yellow-800 border-yellow-700/30 rounded-2xl">
                <CardContent className="py-4 flex items-center justify-between">
                  <span className="font-medium text-slate-200">{s}</span>
                  <Badge className="bg-yellow-500/90 text-black">Proficient</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, idx) => (
            <motion.div key={p.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="bg-neutral-900/60 hover:scale-[102%] transition-all border-yellow-700/30 overflow-hidden rounded-2xl">
                <Image src={p.img} alt="project img" width={100} height={100} className="h-64 w-full" />
                <CardHeader>
                  <CardTitle className="text-slate-200">{p.title}</CardTitle>
                  <CardDescription className="text-neutral-400">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-yellow-700/50 text-yellow-300">{t}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-400">{p.impact}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <a href={p.link} className="inline-flex items-center gap-1 text-yellow-300 hover:text-yellow-200"><ExternalLink size={16} /> Live</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-yellow-300 hover:text-yellow-200"><Github size={16} /> Repo</a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{t.experienceTitle}</h2>
        <div className="grid gap-4">
          {experiences.map((e) => (
            <Card key={e.org} className="bg-neutral-900/60 hover:bg-gradient-to-bl hover:scale-[102%] transition-all from-yellow-500 to-yellow-800 border-yellow-700/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-slate-200">{e.role}</span>
                  <span className="text-sm font-normal text-neutral-400">{e.date}</span>
                </CardTitle>
                <CardDescription className="text-neutral-300">{e.org}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-neutral-300">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{t.contactTitle}</h2>
            <p className="text-neutral-300 mb-3">{lang === "id" ? "Terbuka untuk proyek freelance, magang, atau kolaborasi." : "Open for freelance, internship, or collaboration."}</p>
            <div className="space-y-2">
              {contacts.map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-2 text-neutral-300 hover:text-yellow-300">
                  {c.icon}
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>
          <Card className="bg-neutral-900/60 border-yellow-700/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-200">{lang === "id" ? "Kirimkan Pesan" : "Send a Message"}</CardTitle>
              <CardDescription className="text-neutral-400">{lang === "id" ? "Saya akan menghubungi balik secepat mungkin" : "I will reply as soon as possible"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input placeholder={t.formName} className="rounded-xl bg-neutral-950 border-yellow-800/40" />
                <Input placeholder={t.formEmail} className="rounded-xl bg-neutral-950 border-yellow-800/40" />
                <Textarea rows={5} placeholder={t.formMessage} className="rounded-xl bg-neutral-950 border-yellow-800/40" />
              </div>
            </CardContent>
            <CardFooter>
              
              <a href="mailto:ardankerja@gmail.com" >
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl w-full">{t.formSend}</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-700/20 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} {profile.name}. {lang === "id" ? "Dibuat dengan" : "Built with"} ❤️
      </footer>
    </div>
  );
}

// --- Tips Penggunaan ---
// 1) Ganti semua placeholder [Nama Anda], emailkamu, URL GitHub/LinkedIn.
// 2) Taruh CV Anda di /public/cv.pdf lalu ubah profile.cvUrl jika perlu.
// 3) Deploy ke Vercel/Netlify. Jika memakai Next.js, bungkus komponen ini di halaman app/page.tsx.
// 4) Hubungkan form ke EmailJS atau endpoint API Anda.
// 5) Sesuaikan warna: gunakan kelas Tailwind (kuning/emas + hitam).
