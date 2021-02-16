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
import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import Draggable from 'react-draggable';
import Axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'title',
  },
  {
    title: 'categories',
    dataIndex: 'category',
    sorter: (a, b) => a.Quantity - b.Quantity,
  },
  {
    title: 'Image',
    dataIndex: 'url',
    render: (tags) => (
      <Space>
        <Upload
          action="data"
          listType="url"
          defaultFileList={[url]}
          className="upload-list-inline"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Space>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    filters: [
      {
        text: '45002',
        value: '4500',
      },
      {
        text: '4500',
        value: '4500',
      },
    ],
    // onFilter: (value, record) => record.Price.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">update</a>
      </Space>
    ),
  },
];

const expandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const url = () =>
  this.state.data.map((element) => {
    return element.url;
  });
const fileList = [
  {
    uid: '-1',
    name: 'title',
    status: 'done',
    url: 'url',
    thumbUrl: 'url',
  },
];

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

class Adminproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSelected: '',
      bordered: false,
      loading: false,
      pagination,
      size: 'default',
      expandable,
      title: undefined,
      showHeader,
      rowSelection: {},
      scroll: undefined,
      hasData: true,
      data: [],
      tableLayout: undefined,
      top: 'none',
      bottom: 'bottomRight',
      visible: false,
      disabled: true,
      bounds: { left: 0, top: 0, bottom: 0, right: 0 },
    };

    this.selectImage = this.selectImage.bind(this);
  }
  async componentWillMount() {
    var res = await axios.get('http://localhost:8081/product');
    console.log(res.data);
    this.setState({ data: res.data });
  }
  draggleRef = React.createRef();
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
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

  selectImage = (event) => {
    let pic = event.target.files[0];
    console.log(pic);
    var formData = new FormData();
    formData.append ('file', pic);
    formData.append ('upload_preset', 'cloudyy');
    Axios.post(
      'https://api.cloudinary.com/v1_1/dgqiognni/image/upload',
      formData,
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { category } = this.props;
    const { xScroll, yScroll, ...state } = this.state;
    const { bounds, disabled, visible } = this.state;
    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map((item) => ({
      ...item,
      ellipsis: state.ellipsis,
    }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }
    return (
      <>
        <Button onClick={this.showModal}>Add Product</Button>
        <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
              Draggable Modal
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          <Divider orientation="left">Name</Divider>
          <Input placeholder="Product Name" />
          <br />

          <Divider orientation="left">Price</Divider>
          <Input placeholder="Price" />
          <br />
          {/* <Divider orientation="left">Description</Divider>
          <Input placeholder="Description" />
          <br /> */}
          <Divider orientation="left">categorie</Divider>
          <Cascader placeholder="Please select categorie" />

          <Divider orientation="left">pictures</Divider>
          <input
            type="file"
            onChange={(e) => {
              this.selectImage(e);
            }}
          />

          {/* <button onClick={this.selectImage}>Upload Image</button> */}
        </Modal>
        <h6 style={{ fontSize: '30px' }}>products :</h6>
        <Table
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={tableColumns}
          rowClassName="editable-row"
          dataSource={this.state.data}
          scroll={scroll}
        />
      </>
    );
  }
}
export default Adminproducts;
