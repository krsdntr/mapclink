import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pilihan Paket & Investasi</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hanya dengan modal awal <strong>Rp 500.000</strong>, Anda sudah memiliki aset digital sendiri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option A */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col relative">
            <div className="p-8 pb-4">
                <h3 className="text-slate-500 font-semibold uppercase tracking-wide text-sm">Opsi A</h3>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Hemat Selamanya</h4>
                <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 500.000</span>
                    <span className="ml-2 text-slate-500 text-sm font-medium">/ Sekali Bayar</span>
                </div>
                <p className="mt-4 text-slate-600">Cocok untuk usaha pemula yang ingin online tanpa biaya tahunan.</p>
            </div>
            
            <div className="bg-slate-50 px-8 py-6 flex-grow">
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <Check className="text-green-500 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Domain: <span className="font-mono font-bold text-slate-900 bg-slate-200 px-1 rounded">namausaha.pages.dev</span></span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-green-500 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Biaya Tahunan: <span className="font-bold text-green-600">Rp 0 (GRATIS)</span></span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-green-500 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Hosting Server Gratis (Cloudflare/Vercel)</span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-green-500 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">SSL (Gembok Hijau) Termasuk</span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-green-500 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Integrasi Tombol WhatsApp</span>
                    </li>
                </ul>
            </div>
            <div className="p-8 pt-4">
                <a href="https://wa.me/6285186816062?text=YA,%20SAYA%20TERTARIK%20PAKET%20A" className="block w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-center transition-colors">
                    Pilih Paket Hemat
                </a>
            </div>
          </div>

          {/* Option B */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-primary-500 flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                POPULER
            </div>
            <div className="p-8 pb-4">
                <h3 className="text-primary-600 font-semibold uppercase tracking-wide text-sm">Opsi B</h3>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">Professional Branding</h4>
                <div className="mt-6">
                    <span className="text-4xl font-extrabold text-slate-900">Rp 500.000</span>
                    <span className="ml-2 text-slate-500 text-sm font-medium"> + Harga Domain</span>
                </div>
                <p className="mt-4 text-slate-600">Untuk bisnis yang ingin terlihat lebih bonafide dan profesional.</p>
            </div>
            
            <div className="bg-primary-50 px-8 py-6 flex-grow">
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <Check className="text-primary-600 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Domain: <span className="font-mono font-bold text-slate-900 bg-white border border-slate-200 px-1 rounded">.com / .id / .co.id</span></span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-primary-600 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Biaya Tahunan: Sesuai harga domain + 100rb Admin</span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-primary-600 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Hosting Server Gratis (Cloudflare/Vercel)</span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-primary-600 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">SSL (Gembok Hijau) Termasuk</span>
                    </li>
                    <li className="flex items-start">
                        <Check className="text-primary-600 shrink-0 mr-3" size={20} />
                        <span className="text-slate-700 text-sm">Integrasi Tombol WhatsApp</span>
                    </li>
                </ul>
            </div>
            <div className="p-8 pt-4">
                <a href="https://wa.me/6285186816062?text=YA,%20SAYA%20TERTARIK%20PAKET%20B" className="block w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 px-4 rounded-xl text-center shadow-lg transition-all">
                    Pilih Paket Professional
                </a>
            </div>
          </div>
        </div>

        {/* Update Cost Info */}
        <div className="max-w-3xl mx-auto mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-start gap-4">
            <Info className="text-blue-500 shrink-0" />
            <div>
                <h5 className="font-bold text-blue-900 mb-1">Keterangan Biaya Update Konten</h5>
                <p className="text-blue-800 text-sm leading-relaxed">
                    Setelah website jadi, jika di kemudian hari Anda ingin mengubah harga, menambah menu, atau ganti foto, biaya jasa update sangat terjangkau: 
                    <br/><span className="font-bold">Rp 25.000 - Rp 100.000 per request</span> (Tergantung banyaknya perubahan data).
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;