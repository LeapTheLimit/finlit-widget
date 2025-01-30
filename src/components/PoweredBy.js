import React from 'react';

const PoweredBy = () => {
    const handleNavigate = () => {
        window.open('https://leapthelimit.com/', '_blank');
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-4">
            <div className="text-gray-500 text-xs cursor-pointer" onClick={handleNavigate}>
                Powered by LeapTheLimit
            </div>
        </div>
    )
};

export default PoweredBy;
