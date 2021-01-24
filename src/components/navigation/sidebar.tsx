import React from 'react';
import {
  Flex,
  Box,
  VStack,
  Icon,
  Circle,
  Spacer,
  Collapse,
  BoxProps,
  Text,
  Heading,
} from '@chakra-ui/react';
import { CgHomeAlt, CgProfile } from 'react-icons/cg';
import { MdDashboard } from 'react-icons/md';
import {
  RiStore2Line,
  RiFileList2Line,
  RiSettings4Line,
  RiStore2Fill,
  RiSettings4Fill,
  RiFileList2Fill,
  RiDashboard2Line,
  RiDashboard2Fill,
  RiShoppingBag3Line,
  RiShoppingBag3Fill,
} from 'react-icons/ri';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { AiFillContainer, AiOutlineContainer } from 'react-icons/ai';
import { IconType } from 'react-icons';

export interface SelectItemTextProps extends BoxProps {
  text: string;
  active?: boolean;
}

export const SidebarItemText: React.FC<SelectItemTextProps> = (
  props: React.PropsWithRef<SelectItemTextProps>
) => {
  const { text, active } = props;
  return (
    <Box ml={8}>
      <Text
        fontSize="16px"
        fontWeight="bold"
        color={`${active && 'rgba(34, 30, 204, 1)'}`}
      >
        {text}
      </Text>
    </Box>
  );
};

export interface SidebarProps extends BoxProps {
  collapsed: boolean;
}

export interface SidebarLinkProps {
  collapsed?: boolean;
  icon: IconType;
  text: string;
  active?: boolean;
  onClick?: () => void;
  activeIcon?: IconType;
}

export const SidebarLink: React.FC<SidebarLinkProps> = (
  props: React.PropsWithRef<SidebarLinkProps>
) => {
  const { collapsed, icon, text, active, onClick } = props;
  return (
    <Flex onClick={onClick} px={3} py={2} borderLeftRadius={20}>
      <Circle bg={`${active && 'blue.100'}`} p={2}>
        <Circle bg={`${active && 'blue.200'}`} p={1}>
          <Icon
            as={icon}
            color={`${active && 'rgba(34, 30, 204, 1)'}`}
            w={5}
            h={5}
          />
        </Circle>
      </Circle>
      <Flex alignItems="center">
        <Collapse in={collapsed}>
          <SidebarItemText text={text} active={active} />
        </Collapse>
      </Flex>
    </Flex>
  );
};

export const Links: SidebarLinkProps[] = [
  {
    icon: RiDashboard2Line,
    text: 'Dashboard',
    activeIcon: RiDashboard2Fill,
  },
  {
    icon: RiStore2Line,
    text: 'Store',
    activeIcon: RiStore2Fill,
  },
  {
    icon: RiFileList2Line,
    text: 'Products',
    activeIcon: RiFileList2Fill,
  },
  {
    icon: RiShoppingBag3Line,
    text: 'Purchases',
    activeIcon: RiShoppingBag3Fill,
  },
  {
    icon: AiOutlineContainer,
    text: 'Sales',
    activeIcon: AiFillContainer,
  },
];

export const Options: SidebarLinkProps[] = [
  {
    icon: CgProfile,
    text: 'Elvis Peace N.R.',
  },
  {
    icon: RiSettings4Line,
    text: 'Options',
    activeIcon: RiSettings4Fill,
  },
];

const Sidebar: React.FC<SidebarProps> = (
  props: React.PropsWithRef<SidebarProps>
) => {
  const { collapsed, onMouseOver, onMouseOut } = props;
  const [activeMenu, setActiveMenu] = React.useState('Dashboard');
  return (
    <Flex
      w={`${collapsed && '17%'}`}
      direction="column"
      py={5}
      bg="white"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Box>
        <Box mb={14}>
          <Flex px={3}>
            <Box px={2}>
              <Box px={1}>
                <Icon as={CgHomeAlt} w={6} h={6} />
              </Box>
            </Box>
            <Collapse in={collapsed}>
              <Heading ml={8} size="md" color="black">
                Ibanze Desktop
              </Heading>
            </Collapse>
          </Flex>
        </Box>
        <VStack height="50%" spacing={3} align="stretch">
          {Links.map((v) => (
            <SidebarLink
              key={v.text}
              collapsed={collapsed}
              icon={
                v.text === activeMenu
                  ? v.activeIcon
                    ? v.activeIcon
                    : v.icon
                  : v.icon
              }
              text={v.text}
              active={v.text === activeMenu}
              onClick={() => setActiveMenu(v.text)}
            />
          ))}
        </VStack>
      </Box>
      <Spacer />
      <VStack spacing={6} align="stretch">
        {Options.map((v) => (
          <SidebarLink
            key={v.text}
            collapsed={collapsed}
            icon={
              v.text === activeMenu
                ? v.activeIcon
                  ? v.activeIcon
                  : v.icon
                : v.icon
            }
            text={v.text}
            active={v.text === activeMenu}
            onClick={() => setActiveMenu(v.text)}
          />
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
