import React from "react";
import Image from "../Image";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import footerImg from "../../assets/apple.png";
import footerImgOne from "../../assets/google.png";
import footerImgtwo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Section from "../Section";
import List from "../List";
import Container from "../Container";

const Footer = () => {
  return (
    <Section className="bg-[#0D2857]">
      <Container>
        <Flex className="justify-between">
          <div className="">
            <Image src={footerImgtwo} className="py-8" />
            <Flex>
              <div className="pb-12 pr-12">
                <Heading
                  as="h3"
                  text="Toll Free Customer Care"
                  className="font-jost text-[14px] font-medium text-[#FFF] "
                />
                <Paragraph
                  text="+(1) 123 456 7890"
                  className="font-jost text-[18px] font-medium text-[#FFF] pt-2"
                />
              </div>
              <div>
                <Heading
                  as="h3"
                  text="Need live support?"
                  className="font-jost text-[14px] font-medium text-[#FFF] pb-2"
                />
                <Paragraph
                  text="hi@gotrip.com"
                  className="font-jost text-[18px] font-medium text-[#FFF]"
                />
              </div>
            </Flex>
            <Heading
              as="h3"
              text="Your all-in-one travel app"
              className="font-jost text-[16px] font-medium text-[#FFF] pb-4"
            />
            <Flex className="gap-4 pb-8">
              <Image src={footerImg} />
              <Image src={footerImgOne} />
            </Flex>
            <Heading
              as="h3"
              text="Follow us on social media"
              className="font-jost text-[16px] font-medium text-[#FFF] pb-2"
            />
            <Flex className="font-jost text-[14px] font-medium text-[#FFF] gap-4 pt-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </Flex>
          </div>

          <div className="">
            <Heading
              as="h3"
              text="Get Updates & More"
              className="font-jost text-[16px] font-medium text-[#FFF]  pt-8 "
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" w-[600px] py-4 rounded pl-4 my-6 "
            />
            {/* <button className="absolute font-jost text-[16px] font-medium text-[#051036] bg-[#FFF] py-4 px-4 ">Subscribe</button> */}
            <div>
              <Flex className="justify-between my-8">
                <div>
                  <Heading
                    as="h3"
                    text="Company"
                    className="font-jost text-[16px] font-medium text-[#FFF] pb-6"
                  />
                  <List
                    text="About Us"
                    className="font-jost text-[14px] font-medium text-[#FFF] "
                  />
                  <List
                    text="Carrier"
                    className="font-jost text-[14px] font-medium text-[#FFF] "
                  />
                  <List
                    text="Blog"
                    className="font-jost text-[14px] font-medium text-[#FFF] "
                  />
                  <List
                    text="Press"
                    className=" font-jost text-[14px] font-medium text-[#FFF] "
                  />
                  <List
                    text="Gift Cards"
                    className="font-jost text-[14px] font-medium text-[#FFF] "
                  />
                  <List
                    text="Magazine"
                    className="font-jost text-[14px] font-medium text-[#FFF] "
                  />
                </div>
                <div>
                  <Heading
                    as="h3"
                    text="Support"
                    className="font-jost text-[16px] font-medium text-[#FFF] pb-6"
                  />
                  <List
                    text="Contact"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Legal Notice"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Privacy Policy"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Terms and Condition"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Sitemap"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                </div>
                <div>
                  <Heading
                    as="h3"
                    text="Other Services"
                    className="font-jost text-[16px] font-medium text-[#FFF] pb-6"
                  />
                  <List
                    text="Car Hire"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Activity Finder"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List text="Tour List" />
                  <List
                    text=" Flight Finder"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Cruise Ticket"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Holiday Rental"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                  <List
                    text="Travel Agents"
                    className="font-jost text-[14px] font-medium text-[#FFF]"
                  />
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default Footer;
