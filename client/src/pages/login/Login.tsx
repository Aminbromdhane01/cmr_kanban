'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  useToast,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const [email , setemail] = useState('') ;
  const [password , setpassword] = useState('') ; 
  
  const navigate = useNavigate()
  const toast = useToast()
   
  const successlogin = () => {

    if (email == 'admin@cmr.com' && password == 'admin') {

    toast({
      title: 'Login Success',
      
      status: 'success',
      duration: 1500,
      isClosable: true,
    })
   setTimeout(() => { navigate('/dashboard')
    
   }, 1000); }
   else{
    toast({
      title: 'Email or Password INVALID',
      
      status: 'error',
      duration: 1500,
      isClosable: true,
    })

   }
   
  }

  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setemail(e.target.value)
              }  />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setpassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
              onClick={successlogin}
                bg={'#A20B31'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                
                }}>
                Sign in
              </Button >
            
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}