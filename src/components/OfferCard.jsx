import React from "react";
import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Section from "./Section";
import Flex from "./Flex";

const OfferCard = ({ OfferImg, OfferPara, OfferHeading, offerButtonText }) => {
  return (
    <Section className="relative">
      <Image src={OfferImg} className="" />

      <div className="absolute top-12 left-8 w-[410px] h-[350px] pt-2">
        <Paragraph text={OfferPara} className="font-jost text-[15px] font-semibold capitalize leading-5 text-[#FFF]  "/>
        <Heading as="h2" text={OfferHeading} className="font-jost text-[30px] font-semibold capitalize leading-12 text-[#FFF] py-4 w-[290px]"/>
        <Button className="mt-4 bg-white text-black" text={offerButtonText} />
      </div>
    </Section>
  );
};

export default OfferCard;
