import Flex from "../Flex";
import Heading from "../Heading";
import OfferCard from "../OfferCard";
import Paragraph from "../Paragraph";

import offerImgOne from "../../assets/images.png";
import offerImgTwo from "../../assets/images (1).png";
import offerImgThree from "../../assets/images (4).png";
import Container from "../Container";
import Section from "../Section";

const SpecialOffer = () => {
  return (
   <Section className="py-24">
     <Container>
      <div className="text-center pb-16">
        <Heading
          as="h2"
          text="Special Offers"
          className="font-jost text-[30px] font-bold leading-5 text-[#051036] py-4 capitalize"
        />
        <Paragraph
          text="These popular destinations have a lot to offer"
          className="font-jost text-[16px] font-normal leading-5 text-[#697488] "
        />
      </div>
      <Flex className="justify-between">
        <OfferCard
          OfferImg={offerImgOne}
          OfferHeading="Things to do on 
your trip"
         offerButtonText="Experinces"
        />
        <OfferCard OfferImg={offerImgOne} OfferHeading="Up to 70% Discount!" OfferPara="Enjoy Summer Deals" offerButtonText="Learn More"/>
        <OfferCard OfferImg={offerImgThree} OfferHeading="Let your curiosity do the booking" offerButtonText="Learn More"/>
      </Flex>
    </Container>
   </Section>
  );
};

export default SpecialOffer;
