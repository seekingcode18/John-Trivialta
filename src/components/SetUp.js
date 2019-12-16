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

    handleSubmit = (e) => {
        e.preventDefault(); //  to be deleted
        // this.props.addSearch(this.state.search)
        console.log(this.state); // this function attaches the addSearch func from app to homepage. this console is to make sure handle change worked 
    }

    componentDidMount () {
        this.getCategories();
    }



    render() {

        return (
            <div className="setup">
                <h3>Set up your quiz</h3>
                <form onSubmit={this.handleSubmit}>
                <h5>What category would you like?</h5>
                <select onChange={this.props.handleCategory}>
                <option disabled>Choose a category</option>
                    {/* ternary operator to make sure that the mapping happens after setting state to avoid error of null */}
                    {this.state.categories !== null ? this.state.categories.map(category => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    )) : null}
                </select>
                <br/>
                <h5>What difficulty would you like?</h5>
                <select id="difficulty" onChange={this.props.handleDifficulty}>
                    <option disabled>Choose a difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
