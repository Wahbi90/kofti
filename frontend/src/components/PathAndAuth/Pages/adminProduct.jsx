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
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';
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
    this.columns = [
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
        render: (product) => (
          <Space size="middle">
            <Button
              danger
              onClick={this.handelDelete.bind(this, product.title)}
            >
              Delete
            </Button>
            <Button type="link">update</Button>
          </Space>
        ),
      },
    ];
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
      title1: '',
      price: 0,
      category: '',
      image: '',
      categories: [],
      arrexamples: [],
    };
    this.selectImage = this.selectImage.bind(this);
  }
  async componentWillMount() {
    var res = await axios.get('http://localhost:8081/product');
    console.log(res.data);
    this.setState({ data: res.data });
    const arrCategory = [];
    const categ = () => {
      for (let i = 0; i < res.data.length; i++) {
        if (!arrCategory.includes(res.data[i].category)) {
          arrCategory.push(res.data[i].category);
        }
      }
      this.setState({ arrexamples: arrCategory });
      var arr = arrCategory.map((el) => {
        var obj = {};
        obj['value'] = el;
        obj['label'] = el;
        console.log(obj);
        return obj;
      });
      this.setState({ categories: arr });
      console.log('sleh', this.state.categories);
    };
    categ();
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
    axios
      .post('http://localhost:8081/product', {
        title: this.state.title1,
        price: this.state.price,
        category: this.state.category,
        image: this.state.image,
      })
      .then(
        (response) => console.log('response from server', response),
        location.reload(),
      )
      .catch((err) => {
        console.log(err, 'error from post ');
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
    formData.append('file', pic);
    formData.append('upload_preset', 'cloudyy');
    axios
      .post('https://api.cloudinary.com/v1_1/dgqiognni/image/upload', formData)
      .then((response) => {
        console.log(response.data.url);
        this.setState({ image: response.data.url });
      })
      .catch((err) => console.log(err));
  };
  selectName = (event) => {
    this.setState({ title1: event.target.value });
    console.log('fr', this.state.title1);
  };
  selectPrice = (event) => {
    this.setState({ price: event.target.value });
    console.log('fraj', this.state.price);
  };
  onChange1(value) {
    if (Array.isArray(value)) {
      const res = value[0];
      this.setState({ category: res });
    } else {
      console.log(value.target.value, 'fdsfds');
      const res = value.target.value;
      this.setState({ category: res });
    }
  }
  handelDelete = (e) => {
    console.log(e);
    axios
      .delete('http://localhost:8081/product/' + e)
      .then(
        (response) => console.log('response from server', response),
        location.reload(),
      )
      .catch((err) => console.log(err, 'from server'));
  };
  render() {
    // const { category } = this.props;
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
          <Input
            placeholder="Product Name"
            onChange={this.selectName.bind(this)}
          />
          <br />
          <Divider orientation="left">Price</Divider>
          <Input placeholder="Price" onChange={this.selectPrice} />
          <br />
          {/* <Divider orientation="left">Description</Divider>
          <Input placeholder="Description" />
          <br /> */}
          <Divider orientation="left">Category</Divider>
          <Cascader
            placeholder="Please select category"
            // defaultValue={this.state.arrexamples}
            options={this.state.categories}
            onChange={this.onChange1.bind(this)}
          />
          <br />
          <br />
          <Input
            placeholder="new category"
            onChange={this.onChange1.bind(this)}
          />
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
