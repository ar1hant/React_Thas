import "./Day16_task1.css";

function White(){
	return(
		<div className="Chessboard_white">
		</div>
	);
}

function Black(){
	return(
		<div className="Chessboard_black">
		</div>
	);
}

function Seq1(){
	return(
		<div className="Chessboard_seq">
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
		</div>
	);
}

function Seq2(){
	return(
		<div className="Chessboard_seq">
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
			<Black/>
			<White/>
		</div>
	);
}

function Chessboard() {
	return (
		<div className="Chessboard_card">
			<Seq1/>
			<Seq2/>
			<Seq1/>
			<Seq2/>
			<Seq1/>
			<Seq2/>
			<Seq1/>
			<Seq2/>
		</div>
	);
}

export default Chessboard;