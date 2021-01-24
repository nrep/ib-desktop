/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithoutRef, useRef } from 'react';
import {
  Box,
  VStack,
  SelectProps,
  Select,
  Flex,
  Circle,
  Icon,
  IconProps,
  TabList,
  TabPanel,
  Tab,
  Tabs,
  TabPanels,
  chakra,
  useTab,
  useStyles,
  Divider,
  Center,
} from '@chakra-ui/react';

import Skeleton from '../components/skeleton';
import { MdArrowDropDown } from 'react-icons/md';
import { RiAddLine, RiFilterLine } from 'react-icons/ri';
import { SearchIcon } from '../components/icons';

const FilterSelect: React.FC<SelectProps> = (
  props: PropsWithoutRef<SelectProps>
) => {
  return (
    <Select
      borderRadius="20px"
      icon={<MdArrowDropDown />}
      borderWidth={0}
      fontWeight="bold"
      {...props}
    >
      <option selected={true}>All sale orders</option>
    </Select>
  );
};

const PlusIcon: React.FC<IconProps> = (
  props: React.PropsWithoutRef<IconProps>
) => <Icon as={RiAddLine} {...props} />;

const StyledTab = chakra('div', { themeKey: 'Tabs.Tab' });

const CustomTab = React.forwardRef((props, ref) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab(props);
  const isSelected = !!tabProps['aria-selected'];
  const tab = useRef(Box);

  // 3. Hook into the Tabs `size`, `variant`, props
  const styles = useStyles();

  return (
    <StyledTab
      height="100%"
      pb={0}
      display="flex"
      __css={styles.tab}
      {...tabProps}
      flexDirection="column"
    >
      <Center fontSize={13} fontWeight="bold" textTransform="uppercase" color={`${isSelected && '#2b27ce' || "#a09dba"}`} flex={1} as="div">
        {tabProps.children}
      </Center>
      <Divider
        w={tabProps.ref.offsetWidth / 10}
        colorScheme={`${isSelected && 'blue'}`}
        borderStyle={`${isSelected && 'solid'}`}
        borderWidth={`${isSelected && '2px'}`}
        borderColor={`${isSelected && '#2b27ce'}`}
        borderRadius="10px"
      />
    </StyledTab>
  );
});

const Sales = () => {
  return (
    <Skeleton overflow="scroll">
      <Box
        display={['flex']}
        w="100%"
        bg="#f5f5fa"
        borderTopLeftRadius="10px"
        p={10}
        direction="column"
      >
        <VStack w="27%" mr={4} overflow="visible">
          <Flex
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth="1px"
            alignItems="center"
            px={1}
          >
            <FilterSelect flex={1} />
            <Circle mx={2}>
              <Icon as={RiFilterLine} w={5} h={5} />
            </Circle>
            <Circle mx={2}>
              <Icon as={SearchIcon} w={5} h={5} />
            </Circle>
            <Circle mx={2} px={2} py={1} bg="rgba(34, 30, 204, 1)">
              <PlusIcon fill="white" w={5} h={5} />
            </Circle>
          </Flex>
          <Box
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth=".px"
          />
          <Box
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth="1px"
          />
          <Box
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth="1px"
          />
          <Box
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth="1px"
          />
          <Box
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth="1px"
          />
          <Box
            bg="white"
            w="100%"
            borderRadius="10px"
            height="70px"
            borderStyle="solid"
            borderWidth="1px"
          />
        </VStack>
        <Box flex={1} bg="white" display="flex" borderRadius="10px">
          <Box
            bg="white"
            w="100%"
            borderBottomWidth="1px"
            borderTopRadius="10px"
            height="70px"
          >
            <Tabs variant="unstyled" colorScheme="green">
              <TabList height="70px">
                <CustomTab>PACKAGES</CustomTab>
                <CustomTab>INVOICES</CustomTab>
                <CustomTab>HISTORY</CustomTab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default Sales;
