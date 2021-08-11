import React from 'react';
import App from './App';
import './HealthCardListWIthDelete.css';

export default function HealthCardListWIthDelete(){
  return(
    <div className="HealthCardListWIthDelete_App">
      <div className="HealthCardListWIthDelete_Instructions">
        <strong><h1>Instructions</h1></strong>
      <li>pass value and setter of the state to the component as props</li>
      </div>
      <strong><h1>Calorie Read Only</h1></strong>
      <App />
    </div>
  )
}