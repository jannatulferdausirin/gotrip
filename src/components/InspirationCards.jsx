import React from 'react';
import Flex from './Flex';
import Image from './Image';
import Paragraph from './Paragraph';
import Heading from './Heading';

const InspirationCards = ({InspirationImg,InspirationText,InspirationHeading,InspirationDate}) => {
    return (
        <Flex className="pt-8">
            <Image src={InspirationImg} className="w-[262px] h-[262px]"/> 
            <div className='pl-8 pt-4'>
                <Paragraph  className="pb-4 font-jost text-[15px] font-semibold leading-8 text-[#697488]" text={InspirationDate}/>
                <Heading as="h3" text={InspirationHeading} className="w-[335px]  pb-4 font-jost text-[22px] font-semibold leading-8 text-[#051036]"/>
                <Paragraph text={InspirationText} className="w-[335px]  pb-4 font-jost text-[15px] font-semibold leading-8 text-[##697488]"/>
            </div>
        </Flex>
    );
};

export default InspirationCards;