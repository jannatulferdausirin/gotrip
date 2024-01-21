import Container from "../Container";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import Section from "../Section";
import { IoEarthOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

const SubFooter = () => {
  return (
    <Section className="bg-[#0D2857] mb-8">
      <Container>
        <Flex className="border-y border-[#697b9847] justify-between py-8">
         
            <Flex className="gap-4 font-jost text-[14px] font-medium text-[#FFF]">
              <Paragraph text="© 2022 GoTrip LLC All rights reserved."  className="font-jost text-[14px] font-medium text-[#FFF]"/>
              <Flex className="items-center gap-4">
              <li >Privacy</li>
              <li>Terms</li>
              <li>Site Map</li>
              </Flex>
            </Flex>
         
          <div>
            <Flex className="text-white gap-4 items-center">
              <IoEarthOutline />
              <Paragraph text="English (US)"  className="font-jost text-[14px] font-medium text-[#FFF]"/>
              <FaDollarSign />
              <Paragraph text="USD" />
            </Flex>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default SubFooter;
