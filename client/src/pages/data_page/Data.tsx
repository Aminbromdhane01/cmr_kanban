
import ProjectsTable from "../../components/data_tables/projects_table/ProjectsTable"
import MembersTable from "../../components/data_tables/team_table/MembersTable"


const Data = () => {
  return (
    <div className="data_container1">
      
      <MembersTable/>
      <ProjectsTable/>

    </div>
  )
}

export default Data