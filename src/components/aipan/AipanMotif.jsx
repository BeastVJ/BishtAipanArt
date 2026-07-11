import React, { useState } from 'react';

const AipanMotif = ({ name, meaning, icon, className = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`relative group cursor-pointer ${className}`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            onClick={() => setIsExpanded(!isExpanded)}
            role="button"
            tabIndex={0}
            aria-label={`Learn about ${name} motif`}
            onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        >
            <div className="p-6 bg-rice-white border border-gray-200 hover:border-geru-red/30 transition-all duration-300">
                {/* Motif SVG Icon */}
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    {icon || (
                        <svg viewBox="0 0 60 60" className="w-full h-full">
                            <circle cx="30" cy="30" r="25" fill="none" stroke="#A83B2C" strokeWidth="1" opacity="0.4" />
                            <circle cx="30" cy="30" r="15" fill="none" stroke="#A83B2C" strokeWidth="1.5" opacity="0.6" />
                            <circle cx="30" cy="30" r="6" fill="#A83B2C" opacity="0.8" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                                const rad = (angle * Math.PI) / 180;
                                const x = 30 + 20 * Math.cos(rad);
                                const y = 30 + 20 * Math.sin(rad);
                                return <circle key={angle} cx={x} cy={y} r="2" fill="#C59A52" opacity="0.6" />;
                            })}
                        </svg>
                    )}
                </div>
                <h4 className="text-center font-heading text-lg font-bold text-charcoal">{name}</h4>

                {/* Meaning tooltip */}
                <div className={`mt-3 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-gray-600 leading-relaxed text-center">{meaning}</p>
                </div>
            </div>

            {/* Hover accent */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-geru-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
    );
};

export default AipanMotif;
