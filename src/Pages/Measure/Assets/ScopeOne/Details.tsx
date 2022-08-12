import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardChart, MTable, TextCard } from 'Components';
import { GetAvrage } from 'Helper';
import { DetailsColumns as Columns } from './Columns';

const ScopeOneDetails = () => {
  const location: any = useLocation();
  const [item, setItem] = useState({
    'Vehicle Reg': '',
    'Vehicle Reg Driver': '',
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    if (location.state['Vehicle Reg']) {
      setItem({
        'Vehicle Reg': location.state['Vehicle Reg'],
        'Vehicle Reg Driver': location.state['Vehicle Reg Driver'],
      });
      setData(location.state.Data);
    }
  }, [location]);

  const content = [
    {
      title: 'Vehicle Reg No.',
      data: item['Vehicle Reg'],
    },
    {
      title: 'Vehicle Reg Driver',
      data: item['Vehicle Reg Driver'],
    },
    {
      title: 'Avg Fuel Consumption',
      data: GetAvrage(data.map((dataItem) => dataItem['Litres'])) + ' Liters',
    },
    {
      title: 'Avg Odometer Reading',
      data: GetAvrage(data.map((dataItem) => dataItem['Odometer'])) + ' Km',
    },
    {
      title: 'Avg Distance Traveled',
      data:
        GetAvrage(data.map((dataItem) => dataItem['DistanceTraveled'])) + ' Km',
    },
    {
      title: 'Avg Expenditure on Fuel',
      data: '£ ' + GetAvrage(data.map((dataItem) => dataItem['Gross'])),
    },
    {
      title: 'Average Carbon Emission',
      data:
        GetAvrage(data.map((dataItem) => dataItem['CO2 Emission'])) +
        ' gCO2/Kwh',
    },
  ];
  return (
    <div>
      <TextCard cards={content} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MTable title="Carbon Emission-2021" data={data} columns={Columns} />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            showYear={true}
            x_items={data.map((dataItem) => dataItem['Transaction Date/Time'])}
            y_item={data.map((dataItem) => dataItem['CO2 Emission'])}
            type="bar"
            label={`Carbon Emission of Vehicle : ${item['Vehicle Reg']} `}
          />
        </Grid>
        <Grid item xs={12}>
          <CardChart
            showYear={true}
            x_items={data.map((dataItem) => dataItem['Transaction Date/Time'])}
            y_item={data.map((dataItem) => dataItem['CO2 Emission'])}
            type="line"
            label={`Carbon Emission of Vehicle : ${item['Vehicle Reg']} `}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default ScopeOneDetails;
