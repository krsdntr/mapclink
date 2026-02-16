import React from 'react';
import { Map } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <Map size={20} />
            </div>
             <span className="font-bold text-xl text-white tracking-tight">
                Map<span className="text-primary-500">clink</span>
              </span>
          </div>
          
          <div className="text-center md:text-right text-sm">
            <p className="mb-2">© {new Date().getFullYear()} Mapclink Web Services by Krisdiantoro.</p>
            <p className="text-slate-500">Membantu UMKM Go Digital dengan Hemat & Efisien.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
             <p className="text-slate-500 text-sm">
                 Jangan biarkan trafik pengunjung Google Maps Anda hilang. Segera miliki landing page profesional.
             </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;