
import {
  Box,
  Flex,
  Avatar,
  HStack,
 
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  LinkBox,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import decodeToken from '../../utils/decodeToken'
import useUserById from '../../hooks/getUserbyId'

interface Props {
  children: React.ReactNode
}

const Links = ['Admin','Dashboard']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
   const token : any = decodeToken()  
   const navigate = useNavigate()
   const logout = () =>{
       navigate('/login')
       
       localStorage.removeItem('token')
       
   }
  
  
   

  return (
    <>
      <Box bg='transparent'  px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
             
                <Link to={'/admin'}  ><NavLink    ><span style={{fontSize :'20px' , fontFamily :'inherit'}}>Admin</span></NavLink></Link>
                <Link to={'/dashboard'}  ><span style={{fontSize :'20px' , fontFamily :'inherit'}} ><NavLink   >Kanban Board</NavLink></span></Link>
             
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Link to={'/project'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Create Project
            </Button>
            </Link>
            <Menu>
           
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={`http://127.0.0.1:3333/api/images/${useUserById(token.id)?.picture}`}
                    
                  
                />
              </MenuButton>
              <MenuList>
                <Link to={'/archive'}><MenuItem>Archive</MenuItem></Link>
                <MenuItem onClick={logout}>Logout</MenuItem>
               
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        
      </Box>

      
    </>
  )
}