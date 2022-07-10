import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Token Supply', 'Marketing & development', 'Diluted market cap', 'Reinvested', 'Legal', 'Locked tokens'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#46E7E7',
        '#00E48C',
        '#FF6E3E',
        '#FF6DFA',
        '#E19C00',
        '#C4C7CF',
      ],
      borderColor: [
        '#46E7E7',
        '#00E48C',
        '#FF6E3E',
        '#FF6DFA',
        '#E19C00',
        '#C4C7CF',
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <Doughnut data={data} />
  );
}

export default Chart