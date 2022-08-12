import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import { CardChart, MediaCard, MTable } from 'Components';

function Scope2() {
  const [data, setdata] = useState([[]]);

  useEffect(() => {
    const authToken = `Bearer ${localStorage.getItem('authToken')}`;
    const getData = async () => {
      const baseURL = process.env.REACT_APP_API_URL;
      let data = [] as any[];
      let dataF = [
        {
          assetName: 'MPAN-2300000709911',
          type: 'prediction',
        },
        {
          assetName: 'MPAN- 2366560081212',
          type: 'prediction',
        },
      ];
      for (let i = 0; i < dataF.length; i++) {
        const response = await fetch(
          `${baseURL}/api/getPrediction?name=${dataF[i].assetName}&type=${dataF[i].type}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: authToken,
            },
            credentials: 'same-origin',
          },
        );
        const newData = await response.json();
        newData.min_EP = Math.min(
          ...newData.map((item: any) => item['Energy Prediction']),
        );

        newData.max_EP = Math.max(
          ...newData.map((item: any) => item['Energy Prediction']),
        );
        newData.min_CEP = Math.min(
          ...newData.map((item: any) => item['Carbon Emission Prediction']),
        );
        newData.max_CEP = Math.max(
          ...newData.map((item: any) => item['Carbon Emission Prediction']),
        );

        data.push(newData);
      }
      data.forEach((e, i) => {
        e.forEach((item: any, j: any) => {
          data[i][j].Date = data[i][j].Date.slice(0, 10);
        });
        return null;
      });
      setdata(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {data.map((item, pos) => (
            <Grid md={6} item key={pos}>
              <MediaCard
                title={'Carbon Emission - Feb,2022'}
                content={
                  <>
                    <div>
                      Maximum Petrol Consumption Prediction :{' '}
                      {(item as any).max_CEP}
                    </div>
                    <div>
                      Minimum Petrol Consumption Prediction :{' '}
                      {(item as any).min_CEP}
                    </div>
                    <div>
                      Minimum Diesel Consumption Prediction :{' '}
                      {(item as any).min_EP}
                    </div>
                    <div>
                      Maximum Diesel Consumption Prediction :{' '}
                      {(item as any).max_EP}
                    </div>
                  </>
                }
              />
            </Grid>
          ))}

          {data.map((item, pos) => (
            <Grid item md={6} key={pos}>
              <MTable
                title="Fuel Prediction"
                data={item}
                columns={[
                  {
                    title: 'Date',
                    field: 'Date',
                  },
                  {
                    title: 'Petrol Consumption Prediction ',
                    field: 'Energy Prediction',
                  },
                  {
                    title: 'Diesel Consumption Prediction',
                    field: 'Carbon Emission Prediction',
                  },
                ]}
              />
            </Grid>
          ))}

          <Grid item md={6}>
            {data.map((item, pos) => (
              <CardChart
                x_items={item.map((ele) => (ele as any).Date.slice(0, 10))}
                y_item={item.map((ele) => ele['Energy Prediction'])}
                title={`Petrol Consumption Prediction  *1000 Kwh `}
                time="Date"
                type="line"
              />
            ))}
          </Grid>
          <Grid item md={6}>
            {data.map((item) => (
              <CardChart
                x_items={item.map((ele) => (ele as any).Date.slice(0, 10))}
                y_item={item.map((ele) => ele['Carbon Emission Prediction'])}
                title="Diesel Consumption Prediction *1000 kgCO2/kWh"
                time="Date"
                type="line"
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Scope2;
