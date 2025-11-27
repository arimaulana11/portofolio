"use client";

import React from "react";

// Google Sheets Fetch (API Route)
// Buat file di: app/api/sheet/route.ts
// Lalu gunakan di komponen

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6 sm:p-10">
        {/* Header / Hero */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">[Nama Kamu]</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Fresh Graduate Sistem Informasi • Web Developer • Content Creator</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Lihat Proyek</a>
              <a href="#contact" className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-100">Hubungi Saya</a>
            </div>
          </div>
          <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-pink-300 to-indigo-400 shadow-lg flex items-center justify-center overflow-hidden">
            {/* Placeholder avatar */}
            <span className="font-semibold text-white">Avatar</span>
          </div>
        </header>

        {/* About */}
        <section className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold">Tentang Saya</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-200">Saya adalah fresh graduate Sistem Informasi yang fokus pada pengembangan web (Next.js, Golang), arsitektur SaaS multi-tenant, dan automasi. Saya sedang mencari posisi junior developer atau kesempatan magang untuk mengembangkan kemampuan dan berkontribusi pada tim.</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm mt-1">S1 Sistem Informasi — Universitas Siber Asia</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <h3 className="font-semibold">Tugas Akhir</h3>
              <p className="text-sm mt-1">Sistem Manajemen Poin Berbasis SaaS (Golang)</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <h3 className="font-semibold">Availability</h3>
              <p className="text-sm mt-1">Open to remote & on-site — Looking for Junior Roles</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-8">
          <h2 className="text-2xl font-bold">Proyek Pilihan</h2>
          <div className="mt-4 grid gap-4">
            <ProjectCard
              title="PointMaster — SaaS Multi-Tenant"
              description="Sistem manajemen poin untuk UKM dengan arsitektur multi-tenant, Golang, gRPC, PostgreSQL, Redis."
              tags={["Golang", "gRPC", "PostgreSQL"]}
              link="#"
            />

            <ProjectCard
              title="CMS Auto-Generator dari .proto"
              description="Generator CRUD React/Next.js otomasi dari file Protocol Buffers (proto), lengkap dengan zod schema dan react-hook-form."
              tags={["TypeScript", "Next.js", "Zod"]}
              link="#"
            />

            <ProjectCard
              title="WhatsApp Scheduler untuk Toko Kelontong"
              description="Sistem otomatis kirim pesan via whatsapp-web.js untuk pengingat stok dan laporan harian."
              tags={["Node.js", "whatsapp-web.js", "API"]}
              link="#"
            />
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Golang",
              "Next.js",
              "TypeScript",
              "React",
              "PostgreSQL",
              "Redis",
              "Docker",
              "CI/CD",
              "Figma (basic)",
            ].map((s) => (
              <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">{s}</span>
            ))}
          </div>
        </section>

        {/* Story / Family */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Story & Support</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-200">Saya dibesarkan di keluarga yang mendukung langkah karier: satu kakak berprofesi di bidang kesehatan (bidan/perawat) dan satu kakak programmer — pengalaman keluarga ini membentuk minat saya di kedua dunia: teknologi dan empati terhadap pengguna.</p>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2">Email: <a href="mailto:email@domain.com" className="text-blue-600">email@domain.com</a></p>
          <p className="mt-1">GitHub: <a href="#" className="text-blue-600">github.com/username</a></p>
          <p className="mt-1">LinkedIn: <a href="#" className="text-blue-600">linkedin.com/in/username</a></p>

          <div className="mt-4">
            <a href="mailto:email@domain.com?subject=Job%20Opportunity" className="inline-block px-5 py-2 bg-green-600 text-white rounded-md">Kirim Email</a>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">Built with ♥ — Update this portfolio to match your personal details.</footer>

{/* Example fetch Google Sheet */}
<script>
{/*
async function loadSheet() {
  const res = await fetch('/api/sheet');
  const data = await res.json();
  console.log('Google Sheet Data:', data);
}
loadSheet();
*/}
</script>
      </div>
    </main>
  );
}

function ProjectCard({ title, description, tags, link }: { title: string; description: string; tags: string[]; link: string }) {
  return (
    <article className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a href={link} className="text-sm text-blue-600">View</a>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{t}</span>
        ))}
      </div>
    </article>
  );
}
