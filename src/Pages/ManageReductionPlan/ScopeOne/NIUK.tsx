import React, { useContext, useState } from 'react';
import { Grid } from '@mui/material';
import { CardChart, OptionsSelector, TextCard } from 'Components';
import { Round } from 'Helper';
import { Context } from 'Context';
import { ScopeOneDataMonitorOptions as options } from 'Helper';
import { ScopeOneDataType } from 'Types';
export default function NIUK() {
  const { scopeOneData } = useContext(Context);

  const [optionsSelected, setOptionsSelected] = useState([
    options[0].children[0].name,
  ]);
  const DataToMeShowed = { 'On-Road Vehicles': scopeOneData };

  const getData = (key: string) => {
    return (DataToMeShowed as any)[key] as ScopeOneDataType[] | null;
  };

  const totalData = scopeOneData
    .map((i) => i['Data'].map((x) => x['CO2 Emission']))
    .flat();

  const handelSelect = (selected: string) => {
    setOptionsSelected((str) => {
      const check = str.some((s) => s === selected);
      if (check) return str.filter((s) => s !== selected);
      return [...str, selected];
    });
  };

  const content = [
    {
      title: 'Maximum Carbon Emission',
      data: Math.max(...totalData) + ' kgCO2/KWh',
    },
    {
      title: 'Total  Carbon Emission',
      data: Round(totalData.reduce((a, b) => a + b, 0)) + ' kgCO2/KWh',
    },
    {
      title: 'Minimum Carbon Emission',
      data: Math.min(...totalData) + ' kgCO2/KWh',
    },
  ];

  return (
    <div>
      <OptionsSelector
        options={options}
        onSelect={handelSelect}
        selected={optionsSelected}
      />

      <TextCard cards={content} />

      {optionsSelected.length ? (
        optionsSelected.map((option) => {
          const data = getData(option);
          if (!data) return null;
          return (
            <Grid container spacing={1} key={option}>
              <Grid
                item
                xs={12}
                style={{ textAlign: 'center', padding: '10px' }}
              >
                <h2>{option}</h2>
              </Grid>
              {data.map((item) => (
                <Grid container spacing={2} key={item['Vehicle Reg']}>
                  <Grid item xs={6}>
                    <CardChart
                      showYear={true}
                      x_items={item['Data'].map(
                        (d) => d['Transaction Date/Time'],
                      )}
                      y_item={item['Data'].map((d) => Round(d['CO2 Emission']))}
                      type={'line'}
                      label={
                        'Carbon Emission (2021) of Vehicle Reg. No: ' +
                        item['Vehicle Reg']
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardChart
                      showYear={true}
                      x_items={item['Data'].map(
                        (d) => d['Transaction Date/Time'],
                      )}
                      y_item={item['Data'].map((d) => Round(d['CO2 Emission']))}
                      type={'bar'}
                      label={
                        'Carbon Emission (2021) of Vehicle Reg. No: ' +
                        item['Vehicle Reg']
                      }
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          );
        })
      ) : (
        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center',
            paddingTop: '20px',
          }}
        >
          No data to be displayed
        </Grid>
      )}
    </div>
  );
}
