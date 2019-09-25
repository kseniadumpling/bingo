import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import './BingoCell.css';

/*
 * It renders one single cell
 * with phrase (which is prop)
 */

class BingoCell extends Component {
	state = {
		checked: false,
	};

	handleClick = (e) => {
		this.setState({
			cheched: true
		})
	}

	render() {
		return (
			<Card>
				<Card.Body
						className={this.state.checked ? 'checked': ''}
						onClick={this.handleClick /*Точно ли это будет работать?*/}
				>
					<p>{this.props.info.phrase}</p>
				</Card.Body>
			</Card>
		);
	}
}

export default BingoCell;