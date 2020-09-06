import React from "react";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";

import usersData from '../../users/UsersData'


import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'



import ConstrutcArea from './ConstrutcArea';

import "./testfile.css";

let id = Math.random
const fields = ['name','registered', 'role', 'status']


const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

export default function TestFile(props) {

    const dragStart = e => {
        const target = e.target;
        
        e.dataTransfer.setData('card_id', target.id)

        // makes component disapear on click
        
        console.log('dod')

    }

    const dragOver = e => {
        console.log('ok')
        e.stopPropagation()
    }


  return (
    <div className="main">
        <div className="charter">
            <CChartBar
                id={id()}
                draggable='true'
                
                onDragStart={dragStart}
                onDragOver={dragOver}
                className='chart'
                type="bar"
                datasets={[
                {
                    label: "GitHub Commits",
                    backgroundColor: "#f87979",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                },
                ]}
                labels="months"
                options={{
                tooltips: {
                    enabled: true,
                },
                }}
            />
            <CChartDoughnut
                id={id()}
                draggable='true'
                onDragStart={dragStart}
                onDragOver={dragOver}
                className='chart'
                type="doughnut"
                datasets={[
                {
                    backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                    data: [40, 20, 80, 10],
                },
                ]}
                labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
                options={{
                tooltips: {
                    enabled: true,
                },
                }}
            />
            <CChartLine
                id={id()}
                draggable='true'
                onDragStart={dragStart}
                onDragOver={dragOver}
                className='chart'
                type="line"
                datasets={[
                {
                    label: "Data One",
                    backgroundColor: "rgb(228,102,81,0.9)",
                    data: [30, 39, 10, 50, 30, 70, 35],
                },
                {
                    label: "Data Two",
                    backgroundColor: "rgb(0,216,255,0.9)",
                    data: [39, 80, 40, 35, 40, 20, 45],
                },
                ]}
                options={{
                tooltips: {
                    enabled: true,
                },
                }}
                labels="months"
            />
        </div>
        

        <div className="second" id="board-2">
            <ConstrutcArea>
            
            </ConstrutcArea>
        </div>
    </div>
  );
}
