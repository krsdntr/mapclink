import React from 'react';
import { MapPin, Instagram, MessageCircle, ShieldCheck } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-slate-900 p-8 md:w-1/3 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-secondary-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-75"></div>
                    <img 
                        src="https://media.licdn.com/dms/image/v2/D5603AQHc_UAZZVrmTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695268091355?e=1772668800&v=beta&t=GVNiq3TeowKKihn5yITKwAt3vgHNKC9kcU0GYH4UuuY" 
                        alt="Krisdiantoro" 
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                    />
                </div>
                
                <h3 className="text-white font-bold text-xl relative z-10">Krisdiantoro</h3>
                <p className="text-slate-400 text-sm mt-1 relative z-10">Web Developer</p>
                
                <div className="mt-6 flex gap-4 relative z-10">
                    <a href="https://instagram.com/krisdntro" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full text-white hover:text-pink-500 hover:bg-slate-700 transition-all">
                        <Instagram size={20} />
                    </a>
                    <a href="https://wa.me/6285186816062" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full text-white hover:text-green-500 hover:bg-slate-700 transition-all">
                        <MessageCircle size={20} />
                    </a>
                </div>
            </div>
            
            <div className="p-8 md:w-2/3">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldCheck className="text-primary-600" size={28} />
                    <h2 className="text-2xl font-bold text-slate-900">Tentang Saya</h2>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Kepercayaan adalah modal utama bisnis online. Saya berdedikasi membantu pemilik bisnis lokal meningkatkan kehadiran digital mereka dengan solusi yang transparan, hemat, dan efektif.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                        <MapPin className="text-slate-400 shrink-0 mt-1" size={20} />
                        <div>
                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Alamat Domisili</span>
                            <span className="text-slate-800 font-medium">Desa Babakan, Kec. Dramaga, Kab. Bogor, Jawa Barat 16680.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                        <MessageCircle className="text-slate-400 shrink-0 mt-1" size={20} />
                        <div>
                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp</span>
                            <a href="https://wa.me/6285186816062" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold hover:underline">
                                +62 851-8681-6062
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary-100 transition-colors">
                        <Instagram className="text-slate-400 shrink-0 mt-1" size={20} />
                        <div>
                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Instagram</span>
                            <a href="https://instagram.com/krisdntro" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold hover:underline">
                                @krisdntro
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;