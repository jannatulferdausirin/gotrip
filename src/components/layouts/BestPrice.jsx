
import Container from '../Container';
import Flex from '../Flex';
import BestPriceCard from '../BestPriceCard';
import bestPriceImg from '../../assets/security.png';
import bestPriceImgTwo from '../../assets/page-speed.png';
import bestPriceImgThree from '../../assets/customer-service (1).png';
const BestPrice = () => {
    return (
       <section>
         <Container>
            <Flex className="bg-[#F5F5F5] justify-between py-16">
                <BestPriceCard bestCardImg={bestPriceImg} bestCardText="Best Price Guarantee" bestCardParaText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                <BestPriceCard bestCardImg={bestPriceImgTwo} bestCardText="Easy & Quick Booking" bestCardParaText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                
                <BestPriceCard bestCardImg={bestPriceImgThree} bestCardText="Customer Care 24/7" bestCardParaText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                
            </Flex>
            
        </Container>
       </section>
    );
};

export default BestPrice;