import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Urgent', 'High', 'Normal', 'Low'],
  datasets: [
    {
      label: 'Total Number ',
      data: [50, 100, 50, 103],
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

export function Charts() {
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
