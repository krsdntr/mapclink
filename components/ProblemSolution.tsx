import React from 'react';
import { Search, Globe, CheckCircle2, XCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Profil Google Maps Saja Tidak Cukup?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bisnis Anda mungkin sudah bagus, tapi pelanggan sering kesulitan menemukan informasi detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Hanya Mengandalkan Maps</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Pelanggan harus scroll ribuan foto untuk cari menu",
                "Informasi harga sering tidak update atau membingungkan",
                "Sulit membangun branding yang kuat dan eksklusif",
                "Tidak ada tombol CTA yang jelas untuk langsung beli/chat"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 ring-2 ring-primary-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-100 text-primary-600 p-3 rounded-full">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary-900">Solusi Landing Page Saya</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Menu lengkap, daftar harga, & portofolio dalam satu halaman",
                "Terintegrasi otomatis dengan review & rating terbaik Maps",
                "Desain profesional yang meningkatkan kepercayaan (Social Proof)",
                "Tombol Chat WhatsApp yang menempel (Sticky) siap konversi"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;