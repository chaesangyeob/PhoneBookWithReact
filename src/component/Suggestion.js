import React, { Component } from 'react';

class Suggestion extends Component {
    render() {
        return (
            <div>
                <li>
                    <ul>
                        {this.props.displayMatch}
                    </ul>
                </li>
                
            </div>
        );
    }
}

export default Suggestion;