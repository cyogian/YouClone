import React from 'react';

class SearchBar extends React.Component {    
    state = {
        term: ""
    };

    componentDidMount() {
        this.props.onFormSubmit("");
    }

    // a function that runs whenever the enter button is hit inside the search input
    onFormSubmit = (event) => {
        event.preventDefault(); // to prevent default behavior of submit button
        this.props.onFormSubmit(this.state.term); // A call back function that runs inside App.js brought into the SearchBar component in the for of a prop
    }
    render() {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="ui icon input" id="search-box" style={{width: '100%'}}>
                    <input type="text" placeholder="Search Videos" value={this.state.term}  onChange={e => this.setState({ term: e.target.value })}/>
                    <i className="search icon"></i>
                </div>            
            </form>
        </div>
        );
    }
}

export default SearchBar;