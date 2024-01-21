import React from 'react';

const List = ({className,text,href}) => {
    return (
        <ul>
            <li><a className={` ${className} text-white align-middle hover:text-black duration-500 ease-out `} href={href}>{text}</a></li>
        </ul>
    );
};

export default List;