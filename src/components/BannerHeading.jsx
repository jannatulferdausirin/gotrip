import { FaSearch } from "react-icons/fa";
import Container from './Container';
import Flex from './Flex';
import Heading from './Heading';
import Paragraph from './Paragraph';

const BannerHeading = () => {
    return (
     <Container>
        <Flex className="w-[900px] mb-[299px] mx-auto bg-white rounded-full justify-between py-4 px-4 ">
<div className="pl-4 pe-16 border-e-2">
  <Heading as="h3" text="Destinations" className="font-jost text-[15px] font-medium tracking-wide text-[#051036]"/>
  <Paragraph  text="Where are you going?" className="font-jost text-[15px] font-medium tracking-wide text-[#697488]"/>
</div>
<div className="border-e-2 pe-8">
  <Heading as="h3" text="Check in - Check out" className="font-jost text-[15px] font-medium tracking-wide text-[#051036]"/>
  <Paragraph  text="Wed 2 Mar  -  Fri 11 Apr" className="font-jost text-[15px] font-medium tracking-wide text-[#697488]"/>
</div>
<div>
  <Heading as="h3" text="Activity Types" className="font-jost text-[15px] font-medium tracking-wide text-[#051036]"/>
  <Paragraph  text="Camping, Nightlife" className="font-jost text-[15px] font-medium tracking-wide text-[#697488]"/>
</div>
<div >
   <Flex className='bg-blue-600  font-jost  tracking-wide py-4 px-8 rounded-full text-[15px] placeholder:font-medium items-center justify-between gap-4 text-white'>
   <FaSearch />
   {/* <input type="text" placeholder='Search' className="w-12 bg-blue-600 placeholder:text-white"/> */}
  <button   className="font-jost text-[15px] font-medium tracking-wide text-white">Search </button>
  
   </Flex>
</div>
        </Flex>
     </Container>

    );
};

export default BannerHeading;