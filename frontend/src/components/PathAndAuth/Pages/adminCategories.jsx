import { Input, Table, Space, Switch } from 'antd';
import React from 'react';
import axios from 'axios';  
import { Modal, Button } from 'antd'; 
import Draggable from 'react-draggable';
const columns = [
  {
    title: ' Category',
    dataIndex: 'category',
    key: 'category  ',
    width: '35%',
  }
];


// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
 
class Admincategories extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    data : [],
    checkStrictly : false,
    setCheckStrictly : false,
    categories:[],
    visible: false,
    disabled: true,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
   
  };
   
}

  async componentWillMount () {
    console.log('hhhhhhhh')
   var res = await axios.get('https://fakestoreapi.com/products');
   console.log(res.data);
   const arrCategory = []
   const categ = () => {
     for (let i = 0; i < res.data.length; i++) {
       if (! arrCategory.includes(res.data[i].category) ){
         arrCategory.push( res.data[i].category)
        }
      } 
      console.log("sleh",arrCategory)
      
    }
    categ()
    
    var arr = arrCategory.map(el=> {
      var obj= {}
      obj["category"]=el
      console.log(obj)
      return obj
     })
    this.setState({categories : arr})
    console.log(this.state.categories,"from mapping the arr")
}
showModal = () => {
  this.setState({
    visible: true,
  });
};

handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};

handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
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


  render() {
const { bounds, disabled, visible } = this.state;
    return (
      <>
      <Button onClick={this.showModal}>Add category</Button>
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
          modalRender={modal => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          <Input placeholder="Basic usage" />
        </Modal>
      <h5 style={{fontSize:'30px'}}>Category's</h5>
      <Space align="center" style={{ marginBottom: 16 }}>
    
      </Space>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, 
        }}
        dataSource={this.state.categories}
      />
      </>
    );
  }
}
export default Admincategories;