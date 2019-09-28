import React, {Component} from 'react';
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
			checked: !this.state.checked
		})
	}

	render() {
		return (
				<td
						className={this.state.checked ? 'content checked': 'content'}
						onClick={this.handleClick}
				>
					<p>{this.props.info.phrase}</p>
				</td>
		);
	}
}

export default BingoCell;