import { Table } from 'evergreen-ui'

import './table.css'
import { Box, Progress } from '@chakra-ui/react'
import { DeleteIcon , EditIcon , Heading } from 'evergreen-ui'
import projects from '../../../utils/projects'

const ProjectsTable = () => {
  return (
    <div className="card shadow">
      
      <Heading size={700} margin = {5} >
        Projects
      </Heading>
    <Table >
    <Table.Head>
    <Table.TextHeaderCell>Name</Table.TextHeaderCell>
      <Table.TextHeaderCell>Client Name</Table.TextHeaderCell>
      <Table.TextHeaderCell>Production Unit</Table.TextHeaderCell>
      <Table.TextHeaderCell>Progress</Table.TextHeaderCell>
      <Table.TextHeaderCell></Table.TextHeaderCell>
    </Table.Head>
    <Table.VirtualBody height={240}>
      {projects.map((project) => (
        <Table.Row key={project.id} isSelectable onSelect={() => alert(project.name)}>
          <Table.TextCell>{project.name}</Table.TextCell>
          <Table.TextCell>{project.client_name}</Table.TextCell>
          <Table.TextCell >{project.production_unit}</Table.TextCell>
          <Table.TextCell  >
          <Box> {project.progress}%</Box>
          <Progress value={project.progress} />
            
         
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

export default ProjectsTable
