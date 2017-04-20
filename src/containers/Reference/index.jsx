import React, { Component } from 'react';
import {
    Row,
    Col,
    FormControl,
    Modal,
    Label,
    Tree,
    Table,
    FormGroup,
    Icon,
    Button,
    Popconfirm,
    Pagination,
    InputGroup,
} from 'tinper-bee';


import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { SimpleReference } from '../../components/index';

import 'rc-tabs/assets/index.css';

import './index.css';

const TreeNode = Tree.TreeNode;



const staticdata = {
    "1001A11000000000SVW0": [
        {
            "planpriority": "",
            "pk_org": "0001A110000000000BSR",
            "refcode": "PM201604050020",
            "pk_group": "0001A110000000000BSR",
            "refname": "市场拓展费",
            "pk_eps": "null",
            "pk_workcalendar": "",
            "refpk": "1001A11000000000SXPP",
            "project_sh_name": "",
            "planmodel": "",
            "refjoin": "null"
        },
        {
            "planpriority": "",
            "pk_org": "0001A110000000000BSR",
            "refcode": "PM201604050021",
            "pk_group": "0001A110000000000BSR",
            "refname": "零星客户",
            "pk_eps": "null",
            "pk_workcalendar": "",
            "refpk": "1001A11000000000SXPS",
            "project_sh_name": "",
            "planmodel": "",
            "refjoin": "null"
        }
    ],
    "1001A11000000000SVX6": [
        {
            "planpriority": "",
            "pk_org": "0001A110000000000BSR",
            "refcode": "PM201604050020",
            "pk_group": "0001A110000000000BSR",
            "refname": "市场拓展费2",
            "pk_eps": "null",
            "pk_workcalendar": "",
            "refpk": "1001A11000000000SXPP",
            "project_sh_name": "",
            "planmodel": "",
            "refjoin": "null"
        },
        {
            "planpriority": "",
            "pk_org": "0001A110000000000BSR",
            "refcode": "PM201604050021",
            "pk_group": "0001A110000000000BSR",
            "refname": "零星客户2",
            "pk_eps": "null",
            "pk_workcalendar": "",
            "refpk": "1001A11000000000SXPS",
            "project_sh_name": "",
            "planmodel": "",
            "refjoin": "null"
        }
    ],
    "1001A11000000000SVD6": [
        {
            "planpriority": "",
            "pk_org": "0001A110000000000BSR",
            "refcode": "PM201604050020",
            "pk_group": "0001A110000000000BSR",
            "refname": "市场拓展费3",
            "pk_eps": "null",
            "pk_workcalendar": "",
            "refpk": "1001A11000000000SXPP",
            "project_sh_name": "",
            "planmodel": "",
            "refjoin": "null"
        },
        {
            "planpriority": "",
            "pk_org": "0001A110000000000BSR",
            "refcode": "PM201604050021",
            "pk_group": "0001A110000000000BSR",
            "refname": "零星客户3",
            "pk_eps": "null",
            "pk_workcalendar": "",
            "refpk": "1001A11000000000SXPS",
            "project_sh_name": "",
            "planmodel": "",
            "refjoin": "null"
        }
    ]
};

let treedata = [
    {
        "id": "0039FB6F-7E72-455D-A7A3-189B6A5698F5",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "01700974-7FAD-4901-BFFC-E8CEA6F876EE",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "01E4EFC6-9A47-42DD-91AF-EA42EF9127E7",
        "code": "214aa",
        "name": "情人节快乐12341aaaaaaaaaaaa",
        "pid": "0680F28F-78D2-4BDE-B048-026E04002443",
        "isLeaf": "true"
    },
    {
        "id": "01F572F4-FE91-4159-BE0E-8F33D6B8B302",
        "code": "05",
        "name": "生产中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "023E1F54-B038-4F92-81D9-D91180831741",
        "code": "0602",
        "name": "设计部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "02566BAD-F1A5-4F63-B4E1-3F994ACD79B4",
        "code": "02",
        "name": "服务中心",
        "pid": "0680F28F-78D2-4BDE-B048-026E04002443",
        "isLeaf": "true"
    },
    {
        "id": "02EDD0F9-F384-43BF-9398-5E5781DAC5D0",
        "code": "0502",
        "name": "二车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "04EF7402-CFBD-4481-AC1A-B9034BA4D727",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "0500CC91-4A98-4C1D-A4D6-C6A0ABCC53AD",
        "code": "02",
        "name": "服务中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "056B1969-5A17-4699-87F7-8433A72E0644",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "05707379-5E6B-4167-A071-E796936D9B8E",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "05E0BECC-7E48-4F4F-9CF2-44D42E9E7A38",
        "code": "0402",
        "name": "仓储部",
        "pid": "0650FBB1-0C1E-4EE6-858F-CB56C83E7A74",
        "isLeaf": "true"
    },
    {
        "id": "0650FBB1-0C1E-4EE6-858F-CB56C83E7A74",
        "code": "0302",
        "name": "销售部",
        "pid": "0680F28F-78D2-4BDE-B048-026E04002443",
        "isLeaf": "false"
    },
    {
        "id": "0680F28F-78D2-4BDE-B048-026E04002443",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "false"
    },
    {
        "id": "07F73BE1-E8E2-45A1-BD78-8424AF47D99D",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "08103501-6C6F-4980-AF6B-9BC7EFCDDEE8",
        "code": "10",
        "name": "上海分公司",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "0B690887-50B1-4BA6-8207-CFE41C8F437D",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "0BB2EF55-A382-4E32-9FB4-A1744F1CAC91",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "0BC882E3-CBCE-4DCE-A42F-C15FEA5308B0",
        "code": "0903",
        "name": "信息部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "0D2CB035-AD11-4DE8-8586-CEC756AB64FD",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "0D52FD88-2CF2-4ECB-877F-FEEBC80C52E9",
        "code": "11",
        "name": "项目基建部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "0E570467-F3C2-48FB-96EF-13DDAA06AFC1",
        "code": "0404",
        "name": "质检部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "0F9F2E9C-2DFA-470A-B233-3899783D41D4",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1013C8F4-D21F-4AAE-A03B-5B066EB21C91",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "110342C4-22C0-4B6F-BAEF-1BD2BD06A9E6",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "116AC1A6-5B1C-427E-B6EC-7D4465724E65",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "11F657E2-664A-41CA-9CAC-47410DCC05C6",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "11FB5E80-07B9-4D6A-9EA5-EC5DA93B8FE8",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "138E3A9F-F954-46DF-80EF-978D5A25312E",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "13F34E85-E9B1-4502-AA85-4BB483AA4343",
        "code": "0602",
        "name": "设计部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "15004D80-4B23-4A73-A269-809449C6A908",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1673F0AA-2706-49EC-9041-AD3B79BEB7BF",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "16B56354-79AF-4021-971D-25237A6CAC80",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "17B386BE-7985-44AF-9452-9FC0D4AFF601",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "17BD3D6B-1F3E-44E7-A68F-F8E285CCDA5F",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "18F9ACC5-A785-44B9-8CC1-2B5D567447FD",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1988187A-FF2D-4A65-B88F-225B4A7A2A22",
        "code": "06",
        "name": "技术中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "19D55C4F-0FA2-4622-BC42-4EF06A531EBE",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1A885326-2F2C-4B2B-96AE-C7384D4F16C8",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1B30E0E5-6C12-491E-84AA-049A20EF2A11",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1BF05106-D780-4FDD-B3F0-7D39A765E4A8",
        "code": "0504",
        "name": "设备动力部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "1C0FAF84-DC37-43F5-939C-62EF63D52933",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1C137A2C-C14E-4F9D-A3EA-719C2ED151B4",
        "code": "0301",
        "name": "市场部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "1C14FC70-94E4-4BFF-A0C9-8D06FDD735E4",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1D3D04E8-127C-48A6-A935-135B286C9C3F",
        "code": "03",
        "name": "营销中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "1D71A2E9-2247-41D4-9753-A367ABEC1A6A",
        "code": "",
        "name": "1111111111111111",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1D7C1940-88F9-4EE6-BF12-3C538EA33D36",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "1F3F65D5-56DD-4C55-862D-51C3903F09A9",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2023E984-882C-4E12-ADE2-9FE929E1CF8D",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "20C54EB1-3A2B-4C43-9327-B7817907C591",
        "code": "0901",
        "name": "行政部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "21BB6472-2C57-4DE2-B7DC-984D9559E1D4",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "22D23A11-DFF3-4F28-B676-8B15DEB21A7E",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "code": "0403",
        "name": "委外部",
        "pid": "",
        "isLeaf": "false"
    },
    {
        "id": "23364D59-80C8-47B7-8EA7-EA26CBC35B6C",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2343F268-98CF-49BF-BCF8-2DF009DF52E8",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "23719D09-07F8-441C-B6E2-9D80C744DB90",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "23E08289-03BA-4D38-810D-13F4FDA4E820",
        "code": "0404",
        "name": "质检部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "24096673-30C3-455F-8FE6-3FD799119A5B",
        "code": "",
        "name": "asdfsdf",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "24FB584E-86EE-48AB-A884-D5AF00CB4B5E",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "258F641F-D78D-4DF3-B006-E37CD3CFBF9C",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2786A411-6F31-4A2D-BF9D-68659ECA19AA",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "281F1CB8-CDAC-4C65-B38F-DA979BC97AD5",
        "code": "222",
        "name": "测试2部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2A1F429B-E43A-4496-842E-F95D75610AD0",
        "code": "1001",
        "name": "区域销售部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "2B5880A6-4C4F-44AC-808F-22E495EC6ED5",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2CF0D4FC-FFB9-4235-AD25-1523D4702611",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2D1FCA8D-53E5-4012-99B1-E8A060BA6112",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2DEE7439-5D03-4D36-8072-EA0B834D75D3",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2E3AD60E-77FD-4DDE-93A1-6DE740E3D14C",
        "code": "0303",
        "name": "订单中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "2E8C5F34-76E1-4528-B8C8-7B882D5E4B6B",
        "code": "Dept01",
        "name": "研发一部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2F14B190-9473-488D-90FD-565416FA57AD",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "2FC96A93-98F7-4191-BA7C-B98388DD946D",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "30B5C695-FF4E-4A5B-AAF7-AE52CA5C740A",
        "code": "0302",
        "name": "销售部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "32AF6E3A-C8A5-4F20-8E23-3639549980B5",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "332E54B1-8D7E-47A4-A2BD-02CD44E1FEF4",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "33709F19-84E6-4D6D-B591-27E0E26946C5",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "3406A195-7F7C-4578-A9DA-E1ABA32D9078",
        "code": "0501",
        "name": "一车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "350BB340-3800-4A44-924E-7B0C8F485225",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "3564FDDE-BE3E-4931-86A7-6B2B2E342B1E",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "3658F839-986C-4960-91A3-777E381EC401",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "376873B7-06B4-4FD2-AF22-2ED8EF334086",
        "code": "0304",
        "name": "电子商务",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "37ECE36B-72CC-47AB-AC32-58D7BB191FFE",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "3883BB4F-C8FA-43AF-9061-A0938EB2E5B0",
        "code": "0501",
        "name": "一车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "38D9D661-9C23-4C82-BDEC-32CA43F85B50",
        "code": "333",
        "name": "测试3部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "38E1A736-C36B-40DA-B22C-5AAEE973430C",
        "code": "0202",
        "name": "现场服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "39530D2F-9DCC-4582-BD99-A6E8A1704994",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "3B828D96-FCBB-40F2-B8A9-CBF868BCCA3A",
        "code": "04",
        "name": "供应中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "3C6D3253-5C2A-4DB1-BA88-30479B5F35AC",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "3FE0B120-75F3-46E1-BD80-E0DC2E488FB6",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4029DAB2-35A1-4958-8C65-18F5E4CB3ACC",
        "code": "0503",
        "name": "三车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "405AC3A2-E1FB-423C-9FC9-F36E2AFCCA7C",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4106A5BC-54F6-46A1-8C8B-D7A5E87E93A7",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4120A675-B9FF-480E-86A7-A82A2EB131E1",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "41341D9B-BF47-47B0-B1E4-919B5B8CD0EB",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "41432571-2B26-433B-AA81-10C9DED31D34",
        "code": "02",
        "name": "服务中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4277C653-C402-45A1-82DF-847F60B5DCD2",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4490335B-F58F-4666-88E4-F07B89BF78B7",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4559B743-04A6-43E9-9BA0-8E5F26936DB4",
        "code": "06",
        "name": "技术中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "45BCDF59-60CC-485A-BF33-8DCDFA3CBF09",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "46CD6DEB-E6E3-4727-A19D-8E8C292A17FD",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "46EBF91A-6B66-48FD-BB9A-A50D5112B1C3",
        "code": "",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4757720B-A959-412A-BBB9-5D78E0CC5451",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "47B25CE1-AE24-41F3-9769-17E53FF57FD1",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "47CCB537-8A09-4B2F-A9D9-4BD9F10A37E4",
        "code": "0301",
        "name": "市场部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "48327B23-1F84-4848-A802-05463D8D8969",
        "code": "0503",
        "name": "三车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "487FDF4F-2DC4-495B-8AD4-21CC9F6B8FC8",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4919A612-F996-420D-A32E-2FA3FE1705B3",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "49EC402F-DA52-40AE-AECC-A8E2DE3666F6",
        "code": "0504",
        "name": "设备动力部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4A3C7DDD-2F52-4E1F-B0A5-DC819E9765DA",
        "code": "03",
        "name": "营销中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4A8AFF0A-2B59-4906-A80E-AD9DF38F1695",
        "code": "123321",
        "name": "123321",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4ADDCC83-6626-49CF-9B21-1049124D8016",
        "code": "0403",
        "name": "委外部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4B34C098-2305-499D-B913-00BD9CD4171A",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4C28A48E-FE82-4DEE-A1C2-57DD4646629B",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4D2D39E9-10CD-4827-8B45-8FD3E3E99C89",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4DD6F920-2A6F-4130-9E6B-FDAB3FD06D2F",
        "code": "0602",
        "name": "设计部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4E401F3F-9920-4869-BA1D-AD45DB514839",
        "code": "0402",
        "name": "仓储部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "4FD0F18A-5467-4289-A483-BA9A8EBD8991",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "4FF3AA4E-67D0-49D4-8E82-4E93001E0497",
        "code": "0901",
        "name": "行政部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "50103F5A-324E-4EE9-BE48-F869609125A3",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5031E633-BB74-48B0-BE13-A1225E426013",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "50B8D505-E101-4B8A-ACD5-54E8D22D5922",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "50ED8D92-C4FD-4ED6-B673-EAD4A6B5F480",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "51604425-DD90-4040-BD2D-C14A9A129790",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5165A8DD-00EA-4FCD-B985-28C1CD3C7904",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "51AAF5FB-7C61-4947-B905-02B8C2FC4B59",
        "code": "zhanghui",
        "name": "张辉",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "51B9F637-B085-4DE5-B105-00254915BB9E",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "528BCBA8-3871-4B32-A01A-89863138F3A2",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "52AC1672-8B43-4083-8BDA-DAF119A93689",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "53028588-86A1-4725-8B62-7F4CF0592C6E",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "53041CCE-16E0-46E7-961D-C2139A3B506D",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "532B70D7-FCA6-48BE-8AF9-DEFB07B3A341",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "53C63650-E1CD-4233-B6FB-9D2610DB4107",
        "code": "",
        "name": "asdfsdf",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "5511C62D-26C6-470F-8260-AD1E65336C19",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "553AEE03-6AB4-427F-88D2-CCB39819DE68",
        "code": "bbbbbbbbbbbbbbbbbbbbbbb",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "55A8B138-9688-4D95-8AF0-7074CA8D2B84",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "569B868D-6AC7-4D2D-930C-FB1125033811",
        "code": "0601",
        "name": "质量部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "56F00AA3-6363-467C-AC77-0192B0721E99",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "57229A0E-1CA8-4E81-A51F-3152C39E6472",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "57B620C7-C629-439E-9B10-BA6C8AD81BD1",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "57C2A6E5-2987-4871-B5D4-CD6044C8C249",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "58B07514-B5A1-469B-9DB2-F50313B67368",
        "code": "0701",
        "name": "财务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "59217BC9-06C0-4280-8A05-7970678642FC",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5938C26C-5656-4FF4-AD70-335BC0953B7F",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "59772B51-B0AD-4614-B3F3-B74FB6693459",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5988565A-F0D8-4FD9-BF3F-35C092F10CDF",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5A778534-A8E5-4118-8441-7EF05F3DF4A5",
        "code": "0901",
        "name": "行政部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "5AF8A8C4-898B-46C6-BEA5-F08F96568994",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5B250EC3-1809-4CB7-BA14-50DF9EE456BF",
        "code": "0301",
        "name": "市场部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "5BB91C95-446F-4DEE-8A4D-1A682B03B7D8",
        "code": "Dept01",
        "name": "研发一部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5BBF445A-095F-4EE0-B4E9-0D91440515A6",
        "code": "11",
        "name": "22",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5CB4E233-9056-41A3-AAAF-29BE14A23686",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5DDF1302-BA0C-4792-AB09-A6E1784C1AAC",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5E5DCBEF-3354-4001-9424-C503992D715E",
        "code": "04",
        "name": "供应中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "5E89D6F3-632E-477B-9724-087815160FDF",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5EA42800-F50E-453A-A0F4-389F71AFF972",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5EA68957-2610-4FB7-AE8A-2597816416A2",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5EE73950-5328-4064-9C01-50A26C49B8A6",
        "code": "",
        "name": "1111",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5F1C7D4C-F86F-4664-85D1-2E305391A6C0",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5F30FCF0-4B09-4ADC-8E1B-5A485B3BB748",
        "code": "111",
        "name": "测试部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "5F608A58-A04D-4357-9829-873F4434234A",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "5F856390-2EE4-498A-9C6E-1F53BABB9CEA",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "611215D0-ED43-437D-9986-96F5683C1256",
        "code": "aaaaaaaaaaaaaa",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "61870F4B-F16A-427F-82E4-435DB2D56D3F",
        "code": "04",
        "name": "供应中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "61EA97B1-B9DC-41E2-A0ED-9C3505911904",
        "code": "0304",
        "name": "电子商务",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "62392D1D-2D3D-4E24-B62B-3D52A23CB315",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6243A8C7-DD91-40FE-9DDA-A292FC694760",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6251D3B7-D8DD-425D-A0AA-F512FF3D0BB8",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "62B29699-AFD5-4DAC-87DF-56DB38B4316A",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "62CCF20A-60CB-42C8-A194-D49E28C8F36A",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "63979B58-9B71-4EB4-97A4-CF2128053AF3",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "63E3148E-E7CE-4140-AF5A-4C91C82384ED",
        "code": "0502",
        "name": "二车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "64E0BD68-1C10-4FE9-A5F8-852EE2B52516",
        "code": "0702",
        "name": "预算部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "64F72FF8-8443-4EC8-9F23-59917BDFDAD8",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6571DB7A-1E9A-46B6-83BB-ABBAA378513C",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "65EEE167-CF05-45C2-AE59-BDEAD875D7AC",
        "code": "0403",
        "name": "委外部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "66708D73-6CA9-459F-80AC-426F6A5A5A2C",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "675CCA99-9BBB-4FFA-9AAC-A06574DFD160",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6763ADA1-7473-47CE-A17C-3C49C995451C",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "68A2E1DD-E87E-47A9-960C-6FBB1E7E8B2F",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "68F44F37-5281-400F-A180-D414FEC60BEB",
        "code": "06",
        "name": "技术中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "695D11DA-74D4-4C69-A4CF-11EB62ECFF84",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6B3F19EC-3EA6-4297-A825-ECD973C9FF46",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6B9FD2A1-14E4-4326-BA6B-621332DB9754",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "6C26C5DE-5D8A-4849-A81F-69FAD38A97E0",
        "code": "0701",
        "name": "财务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "6F7CA2D6-015C-4146-A0F2-93D6DCE0CC64",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "70CE342C-5CEB-4C41-B761-965F61162995",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "70E5F9CE-0DC2-401E-A4E2-12264D955AE3",
        "code": "0902",
        "name": "人力资源部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "711E1281-40BE-491C-A2EB-43D40B4BB42B",
        "code": "bbbbbbbbbbbbbbbbbbbbbbb",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "71472C00-D753-429F-8C29-FC9E55E44B9B",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7238C294-7070-4C57-980F-8E5469398235",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "72B90F0F-6CF0-4DD7-88C8-BBCED65DD501",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "73928D14-AA7E-4657-9082-04D46EEBE253",
        "code": "blahblahblah",
        "name": "巴拉巴拉拉拉",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "74443622-D749-4F14-AE1B-8F7EFF8FA6B4",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "74E8FDC6-74C9-4486-8615-27443CF49B86",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "75E2C54E-37F8-47DE-94B3-680225509EA8",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7640706D-CBE9-456E-AFC7-C9C35C696A39",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "76DC0959-1B99-4A4E-872A-286D3A2611DB",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "77224C1C-A013-423D-ADF8-9F8E8ACCB16C",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "773A9E55-0376-438E-9A2E-D66E3F00D451",
        "code": "bbbbbbbbbbbbbbbbbbbbbbb",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "77667ABF-5824-4322-8338-69DAD23A224D",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "78899777-7906-42FE-AA5D-8548F8064F13",
        "code": "0302",
        "name": "销售部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "78B502CC-E8DA-411D-BEB1-7DD7D0F06781",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7A340E62-8B7E-4D0A-8400-7A6D894FCC20",
        "code": "",
        "name": "1111111111111111",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7A877367-F9E3-4E38-8AD6-CD4A601A1E44",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7A8AF020-235D-4CCF-B781-1A4A35E5A612",
        "code": "0401",
        "name": "采购部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "7A99C425-1C51-4747-ACC3-92CC1CECEBC9",
        "code": "0903",
        "name": "信息部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "7AD1F1E8-EE5E-4CBB-9A09-4B7401202E00",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7B1D51AC-C8A4-47AE-8B3B-99BE9CAEF005",
        "code": "02",
        "name": "服务中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "7B338C14-0D99-4787-B838-8C922E904995",
        "code": "4444",
        "name": "测试4部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7BAA9B07-DF6F-4904-A483-411B46E19B91",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7BCC9D4E-0C96-4FC2-9CD9-C06F90F38E24",
        "code": "aaa",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7BD5D03B-B231-4CA9-B04A-106260A0A0D8",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7BF69ED0-8742-49DD-AB8B-050217A280CF",
        "code": "05",
        "name": "生产中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "7D050F09-4389-410C-82EA-B12AC1228C0A",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7D315C93-3A09-4E03-A640-8E1DCAA8EC40",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7DE04AD3-D0B2-46D7-A9D5-790AA1EC4560",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7ED7D5F6-AB8F-4B48-99CF-E4E243AC8A43",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7F08F3A0-347C-4F27-8B42-C3629A4F58D4",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "7F6DD786-916F-424A-86DB-FEE29D510866",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "818B7835-3543-42C9-8CAB-AD65D7EC0B09",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "82169CBA-EDDA-4147-8AF8-61D8F2560C15",
        "code": "05",
        "name": "生产中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "82FD7ADF-31E3-4CB5-A22B-E8995309C51B",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "84462EE0-8D92-48AF-9AB4-854D5CE04DD5",
        "code": "11",
        "name": "项目基建部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "847ED7D3-58A5-434F-91DB-65F13E2A9BAF",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "85CF1760-F4AE-436C-81B2-544AA4B2B831",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "85E84F64-51FE-41D4-B104-EBF642ED80FA",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "86B21FD0-A7E1-4D39-A30C-D808A59E31F7",
        "code": "Dept01",
        "name": "研发一部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "86E19BDF-F7DB-405C-86CF-9BF786FAC90B",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "87B508CC-FF54-4E2C-82EF-00C89AD78FE4",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "883D7B9D-55F3-4EB7-8FD9-0906317CDC45",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "888E12D9-056B-4722-A3C1-56F094415381",
        "code": "0303",
        "name": "订单中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "89D1043B-1DC8-482C-B8FC-12A54B0CA328",
        "code": "1002",
        "name": "服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "8A5B2354-61E5-40C1-85DB-23E5B9BB66DB",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "8A6F3CB8-D833-440D-A2E8-FF8C164EFDF9",
        "code": "uuu",
        "name": "uuu",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "8B7EADF4-52A8-4384-AE61-D0050588DAF2",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "8CBE409E-21B0-4012-A004-B1F5B26F39C5",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "8CE89AF3-E53F-4759-A8F1-E71984423DC9",
        "code": "09",
        "name": "运营中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "8D1EC069-1390-4350-AA1F-7BAE69E39D38",
        "code": "0902",
        "name": "人力资源部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "8DFF9C16-6CD9-4CAC-88BC-635035D22010",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9064D035-5EA0-4B0D-93DB-16AEC99A0FD5",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "90B671C9-757A-4078-81FF-56C094239362",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "91A34045-7571-4D6A-BB3F-1472411DB5CB",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "91CF43AF-8A38-489B-B066-54AABBF35EAA",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "91D4BF61-905B-4404-80AE-ECA03C85C4BE",
        "code": "justiceleague",
        "name": "正义联盟",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "927485C3-B9E2-48DB-8CC4-89CAB98CAF2A",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9383763C-32F3-4282-AF08-F804452C6438",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "93D16C8D-659D-4FCF-92D4-8C77BF362B84",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "94D6C39B-9D57-4ABD-9DA2-5AE03E39F79E",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9581E398-722B-42E7-9D89-28DAEED50AE0",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "95A40339-7272-433F-B252-60AE187DEEA5",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "95BC35B5-177B-4376-833B-D6580259BA29",
        "code": "0702",
        "name": "预算部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "95F4D2C2-4A15-4690-A99B-39AE841F3001",
        "code": "04",
        "name": "美国会计准则",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "960121E6-A175-4248-8213-18685F74EDAB",
        "code": "07",
        "name": "财务中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "963FA8A5-E19A-456E-985F-034B1C48AD4D",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "971C8939-E8E9-4459-9A14-8331C86D117B",
        "code": "07",
        "name": "财务中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "97E20500-9D90-4098-9744-B167FC8549C8",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "98E58BC6-CCC0-407A-AAB6-3FC667D9D18E",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "99903306-5D67-42B6-8F48-66F43EE413DC",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9A07C878-E71D-4D62-8918-E719222CB73C",
        "code": "bbbbbbbbbbbbbbbbbbbbbbb",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9B28301C-6F43-4B8F-903C-E01662732C57",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9B96200A-0CB5-456D-AF51-98769BFAB5A5",
        "code": "0201",
        "name": "电话服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "9BCEBAC4-6AFC-4499-AA73-3693F4CF5F49",
        "code": "0404",
        "name": "质检部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "9C2CE522-7D69-4436-9FC9-FE7DFB159511",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9E44A225-BE83-412D-AD6D-D39497E293D7",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "9F2318A3-AC21-43B5-B0EE-FF8162AB4E1E",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A06ACB5F-7333-4969-90E5-708F6AE6953F",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A103317C-1406-4F5F-85A8-7A587874627D",
        "code": "0001",
        "name": "默认组织",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A240E313-2EEB-4FC1-B89D-DD618B336109",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A3B5A64D-7D29-40A8-AD81-08CA0675BB07",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A4466B26-D91A-4D95-8B06-6287A8A98E71",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A44A81DF-33D0-400A-9DBC-D1539D49FE0B",
        "code": "0902",
        "name": "人力资源部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "A4AC85AC-A4EC-4B64-B392-33D0F8410288",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A4E4C96A-2B18-4454-A95A-5E08DF00CDB8",
        "code": "0903",
        "name": "信息部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "A5135BC4-D4F3-4AC7-AB76-6D417F5429C6",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A5261069-F8CE-452A-B870-ECF316A9C601",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A69121C3-C6BD-4212-AA9B-8C9E7E32C94B",
        "code": "0502",
        "name": "二车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "A6A0D170-01FC-4A2A-84B2-9283A66AC2E1",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A80AEA52-1D1F-4CCB-9FEE-5984CE81A718",
        "code": "Dept02",
        "name": "研发二部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A8822A69-AE67-439A-91BF-8E3FBD98B3FD",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A8B2FDEE-1889-47DE-B911-5476BD11F572",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A8D0CF2B-099A-4649-AA57-6FDAA3C33D9D",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "A9301D88-0B31-4303-A922-6EB3354A0304",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AA3A81FE-CB99-4EBE-97D9-71FD6B2C32BD",
        "code": "01",
        "name": "总裁会",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "AA537218-7462-4849-A965-BCEBC817C3B8",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AAE1AD3D-64E9-48E7-A92C-C2230451C563",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AC64E02E-9A76-4314-8BB8-35B31E0B510A",
        "code": "1002",
        "name": "服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "ACE450D7-1C82-4661-9D33-1F83CE37DAB6",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AEFD3631-51A8-42C0-A45E-E453D2D9DDAE",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AF585795-FC1C-4EDB-9BE9-D9C00E7F49B9",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AF98979A-6F34-4128-81AA-1F593AD11E20",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "AFEBF04C-9249-4F15-8D2F-5B169E1D2F12",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B09CF783-F02F-4A52-93F4-61C47D74D3F9",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B0A6BA48-5660-461F-A6DF-9D642D32214A",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B0E37FAF-681E-4575-AAAB-B86B9AFA8542",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B0E575F9-1601-43F4-9BB7-1385716FACE2",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B1991D14-E24F-42F2-B3F2-63334623E268",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B1CFF8A2-036E-4107-964B-E20DEDDB7ADC",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B23E80B1-880A-439D-9D3E-F1F1B6354759",
        "code": "bbbbbbbbbbbbbbbbbbbbbbb",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B259B7EB-8C3B-43DA-8B90-ADDF749B06AB",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B2922BBB-A724-48B0-ABF7-6DC0E2D6E803",
        "code": "0504",
        "name": "设备动力部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "B3E2DDBC-218A-4EB4-AD20-310CD6BDAD0D",
        "code": "1231",
        "name": "123",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B46C581A-272D-4E4C-B451-0CF0C00CB503",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B47D4EFC-2417-41F5-BFAA-BF5A3AD08B47",
        "code": "1111",
        "name": "测试客商分类",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B4A270A2-1C75-4C4D-B8B1-63ED0DE02C98",
        "code": "0302",
        "name": "销售部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "B637E4F2-8481-49BB-B468-BE2D419C24FE",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B83D5D50-FB06-49BA-B4F8-02153B7E9BE8",
        "code": "1002",
        "name": "服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "B873AF82-29E6-431F-8A01-1BB67BBAF5E5",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B8E7F36D-3374-4172-ACA9-1AB7BF9F06A7",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "B9D0C53C-E62F-43F7-AA81-65E5F02A15E4",
        "code": "111",
        "name": "测试部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "BAE758AF-65DD-43A4-80AA-ED9E9DAF10BE",
        "code": "111",
        "name": "测试部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "BBE5B5C8-7967-47FB-9892-893670778596",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BBF7D16F-2E0B-43E5-8CB6-EAB904F813FA",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BC6810F1-80A0-4B5C-BB62-E9401499B545",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BC9935A3-74A1-4C42-9E02-39D629C94E2B",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BE908969-D2E0-4A1D-8E6A-00A365AED660",
        "code": "0403",
        "name": "委外部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "BE955ACA-CC36-465F-BDB5-114B5478C746",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BEB9CA45-7851-4ECC-ABD1-2E0D5F508078",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BF26CBFF-94F0-4233-AF87-EE198C1A30E3",
        "code": "03",
        "name": "营销中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "BF8ED505-F21D-4AFF-90CE-C77D8C77AB25",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BF937217-3037-471A-A910-8C9F62EA9CD7",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "BFC3CDD7-B5B9-4E8E-B805-3841AEF40AE7",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "C0551CCE-36EC-4E61-8CDC-81CC551D7C14",
        "code": "1001",
        "name": "区域销售部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "C26FFE63-30DB-4FBC-9E4F-061011092AE1",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "C34E633B-1CA7-42A9-BFB0-E781DF6080D4",
        "code": "0201",
        "name": "电话服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "C3D51ACB-304E-438F-8344-80CC416E3A98",
        "code": "09",
        "name": "运营中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "C494B029-7534-4690-B9E9-AC4846023E86",
        "code": "0201",
        "name": "电话服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "C573524A-CF0D-4B83-9160-D710FD314F04",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "C6F1C838-8923-48F5-B0F9-971363EB94CD",
        "code": "0401",
        "name": "采购部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "C7B18913-1CBF-40F8-A5A2-456E34471350",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CA3CFDA1-3679-418F-9C67-E3CE8C36DFCA",
        "code": "0701",
        "name": "财务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "CB5C1388-CCEE-4898-82EE-3EEBB29A60F8",
        "code": "aaaaaaaaaaaa",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CB9BCC3C-798E-429F-B3FA-A924DB0F85C4",
        "code": "0304",
        "name": "电子商务",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CC34F0B7-29C6-4A92-9945-D9AABED2E60B",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CC62AC57-335A-4245-B5E3-31B3EE79506A",
        "code": "0402",
        "name": "仓储部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "CC9BE2A6-DE0F-4983-A441-C2EACF26C20A",
        "code": "1001",
        "name": "区域销售部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "CD1369AF-87C9-403F-B525-9F7A82327469",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CD73EE96-191F-4D31-AB47-B9F8648F7524",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CD7EF77E-F5DE-4C0C-919E-C550B9BB839F",
        "code": "bbbbbbbbbbbbbbbbbbbbb",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CE3BECD5-755B-43DF-926F-A56A1AE429EF",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CEBEEE14-0DA1-4FD9-8ABB-34314EE98DD5",
        "code": "thinkpad",
        "name": "小黑",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "CF0DC156-D9BE-4C91-839E-809D92695A89",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CF70FB32-F8FC-4B1F-966D-DB6A3C5B29D1",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CFD147DA-A5FC-4E3F-8D22-D60CDD86F7F0",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "CFEE4C9F-F6B4-4CD6-9E19-529F60A07EE8",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D0A6FD83-FDAB-4319-BFA7-98F6792F1755",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D0E8AE0B-2219-4E7C-B31B-BB646E1AEAD6",
        "code": "10",
        "name": "上海分公司",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "D18C5244-D04E-435E-AAE0-59072AE793FE",
        "code": "0402",
        "name": "仓储部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D21DD67F-E652-48E5-BFAF-2E17201B0A65",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D3D5425D-3357-4903-B623-3F493C10A059",
        "code": "0501",
        "name": "一车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "D4484141-7279-4767-B8CF-0BC23A68E4E9",
        "code": "333",
        "name": "测试3部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D473FAAE-4F4B-4D6A-9F33-205F3E7CCB98",
        "code": "11",
        "name": "项目基建部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "D4FFA69F-8217-4A94-A9A6-23C64D144088",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D56246A9-9D19-4A05-A572-9B4B2E54DBF9",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D56C9530-6E68-4D6B-BCAF-0587B9241908",
        "code": "0401",
        "name": "采购部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "D629479C-30D3-4B36-9A56-4CF86D33CA09",
        "code": "11111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D70B1143-89AA-426B-84A2-D7947AAC9BE5",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "D898FD2C-9BD4-45EB-A763-239FB64212E4",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DAF768EB-5854-4C57-A090-06D9861E48D1",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DB07D382-6049-4FE3-91BF-34A8974CA116",
        "code": "0202",
        "name": "现场服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "DBA8CC00-EE9C-4E8F-BA89-7758D973C840",
        "code": "0503",
        "name": "三车间",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "DC68461B-6909-417B-A134-296F77141DCF",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DCC43F60-986D-4AC9-AE9C-E4E417DB631E",
        "code": "09",
        "name": "运营中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "DD1F9C46-201D-48CC-848B-B7EEED30D98F",
        "code": "05",
        "name": "生产中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DD7192C6-3C85-43BA-B78B-3D38B3F94421",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DDC0CC79-218D-41B7-8CF5-11B786923E5B",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DF1336AB-F687-41CA-81C0-4AB7FF3EC4B8",
        "code": "0304",
        "name": "电子商务",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "DF3425C4-239E-459E-AE45-80BD4F85F1DF",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "DF8EFE04-6BBD-4840-9F3E-EC4059FBE835",
        "code": "111",
        "name": "测试部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "DFB36D96-FAF8-446D-830B-6B4F81A5C8B5",
        "code": "",
        "name": "test",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E09B5F0B-4112-4039-873F-4E7B6D40131C",
        "code": "0403",
        "name": "委外部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E1A6BDEB-7AA7-4A76-90D3-DCF8B663D65B",
        "code": "0303",
        "name": "订单中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E1B005FF-4C5E-4F0D-91DA-9F2392367F35",
        "code": "0201",
        "name": "电话服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E1BEEEF2-98C4-4700-B15F-A486799735F1",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E1CD9817-2280-43B1-8A30-CFF254A9F504",
        "code": "112233",
        "name": "112233",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E2033012-7220-4D8A-82ED-7A55ED3E0731",
        "code": "444",
        "name": "测试4部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E2BA7AFF-587C-4562-B197-E98745B5654A",
        "code": "0702",
        "name": "预算部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E32961E3-03D0-496C-8A9E-94B7DF20CDE2",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E4251859-8508-47F4-A414-34695AFD8C87",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E4CA19F0-C6C0-4C15-93BF-BA45F44EE724",
        "code": "xxxxxxxxxxxxxxxxxxxxxx",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E5A52A19-0CA8-4155-837A-9D3152372450",
        "code": "01",
        "name": "总裁会",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E5BD1F37-A84C-45AB-BCDF-D898B3F01D88",
        "code": "0601",
        "name": "质量部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E73CE6FA-3E28-49BE-B990-52A1185925F4",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E75FD778-435C-4D56-A8F6-8599146B8349",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E8250DE7-15FE-4BC6-81E0-A48AC663E2DF",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E831E45E-D0E1-432D-82E6-25205C8D57B1",
        "code": "0401",
        "name": "采购部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E95965ED-36C6-43AD-AD67-33B6E7C2492F",
        "code": "07",
        "name": "财务中心",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "E9DD7670-C4D7-462A-98E0-6394697672CB",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "E9E2ADAB-2D63-4E43-A66E-994CAC173CC5",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EA1D0A92-DBF6-4B80-AAC7-4DE419F00772",
        "code": "asdfasdfasdf",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EAF7AA7D-BEA4-476D-90F7-6528044AFCDE",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EB329386-3EB3-42FB-AD45-736A7352C5D9",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EB4DAFCB-5BFC-43A2-AED9-2DCCE6676BF1",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "ED388194-0428-47D5-85AB-F5468DE930A4",
        "code": "0501",
        "name": "一车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "ED78252D-4264-4E21-B692-981E986A7DA8",
        "code": "1111111111111111111111111",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EE9E0430-B6BD-4167-A034-709092624186",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EEEFEBE0-451A-4C9F-A5EA-94915D8384AE",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "EF293854-6D71-48D9-8814-D830D2F9599E",
        "code": "",
        "name": "asdfsadf",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "EFF0A551-B0C6-480F-A797-DAD06D3C8055",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F041DBA1-B533-44A4-8382-2B0560862C74",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F11D1E94-522E-4471-9369-2AEED82B09D3",
        "code": "0202",
        "name": "现场服务部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F151493F-70BC-457E-B305-EBD4BF1868EC",
        "code": "0301",
        "name": "市场部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F28CCBAB-1B91-4385-A5D0-1AA01BEFC39E",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F2E2064F-F946-4289-9754-D4E01D19C846",
        "code": "0302",
        "name": "销售部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F42AAFE6-16F9-4DFA-A296-00FF178A34DB",
        "code": "0502",
        "name": "二车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F47E5318-B1DA-484B-BB64-76EE96492752",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F53BA1D6-4D21-42E3-AC42-00EECC0C833D",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F61367D5-B3DD-4381-9F8C-E188866E9C6B",
        "code": "06",
        "name": "技术中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F706C31F-E02C-44CB-884B-D1F2C4259F2E",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F7A36DFA-5184-4874-8DF2-6C06EE0FD14B",
        "code": "02",
        "name": "服务中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F8503C7F-AF88-4273-AD87-1CFFFFF31B09",
        "code": "0601",
        "name": "质量部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "F85ADF0E-38A5-41E8-8999-F22AA242F905",
        "code": "aaaaaaaaaaaa",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "F85F5859-8459-4B72-824A-198993F62760",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FA822C63-ED13-4EDD-9C63-58AB0A51EEF3",
        "code": "04",
        "name": "供应中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FAF0CACF-5EDB-4991-92F6-6432FC49F5C8",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FB9BAE74-78C0-4A44-9AAB-4BA6B263EAC3",
        "code": "0303",
        "name": "订单中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FBE97F3D-4AE8-46A2-B6E3-2264DA4220B5",
        "code": "10",
        "name": "上海分公司",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "FC000647-C76D-4C4A-B0F7-4DB470C9D518",
        "code": "01",
        "name": "总裁会",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "FC613C0B-A427-4EBD-BC27-00DA59C3BE67",
        "code": "0504",
        "name": "设备动力部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FC9B678E-3071-4313-AC2E-115521A14699",
        "code": "0202",
        "name": "现场服务部",
        "pid": "",
        "isLeaf": "true"
    },
    {
        "id": "FCDA1784-7611-4272-8C46-83FDA58903D8",
        "code": "0404",
        "name": "质检部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FF3EDC9E-F7C4-4446-8160-EC205CED3292",
        "code": "01",
        "name": "总裁会",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FF76E7A1-1B18-437D-896F-92BFD0C5BC4D",
        "code": "4444",
        "name": "测试4部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FF7E29A0-052D-4F2D-B2C7-F7C8A1D86922",
        "code": "03",
        "name": "营销中心",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "FFF10964-A880-4F25-9A79-86642D26F57A",
        "code": "0503",
        "name": "三车间",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "TDS_18ACC845-A198-4DEB-BA59-39B4ECA01067",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "TDS_AAE06784-14C5-4254-BC17-7E8FF5974FC9",
        "code": "111",
        "name": "测试部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "TDS_CA2B6BE5-B4C3-4CF5-A13F-C7AE9DEE3D30",
        "code": "",
        "name": "",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    },
    {
        "id": "TDS_EA57924A-48E4-4530-A27E-B7BF5E7E9E5C",
        "code": "3333123",
        "name": "测试3部",
        "pid": "22EA0EB9-FABA-4224-B290-5D041A1DF773",
        "isLeaf": "true"
    }
];
let array = [];
let treeData = treedata.slice();
treeData.forEach(function (item, index){
    if(item.pid == ""){
        item.key = item.id;
        array.push(item);
    }
});
treeData = treeData.filter(function (item){
    return !item.key;
});
array.forEach(function (item) {
    lint(item);
})

function lint(obj){
    treeData.forEach(function (item, index){
        if(item.pid === obj.id){
            if(!obj.children){
                obj.children = [];
            }
            item.key = item.id;
            obj.children.push(item);
        }
    })
    treeData = treeData.filter(function (item){
        return !item.key;
    });
    if(treeData.length !== 0){
        if(obj.children){
            obj.children.forEach(function (item, index) {
                lint(item);
            })
        }
    }
}
// treeData.forEach(function (item, index){
//     if(!item.key){
//         array.forEach(function (item1, index1) {
//             if(item.pid == item1.id){
//                 if(!item1.children){
//                     item1.children = [];
//                 }
//                 item.key = `${index1}-${index}`
//                 item1.children.push(item);
//             }
//         })
//     }
// });

const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some(item => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};


class Reference extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            data: staticdata["1001A11000000000SVW0"],
            commonData: [],
            selectValue: [],
            inputValue: [],
            activePage: 1,
            expandedKeys: [],
            treeSearchValue: '',
            tableSearchValue: '',
            autoExpandParent: true,
            tableSearchData: [],
        };
        this.commonColumns = [
            { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },
            { title: '项目名称', dataIndex: 'refname', key: 'refname' },
            { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps', render: this.changeHeight.bind(this)},
            {
                title: '操作', dataIndex: '', key: 'refpk', render: this.renderDelete.bind(this),
            },

        ];
        this.columns = [
            { title: '项目编码', dataIndex: 'refcode', key: 'refcode' },
            { title: '项目名称', dataIndex: 'refname', key: 'refname' },
            { title: '项目简称', dataIndex: 'pk_eps', key: 'pk_eps'},
            {
                title: '操作', dataIndex: '', key: 'refpk', render: this.renderAdd.bind(this),
            },
        ];
        this.renderAdd = this.renderAdd.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.close = this.close.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onDataSelect = this.onDataSelect.bind(this);
        this.ensure = this.ensure.bind(this);
        this.deleteSelect = this.deleteSelect.bind(this);
        this.empty = this.empty.bind(this);
        this.handlePageSelect = this.handlePageSelect.bind(this);
        this.handleTreeSearch = this.handleTreeSearch.bind(this);
        this.handleTableSearch = this.handleTableSearch.bind(this);

    }
    changeHeight (text, record, index) {
        return <div style={{ height: 50, lineHeight: 50 }}>{text}</div>
    }
    renderAdd (text, record, index) {
        return <span style={{ cursor: 'pointer' }} onClick={this.handleAdd(record)}><Icon type="uf-plus" />添加到常用</span>;
    }
    renderDelete (text, record, index) {
        return <Popconfirm content="确认删除?" onClick={e=>e.stopPropagation()} onClose={this.handleDelete(index)}>
            <span>
            <Icon type="uf-del" />
            删除
            </span>
        </Popconfirm>;
    }
    onSelect(selectedKeys, info) {
        if(staticdata[selectedKeys[0]]){
            this.setState({
                data: staticdata[selectedKeys[0]]
            });
        }
    }
    onDataSelect (record, index) {
        let array = this.state.selectValue;
        array.push(record.refname);
        this.setState({
            selectValue: array
        })
    }
    handleAdd (record) {
        const self = this;
        return function (e) {
            let data = self.state.commonData;
            data.push(record);
            self.setState({
                commonData: data
            });
            e.stopPropagation();
        }
    }
    handleDelete (index) {
        const self = this;
        return function () {
            let data = self.state.commonData;
            data.splice(index, 1);
            self.setState({
                commonData: data
            });
        }
    }
    handleFocus () {
        this.setState({
            show: true
        })
    }
    close () {
        this.setState({
            show: false
        })
    }
    empty () {
        this.setState({
            selectValue: []
        })
    }
    ensure () {
        this.setState({
            inputValue: this.state.selectValue,
            show: false
        })
    }
    deleteSelect (index){
        const self = this;
        return function () {
            let array = self.state.selectValue;
            array.splice(index, 1);
            self.setState({
                selectValue: array
            })
        }
    }
    handlePageSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    }
    onExpand = (expandedKeys) => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    handleTreeSearch(e) {
        const value = e.target.value;
        const expandedKeys = treedata.map((item) => {
            if (item.name.indexOf(value) > -1) {
                return getParentKey(item.key, array);
            }
            return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
            expandedKeys,
            treeSearchValue: value,
            autoExpandParent: true,
        });
    }
    handleTableSearch(e){
        const value = e.target.value;
        let data = this.state.data;
        let searchData = [];
        data = data.forEach(function (item, index) {
            if(item.refname.indexOf(value) > -1){
                searchData.push(item);
            }
        });
        this.setState({
            tableSearchValue: value,
            tableSearchData: searchData
        });
    }
    render () {
        const { data, commonData, treeSearchValue } = this.state;
        const self = this;
        data.forEach(function (item, index) {
            item.key = index;
        });
        commonData.forEach(function (item, index) {
            item.key = index;
        });
        const loop = data => data.map((item) => {
            const index = item.name.search(treeSearchValue);
            const beforeStr = item.name.substr(0, index);
            const afterStr = item.name.substr(index + treeSearchValue.length);
            const title = index > -1 ? (
                <span>
                 {beforeStr}
                    <span style={{ color: '#f50' }}>{treeSearchValue}</span>
                    {afterStr}
               </span>
            ) : <span>{item.name}</span>;
            if (item.children) {
                return (
                    <TreeNode key={item.id} title={<span><Icon type="uf-treefolder" />{title}</span>}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.id} title={<span><Icon type="uf-box-o-2" />{title}</span>} />;
        });
        return (
            <Row>
                <Col md={10} mdOffset={1}>
                    <FormGroup>
                        <Label>参照例子</Label>
                        <FormControl
                            value={this.state.inputValue.map(function (item, index) {
                                return item;
                            })}
                            onClick={this.handleFocus}
                        />
                    </FormGroup>
                </Col>
                <Modal show={ this.state.show } size='xlg' onHide={ this.close }>
                    <Modal.Header closeButton>
                        <Modal.Title > 我来组成头部 </Modal.Title>
                    </Modal.Header >
                    <Modal.Body >
                        <Tabs
                            defaultActiveKey="2"
                            renderTabBar={()=><ScrollableInkTabBar />}
                            renderTabContent={()=><TabContent />}
                        >
                            <TabPane tab="常用" key="1">
                                <Table
                                    onRowClick = { this.onDataSelect }
                                    columns={this.commonColumns}
                                    data={commonData}
                                />
                            </TabPane>

                            <TabPane tab="参照" key="2">
                                <div>
                                    <Col md={3}>
                                        <div style={{ height: 500, overflow: 'auto' }}>
                                            <InputGroup simple style={{left: 20, top: 5 }}>
                                                <FormControl type="text" onChange={ this.handleTreeSearch }/>
                                                <InputGroup.Button>
                                                    <Icon type="uf-search" />
                                                </InputGroup.Button>
                                            </InputGroup>
                                            <Tree
                                                onSelect={this.onSelect}
                                                onExpand={this.onExpand}
                                                expandedKeys={this.state.expandedKeys}
                                                autoExpandParent={this.state.autoExpandParent}
                                            >
                                                {loop(array)}
                                            </Tree>
                                        </div>

                                    </Col>
                                    <Col md={8}>
                                        <Row>
                                            <Col md={12}>
                                                <InputGroup simple style={{ float: 'right', margin: 5 }}>
                                                    <FormControl type="text" onChange={this.handleTableSearch} />
                                                    <InputGroup.Button>
                                                        <Icon type="uf-search" />
                                                    </InputGroup.Button>
                                                </InputGroup>
                                            </Col>
                                            <Col md={12}>
                                                <Table
                                                    rowClassName = { this.setClassName }
                                                    onRowClick = { this.onDataSelect }
                                                    columns={this.columns}
                                                    data={this.state.tableSearchValue === '' ? data : this.state.tableSearchData }
                                                />
                                            </Col>
                                        </Row>
                                        <Pagination
                                            style={{ float: 'right'}}
                                            prev
                                            next
                                            boundaryLinks
                                            items={20}
                                            maxButtons={5}
                                            activePage={this.state.activePage}
                                            onSelect={this.handlePageSelect.bind(this)} />
                                    </Col>
                                </div>
                            </TabPane>
                        </Tabs>

                    </Modal.Body>
                    <Modal.Footer>
                        <div style={{ textAlign: 'left'}}>
                            <span style={{ padding: "5px 10px" }}>已选数据:</span>
                            <span>{
                                this.state.selectValue.map(function (item, index) {
                                    return (<span key={index} style={{ display: 'inline-block',padding: "2px 2px 2px 10px", background: '#f5f5f5', border: "1px solid gray", borderRadius: '5px', margin: '0 5px' }}>{item}<Icon style={{ marginLeft: 5, fontSize: 14, color: "gray", cursor: 'pointer'}} type="uf-close" onClick={self.deleteSelect(index)}></Icon></span>)
                                })}</span>
                        </div>
                        <div>
                            <Button onClick={ this.empty }> 清空 </Button>
                            <Button onClick={ this.ensure } colors="primary" style={{ margin: "0 30px" }}> 确认 </Button>
                            <Button onClick={ this.close }> 关闭 </Button>
                        </div>

                    </Modal.Footer>
                </Modal>
                <Col md={12}>
                    <SimpleReference />
                </Col>
            </Row>
        )
    }
}


export default Reference;