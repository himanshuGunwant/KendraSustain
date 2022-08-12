import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { CardChart, MTable, TextCard } from 'Components';
import { ScopeTwoDataType, ScopeTwoAssetType } from 'Types';
import { Context } from 'Context';
import { Round } from 'Helper';
import { DetailsColumns as Columns } from './Columns';
export default function AssetDetails() {
  const location = useLocation();

  const { scopeTwoAsset, scopeTwoData } = useContext(Context);
  const [asset, setAsset] = useState<ScopeTwoAssetType | null>(null);
  const [data, setData] = useState<ScopeTwoDataType[]>([]);
  useEffect(() => {
    if (location.state == null) {
      return;
    }
    const { state }: { state: number | unknown } = location;
    if (typeof state !== 'number') return;
    const currentIndex = state - 1;
    setAsset(scopeTwoAsset[currentIndex]);
    setData(scopeTwoData[currentIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = [
    {
      title: 'Maximum Energy Consumption',
      data:
        Round(Math.max(...data.map((i) => i['Energy Consumption']))) + 'KwH',
    },
    {
      title: 'Minimum Energy Consumption',
      data:
        Round(Math.min(...data.map((i) => i['Energy Consumption']))) + 'KwH',
    },
    {
      title: 'Average Energy Consumption',
      data:
        Round(
          (100 *
            data
              .map((i) => i['Energy Consumption'])
              .reduce((a, b) => a + b, 0)) /
            data.length,
        ) + 'KwH',
    },
    {
      title: 'Maximum Carbon Emission',
      data: Round(Math.max(...data.map((i) => i['Carbon Emission']))) + 'KwH',
    },
    {
      title: 'Minimum Carbon Emission',
      data: Round(Math.min(...data.map((i) => i['Carbon Emission']))) + 'KwH',
    },
    {
      title: 'Average Carbon Emission',
      data:
        Round(
          data.map((i) => i['Carbon Emission']).reduce((a, b) => a + b, 0) /
            data.length,
        ) + 'KwH',
    },
  ];

  return (
    asset && (
      <>
        <p
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {asset.asset_type}({asset.asset_name})
        </p>
        <TextCard cards={content} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MTable
              columns={Columns}
              data={data.map((i, j) => ({
                sn: j + 1,
                ...i,
                'Energy Consumption': Round(i['Energy Consumption']),
                'Carbon Emission': Round(i['Carbon Emission']),
              }))}
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              x_items={data.map((i) => i['Date'])}
              y_item={data.map(
                (i) => Math.round(100 * i['Carbon Emission']) / 100,
              )}
              label="Carbon Emission"
              type="line"
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              x_items={data.map((i) => i['Date'])}
              y_item={data.map((i) => Round(i['Energy Consumption']))}
              label="Energy Consumption"
              type="line"
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              x_items={data.map((i) => i['Date'])}
              y_item={data.map(
                (i) => Math.round(100 * i['Carbon Emission']) / 100,
              )}
              label="Carbon Emission"
              type="bar"
            />
          </Grid>
          <Grid item xs={12}>
            <CardChart
              x_items={data.map((i) => i['Date'])}
              y_item={data.map((i) => Round(i['Energy Consumption']))}
              label="Energy Consumption"
              type="bar"
            />
          </Grid>
        </Grid>
      </>
    )
  );
}
