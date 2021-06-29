import React from 'react'
import { Link } from 'react-router-dom'


import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';



export default function Header() {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
        <Link className="navbar-brand" to="/"> <AssignmentIcon/> CreateClients</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"> <AssignmentIndIcon/> Meus clientes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createClients"> <GroupAddIcon/> Adcionar cliente</Link>
            </li>
          </ul>
        </div>
      </nav>
      )
    }
