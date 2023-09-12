import React from 'react';

type ButtonProps = {
    title: string;
    textColor: string;
    bgColor: string;
};

const Button: React.FC<ButtonProps> = ({ title, textColor, bgColor }) => {
    const white = 'bg-white bg-opacity-70'
    const black = '#000000B2'
    

    return (
        <button
            className={`${bgColor === "white" ? white : black} text-${textColor} py-2 px-4 self-start max-md:self-center`}
        >
            {title}
        </button>
    );
};

export default Button;