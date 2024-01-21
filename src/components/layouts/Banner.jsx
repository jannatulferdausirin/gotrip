import Image from '../Image';
import bannerImg from '../../assets/bannerImgeNew.jpg'


import Heading from '../Heading';
import Paragraph from '../Paragraph';
import BannerHeading from '../BannerHeading';

import Section from '../Section';
import Container from '../Container';

const Banner = () => {
    return (
        <Section className={`relative -z-20 `}>
          <div className="">
            <Image src={bannerImg} alt="banner img" className="h-[900px] w-[100%]  " />
        </div>
        
     
      
     <Container>
     <div className={`absolute top-[50%]  left-[50%] translate-x-[-50%]  translate-y-[-50%] z-30`}>
     <div className='pb-8 text-center pt-[200px] '>
            <Heading as="h1" text="The World is Waiting For You" className="font-jost text-[60px] font-bold text-[#FFF]"/>
            <Paragraph  text="Discover amzaing places at exclusive deals" className="font-jost text-[16px] font-bold text-[#FFF] leading-[30px]"/>
        </div>
        <BannerHeading/>
     </div>
     </Container>
    
        </Section>
     
   
    );
};

export default Banner;