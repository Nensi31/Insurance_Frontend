import React from 'react';
import './Tabs.scss';

import { Tabs } from 'antd';
const ProgramsTabs = () => (
    <Tabs defaultActiveKey="Programs">
        <Tabs.TabPane tab="Programs" key="Programs">
            Programs{' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Applications" key="Applications">
            Applications{' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Authorized Agency" key="Authorized Agency">
            Authorized Agency{' '}
        </Tabs.TabPane>{' '}
        <Tabs.TabPane tab="Authorized MGA" key="Authorized MGA">
            Authorized{' '}
        </Tabs.TabPane>{' '}
        <Tabs.TabPane tab="Commision" key="Commision">
            Commision{' '}
        </Tabs.TabPane>
    </Tabs>
);
export default ProgramsTabs;
