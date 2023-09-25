import { FormLabel , FormControl, Input, Stack, Flex, useColorModeValue, Box, Heading,  Button, Toast, useToast  } from '@chakra-ui/react'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'




const ProjectForm = () => {
  const toast = useToast()
    const {
        register,
        handleSubmit,
       
        formState: { errors },
        reset,
     
      } = useForm()
      const  onSubmit: SubmitHandler<any> = async (data) => {
        console.log(data);
        
          
        try {
            const response = await axios.post('http://127.0.0.1:3333/api/projects/create', data)
            if (response.status ===201)
            {
              toast({
                title: 'Project created.',
               
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              reset()
            }
           
            
            
        } catch (error) {
            console.log(error);
            
        }

      }
  return (
    <Flex
    minH={'100vh'}
    
    justify={'center'}
    alignItems={'center'}
    justifyContent={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    
    <Stack  >
      <Stack align={'center'} pb={4}>
        <Heading fontSize={'4xl'}  color={'#A20B31'}>Create Project</Heading>
        
      </Stack>
      <Box
     
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        width={'800px'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="ename">
            <FormLabel>Name</FormLabel>
            <Input type="text" {...register('Name')} />
            
          </FormControl>
          <FormControl id="ClientName">
            <FormLabel>Client Name</FormLabel>
            <Input type="text" {...register('ClientName')} />
          </FormControl>
          <FormControl id="ProductionUnit">
            <FormLabel>Production Unit</FormLabel>
            <Input type="text" {...register('ProductionUnit')} />
          </FormControl>
            
            <Button
          
              bg={'#A20B31'}
              color={'white'}
              onClick={handleSubmit(onSubmit)}
              _hover={{
                bg: 'blue.500',
            
              
              }}>
              Create
            </Button >
          
        </Stack>
      </Box>
    </Stack>
    
  </Flex>
   
  )
}

export default ProjectForm