import React, { useContext, useState } from 'react';
import { MTable } from 'Components';
import { Context } from 'Context';
import { Column } from 'material-table';
// TODO : datatypes
function Scope3Com() {
  const { scopeThreeData } = useContext(Context);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setdata] = useState(scopeThreeData);

  const columns: Column<Object>[] = [
    {
      title: 'Name of Asset',
      field: 'Asset_name',
      sorting: false,
      filtering: false,
      headerStyle: { color: '#fff' },
    },
    { title: 'Asset Type', field: 'Asset_type' },
    { title: 'Location', field: 'location', align: 'center', grouping: false },
  ];
  return (
    <div>
      <MTable
        columns={columns}
        data={data}
        // editable={{
        //   onRowAdd: (newRow: any) =>
        //     new Promise((resolve: any, reject) => {
        //       setdata([...data, newRow]);

        //       setTimeout(() => resolve(), 500);
        //     }),
        //   onRowUpdate: (newRow: any, oldRow: any) =>
        //     new Promise((resolve: any, reject) => {
        //       const updatedData = [...data];
        //       updatedData[oldRow.data.id] = newRow;
        //       setdata(updatedData);
        //       setTimeout(() => resolve(), 500);
        //     }),
        //   onRowDelete: (selectedRow: any) =>
        //     new Promise((resolve: any, reject) => {
        //       const updatedData = [...data];
        //       updatedData.splice(selectedRow.data.id, 1);
        //       setdata(updatedData);
        //       setTimeout(() => resolve(), 1000);
        //     }),
        // }}
        title="Scope 3"
      />
    </div>
  );
}

export default Scope3Com;
