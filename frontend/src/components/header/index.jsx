import React from 'react'
import { Link } from 'react-router-dom'

import { AreaHeader } from './styled'

import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export default function Header() {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <AssignmentIcon/> CadClient 
                </div>
                <nav>
                    <ul>
                        <li><Link to="/"> <AssignmentIndIcon /> Meus clientes</Link></li>
                        <li><Link to="/adcionar-cliente"> <GroupAddIcon/> Add Cliente</Link></li>
                        <li><Link to="logout"> <ExitToAppIcon/> Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}