import { Box, Text, Image } from "@chakra-ui/react";

interface Reward {
  name: string;
  position: number;
  reward: number;
  image: string;
}
const rewards: Reward[] = [
  {
    name: "Chandra",
    position: 1,
    reward: 10000,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_1_818a01a047.webp",
  },
  {
    name: "Shweta",
    position: 2,
    reward: 8000,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_2_eb01494a17.webp",
  },
  {
    name: "Priyank",
    position: 3,
    reward: 5000,
    image:
      "https://masai-website-images.s3.ap-south-1.amazonaws.com/Avatar_3_23238fa293.webp",
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
    mx={{base:"auto",md:"0px"}}
    w={{ base: "335px", md: "371px" }}
      h={{ base: "554px", md: "687px" }}
      border="1px solid red"
    >
      <Text
        color="var(--black, #0A0103)"
        textAlign="center"
        fontFamily="Poppins"
        fontSize="24px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="32px"
        m={{base:"0px",md:"24px auto 32px"}}
      >
        LeaderBoard
      </Text>
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
            <Box display="flex" alignItems="center" position="absolute" right={{base:"0px",md:"16px"}}>
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
