'use client'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

interface Detail {
    
    username: string;
    email: string;
    image : string
  }

export default function Profiledetails(user : Detail) {
  return (
    <Flex
      minH={'60vh'}
     
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={1}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
         {user.username} Profile 
        </Heading>
        <FormControl id="userName">
          <FormLabel>{user.username} Image</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src={user.image}>
              
              </Avatar>
            </Center>
          
          </Stack>
        </FormControl>
        <FormControl id="userName" >
          <FormLabel>User name</FormLabel>
          {user.username}
        </FormControl>
        <FormControl id="email" >
          <FormLabel>Email address</FormLabel>
          {user.email}
        </FormControl>
       
        
      </Stack>
    </Flex>
  )
}