import React, {Component} from 'react';
import {Row, Col, Breadcrumb, Icon, Tile, Table, ProgressBar} from 'tinper-bee';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './index.css';

const columns = [
    { title: '应用名称', dataIndex: 'name', key: 'name'},
    { title: '状态', dataIndex: 'status', key: 'status', render(text, record){
        return <span className={`bg-${ text }`}>{ text.toString().toUpperCase() }</span>
    }},
    { title: '更新日期', dataIndex: 'date', key: 'date' },
    {
        title: '价格', dataIndex: 'price', key: 'price', render(text, record) {
        return <span className={ record.status}>{ `$${ text }` }</span>;
    },
    },
];

const data = [
    { name: '用友采购云', status: 'sale', date: '2017-04-19', price: '30555', key: '0' },
    { name: '用友HR云', status: 'hot', date: '2017-04-19', price: '68888', key: '1' },
    { name: '用友支付云', status: 'hot', date: '2017-04-19', price: '28889', key: '2' },
    { name: '用友财务云', status: 'test', date: '2017-04-19', price: '36666', key: '3' },
    { name: '用友建筑云', status: 'new', date: '2017-04-19', price: '25777', key: '4' }
];

const chartData = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

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
                <Col md={12}>
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
                        <Tile className="data-chart">
                            <LineChart width={800} height={300} data={chartData}
                                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </Tile>

                    </Col>
                    <Col sm={3}>
                        <Tile className="color-tile bg-light-blue-200 text-center grey-50" >
                            <h2>Tinper-bee</h2>
                            <h2>完善前端服务</h2>
                            <h2>最好的企业级前端应用平台</h2>
                        </Tile>
                        <Tile className="color-tile bg-pink-200 text-center grey-50">
                            <h2>用友云</h2>
                            <h2>赋能中国企业</h2>
                            <h2>你想要的企业服务都在这里</h2>
                        </Tile>
                    </Col>
                    <Col sm={6}>
                        <Tile className="data-tile">
                            <Table
                                columns={ columns }
                                data={ data }
                            />
                        </Tile>
                    </Col>
                    <Col sm={6}>
                        <Tile className="data-tile">
                            <div className="product-progress">
                                <h3>用友金融云部署进度</h3>
                                <ProgressBar active now = {40} />
                            </div>
                            <div className="product-progress">
                                <h3>用友采购云实施进度</h3>
                                <ProgressBar active colors="info" now = {60} />
                            </div>
                            <div className="product-progress">
                                <h3>用友建筑云安装进度</h3>
                                <ProgressBar active colors="success" now = {80} />
                            </div>
                            <div className="product-progress">
                                <h3>用友HR云构建进度</h3>
                                <ProgressBar active colors="warning" now = {90} />
                            </div>
                        </Tile>
                    </Col>
                </Col>

            </Row>
        )
    }
}

export default Dashbroad;