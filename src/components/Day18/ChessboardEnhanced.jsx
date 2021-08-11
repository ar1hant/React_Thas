import React from 'react';
import "./ChessboardEnhanced.css";


var arr = ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'];
var arr2 = ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'];
var arr3 = [1, 2, 1, 2, 1, 2, 1, 2];

function White(){
	return(
		<div className="ChessboardEnhanced_white">
		</div>
	);
}

function Black(){
	return(
		<div className="ChessboardEnhanced_black">
		</div>
	);
}

function ChessboardEnhanced() {
  return (
    <div className="ChessboardEnhanced_card">
      {
        arr3.map((item) => item === 1 ?
        <div className="ChessboardEnhanced_seq">{(arr.map((it, index) => it === 'w' ? <White key = {index} /> : <Black key = {index} />))}</div> : 
        <div className="ChessboardEnhanced_seq">{(arr2.map((it, index) => it === 'w' ? <White key = {index} /> : <Black key = {index} />))}</div>)
      }
    </div>
  );
}

export default ChessboardEnhanced;