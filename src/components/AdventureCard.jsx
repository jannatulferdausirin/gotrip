import React from 'react';
import Container from './Container';
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';

const AdventureCard = ({AdventureParaText,AdventureParaHeading,AdventureImg}) => {
    return (
        <div className='py-8 border border-[#DDD] shadow-lg group hover:bg-[#3554D1] w-[234px] h-[260px] rounded-lg  duration-500 ease-in-out  '>
           <div className='flex items-center justify-center'>
           <Image src={AdventureImg} className="py-8  "/>
           </div>
           <div className='text-center'> 
           <Heading as="h3" text={AdventureParaHeading} className="font-jost text-[18px] font-medium leading-5 text-[#051036] py-4  group-hover:text-white"/>
            <Paragraph text={AdventureParaText} className="font-jost text-[15px] font-normal leading-4 text-[#697488] tracking-wide group-hover:text-white"/>
           </div>
        </div>
    );
};

export default AdventureCard;