import Link from "next/link";
import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'


export function TopBar() {
    return (<Flex bg='black' w='100%' p={2} color='white' justifyContent={'space-between'} fontSize="xs">
        <Flex gap="1.5rem">
            <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-small-phone.svg" width={14} height={14} alt={""}></Image>+38 (050) 12 34 567</Flex>
            <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-small-location.svg" width={14} height={14} alt={""}></Image>Ukraine, Kyiv,Khreshchatyk 1</Flex>
            <Flex as={Link} href="#" alignItems="center" gap="0.5rem"><Image src="/ico-small-clock.svg" width={14} height={14} alt={""}></Image>All week 24/7</Flex>
        </Flex>
        <Flex gap="0.625rem">
            <Link href="#"><Image src="/ico-small-facebook.svg" width={14} height={14} alt={""}></Image></Link>
            <Link href="#"><Image src="/ico-small-twitter.svg" width={14} height={14} alt={""}></Image></Link>
            <Link href="#"><Image src="/ico-small-instagram.svg" width={14} height={14} alt={""}></Image></Link>
            <Link href="#"><Image src="/ico-small-pinterest.svg" width={14} height={14} alt={""}></Image></Link>

        </Flex >
    </Flex >);
}