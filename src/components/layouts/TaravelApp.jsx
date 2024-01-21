
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import frameImg from '../../assets/Frame.png';
import applelogo from '../../assets/google.png';
import applelogotwo from '../../assets/apple.png';


const TaravelApp = () => {
    return (
        <Container>
            <Flex className="py-24">
                <Image src={frameImg} className=""/>
               <Flex className="items-center justify-center pl-8">
               <div className=''>
                    <Heading as="h2" text="Your all-in-one travel app." className="font-jost text-[30px] font-bold leading-12  py-6 w-[480px]"/>
                    <Paragraph text="Book in advance or last-minute with GoTrip. Receive instant confirmation. Access your booking info offline." className="font-jost text-[15px] font-semibold capitalize leading-8 w-[520px] pb-6"/>
                    <Flex className="gap-8">
                    <Image src={applelogo} className=""/>
                    <Image src={applelogotwo} className=""/>
                    </Flex>
                </div>
               </Flex>
            </Flex>
            
        </Container>
    );
};

export default TaravelApp;