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
    useToast,
    useColorModeValue,
  
  } from '@chakra-ui/react'
  import { useForm, SubmitHandler } from "react-hook-form"

import axios from 'axios'
const Register = () => {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
    reset,
 
  } = useForm()
  const toast = useToast()
  const  onSubmit: SubmitHandler<any> = async (data) => {console.log(data)
    try {
      const response = await axios.post('http://localhost:3333/api/users/signup', data);
      if (response.status === 201) {
        console.log(response.data);
        
        toast({
          title: `${response.data.message}`,
          
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
        reset() ;

      }
      
    } catch (error) {
      console.log
      (error);
      
     
    
  }}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
         <form >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>  
          <Heading fontSize={'4xl'}>Register new account</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
           
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" {
                ...register('email' , {required : "Email is required" , pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address format",
                }}  )  
              }   />
              {
                errors.email && (
                  <p style={{color : "red "}}>{ `${errors.email.message}`}</p>
                )
              }
            </FormControl>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register('username' , {required : "Username is required"})
              }   />
              {
                errors.username && (
                  <p style={{color : "red "}}>{ `${errors.username.message}`}</p>
                )
              }
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('pwd' , {minLength : {value :10 , message :" Password must be at least 10 charecters"}})
              }  /> 
               {
                errors.pwd && (
                  <p style={{color : "red "}}>{ `${errors.pwd.message}`}</p>
                )
              }
            </FormControl>
            <FormControl id="picture">
              <FormLabel>Picture</FormLabel>
              <Input type="text" {...register('picture')}/>
            </FormControl>
            <FormControl id="production_line">
              <FormLabel>Production Line</FormLabel>
              <Input type="text" {...register('productionLine')} />
            </FormControl>
            <FormControl id="admin">
                <Stack direction={"row"} gap={4}>
             
              <Checkbox {...register('isAdmin')}/>
              <FormLabel m={0} >isAdmin</FormLabel>
              </Stack>
            </FormControl>
            <Stack spacing={10}>
           
              <Button onClick={handleSubmit(onSubmit)}
             
                bg={'#A20B31'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                
                }}>
                Sign up
              </Button >
              
            
            </Stack>
          </Stack>
        </Box>
      </Stack>
      </form>
    </Flex>
  )
}

export default Register
