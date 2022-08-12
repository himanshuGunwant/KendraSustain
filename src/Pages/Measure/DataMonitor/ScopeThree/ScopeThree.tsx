import React, { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

import { CardChart } from 'Components';
import { MTable } from 'Components';
import { Context } from 'Context';
import { Column } from 'material-table';

interface RowType {
  sno: number;
  Source: string;
  'Energy Consumption(MWh)': number;
  'GHG Emissions(tCO2e)': number;
  year: number;
}

const ScopeThree = () => {
  const { scopeThreeData } = useContext(Context);
  const [data, setdata] = useState(scopeThreeData);
  const [labels, setLabels] = React.useState([
    'Plasterboard',
    'Timber',
    'Steel',
    'Waste',
    'Fuel ( Employee commute )',
    'Used Products and Goods',
  ]);
  const [value, setValue] = React.useState<number[]>([]);

  const columns: Column<Object>[] = [
    {
      title: 'S. NO.',
      field: 'sno',
      width: '5%',
    },
    {
      title: 'Source',
      field: 'Source',
      sorting: false,
      filtering: true,
    },
    { title: 'Enrgy Consumption(MWh)', field: 'Energy Consumption(MWh)' },
    {
      title: 'GHG Emission(tCO2e)',
      field: 'GHG Emissions(tCO2e)',
      align: 'center',
      grouping: false,
    },
    {
      title: 'Year',
      field: 'year',
      align: 'center',
      grouping: false,
    },
  ];

  useEffect(() => {
    async function getData() {
      const value = [83407, 677300, 162042, 55520, 2326, 479780];
      setLabels(labels);
      setValue(value);
    }

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelAdd = async (newRow: RowType) => {
    setdata([newRow, ...data]);
  };

  const handelUpdate = async (newRow: RowType, oldRow: RowType) => {
    console.log(newRow);
  };

  const handelDelete = async (row: RowType) => {
    const newData = data.filter((x: any, i: any) => row.sno - 1 !== i);
    setdata(newData);
  };

  // TODOD : scope3 data type
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <MTable
              columns={columns}
              data={data.map((x: any, i: any) => ({
                sno: i + 1,
                ...x,
              }))}
              title="Scope 3"
              editable={{
                onRowAdd: (data) => handelAdd(data as any),
                onRowUpdate: (newData, oldData) =>
                  handelUpdate(newData as any, oldData as any),
                onRowDelete: (data) => handelDelete(data as any),
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CardChart
              labels={labels}
              data={value.map((item, pos) => {
                return {
                  value: item,
                  name: labels[pos],
                };
              })}
              type="pie"
              title="Fuel Consumption - 2020"
              time="Fuel Consumption"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <CardChart
              type="bar"
              x_items={labels}
              y_item={value}
              title="Fuel Consumption - 2020"
              time="Fuel Consumption"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ScopeThree;
