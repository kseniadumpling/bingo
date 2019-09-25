import React, {Component, Fragment} from 'react';
import PhraseList from '../data/phrases.json'
import BingoCell from "./BingoCell";

const CELLS_NUM = 3;

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
			cells.push(<BingoCell info={phrases[i]}/>);
		}
		return cells;
	}


	render() {
		return (
			<Fragment>
				{/*Упаковать в табличку 6x6 */}
				{BingoTable.renderBingoCells()}
			</Fragment>
		);
	}
}

export default BingoTable;
