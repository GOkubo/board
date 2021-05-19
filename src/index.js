import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CreateTable extends React.Component {
	render() {
		let rows = [];
		let columns = [];

		for (var c = 1; c <= this.props.boardLenght; c++) {
			if(c === 1){
				columns.push(leftPad(c, 4));
				rows.push(columns);
			} else {
				if (c%10 === 0) {
					columns.push(leftPad(c, 4));
					columns = [];
					rows.push(columns);
				} else {
					columns.push(leftPad(c, 4));
				}
			}
		}

		rows = compareFilterPairOdd(rows, this.props.deletePairOdd);
		rows = compareNumberFilter(rows, this.props.numberFilter);

	    return (
		    <div className='board-row'>
				<table className='board-table'>
					<tbody>
						{rows.map((c, cidx) => 
							{ return (
								<tr key={cidx.toString()}>
							    	{c.map((r, ridx) => { return (<td key={ridx.toString()}>{r}</td>)})}
        						</tr>
					    	)}
					    )}
					</tbody>
				</table>
		    </div>
		)
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
	    	history: [],
	    	boardLenght: "1000",
	    	numberFilter: "XXXX",
	    	deletePairOdd: '',
	    };
	}

	handleChange(e) {
		if(e.target.name === 'boardLenght') {
			if(e.target.value <= 1000){
				this.setState({[e.target.name]: e.target.value});
			} else {
				document.getElementById("quantity").value = 1000;
				this.setState({[e.target.name]: '1000'});
			}
		} else if (e.target.name === 'deletePairOdd') {
			this.setState({[e.target.name]: e.target.value});
		} else if (e.target.name === 'numberFilter') {
			this.setState({[e.target.name]: e.target.value});
		}
	}

	render() {
	    return (
	      	<div className="game">
	        	<div className="game-board">
	        		<form>
				    	<div className="insert-number">
				    		<label htmlFor="boardLenght">Quantidade (entre 1 e 1000): </label>
							<input type="number" id="boardLenght" name="boardLenght" min="001" max="1000" defaultValue={this.state.boardLenght} onChange={this.handleChange.bind(this)}></input>
						</div>
				    	<div className="filters">
					    	<div className="filter">
					    		<label htmlFor="excluir">Excluir par/impar: </label>
					    		<select id="deletePairOdd" name="deletePairOdd" onChange={this.handleChange.bind(this)}>
								    <option value=""> -- </option>
								    <option value="pppi">PPPI</option>
								    <option value="ppii">PPII</option>
								    <option value="ppip">PPIP</option>
								    <option value="pipp">PIPP</option>
								    <option value="pipi">PIPI</option>
								    <option value="piip">PIIP</option>
								    <option value="piii">PIII</option>
								    <option value="iiip">IIIP</option>
								    <option value="iipp">IIPP</option>
								    <option value="iipi">IIPI</option>
								    <option value="ipii">IPII</option>
								    <option value="ipip">IPIP</option>
								    <option value="ippi">IPPI</option>
								    <option value="ippp">IPPP</option>
								</select>
							</div>
					    	<div className="filter">
					    		<label htmlFor="numberFilter">Filtro de numeros(Ex: X0X2): </label>
								<input type="input" id="numberFilter" name="numberFilter" defaultValue={this.state.numberFilter} onChange={this.handleChange.bind(this)}></input>
							</div>
						</div>
					</form>
	       			<CreateTable 
	       				boardLenght={this.state.boardLenght}
	       				deletePairOdd={this.state.deletePairOdd}
	       				numberFilter={this.state.numberFilter}
	       			/>
	        	</div>
	        </div>
	    );
	}
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);

function leftPad(value, totalWidth, paddingChar) {
  	var length = totalWidth - value.toString().length + 1;
  	return Array(length).join(paddingChar || '0') + value;
};

function compareFilterPairOdd(rows, filter) {
	var rowFiltered = [];
	rowFiltered = rows.map((r, ridx) => {
		return (r.map((val, vidx) => {
						var filtered = val.toString();
						if(filter === 'pppi' && filtered[0] % 2 === 0 && filtered[1] % 2 === 0 && filtered[2] % 2 === 0 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'ppii' && filtered[0] % 2 === 0 && filtered[1] % 2 === 0 && filtered[2] % 2 === 1 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'ppip' && filtered[0] % 2 === 0 && filtered[1] % 2 === 0 && filtered[2] % 2 === 1 && filtered[3] % 2 === 0){
							filtered = '';
						} else if(filter === 'pipp' && filtered[0] % 2 === 0 && filtered[1] % 2 === 1 && filtered[2] % 2 === 0 && filtered[3] % 2 === 0){
							filtered = '';
						} else if(filter === 'pipi' && filtered[0] % 2 === 0 && filtered[1] % 2 === 1 && filtered[2] % 2 === 0 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'piip' && filtered[0] % 2 === 0 && filtered[1] % 2 === 1 && filtered[2] % 2 === 1 && filtered[3] % 2 === 0){
							filtered = '';
						} else if(filter === 'piii' && filtered[0] % 2 === 0 && filtered[1] % 2 === 1 && filtered[2] % 2 === 1 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'iiip' && filtered[0] % 2 === 1 && filtered[1] % 2 === 1 && filtered[2] % 2 === 1 && filtered[3] % 2 === 0){
							filtered = '';
						} else if(filter === 'iipp' && filtered[0] % 2 === 1 && filtered[1] % 2 === 1 && filtered[2] % 2 === 0 && filtered[3] % 2 === 0){
							filtered = '';
						} else if(filter === 'iipi' && filtered[0] % 2 === 1 && filtered[1] % 2 === 1 && filtered[2] % 2 === 0 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'ipii' && filtered[0] % 2 === 1 && filtered[1] % 2 === 0 && filtered[2] % 2 === 1 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'ipip' && filtered[0] % 2 === 1 && filtered[1] % 2 === 0 && filtered[2] % 2 === 1 && filtered[3] % 2 === 0){
							filtered = '';
						} else if(filter === 'ippi' && filtered[0] % 2 === 1 && filtered[1] % 2 === 0 && filtered[2] % 2 === 0 && filtered[3] % 2 === 1){
							filtered = '';
						} else if(filter === 'ippp' && filtered[0] % 2 === 1 && filtered[1] % 2 === 0 && filtered[2] % 2 === 0 && filtered[3] % 2 === 0){
							filtered = '';
						}
						return (filtered)
				}))

	})

	return rowFiltered;
}

function compareNumberFilter(rows, filter) {
	var rowFiltered = [];
	rowFiltered = rows.map((r, ridx) => {
		return (r.map((val, vidx) => {
						var filtered = val.toString();
						if(filter !== 'XXXX' &&
						   (filter[0] === 'X' || filter[0] ===filtered[0]) && 
						   (filter[1] === 'X' || filter[1] ===filtered[1]) &&
						   (filter[2] === 'X' || filter[2] ===filtered[2]) &&
						   (filter[3] === 'X' || filter[3] ===filtered[3])){
							filtered = '';
						}
						return (filtered)
				}))

	})

	return rowFiltered;
}