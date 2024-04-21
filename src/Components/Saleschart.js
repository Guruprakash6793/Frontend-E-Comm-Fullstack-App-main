import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const option ={
    responsive :true,
    plugin : {
        legend : {
            position : 'top'
        },
        title : {
            display : true,
            text : 'Sales Chart'
        }
    }
}

const data = {
    labels : ['Jan','Feb','Mar'],
    datasets : [
        {
            label : 'Profit of Sale',
            data : ['30000','50000','70000'],
            backgroundColor : "rgba(255,99,132,0.5)"
        },
        {
            label : 'Cost of Goods',
            data : ['10000','20000','30000'],
            backgroundColor : "rgba(54, 162, 235, 0.5)"
        }
       
    ]
}

function Saleschart() {
    return(
            <>
            <div style={{width:700,height:500}}>
            <Bar options={option} data={data}  />
            </div>
            </>
    )
}

export default Saleschart;