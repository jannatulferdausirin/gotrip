import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Container from "../Container";
import InspirationCards from "../InspirationCards";
import Flex from "../Flex";
import InspirationImg from "../../assets/pexels-pixabay-417059.jpg";
import InspirationImgTwo from "../../assets/pexels-te-lensfix-1371360.jpg";
import Section from "../Section";

const Inspirration = () => {
  return (
   <Section className="py-24">
     <Container>
      <div className="text-center pb-16">
        <Heading
          as="h2"
          text="Get inspiration for your next trip"
          className="font-jost text-[30px] font-bold leading-5 text-[#051036] py-4 capitalize"
        />
        <Paragraph
          text="Interdum et malesuada fames"
          className="font-jost text-[16px] font-normal leading-5 text-[#697488] "
        />
      </div>
      <Flex className="justify-between gap-8">
        <InspirationCards
          InspirationImg={InspirationImg}
          InspirationDate="April 06, 2022"
          InspirationHeading="10 European ski destinations you 
should visit this winter"
          InspirationText="Ut enim ad minim veniam, quis nostrud exerc
ullamco laboris nisi ut aliquip."
        />
        <InspirationCards
          InspirationImg={InspirationImgTwo}
          InspirationDate="April 06, 2022"
          InspirationHeading="Booking travel during Corona: good advice in an uncertain time"
          InspirationText="Ut enim ad minim veniam, quis nostrud exerc
ullamco laboris nisi ut aliquip."
        />
      </Flex>
    </Container>
   </Section>
  );
};

export default Inspirration;
