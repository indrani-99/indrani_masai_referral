import { Box, Text, Image} from "@chakra-ui/react";

interface MilestoneProps {
  no: number;
  title: string;
  image: string;
  amount: string;
  color: string;
  bulbImage: string;
  refColor: string;
}

const Milestone = () => {
  const milestoneData: MilestoneProps[] = [
    {
      no: 3,
      title: " Amazon Alexa Echo Dot  (5th Gen)",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/unsplash_e_Al_Yzgro2_Lo_4d46fe39d4.webp",
      amount: "₹5,499",
      color: "#ED0331",
      refColor: "#EE3E3E40",
      bulbImage:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/light_bulb_02f074c684.webp",
    },
    {
      no: 5,
      title: "JBL Flip Essential 2  Portable Bluetooth Speaker ",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/unsplash_e_Al_Yzgro2_Lo_1_c7dac5a0bc.webp",
      amount: "₹6,999",
      color: "#2462EF",
      refColor: "#2462EF40",
      bulbImage:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/light_bulb_e5b0495442.png",
    },
    {
      no: 10,
      title: "Sony Headphones  Active Noise Cancelling",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_5_11c4a9491b.webp",
      amount: "₹9,990",
      color: "#09B062",
      refColor: "#09B06240",
      bulbImage:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/light_bulb_1_5f6b59b8ef.png",
    },
    {
      no: 20,
      title: "REDMI (43 inch) Ultra HD TV   (4K) LED Smart FireTv OS",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_6_f4804aa906.webp",
      amount: "₹19,990",
      color: "#E2AF05",
      refColor: "#E2AF0540",
      bulbImage:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/light_bulb_2_64e2e90edb.png",
    },
    {
      no: 50,
      title: "Apple iPhone 15  128GB",
      image:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_8_fdb2d04523.webp",
      amount: "₹64,990",
      color: "#7575FE",
      refColor: "#7575FE40",
      bulbImage:
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/light_bulb_3_29dc205744.png",
    },
  ];
  return (
    <Box w={{ base: "360px", md: "1248px" }} h="auto">
      <Box>
        <Text
          textAlign={{ base: "center", md: "left" }}
          alignSelf="stretch"
          fontFamily="Poppins, sans-serif"
          fontSize="24px"
          fontWeight={600}
          lineHeight="32px"
          fontStyle="normal"
        >
          Milestone Rewards
        </Text>
      </Box>
      <Box
        width={{ base: "330px", md: "100%" }}
        mx={{ base: "auto", md: "0px" }}
      >
        <Text
          textAlign={{ base: "center", md: "left" }}
          mb={6}
          color="var(--Neutral-Grey700, #544D4F)"
          fontFamily="'Open Sans'"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight={{ base: "normal", md: "34px" }}
        >
          Hit referral milestones in every month to win awesome prizes for
          helping your friends
        </Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: "12px 0px", md: "40px 56px" }} 
        mx={{ base: "20px", md: "0px" }} 
      >
        {milestoneData.map((item) => (
          <Box
            key={item.no}
            w="360px"
            h="auto" //at figma design height is 522px
            borderRadius="4px"
            border="1px solid #FBE9EE"
            background="#FFF"
            mx={{ base: "auto", md: "0px" }}
          >
            <Box h="276px" position="relative">
              <Image src={item.image} alt={item.title} />
              <Text
                position="absolute"
                color={item.refColor}
                alignSelf="stretch"
                fontFamily="Poppins" //font style is not working
                fontSize="56px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
                top="0"
                right="22px"
              >
                {item.no}
              </Text>
            </Box>
            <Box
              w="360px"
              h="200px"
              mt="21.31px"
              padding={6}
              boxSizing="border-box"
            >
              <Box display="flex" w="204px" h="24px" alignItems="center">
                <Image
                  w="24px"
                  h="24px"
                  color={item.color}
                  src={item.bulbImage}
                ></Image>
                <Text
                  color={item.color}
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  {item.no} referrals in a month
                </Text>
              </Box>
              {item.title.split("  ").map((str) => (
                <Text
                  color="var(--dark-mode-white-60, #636363)"
                  fontFamily="Poppins"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  {str}
                </Text>
              ))}

              <Box display="flex" justifyContent="space-between" mt="10px">
                <Text
                  color="var(--black, #0A0103)"
                  fontFamily="Poppins"
                  fontSize="32px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                >
                  {item.amount}
                </Text>
                <Box
                  display="flex"
                  padding="8px 16px"
                  justifyContent="center"
                  align-items="center"
                  borderRadius="6px"
                  border="1px solid #EE3E3E"
                >
                  <Text
                    color="#ED0331"
                    font-family="Open Sans"
                    font-size="15px"
                    font-style="normal"
                    font-weight="400"
                    line-height="18px"
                  >
                    Check Product
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        <Box
          w={{ base: "334px", md: "400px" }}
          display="flex"
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Text
            color="var(--black, #0A0103)"
            textAlign="right"
            fontFamily="Poppins"
            fontSize="40px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="46px"
            mb="36px"
          >
            Keep Referring To Keep Winning!{" "}
          </Text>
          <Box w="100%" h="217px">
            <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/undraw_gift_card_re_5dyy_2_334ba37c8e.webp"></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Milestone;
