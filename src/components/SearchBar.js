import React from 'react'

class SearchBar extends React.Component{
    state = { term: 'Enter video search keys'};

    onInputChange = event => {
        this.setState( {term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault(); //THIS AVOIDS PAGE TO REFRESH WHEN HIT ENTER
        //TO DO : maake sure to call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className={'search-bar ui segment'}>
                <form onSubmit={this.onFormSubmit} className={"ui form"}>
                    <div className={"field"}>
                        <label>Video Search</label>
                        <input
                            type={"text"}
                            value={this.state.text}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
