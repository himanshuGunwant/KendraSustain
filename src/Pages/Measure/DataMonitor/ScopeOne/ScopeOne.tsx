import { Grid } from '@mui/material';
import { useState, useContext } from 'react';
import { CardChart, MTable, OptionsSelector } from 'Components';
import { Context } from 'Context';
import { ScopeOneDataMonitorOptions as Options } from 'Helper';
import { Round } from 'Helper';
import { Columns } from './Coulms';
import { ScopeOneDataType } from 'Types';

export default function NIUK() {
  const { scopeOneData } = useContext(Context);

  const [optionsSelected, setOptionsSelected] = useState<string[]>([Options[0].children[0].name]);

  const DataToMeShowed = { 'On-Road Vehicles': scopeOneData };

  const getData = (key: string) => {
    return (DataToMeShowed as any)[key] as ScopeOneDataType[] | null;
  };

  const handelSelect = (selected: string) => {
    setOptionsSelected((str) => {
      const check = str.includes(selected);
      if (check) return str.filter((s) => s !== selected);
      return [...str, selected];
    });
  };

  return (
    <>
      <OptionsSelector options={Options} selected={optionsSelected} onSelect={handelSelect} />
      {optionsSelected.length ? (
        optionsSelected.map((option) => {
          const data = getData(option);
          if (!data) return null;
          return (
            <Grid container spacing={1} key={option}>
              <Grid item xs={12}>
                <MTable
                  title={option}
                  columns={Columns}
                  data={data.map((d, p) => ({
                    sn: p + 1,
                    ...d
                  }))}
                />
              </Grid>

              <Grid item xs={6}>
                <CardChart
                  x_items={data.map((x) => x['Vehicle Reg'])}
                  y_item={data.map((x) =>
                    x['Data']
                      .map((y) => y['CO2 Emission'])
                      .reduce((pre, curr) => Round((pre ?? 0) + (curr ?? 0)), 0)
                  )}
                  type={'bar'}
                  label={'CO2 Emissions'}
                />
              </Grid>
              <Grid item xs={6}>
                <CardChart
                  x_items={data.map((x) => x['Vehicle Reg'])}
                  y_item={data.map((x) =>
                    x['Data']
                      .map((y) => y['DistanceTraveled'])
                      .reduce((pre, curr) => Round((pre ?? 0) + (curr ?? 0)), 0)
                  )}
                  type={'bar'}
                  label={'Average Distance Covered'}
                />
              </Grid>
            </Grid>
          );
        })
      ) : (
        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center',
            paddingTop: '20px'
          }}>
          No data to be displayed
        </Grid>
      )}
    </>
  );
}
