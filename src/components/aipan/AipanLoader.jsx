import React from 'react';

const AipanLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-12">
            <div className="relative flex items-center justify-center">
                <div className="aipan-loader-ring absolute" />
                <div className="aipan-loader-ring absolute" style={{ width: '60px', height: '60px' }} />
                <div className="aipan-loader-ring" style={{ width: '80px', height: '80px' }} />
                <div className="absolute w-3 h-3 bg-geru-red rounded-full" />
            </div>
            <p className="text-sm text-geru-red font-medium tracking-widest uppercase animate-gentle-pulse">
                Drawing Aipan...
            </p>
        </div>
    );
};

export default AipanLoader;
