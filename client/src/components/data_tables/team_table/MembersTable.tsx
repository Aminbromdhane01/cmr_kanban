
import { Table } from 'evergreen-ui'
import members from '../../../utils/members'
import './table.css'
import { Box } from '@chakra-ui/react'
import { DeleteIcon , EditIcon , Heading } from 'evergreen-ui'

const MembersTable = () => {
  return (
    <div className="card shadow">
      
      <Heading size={700} margin = {5} >
        Team
      </Heading>
    <Table >
    <Table.Head>
    <Table.TextHeaderCell>Name</Table.TextHeaderCell>
      <Table.TextHeaderCell>Email</Table.TextHeaderCell>
      <Table.TextHeaderCell>Production Line</Table.TextHeaderCell>
      <Table.TextHeaderCell>Active</Table.TextHeaderCell>
      <Table.TextHeaderCell></Table.TextHeaderCell>
    </Table.Head>
    <Table.VirtualBody height={240}>
      {members.map((member) => (
        <Table.Row key={member.id} isSelectable onSelect={() => alert(member.username)}>
          <Table.TextCell>{member.username}</Table.TextCell>
          <Table.TextCell>{member.email}</Table.TextCell>
          <Table.TextCell >{member.production_line}</Table.TextCell>
          <Table.TextCell  ><Box
          backgroundColor={member.isActive ? "green.400" : "red" }
          ml={4}
          className="circle"></Box>
          
            
         
          </Table.TextCell>
          <Table.TextCell ><Box className='icon_container'>
            <DeleteIcon color='red'/>
            <EditIcon color='blue'/>

            </Box></Table.TextCell>
        </Table.Row>
      ))}
    </Table.VirtualBody>
  </Table>
  </div>
  )
}

export default MembersTable
