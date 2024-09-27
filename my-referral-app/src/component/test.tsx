// src/Trapezium.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Trapezium: React.FC = () => {
  return (
    <Box
      width="200px" // Width of the trapezium
      height="100px" // Height of the trapezium
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        backgroundColor="blue.400" // Change color as needed
        clipPath="polygon(0 100%, 100% 100%, 80% 0, 20% 0)" // Trapezium shape
      >
        {/* <Text
          color="white"
          fontSize="24px"
          fontWeight="bold"
          position="absolute"
          top="30%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          Trapezium
        </Text> */}
      </Box>
    </Box>
  );
};

export default Trapezium;
