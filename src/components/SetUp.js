import React, { Component } from 'react'

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
                <select>
                    {/* ternary operator to make sure that the mapping happens after setting state to avoid error of null */}
                    {this.state.categories !== null ? this.state.categories.map(category => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    )) : null}
                </select>
                <select>
                    <option id="difficulty" value="Easy">Easy</option>
                    <option id="difficulty" value="Medium">Medium</option>
                    <option id="difficulty" value="Hard">Hard</option>
                </select>
            </div>
        )
    }
}
