import React, { useState } from 'react';
import { ExternalLink, Globe, LayoutTemplate, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  // =========================================================================
  // CARA MENAMBAH PORTOFOLIO:
  // Copy dari kurung kurawal pembuka '{' sampai penutup '},'
  // Lalu paste di bawahnya. Ganti title, category, description, dan url.
  // =========================================================================
  
  const projects = [
    // --- COPY DARI SINI ---
    {
      title: "DraftThink",
      category: "Thesis Management Landing Page",
      description: "Website digital tools untuk manajemen penyusunan thesis dan publikasi.",
      url: "https://draftthink.pages.dev",
      color: "from-blue-500 to-cyan-400" // Opsi: Warna gradient background
    },
    // --- SAMPAI SINI (Paste di bawah ini untuk nambah baru) ---
    
    // Contoh Data Kedua
    {
      title: "Prosper",
      category: "Money Management",
      description: "Aplikasi pencatatan keuangan digital tanpa login dan local-oriented.",
      url: "https://prosper-id.vercel.app",
      color: "from-emerald-500 to-teal-400"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];
  const gradientColor = currentProject.color || "from-primary-500 to-blue-400";

  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Hasil Karya</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Portofolio & Studi Kasus</h2>
          <p className="text-slate-600 mt-2">
            Geser untuk melihat proyek yang telah saya kerjakan.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Main Content Area */}
            <div className="grid lg:grid-cols-5 h-full min-h-[500px]">
                
                {/* Left: Text Content */}
                <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center bg-white z-10 relative order-2 lg:order-1 border-t lg:border-t-0 border-slate-100">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary-700 text-xs font-bold border border-blue-100 w-fit">
                            <LayoutTemplate size={14} />
                            {currentProject.category}
                        </div>

                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 transition-all duration-300">
                                {currentProject.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                                {currentProject.description}
                            </p>
                        </div>

                        <div className="pt-2">
                            <a 
                                href={currentProject.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary-500/30 group text-sm"
                            >
                                <Globe size={18} />
                                Kunjungi Website
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3 mt-10">
                        <button 
                            onClick={prevProject}
                            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex items-center px-2 text-sm font-medium text-slate-400">
                            {currentIndex + 1} / {projects.length}
                        </div>
                        <button 
                            onClick={nextProject}
                            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            aria-label="Next project"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Right: Banner Illustration (Replaces Iframe) */}
                <div className="lg:col-span-3 bg-slate-50 relative overflow-hidden order-1 lg:order-2 group h-[300px] lg:h-auto flex items-center justify-center p-8 lg:p-12">
                    
                    {/* Abstract Browser Mockup */}
                    <div className="relative w-full max-w-md aspect-[4/3] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                        
                        {/* Browser Header */}
                        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                            </div>
                            <div className="flex-1 bg-white h-6 rounded border border-slate-200 flex items-center px-3 text-[10px] text-slate-400 font-mono truncate">
                                {currentProject.url}
                            </div>
                        </div>

                        {/* Illustration Content */}
                        <div className={`flex-1 relative overflow-hidden bg-gradient-to-br ${gradientColor} p-6 flex flex-col items-center justify-center text-center`}>
                            {/* Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                            
                            {/* Central Card */}
                            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl max-w-[240px]">
                                <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                    <Globe size={24} />
                                </div>
                                <h4 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">
                                    {currentProject.title}
                                </h4>
                                <p className="text-white/80 text-xs mb-4 truncate w-full">
                                    {currentProject.url.replace(/^https?:\/\//, '')}
                                </p>
                                <div className="inline-flex items-center gap-1.5 bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                                    Lihat Preview <ArrowUpRight size={12} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Click Overlay */}
                         <a 
                            href={currentProject.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-20 cursor-pointer"
                            aria-label={`Visit ${currentProject.title}`}
                        ></a>
                    </div>

                    {/* Background Pattern behind mockup */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:24px_24px]"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;