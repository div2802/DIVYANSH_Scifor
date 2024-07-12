import React, { Component } from 'react';

class StyledComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const styledHeading = {
            fontSize: '3rem',
            textAlign: 'center',
            marginTop: '10rem',
            color: '#b43e3e',
        };

        const styledPara = {
            fontSize: '1.1rem',
            textAlign: 'center',
            margin: '4rem',
            color: '#969696',
        };

        return (
            <div>
                <h1 style={styledHeading}>A styled heading in a Class Component</h1>
                <p style={styledPara}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur porro praesentium cupiditate tempora, ab repudiandae quia distinctio ipsum itaque quisquam et sapiente doloremque id? Rerum labore consequatur nisi facilis!
                </p>
            </div>
        );
    }
}

export default StyledComponent;
