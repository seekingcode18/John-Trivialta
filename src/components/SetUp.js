import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SetUp extends Component {


    state = {
        categories: null,
        difficulty: null
    }

    getCategories = () => {
        fetch("https://opentdb.com/api_category.php")
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(json => this.setState({categories: json.trivia_categories}))
    }

    componentDidMount () {
        this.getCategories();
    }


    render() {

        return (
            <div className="setup">
                <h3>Set up your quiz</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <h5>What category would you like?</h5>
                    <select onChange={this.props.handleCategory}>
                        {/* ternary operator to make sure that the mapping happens after setting state to avoid error of null */}
                        {this.state.categories !== null ? this.state.categories.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        )) : null}
                    </select>
                    <br/>
                    <h5>What difficulty would you like?</h5>
                    <select id="difficulty" onChange={this.props.handleDifficulty}>
                        <option value="Easy" defaultValue="selected">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <Link to="/questions" type="submit">Submit</Link>
                </form>
            </div>
        )
    }
}
