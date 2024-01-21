import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Section from "../Section";
import testOne from "../../assets/“.png";
import testTwo from "../../assets/pexels-valentin-antonucci-691637.jpg";
import testThree from "../../assets/pexels-te-lensfix-1371360.jpg";
import testFour from "../../assets/pexels-tomáš-malík-3408354.jpg";
import testFive from "../../assets/pexels-dsd-3917809.jpg";
import testSix from "../../assets/pexels-pixabay-248195.jpg";

const Testimonial = () => {
  return (
    <Section className="py-24  bg-[#F5F5F5] ">
      <Container>
        <div className="text-center pb-8 w-[796px] mx-auto">
          <Heading
            as="h2"
            text="Testimonials"
            className="font-jost text-[30px] font-bold leading-5 text-[#051036] py-6 capitalize "
          />
          <Paragraph
            text="Interdum et malesuada fames ac ante ipsum"
            className="font-jost text-[16px] font-normal leading-5 text-[#697488] pb-4"
          />
       <Flex className="items-center justify-center py-2">
          <Image  src={testOne} /></Flex>
          <Heading
            as="h2"
            text="Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "
            className="font-jost text-[22px] font-semibold text-[#051036] py-8"
          />
         
          <Heading
            as="h1"
            text="Ali Tufan"
            className="font-jost text-[15px] font-medium text-[#051036]"
          />
          <Paragraph
            text="Product Manager, Apple Inc"
            className="font-jost text-[14px] font-normal text-[#051036] leading-[30px] pb-8"
          />

          <Flex className="gap-4 items-center justify-center">
            <Image className="w-[94px] h-[93px] rounded-full" src={testTwo} />
            <Image className="w-[94px] h-[93px] rounded-full" src={testThree}/>
            <Image className="w-[94px] h-[93px] rounded-full" src={testFour}/>
            <Image className="w-[94px] h-[93px] rounded-full" src={testFive}/>
            <Image className="w-[94px] h-[93px] rounded-full" src={testSix}/>
         
          </Flex>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
