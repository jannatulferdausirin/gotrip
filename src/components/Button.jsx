import React from 'react';

const Button = ({className,text}) => {
    return (
        <button className={`hover:bg-white border border-white bg-transparent rounded text-black duration-500 ease-in-out w-[165px] h-[50px] text-[14px]  font-normal font-jost ${className}`}>
            {text}
        </button>
    );
};

export default Button;