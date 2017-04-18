import React, {Component} from 'react';
import {Row, Col, Breadcrumb, Icon, Tile, Table} from 'tinper-bee';
import './index.css';


class Dashbroad extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className="dashbroad">
                <Col md={12}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            <Icon type="uf-home"/>主页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Icon type="uf-mac"/>仪表盘
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col sm={3}>
                    <Tile className="card">
                        <Icon type="uf-bubble" className="green-500"/>
                        <div className="card-content">
                            <span>总浏览PV</span>
                            <span>2781</span>
                        </div>
                    </Tile>

                </Col>
                <Col sm={3}>
                    <Tile className="card">
                        <Icon type="uf-users" className="blue-500"/>
                        <div className="card-content">
                            <span>总浏览UV</span>
                            <span>2781</span>
                        </div>
                    </Tile>

                </Col>
                <Col sm={3}>
                    <Tile className="card">
                        <Icon type="uf-cart" className="deep-purple-300"/>
                        <div className="card-content">
                            <span>成交订单数</span>
                            <span>2781</span>
                        </div>

                    </Tile>

                </Col>
                <Col sm={3}>
                    <Tile className="card">
                        <Icon type="uf-rmb-s" className="red-300"/>
                        <div className="card-content">
                            <span>交易额</span>
                            <span>2781</span>
                        </div>
                    </Tile>

                </Col>
                <Col sm={9}>

                </Col>
                <Col sm={3}>
                    <Tile className="color-tile bg-light-blue-200" >

                    </Tile>
                    <Tile className="color-tile bg-pink-200">

                    </Tile>
                </Col>
                <Col sm={6}>
                    <Tile>

                    </Tile>
                </Col>
                <Col sm={6}>
                    <Tile>

                    </Tile>
                </Col>
            </Row>
        )
    }
}

export default Dashbroad;