import React from 'react';
import "./HealthCardListEnhanced.css";

var arr = [{title:"Pizza", cals:"56"},
           {title:"Burger", cals:"69"},
           {title:"Coke", cals:"500"},
           {title:"Brownie", cals:"180"},
           {title:"Fried Rice", cals:"90"},
           {title:"Lassania", cals:"200"},
           {title:"Pani Puri", cals:"10"}];

// var sum = 0;
// for(let i = 0; i < arr.length; i++){
//   sum += parseInt(arr[i].cals);
// }

const Enhancedcard = () => {
  return(
    <div className="HealthCardListEnhanced_content">
      {
        arr.map((item, index) =>
          <div className="HealthCardListEnhanced_card" key={index}>
            <h1>{item.title}</h1>
            <h2>you have consumed {item.cals} cals today</h2>
          </div>)
      }
    </div>
  )
}

function HealthCardListEnhanced() {
  return (
    <div className="HealthCardListEnhanced_app">
      <h1>Instructions</h1>
      <div className="HealthCardListEnhanced_heading">
        <ul>
          <li>Build a container</li>
          <li>Create a seperate function and use it as a component</li>
          <li>Pass props "calory and food" and call it to main component</li>
        </ul>
      </div>
      <h1>Calorie Read Only</h1>
      <div className="HealthCardListEnhanced_box">
        <Enhancedcard />
      </div>
    </div>
  );
}

// setTimeout(function(){ alert("You have consumed " + sum + " calories"); }, 1);
export default HealthCardListEnhanced;