import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-indigo-900/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        O que os advogados <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
                            estão falando da Jusly
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Junte-se a centenas de profissionais que modernizaram seus escritórios e ganharam mais tempo e dinheiro.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote size={48} className="text-primary-500" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-primary-500/50 transition-colors">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                                    <p className="text-primary-400 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;