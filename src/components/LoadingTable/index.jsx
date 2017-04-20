import React, { Component } from 'react';
import { Table, Pagination } from 'tinper-bee';
import PageLoading from '../Loading/index';
import { getUserData } from '../../serve/index';

import './index.css';

class LoadingTable extends Component{
    constructor(props){
        super(props);
        this.columns = [
            { title: '应用名称', dataIndex: 'name', key: 'name'},
            { title: '状态', dataIndex: 'status', key: 'status'},
            { title: '更新日期', dataIndex: 'date', key: 'date' },
            {title: '价格', dataIndex: 'price', key: 'price'},
        ];
        this.state = {
            data : [],
            showLoading: true,
            activePage:1,
            totalPage:5
        }
    }
    componentDidMount(){
        getUserData(1).then((res) => {
            this.setState({
                showLoading: false,
                data: res.data.data,
                totalPage: res.data.totalPage
            })
        })
    }

    handleSelect = (eventKey) => {
        this.setState({
            activePage: eventKey,
            showLoading: true,
        });
        getUserData(eventKey).then((res) => {
            this.setState({
                showLoading: false,
                data: res.data.data
            })
        })
    }

    render(){
        return(
            <div className="modal-container">
                <Table
                    columns={ this.columns }
                    data={ this.state.data }
                />
                <Pagination
                    first
                    last
                    prev
                    next
                    boundaryLinks
                    items={this.state.totalPage}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={ this.handleSelect } />
                <PageLoading show={ this.state.showLoading } container={ this} />
            </div>

        )
    }
}

export default LoadingTable;