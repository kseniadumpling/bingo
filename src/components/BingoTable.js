import React, {Component} from 'react';
import PhraseList from '../data/phrases.json'
import BingoCell from "./BingoCell";
import Table from "react-bootstrap/Table";

const CELLS_NUM = 25;
const CELLS_ROW = Math.sqrt(CELLS_NUM);

/*
 * It parses the list of phrases,
 * shuffles the list, calls CELLS_NUM
 * cells for CELLS_NUM shuffled phrases
 */

class BingoTable extends Component {

	static getPhraseList() {
		let phrases = [];
		for (let phrase of PhraseList) {
			phrases.push(phrase);
		}
		return phrases;
	}

	// Knuth shuffle
	static shufflePhraseList(list) {
		let currentIndex = list.length;
		let temporaryValue;
		let randomIndex;

		// While there remain elements to shuffle
		while (0 !== currentIndex) {
			// Pick a remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			// And swap it with the current element.
			temporaryValue = list[currentIndex];
			list[currentIndex] = list[randomIndex];
			list[randomIndex] = temporaryValue;
		}
		return list;
	}

	static renderBingoCells() {
		// Maybe it will be better to go throw array for one time, but who cares...
		let phrases = BingoTable.shufflePhraseList(BingoTable.getPhraseList()); // TODO: think about complexity
		let cells = [];
		for (let i = 0; i < CELLS_NUM; i++) {
			if(i % CELLS_ROW === 0){
				cells.push(<tr/>);
			}
			cells.push(<BingoCell key={i} info={phrases[i]}/>);
		}

		return cells;
	}


	render() {
		return (
			<Table bordered className="text-center">
				{/*Упаковать в табличку 6x6 */}
				{BingoTable.renderBingoCells()}
			</Table>
		);
	}
}

export default BingoTable;
