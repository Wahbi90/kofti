
import {
  Table,
  Switch,
  Radio,
  Form,
  Space,
  Modal,
  Button,
  Upload,
  Input,
  Divider,
  Cascader,
  InputNumber,
  Popconfirm,
  Typography,
} from 'antd';
import React, { Component } from 'react';
import axios from 'axios';

let user = [];
const expandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const title = () =>
  this.state.data.map((element) => {
    return element.title;
  });
const showHeader = true;
const pagination = { position: 'bottom' };
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};



export default class AdminOrders extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: 'cartItems', dataIndex: 'cartItems' },
      { title: 'fullName', dataIndex: 'fullName' },
      { title: 'phoneNumber', dataIndex: 'phoneNumber' },
      { title: 'adress', dataIndex: 'adress' },
      { title: 'zipCode', dataIndex: 'zipCode' },
      {
        title: 'Action',
        dataIndex: '',
        render: (fullName) => (
          <Space size="middle">
            <Button danger onClick={this.handelDelete.bind(this, fullName)}>
              Delete
            </Button>
          </Space>
        ),
      },
    ];
    this.state = {
      data: [],
      rowSelection: {},
      hasData: true,
      tableLayout: undefined,
      top: 'none',
      bottom: 'bottomRight',
    };
  }
  async componentWillMount() {
    axios
      .get('http://localhost:8081/Checkout ')
      .then((response) => {
        console.log(response.data[1], 'from wok el mochkel');
        console.log(response, 'charaf');
        console.log(response.data);
        var res = [];
        for (var j = 0; j < response.data.length; j++) {
          var arr = Object.entries(response.data[j]);
          var obj = {};
          for (var i = 0; i < arr.length; i++) {
            obj[arr[i][0]] = arr[i][1];
          }
          res.push(obj);
        }
        this.setState({ data: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleToggle = (prop) => (enable) => {
    this.setState({ [prop]: enable });
  };
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };
  handleTableLayoutChange = (e) => {
    this.setState({ tableLayout: e.target.value });
  };
  handleExpandChange = (enable) => {
    this.setState({ expandable: enable ? expandable : undefined });
  };
  handleEllipsisChange = (enable) => {
    this.setState({ ellipsis: enable });
  };
  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  };
  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  };
  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  };
  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };
  handleYScrollChange = (enable) => {
    this.setState({ yScroll: enable });
  };
  handleXScrollChange = (e) => {
    this.setState({ xScroll: e.target.value });
  };
  handleDataChange = (hasData) => {
    this.setState({ hasData });
  };
  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = this.draggleRef?.current?.getBoundingClientRect();
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    });
  };

  handelDelete = (e) => {
    console.log(e);
    axios
      .delete('http://localhost:8081/Checkout/' + e)
      .then(
        (response) => console.log('response from server', response),
        location.reload(),
      )
      .catch((err) => console.log(err, 'from server'));
  };

  render() {
    const { xScroll, yScroll, ...state } = this.state;
    const { bounds, disabled, visible } = this.state;
    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }
    const tableColumns = this.columns.map((item) => ({
      ...item,
      ellipsis: state.ellipsis,
    }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    return (
      <div>
        <Table
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={this.columns}
          rowClassName="editable-row"
          dataSource={this.state.data}
          scroll={scroll}

          // columns={this.columns}
          // expandable={{
          //   expandedRowRender: (record) => (
          //     <p style={{ margin: 0 }}>{record.description}</p>
          //   ),
          //   rowExpandable: (record) => record.name !== 'Not Expandable',
          // }}
          // dataSource={this.state.data}
        />
      </div>
    );
  }
}
