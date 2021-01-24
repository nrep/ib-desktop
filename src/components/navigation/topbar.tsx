/* eslint-disable react/jsx-props-no-spreading */
import {
  Flex,
  Box,
  Collapse,
  Heading,
  Spacer,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Circle,
  Icon,
  BoxProps,
  IconProps,
  SelectProps,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { RiSearchEyeLine } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';

export interface SidebarProps extends BoxProps {
  collapsed: boolean;
}

const SearchIcon: React.FC<IconProps> = (
  props: React.PropsWithoutRef<IconProps>
) => <Icon as={RiSearchEyeLine} {...props} />;

const SearchSelect: React.FC<SelectProps> = (props) => {
  return (
    <Select
      bg="gray.100"
      color="black"
      borderRadius="20px"
      icon={<MdArrowDropDown />}
      {...props}
    >
      <option>All</option>
    </Select>
  );
};

const Topbar: React.FC<SidebarProps> = (
  props: React.PropsWithoutRef<SidebarProps>
) => {
  const { collapsed } = props;
  return (
    <Flex py={3} pr={6}>
      <Box p="2">
        <Collapse in={!collapsed}>
          <Heading size="md" color="black">
            Ibanze Desktop
          </Heading>
        </Collapse>
      </Box>
      <Spacer />
      <Flex>
        <InputGroup borderRadius="20px">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<SearchIcon />}
          />
          <Input borderRadius="20px" placeholder="Search" />
          <InputRightElement
            w="70px"
            mr={1}
            children={<SearchSelect size="sm" />}
          />
        </InputGroup>
        <Circle
          ml={4}
          boxShadow="sm"
          px={2}
          borderWidth="1px"
          borderColor="gray.50"
        >
          <Icon as={FaRegBell} w={5} h={5} />
        </Circle>
      </Flex>
    </Flex>
  );
};

export default Topbar;
