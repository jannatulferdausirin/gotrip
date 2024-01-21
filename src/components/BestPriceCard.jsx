import React from 'react';
import Image from './Image';
import Flex from './Flex';
import Heading from './Heading';
import Paragraph from './Paragraph';

const BestPriceCard = ({bestCardImg,bestCardText, bestCardParaText}) => {
    return (
        <Flex>
            <Image className="pr-4 h-[50%]" src={bestCardImg}/>
            <div>
                <Heading as="h3" text={bestCardText} className="w-[177px]  pb-4 font-jost text-[18px] font-medium leading-5 text-[#051036]"/>
                <Paragraph text={bestCardParaText}  className="w-[300px] font-jost text-[15px] font-normal leading-4 text-[#697488"/>
            </div>

        </Flex>
    );
};

export default BestPriceCard;