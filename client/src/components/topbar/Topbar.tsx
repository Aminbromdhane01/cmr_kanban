
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
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
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
                <Link to={'/dashboard/all'}  ><span style={{fontSize :'20px' , fontFamily :'inherit'}} ><NavLink   >Kanban Board</NavLink></span></Link>
             
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button>
            <Menu>
              <span>{useUserById(token.id)?.username}</span>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <Link to={'/archive'}><MenuItem>Archive</MenuItem></Link>
                <MenuItem>Logout</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        
      </Box>

      
    </>
  )
}