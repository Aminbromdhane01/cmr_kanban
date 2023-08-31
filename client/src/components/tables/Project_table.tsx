import { ProgressBar } from "react-bootstrap"
import projects from "../../utils/projects"

const Project_table = () => {
  return (
    <div className="col-lg-12 grid-margin stretch-card" >
    <div className="card" style={{borderRadius : '0px'}}>
      <div className="card-body">
        <h4 className="card-title">Projects</h4>
        
     
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> Name </th>
                <th> Client Name</th>
                <th> Production Unit </th>
                <th> Progress </th>
                <th> Deadline </th>
              </tr>
            </thead>
            <tbody>
             {projects.map(project =>(
                <tr>
                <td> {project.name} </td>
                <td> {project.client_name} </td>
                <td> {project.production_unit} </td>
                <td>
                  <ProgressBar variant="info" now={project.progress} style={{height : "10px" , marginTop : "6px"}} />
                </td>
                
                <td> {project.deadline.toDateString()}</td>
              </tr>
             ))}
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Project_table