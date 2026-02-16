import React from 'react';
import { ArrowRight, MapPin, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-blue-50 to-white opacity-80" />
      <div className="absolute top-20 right-0 -mr-20 -z-10 bg-primary-100 rounded-full w-96 h-96 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -z-10 bg-secondary-100 rounded-full w-72 h-72 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary-700 text-sm font-semibold border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Powered by Mapclink Services
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Ubah Reputasi <span className="text-primary-600">Google Maps</span> Menjadi Penjualan
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Saya, <strong>Krisdiantoro</strong>, menawarkan solusi pembuatan Landing Page Profesional yang otomatis mengambil data terbaik dari Google Maps Anda. Tanpa biaya bulanan, sekali bayar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/6285186816062?text=YA,%20SAYA%20TERTARIK"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-secondary-500/30 transition-all transform hover:-translate-y-1"
              >
                Buat Prototype Gratis
                <ArrowRight size={20} />
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Lihat Paket Harga
              </a>
            </div>

            <p className="text-sm text-slate-500 flex items-center gap-2">
              <span className="bg-green-100 text-green-700 p-1 rounded-full"><Star size={12} fill="currentColor" /></span>
              Tanpa DP. Lihat hasil dulu, baru bayar.
            </p>
          </div>

          <div className="relative">
             {/* Mockup Representation */}
             <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="bg-slate-100 rounded-xl overflow-hidden aspect-[4/3] relative flex flex-col">
                    {/* Fake Header */}
                    <div className="bg-white p-4 flex justify-between items-center shadow-sm">
                        <div className="h-4 w-24 bg-slate-200 rounded"></div>
                        <div className="h-8 w-24 bg-primary-600 rounded-full"></div>
                    </div>
                    {/* Fake Content */}
                    <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-4">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                           <MapPin size={32} />
                        </div>
                        <div className="h-6 w-3/4 bg-slate-800 rounded mx-auto"></div>
                        <div className="flex gap-1 justify-center">
                            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400" fill="currentColor"/>)}
                        </div>
                        <div className="h-4 w-1/2 bg-slate-300 rounded mx-auto"></div>
                        <div className="h-20 w-full bg-slate-200 rounded-lg mt-4"></div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Elements behind mockup */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
             <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-primary-600 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;