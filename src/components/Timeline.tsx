'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Timeline() {
    const t = useTranslations('Timeline');

    // Using mapping similar to Case Studies
    const events = [
        { id: 'pgsd', color: 'bg-green-400' },
        { id: 'rpl', color: 'bg-primary' }
    ].map((event, index) => ({
        ...event,
        year: t(`events.${index}.year`),
        title: t(`events.${index}.title`),
        org: t(`events.${index}.organization`),
        desc: t(`events.${index}.description`)
    }));

    return (
        <section className="py-24 bg-gray-50 dark:bg-slate-950 relative border-t-4 border-black dark:border-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-16 md:text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight uppercase mb-4 text-black dark:text-white">
                        {t('section_title')}
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 font-medium font-body max-w-2xl mx-auto">
                        {t('section_subtitle')}
                    </p>
                </div>

                <div className="relative border-l-4 border-black dark:border-white ml-4 md:ml-0 md:border-l-0">
                    {/* Center line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-black dark:bg-white transform -translate-x-1/2"></div>

                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`mb-16 relative flex items-center md:justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                        >
                            {/* Mobile marker */}
                            <div className={`absolute -left-[26px] md:hidden w-12 h-12 rounded-full border-4 border-black dark:border-white ${event.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] z-10`}></div>

                            {/* Desktop marker */}
                            <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-black dark:border-white ${event.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] z-10 hover:scale-110 transition-transform`}></div>

                            {/* Content */}
                            <div className="pl-8 md:pl-0 w-full md:w-[45%]">
                                <div className="bg-white dark:bg-slate-900 border-4 border-black dark:border-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] transition-all relative group">
                                    <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-3 py-1 font-bold uppercase text-sm mb-4">
                                        {event.year}
                                    </div>
                                    <h3 className="text-2xl font-black uppercase text-black dark:text-white mb-2 group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="font-bold text-gray-600 dark:text-gray-400 mb-4 border-b-2 border-gray-100 dark:border-gray-800 pb-4">
                                        {event.org}
                                    </p>
                                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed font-body">
                                        {event.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
