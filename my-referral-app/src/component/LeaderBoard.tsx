import { Box, Text, Image } from "@chakra-ui/react";

interface Reward {
  name: string;
  position: number;
  reward: number;
  image: string;
  positionIcon?: string;
}
const rewards: Reward[] = [
  {
    name: "Chandra",
    position: 1,
    reward: 10000,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_1_818a01a047.webp",
    positionIcon:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/badge_1_00a24c57af.webp",
  },
  {
    name: "Shweta",
    position: 2,
    reward: 8000,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_2_eb01494a17.webp",
    positionIcon:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/badge_2_1c5473187c.webp",
  },
  {
    name: "Priyank",
    position: 3,
    reward: 5000,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_3_23238fa293.webp",
    positionIcon:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/badge_3_f92201c93f.webp",
  },
  {
    name: "James Doe",
    position: 4,
    reward: 67,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
  {
    name: "Rupa Chandrasekar",
    position: 5,
    reward: 65,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
  {
    name: "Aarav Saxena",
    position: 6,
    reward: 65,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
  {
    name: "Ayush Mehta",
    position: 7,
    reward: 62,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
  {
    name: "Divya Shah",
    position: 8,
    reward: 60,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
  {
    name: "Somesh Nanda",
    position: 9,
    reward: 56,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
  {
    name: "Rajveer Mishra",
    position: 10,
    reward: 55,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_eab584788b.webp",
  },
];

const LeaderBoard = () => {
  return (
    <Box
      mx={{ base: "auto", md: "0px" }}
      w={{ base: "335px", md: "371px" }}
      h={{ base: "554px", md: "687px" }}
    >
      <Text
        color="var(--black, #0A0103)"
        textAlign="center"
        fontFamily="Poppins"
        fontSize="24px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="32px"
        m={{ base: "0px", md: "24px auto 32px" }}
      >
        LeaderBoard
      </Text>

      <Box
        w="371px"
        h="167px"
        mt="32px"
        display="flex"
        alignItems="flex-end"
        position="relative"
      >
        {/* //2nd position */}
        <Box w={{ base: "119px", md: "130px" }} position="absolute" zIndex="2">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image w="40px" h="40px" src={rewards[1].image}></Image>
            <Text
              fontFamily="Poppins"
              fontSize={{ base: "14px", md: "15px" }}
              fontWeight="500"
              lineHeight="24px"
              textAlign="left"
            >
              {rewards[1].name}
            </Text>
          </Box>

          <Box
            h={{ base: "13.65px", md: "13.65px" }}
            border="1px solid #FCE2E8"
            backgroundColor="#FCE2E8"
            clipPath="polygon(0 100%, 100% 100%, 85% 0, 20% 0)"
          ></Box>
          <Box h="61px" border="1px solid #FCE2E8" backgroundColor="#FDF5F7">
            <Image
              mt="3.47px"
              mx="auto"
              src={rewards[1].positionIcon}
              alt={rewards[1].name}
            ></Image>
            <Box
              w={{ base: "60px", md: "65" }}
              h="25px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              m="9.67px auto 36px"
              mx="auto"
            >
              <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Group_f48880005e.webp"></Image>
              <Text
                ml="3.47px"
                fontFamily="Poppins"
                fontSize="15.6px"
                fontWeight="500"
                lineHeight="24.27px"
                textAlign="left"
              >
                ₹{rewards[1].reward}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* //1st position */}
        <Box
          w={{ base: "137px", md: "150px" }}
          position="absolute"
          left={{ base: "110px", md: "120px" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              w={{ base: "40px", md: "48px" }}
              h={{ base: "40px", md: "48px" }}
              src={rewards[0].image}
            ></Image>
            <Text
              fontFamily="Poppins"
              fontSize="12px"
              fontWeight="500"
              lineHeight={{ base: "12px", md: "18px" }}
              textAlign="left"
              color="#0A0103"
            >
              {rewards[0].name}
            </Text>
          </Box>

          <Box
            h="15.75px"
            border="1px solid #FCE2E8"
            backgroundColor="#FCE2E8"
            clipPath="polygon(0 100%, 100% 100%, 85% 0, 20% 0)"
          ></Box>
          <Box h="80px" border="1px solid #FCE2E8" backgroundColor="#FDF5F7">
            <Image
              mt="4px"
              mx="auto"
              w={{ base: "16.43px", md: "18px" }}
              h="18px"
              src={rewards[0].positionIcon}
              alt={rewards[0].name}
            ></Image>
            <Box
              w={{ base: "60px", md: "65" }}
              h="25px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              m="9.67px auto 36px"
            >
              <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Group_f48880005e.webp"></Image>
              <Text
                fontFamily="Poppins"
                ml="4px"
                fontSize="18px"
                fontWeight="500"
                lineHeight="28px"
                textAlign="left"
              >
                ₹{rewards[0].reward}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* //3rd position */}
        <Box
          width={{ base: "91px", md: "100px" }}
          position="absolute"
          left={{ base: "245px", md: "268px" }}
          zIndex="2"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image w="32px" h="32px" mx="auto" src={rewards[2].image}></Image>
            <Text
              fontFamily="Poppins"
              fontSize="12px"
              fontWeight="500"
              lineHeight="16px"
              textAlign="left"
            >
              {rewards[2].name}
            </Text>
          </Box>
          <Box
            h="10.5px"
            border="1px solid #FCE2E8"
            backgroundColor="#FCE2E8"
            clipPath="polygon(0 100%, 100% 100%, 85% 0, 20% 0)"
          ></Box>
          <Box
            height="47px"
            border="1px solid #FCE2E8"
            backgroundColor="#FDF5F7"
          >
            <Image
              mt="2.65"
              mx="auto"
              w={{ base: "10px", md: "12px" }}
              h="11px"
              src={rewards[2].positionIcon}
              alt={rewards[2].name}
            ></Image>
            <Box
              w={{ base: "60px", md: "46px" }}
              h="19px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              m="6.67px auto 7px"
            >
              <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Group_f48880005e.webp"></Image>
              <Text
                fontFamily="Poppins"
                ml="2.67px"
                fontSize="12px"
                fontWeight="500"
                lineHeight="18.67px"
                textAlign="left"
              >
                ₹{rewards[2].reward}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt="24px">
        {rewards.slice(3).map((reward) => (
          <Box
            position="relative"
            borderBottom="0.1px solid var(--dark-mode-black-100, #000)"
            background="var(--dark-mode-white-100, #FFF)"
            key={reward.position}
            display="flex"
            alignItems="center"
            h="52px"
            w={{ base: "334px", md: "370px" }}
          >
            <Text
              w={{ base: "25px", md: "28px" }}
              h="28px"
              m="12px 20px 12px 8px"
              textAlign="right"
              fontFamily="Poppins"
              fontSize={{ base: "16px", md: "18px" }}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="28px"
            >
              {reward.position}
            </Text>
            <Image
              src={reward.image}
              alt={reward.name}
              w={{ base: "24px", md: "32px" }}
              h={{ base: "24px", md: "32px" }}
              mr={{ base: "8px", md: "12px" }}
              borderRadius="50%"
            />
            <Text>{reward.name}</Text>
            <Box
              display="flex"
              alignItems="center"
              position="absolute"
              right={{ base: "0px", md: "16px" }}
            >
              <Image
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Group_f48880005e.webp"
                alt={reward.name}
                w="20px"
                h="20px"
                borderRadius="50%"
              />
              <Text
                w="35px"
                h="28px"
                color="var(--dark-mode-black-80, #343434)"
                textAlign="right"
                fontFamily="Poppins"
                fontSize={{ base: "16px", md: "18px" }}
                fontStyle="normal"
                fontWeight="500"
                lineHeight="28px"
              >
                {reward.reward}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LeaderBoard;
