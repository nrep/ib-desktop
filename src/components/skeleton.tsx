/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, Flex, BoxProps } from '@chakra-ui/react';
import Sidebar from './navigation/sidebar';
import Topbar from './navigation/topbar';

export interface SkeletonProps {
  collapsed: boolean;
}

const Skeleton: React.FC<BoxProps> = (
	props: React.PropsWithChildren<BoxProps>
) => {
	const [collapsed, setCollapsed] = useState(false);
	const { children } = props;
	return (
		<Box
			w="100%"
			minH={window.innerHeight}
			display="flex"
			flex={1}
			borderRadius="20px"
			overflow="visible"
		>
			<Sidebar
				collapsed={collapsed}
				onMouseOver={() => setCollapsed(true)}
				onMouseOut={() => setCollapsed(false)}
			/>
			<Flex flex={1} borderStyle="solid" direction="column">
				<Topbar collapsed={collapsed} />
				{children}
			</Flex>
		</Box>
	);
};

export default Skeleton;
