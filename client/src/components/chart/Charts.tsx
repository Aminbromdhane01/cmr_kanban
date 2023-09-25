import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useFetch from '../../hooks/useFetch';

ChartJS.register(ArcElement, Tooltip, Legend);



export function Charts() {
  const {data : tasks, error , loading} = useFetch('http://127.0.0.1:3333/api/tasks')

  
  
  let NBR_RED = tasks?.filter(obj => obj.priority === "URGENT").length as number
  let NBR_ORANGE = tasks?.filter(obj => obj.priority === "HIGH").length as number
  let NBR_GREEN = tasks?.filter(obj => obj.priority === "LOW").length as number
  let NBR_BLUE = tasks?.filter(obj => obj.priority === "NORMAL").length as number
   
  const data = {
  
    labels: ['Urgent', 'High', 'Normal', 'Low'],
    datasets: [
      {
        label: 'Total Number ',
        data: [NBR_RED, NBR_ORANGE, NBR_GREEN, NBR_BLUE],
        backgroundColor: [
          'rgba(255,183,208, 255)',
          'rgba(255,239,185, 255)',
          'rgba(209,245,255, 255)',
          'rgba(222,255,203, 255)',
         
        ],
        borderColor: [
          'rgba(255,183,208, 1)',
          'rgba(255,239,185, 1)',
          'rgba(209,245,255, 1)',
          'rgba(222,255,203, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };
  const doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  return (
    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Doughnut Chart</h4>
                                <Doughnut data={data} options={doughnutPieOptions} />
                            </div>
                        </div>
                    </div>
  );
}
