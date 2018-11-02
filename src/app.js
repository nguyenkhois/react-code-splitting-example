import React, { Component } from 'react';

export default class App extends Component {
    //Do stuff
    constructor(props) {
        super(props);
        this.state = { CompHello: null };
    }

    handleClick = (e) => {
        e.preventDefault();
        import('./hello')
            .then(({ Hello }) => {
                console.log('Loaded the lazy component ;-)');
                this.setState({ CompHello: Hello });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    //Render
    render(){
        let { CompHello } = this.state;

        if (!CompHello){
            return (
                <div>
                    Waiting for your click... 
                    <button type="button" onClick={e=>this.handleClick(e)}>
                        Say hello!
                    </button>
                </div>
            );
        } else {
            return <CompHello/>
        }
    }
};
