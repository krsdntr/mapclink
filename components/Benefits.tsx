import React from 'react';
import { Map, Server, CreditCard, Smartphone } from 'lucide-react';

const Benefits: React.FC = () => {
  const features = [
    {
      icon: <Map className="w-8 h-8 text-white" />,
      title: "Terintegrasi Google Maps",
      desc: "Website menampilkan rating & review asli Anda sebagai bukti kepercayaan (Social Proof) yang valid.",
      color: "bg-blue-500"
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Tanpa Biaya Hosting",
      desc: "Di-hosting menggunakan Cloud Static modern. Cepat, aman, dan GRATIS biaya server selamanya.",
      color: "bg-purple-500"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Sekali Bayar",
      desc: "Tidak ada biaya bulanan yang memberatkan. Investasi sekali untuk aset digital jangka panjang.",
      color: "bg-green-500"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Friendly",
      desc: "Tampilan sempurna di HP calon pelanggan. Responsif dan ringan diakses dari jaringan manapun.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Mengapa Layanan Ini Berbeda?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">Fokus Saya: Konversi & Efisiensi Biaya</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-primary-500 transition-colors duration-300">
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;