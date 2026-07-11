import React from 'react';

const AipanBorder = ({ variant = 'top', className = '' }) => {
    const variants = {
        top: (
            <div className={`relative w-full h-3 ${className}`}>
                <div className="absolute inset-x-0 top-0 h-0.5 bg-geru-red"></div>
                <div className="absolute top-0.5 left-0 right-0 flex justify-between">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-geru-red rounded-full"
                            style={{ marginTop: '-3px' }} />
                    ))}
                </div>
            </div>
        ),
        geometric: (
            <div className={`relative h-8 overflow-hidden ${className}`}>
                <svg width="100%" height="100%" preserveAspectRatio="none">
                    <pattern id="geo-border" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
                        <rect width="20" height="8" fill="none" />
                        <rect x="0" y="0" width="10" height="3" fill="#A83B2C" opacity="0.3" />
                        <rect x="10" y="3" width="10" height="3" fill="#A83B2C" opacity="0.15" />
                        <circle cx="10" cy="4" r="1.5" fill="#A83B2C" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#geo-border)" />
                </svg>
            </div>
        ),
        dots: (
            <div className={`flex items-center justify-center gap-2 py-3 ${className}`}>
                {[...Array(5)].map((_, i) => (
                    <React.Fragment key={i}>
                        <div className="w-2 h-2 bg-geru-red rounded-full" />
                        {i < 4 && <div className="w-1 h-1 bg-muted-gold rounded-full" />}
                    </React.Fragment>
                ))}
            </div>
        ),
        traditional: (
            <div className={`py-2 ${className}`}>
                <svg width="100%" height="16" viewBox="0 0 200 16" preserveAspectRatio="none">
                    <line x1="0" y1="8" x2="200" y2="8" stroke="#A83B2C" strokeWidth="0.5" />
                    {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((x, i) => (
                        <React.Fragment key={i}>
                            <line x1={x} y1="2" x2={x} y2="14" stroke="#A83B2C" strokeWidth="0.5" />
                            <circle cx={x} cy="8" r="2" fill="#A83B2C" />
                        </React.Fragment>
                    ))}
                </svg>
            </div>
        ),
    };

    return variants[variant] || variants.top;
};

export default AipanBorder;
