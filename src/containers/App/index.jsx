import React, {Component} from 'react';
import {MyComponent} from '../../components';
import {MyHeader} from '../../components';
import {Menus} from '../../components';
import {Con, Row, Col, Icon} from 'tinper-bee';
import classnames from 'classnames';;

import './index.css';
import 'tinper-bee/assets/tinper-bee.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const { toggle } = this.state;
        return (
            <div style={{ height: '100%' }}>
                <div className={classnames("side-bar",{"toggled": toggle})}>
                    {
                        toggle ? (
                            <Icon type="uf-iuap-col" className="nav-icon" />
                        ) : (
                            <img
                                src="http://design.yyuap.com/logos/logox.png"
                            />
                        )
                    }

                    <Menus toggle={ toggle } />
                </div>
                <div className={classnames("content",{"toggled": toggle})}>
                    <MyHeader toggle={ toggle } onToggle={ this.handleToggle } />
                    <Con fluid={true}>
                        { this.props.children }
                    </Con>

                </div>
            </div>
        );
    }
}

export default App;
