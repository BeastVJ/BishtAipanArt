import React from 'react';

const AipanDivider = ({ variant = 'dots', className = '' }) => {
    const variants = {
        dots: (
            <div className={`flex items-center justify-center gap-2 py-4 ${className}`}>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-geru-red/30 to-transparent" />
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-geru-red rounded-full" />
                    <div className="w-1 h-1 bg-muted-gold rounded-full" />
                    <div className="w-2 h-2 bg-geru-red rounded-full" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-geru-red/30 to-transparent" />
            </div>
        ),
        line: (
            <div className={`py-3 ${className}`}>
                <svg width="100%" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                    <line x1="0" y1="2" x2="100" y2="2" stroke="#A83B2C" strokeWidth="0.5" opacity="0.3" />
                    <line x1="15" y1="2" x2="85" y2="2" stroke="#A83B2C" strokeWidth="1" opacity="0.6" />
                    <circle cx="10" cy="2" r="1.5" fill="#A83B2C" />
                    <circle cx="90" cy="2" r="1.5" fill="#A83B2C" />
                </svg>
            </div>
        ),
        traditional: (
            <div className={`py-3 ${className}`}>
                <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <line x1="0" y1="6" x2="100" y2="6" stroke="#A83B2C" strokeWidth="0.5" />
                    {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((x, i) => (
                        <React.Fragment key={i}>
                            <polygon points={`${x-2},3 ${x+2},3 ${x+3},6 ${x+2},9 ${x-2},9 ${x-3},6`}
                                fill={i % 2 === 0 ? '#A83B2C' : '#C59A52'} opacity="0.6" />
                        </React.Fragment>
                    ))}
                </svg>
            </div>
        ),
    };

    return variants[variant] || variants.dots;
};

export default AipanDivider;
