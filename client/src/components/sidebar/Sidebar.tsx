import React from 'react'
import './sidebar.css'
  
  import { BarChart, ChatBubbleOutline, DynamicFeed, FolderOpen, LineStyle, MailOutline, Note, PermIdentity, Report,  Timeline,  WorkOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar : React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
          
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
              <Link className='link' to= "/users">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Team Mermbers
              </li>
              </Link>
            
              <li className="sidebarListItem">
                <FolderOpen className="sidebarIcon" />
                Projects
              </li>
           
            <li className="sidebarListItem">
              <Note className="sidebarIcon" />
              Cards
            </li>
            <Link to="/kanban" className='link'>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              
              Kanban board
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 
