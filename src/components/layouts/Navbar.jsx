import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import List from "../List";
import NavLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
 <Container>
  
  <div className="absolute z-20 bg-transparent top-5 left-[50%] translate-x-[-50%] ">
    <Flex className="items-center gap-56">
      <Image  src={NavLogo} alt="NavbarLogo" className="w-[143px] h-[50px] " />
        <div>
        <Flex className="items-center justify-end gap-6 pl-24">
            <List text="Home" />
            <List text="Categories" />
            <List text="Destination" />
            <List text="Blog" />
            <List text="Pages" />
            <List text="Contacts" />
        <Button text="Become An Expert"  className={`text-white  hover:text-black`}/>
        <Button text="Sign In / Register" className={`text-white hover:text-black`}/>
        </Flex>
        </div>
     </Flex>
    </div>
 </Container>
  );
};

export default Navbar;
