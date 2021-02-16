import { Table, Space, Switch } from 'antd';
import React from 'react';
import axios from 'axios';  

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
    categories:[]
   
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
 


  render() {
const  checkStrictlyy = this.checkStrictly
    return (
      <>
      <h5 style={{fontSize:'30px'}}>Category's</h5>
      <Space align="center" style={{ marginBottom: 16 }}>
        CheckStrictly: <Switch checked={this.checkStrictly} onChange={this.setCheckStrictly} />
      </Space>
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection,   checkStrictlyy 
        }}
        dataSource={this.state.categories}
      />
      </>
    );
  }
}
export default Admincategories;