import React from 'react';
import { MessageSquare, Layout, CheckSquare, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "1. Tahap Penawaran",
      desc: "Anda menyetujui proposal ini dengan menghubungi saya via WhatsApp.",
      color: "bg-slate-400"
    },
    {
      icon: <Layout className="w-6 h-6 text-white" />,
      title: "2. Prototyping (Tanpa DP)",
      desc: "Saya membuatkan draft awal website berdasarkan data Google Maps Anda. Anda tidak perlu bayar apa-apa di tahap ini.",
      color: "bg-blue-500"
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-white" />,
      title: "3. Review & Revisi",
      desc: "Saya kirimkan link prototype. Jika suka dan ingin lanjut, kita masuk tahap finalisasi (revisi warna, teks, dll).",
      color: "bg-purple-500"
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "4. Pembayaran & Online",
      desc: "Setelah desain disepakati, Anda melakukan pembayaran. Website langsung saya online-kan (Live) hari itu juga.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Alur Kerja Transparan & Aman</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Saya menerapkan sistem kerja yang meminimalkan risiko bagi Anda. <span className="text-primary-600 font-bold">Lihat hasilnya dulu, baru bayar lunas.</span>
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto lg:mx-0`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center lg:text-left">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center lg:text-left">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <a 
                href="https://wa.me/6285186816062?text=YA,%20SAYA%20TERTARIK"
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
             >
                <Rocket size={20} />
                Mulai Proyek Sekarang
             </a>
        </div>
      </div>
    </section>
  );
};

export default Process;