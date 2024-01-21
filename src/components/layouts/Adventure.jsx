import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Flex from '../Flex';
import AdventureCard from '../AdventureCard';
import AdventureImg from '../../assets/099---Hiking.png';
import AdventureImgone from '../../assets/camping 1.png';
import AdventureImgTwo from '../../assets/fire.png';
import AdventureImgThree from '../../assets/jeep.png';
import AdventureImgFour from '../../assets/traveller 1.png';

const Adventure = () => {
    return (
        <Container>
         <div className='py-16'>
         <div className='text-center pb-12'>
            <Heading as="h2" text="Adventure & Activity" className="font-jost text-[30px] font-bold leading-5 text-[#051036] py-4 capitalize" />
            <Paragraph text="These popular destinations have a lot to offer" className="font-jost text-[16px] font-normal leading-5 text-[#697488] " />
            </div>
            <Flex className="justify-between">
        <AdventureCard AdventureImg={AdventureImg} AdventureParaHeading="Camping" AdventureParaText="5  Tours From 550$" />
        <AdventureCard AdventureImg={AdventureImgone } AdventureParaHeading="Trekking" AdventureParaText="5  Tours From 550$" />
        <AdventureCard AdventureImg={AdventureImgTwo} AdventureParaHeading="Camp Fire" AdventureParaText="5  Tours From 550$" />
        <AdventureCard AdventureImg={AdventureImgThree} AdventureParaHeading="Off Road" AdventureParaText="5  Tours From 550$" />
        <AdventureCard AdventureImg={AdventureImgFour } AdventureParaHeading="Exploring" AdventureParaText="5  Tours From 550$" />
            </Flex>
         </div>

        </Container>
    );
};

export default Adventure;