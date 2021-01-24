/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatGroup,
  StatNumber,
  StatArrow,
  StatHelpText,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

import CanvasJSReact from '../canvasjs/canvasjs.react';
import Skeleton from '../components/skeleton';

const { CanvasJS, CanvasJSChart } = CanvasJSReact;

const options = {
  animationEnabled: true,
  data: [
    {
      type: 'doughnut',
      showInLegend: false,
      indexLabel: '{y}',
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: 'Unsatisfied', y: 5 },
        { name: 'Very Unsatisfied', y: 31 },
        { name: 'Very Satisfied', y: 40 },
        { name: 'Satisfied', y: 17 },
        { name: 'Neutral', y: 7 },
      ],
    },
  ],
};

const Dashboard = () => {
  return (
    <Skeleton>
      <Flex
        flex={1}
        w="100%"
        bg="#f5f5fa"
        borderTopLeftRadius="10px"
        p={10}
        direction="column"
        overflow="visible"
      >
        <Box w="100%">
          <StatGroup bg="white" p={10} borderRadius="10px">
            <Stat>
              <StatLabel>Customers</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Stores</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Products</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Sales</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
        <Box display="flex">
          <Box flex={1} mt={10} bg="white" p={10} borderRadius="10px" mr={10}>
            <Table>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Box mt={10} bg="white" p={10} borderRadius="10px" w="30%">
            <CanvasJSChart
              options={options}
              containerProps={{ height: '250px' }}
            />
          </Box>
        </Box>
      </Flex>
    </Skeleton>
  );
};

export default Dashboard;
