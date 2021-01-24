import React, { FC, PropsWithoutRef } from 'react';
import { IconProps, Icon } from '@chakra-ui/react';
import { RiSearchEyeLine } from 'react-icons/ri';

export const SearchIcon: FC<IconProps> = (
  props: PropsWithoutRef<IconProps>
) => <Icon as={RiSearchEyeLine} {...props} />;
