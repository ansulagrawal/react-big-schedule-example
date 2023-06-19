import { Col, Row, Typography, Select } from 'antd';
import { menuItems } from '../config';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Row align="middle" justify="space-between">
      <Col span={2}>
        <Select
          showSearch
          defaultValue={menuItems[0]}
          defaultActiveFirstOption
          options={menuItems}
          onChange={(v, p) => navigate(p.path)}
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
          style={{ width: 300 }}
        />
      </Col>
      <Col>
        <Typography.Title level={1} className="header-title">
          React Big Scheduler
        </Typography.Title>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
}

export default Header;
