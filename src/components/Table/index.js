import React, { useState, useEffect, useContext, forwardRef } from 'react'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography, Form } from '@/styles'
import { Styles } from './styles'

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import MaterialTable from 'material-table'
import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, 
  FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function App(props) {
  console.log("columns", props.columns)
  console.log(props.data)
  
  {/*
  const downloadData = () => {
    var element = document.createElement('a'); 
    element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(JSON.stringify(props.objs))); //TO CHANGE
    element.setAttribute('download', "downloaded.csv"); 
    document.body.appendChild(element); 
    element.click(); 
    document.body.removeChild(element); 
  }
  */}

  return (
    <Styles>
      {/*
      <div style={{display: "flex"}}>
      <Form.Button onClick={downloadData} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
          <b>Download Data</b>
      </Form.Button>
      </div>
      */}
      <Typography.BodyText style={{color:Colors.WLF_BLACK}}><b>Total Number of Responses: {props.data.length}</b></Typography.BodyText>
      <MaterialTable
        title={props.title}
        icons={tableIcons}
        columns={props.columns}
        data={props.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log([...props.data, newData]);
                props.addData(newData);
                resolve();
              }, 2000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...props.data];
                const index = props.data.indexOf(oldData);
                dataUpdate[index] = newData;
                console.log("dataUpdate: ", dataUpdate);
                props.saveData(dataUpdate[index], dataUpdate);
                resolve();
              }, 2000);
            }),

          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const dataUpdate = [...props.data];
                props.delData(dataUpdate[props.data.indexOf(oldData)], 
                dataUpdate.splice(props.data.indexOf(oldData), 1));
              }, 2000);
            }),
        }}
        options={{
          headerStyle: {
            color: Colors.WLF_BLACK,
            fontSize: '18px',
            fontFamily: 'Mukta Mahee',
            fontWeight: 'bold',
            margin: 'auto'
          },
          rowStyle: {
            color: Colors.WLF_BLACK,
            fontSize: '15px',
            fontFamily: 'Muli',
            margin: 'auto'
          },
          columnsButton: true,
          pageSizeOptions: [5, 10, 20, 50, 100],
          exportAllData: true,
          exportButton: true
        }}
      />
    </Styles>
  )
}

export default App

