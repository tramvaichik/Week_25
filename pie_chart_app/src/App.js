import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

//'Purple',

export const data = {
labels: ['Gold','DarkOrange','DarkMagenta','Blue','Maroon','Black','GreenYellow','Aqua','DeepPink',],
datasets: [
{
label: '# of Votes',
data: [25, 20, 15, 10, 5, 10, 15, 20, 25],
    backgroundColor: [
'rgba(255, 215, 0, 0.2)',
'rgba(255, 140, 0, 0.2)',
'rgba(139, 0, 139, 0.2)',
'rgba(0, 0, 255, 0.2)',
'rgba(128, 0, 0, 0.2)',
'rgba(0, 0, 0, 1)',
'rgba(0, 255, 255, 0.2)',
'rgba(138, 43, 226, 0.2)',
'rgba(255, 20, 147, 0.2)',
],
borderColor: [
'rgba(255, 215, 0, 1)',
'rgba(255, 140, 0, 1)',
'rgba(139, 0, 139, 1)',
'rgba(0, 0, 255, 1)',
'rgba(128, 0, 0, 1)',
'rgba(0, 0, 0, 1)',
'rgba(0, 255, 255, 1)',
'rgba(138, 43, 226, 1)',
'rgba(255, 20, 147, 1)',
],
borderWidth: 1,
},
],
};

function App() {
return (
  <div className="App">
    <div className="app_pie">
       <Pie data={data} />
    </div>
</div>
)


}

export default App;