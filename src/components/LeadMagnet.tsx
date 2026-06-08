'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCalculatorStore } from '../store/useCalculatorStore';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calculator, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

// Zod schemas for each step to provide inline validation
const step1Schema = z.object({
    format: z.string().min(1, "Please select a format.")
});

const step2Schema = z.object({
    students: z.coerce.number().min(1, "Must be at least 1 student.").max(1000000, "Please contact us for enterprise volumes.")
});

export default function LeadMagnet() {
    const t = useTranslations('LeadMagnet');

    // Safely pull state using the custom hydration hook
    const step = useStore(useCalculatorStore, (state) => state.step);
    const data = useStore(useCalculatorStore, (state) => state.data);
    const isSubmitting = useStore(useCalculatorStore, (state) => state.isSubmitting);
    const isSuccess = useStore(useCalculatorStore, (state) => state.isSuccess);
    const roiResult = useStore(useCalculatorStore, (state) => state.roiResult);

    // Methods can be pulled directly
    const { setStep, updateData, submitForm, reset } = useCalculatorStore();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const form1 = useForm({
        resolver: zodResolver(step1Schema),
        defaultValues: { format: data?.format || '' }
    });

    const form2 = useForm({
        resolver: zodResolver(step2Schema),
        defaultValues: { students: data?.students ? Number(data.students) : '' }
    });

    // Prevent rendering the form logic before client hydration
    if (!mounted || step === undefined || !data) {
        return (
            <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t-4 border-black dark:border-white border-b-4 min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="animate-pulse w-16 h-16 rounded-full bg-gray-200 dark:bg-slate-800 border-4 border-black dark:border-white z-10"></div>
            </section>
        );
    }

    const onStep1Submit = (values: z.infer<typeof step1Schema>) => {
        updateData({ format: values.format });
        setStep(2);
    };

    const onStep2Submit = async (values: { students: number | string }) => {
        updateData({ students: values.students.toString() });
        await submitForm();
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t-4 border-black dark:border-white border-b-4">
            {/* Brutalist Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-block bg-primary text-primary-foreground font-bold px-4 py-1 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider text-sm transform -rotate-2">
                        Free Audit
                    </div>
                    <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight text-black dark:text-white mb-6 uppercase">
                        {t('title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-body">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">

                    {/* Left Side: Value Prop / Benefits */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-gray-50 dark:bg-slate-900 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform md:-rotate-1">
                            <Calculator className="w-12 h-12 mb-6 text-primary" />
                            <h3 className="text-2xl font-black uppercase mb-6 border-b-2 border-black dark:border-white pb-4 text-black dark:text-white">
                                What you'll discover:
                            </h3>
                            <ul className="space-y-4">
                                {[0, 1, 2].map((idx) => (
                                    <li key={idx} className="flex item-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-black dark:text-white flex-shrink-0 mt-1" />
                                        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                            {t(`benefits.${idx}`)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Interactive Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white dark:bg-slate-900 border-4 border-black dark:border-white p-8 relative overflow-hidden h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">

                            {/* Progress Indicator */}
                            {!isSuccess && (
                                <div className="flex justify-between mb-8 border-b-2 border-gray-200 pb-4">
                                    {[1, 2].map((s) => (
                                        <div key={s} className="flex items-center">
                                            <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold ${step === s ? 'bg-primary text-white' : step > s ? 'bg-green-400 text-black' : 'bg-gray-100 text-gray-400'}`}>
                                                {s}
                                            </div>
                                            {s < 2 && <div className={`w-12 lg:w-48 h-1 mx-4 ${step > s ? 'bg-black' : 'bg-gray-200'}`} />}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="min-h-[250px] relative">
                                <AnimatePresence mode="wait">

                                    {step === 1 && !isSuccess && (
                                        <motion.div
                                            key="step1"
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -50, opacity: 0 }}
                                            className="w-full"
                                        >
                                            <form onSubmit={form1.handleSubmit(onStep1Submit)} className="space-y-6">
                                                <div>
                                                    <label htmlFor="format" className="block text-2xl font-bold uppercase mb-4 text-black dark:text-white">
                                                        {t('form.step_1_title')}
                                                    </label>
                                                    <select
                                                        id="format"
                                                        aria-invalid={form1.formState.errors.format ? "true" : "false"}
                                                        {...form1.register("format")}
                                                        className="w-full p-4 border-2 border-black dark:border-white text-lg bg-gray-50 dark:bg-slate-800 text-black dark:text-gray-300 focus:bg-white dark:focus:bg-slate-900 focus:ring-0 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors appearance-none"
                                                    >
                                                        <option value="">{t('form.format_placeholder')}</option>
                                                        <option value="textbooks">{t('form.format_options.textbooks')}</option>
                                                        <option value="pdfs">{t('form.format_options.pdfs')}</option>
                                                        <option value="video">{t('form.format_options.video')}</option>
                                                        <option value="lms">{t('form.format_options.lms')}</option>
                                                    </select>
                                                    {form1.formState.errors.format && (
                                                        <p className="text-red-600 font-bold mt-2 text-sm">{form1.formState.errors.format.message}</p>
                                                    )}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="group w-full md:w-auto flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                                                >
                                                    Next Step <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}

                                    {step === 2 && !isSuccess && (
                                        <motion.div
                                            key="step2"
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -50, opacity: 0 }}
                                            className="w-full"
                                        >
                                            <form onSubmit={form2.handleSubmit(onStep2Submit)} className="space-y-6">
                                                <div>
                                                    <label htmlFor="students" className="block text-2xl font-bold uppercase mb-4 text-black dark:text-white">
                                                        {t('form.step_2_title')}
                                                    </label>
                                                    <input
                                                        id="students"
                                                        type="number"
                                                        aria-invalid={form2.formState.errors.students ? "true" : "false"}
                                                        {...form2.register("students")}
                                                        placeholder={t('form.students_placeholder')}
                                                        className="w-full p-4 border-2 border-black dark:border-white text-lg bg-gray-50 dark:bg-slate-800 text-black dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:ring-0 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                                                    />
                                                    {form2.formState.errors.students && (
                                                        <p className="text-red-600 font-bold mt-2 text-sm">{form2.formState.errors.students.message}</p>
                                                    )}
                                                </div>
                                                <div className="flex gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        className="px-6 py-4 font-bold uppercase border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-slate-800 text-black dark:text-white hidden md:block"
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="group flex-1 flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-bold uppercase hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-70 disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? t('form.submitting') : t('form.submit_button')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}

                                    {isSuccess && roiResult && (
                                        <motion.div
                                            key="success"
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="py-4"
                                        >
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-12 h-12 bg-green-100 border-2 border-black dark:border-white rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                                </div>
                                                <h3 className="text-3xl font-black uppercase text-black dark:text-white">
                                                    {t('form.report_title')}
                                                </h3>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                <div className="bg-gray-50 dark:bg-slate-800 border-2 border-black dark:border-white p-4 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
                                                    <p className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">{t('form.savings_label')}</p>
                                                    <p className="text-2xl md:text-3xl font-black text-black dark:text-white truncate" title={`Rp${roiResult.savings.toLocaleString('id-ID')}`}>Rp{roiResult.savings.toLocaleString('id-ID')}</p>
                                                </div>
                                                <div className="bg-gray-50 dark:bg-slate-800 border-2 border-black dark:border-white p-4 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
                                                    <p className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">{t('form.engagement_label')}</p>
                                                    <p className="text-2xl md:text-3xl font-black text-black dark:text-white truncate" title={`+${roiResult.engagementLift}%`}>+{roiResult.engagementLift}%</p>
                                                </div>
                                                <div className="bg-gray-50 dark:bg-slate-800 border-2 border-black dark:border-white p-4 md:col-span-2 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
                                                    <p className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 mb-1">{t('form.time_label')}</p>
                                                    <p className="text-2xl md:text-3xl font-black text-black dark:text-white truncate" title={`${roiResult.time.toLocaleString()} Hours`}>{roiResult.time.toLocaleString()} Hours</p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => reset()}
                                                className="w-full bg-white dark:bg-slate-900 text-black dark:text-white border-2 border-black dark:border-white py-4 font-bold uppercase hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                                            >
                                                {t('form.reset_button')}
                                            </button>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
