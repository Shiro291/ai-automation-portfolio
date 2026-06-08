'use client';

import { useTranslations } from 'next-intl';
import { Layers, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DualThreat() {
    const t = useTranslations('Philosophy');

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden border-t-4 border-b-4 border-black">
            {/* Brutalist Background Pattern - Lightened for dark mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block bg-primary text-primary-foreground font-bold px-4 py-1 mb-6 border-2 border-primary shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase tracking-wider text-sm transform -rotate-1">
                        {t('badge')}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight uppercase">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* The Engineer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 border-2 border-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(37,99,235,1)] transition-all flex flex-col items-start"
                    >
                        <div className="bg-primary text-white p-4 mb-6 border-2 border-white">
                            <Layers className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black uppercase mb-4">{t('tech_heading')}</h3>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">React</span>
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">TypeScript</span>
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">Next.js</span>
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">Zustand</span>
                        </div>
                        <p className="text-lg text-gray-300 font-body leading-relaxed">
                            {t('tech_copy')}
                        </p>
                    </motion.div>

                    {/* The Educator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-zinc-900 border-2 border-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(34,197,94,1)] transition-all flex flex-col items-start"
                    >
                        <div className="bg-green-500 text-black p-4 mb-6 border-2 border-white">
                            <BrainCircuit className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black uppercase mb-4">{t('edu_heading')}</h3>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">PGSD</span>
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">Cognitive Load</span>
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">Gamification</span>
                        </div>
                        <p className="text-lg text-gray-300 font-body leading-relaxed">
                            {t('edu_copy')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
