import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardChart, MTable } from 'Components';
import { Context } from 'Context';

const ScopeTwo = () => {
  const { scopeTwoAsset, scopeTwoData } = useContext(Context);
  const asset = scopeTwoAsset;
  const row = scopeTwoData;
  const columns = [
    { field: 'Date', title: 'Date' },
    {
      field: 'Energy Consumption',
      title: 'Energy Consumption (KwH)',
    },
    {
      field: 'Carbon Emission',
      title: 'Carbon Emission (kgCO2/kWh)',
    },
  ];

  const [select, setSelect] = useState<string[]>([]);
  const handleSelect = (id: string) => {
    setSelect((option) => {
      const check = option.some((p) => p === id);
      if (check) return option.filter((p) => p !== id);
      return [...option, id];
    });
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          paddingBottom: 10,
        }}
      >
        {asset.map((x, i) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            key={i}
          >
            <div
              style={{
                height: 20,
                width: 20,
                backgroundColor: select.includes(x.asset_name)
                  ? '#2F3DA9'
                  : '#DADADA',
                borderRadius: 4,
                cursor: 'pointer',
                marginRight: 5,
              }}
              onClick={() => handleSelect(x.asset_name)}
            ></div>
            <p
              style={{
                fontFamily: 'Manrope',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: 14,
                color: '#2F3DA9',
                marginRight: 5,
              }}
            >
              {x.asset_type}
            </p>
            <p
              style={{
                fontFamily: 'Manrope',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 14,
                color: '#828282',
              }}
            >
              {x.asset_name}
            </p>
          </div>
        ))}
      </div>
      {select.length ? (
        <>
          {select.includes('MPAN-G4w00541251826') && (
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <MTable
                    columns={columns}
                    data={row[0]}
                    title={asset[0].asset_type}
                  />
                </Grid>

                <Grid item xs={6}>
                  <CardChart
                    showYear={true}
                    x_items={row[0].map((i) => i.Date)}
                    label={asset[0].asset_type}
                    time="Date"
                    type="bar"
                    y_item={row[0].map((data) => data['Carbon Emission'])}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardChart
                    showYear={true}
                    x_items={row[0].map((i) => i.Date)}
                    label={asset[0].asset_type}
                    time="Date"
                    type="line"
                    y_item={row[0].map((data) => data['Carbon Emission'])}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
          {select.includes('MPAN-K05G003880') && (
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <MTable
                    columns={columns}
                    data={row[1]}
                    title={asset[1].asset_type}
                  />
                </Grid>

                <Grid item xs={6}>
                  <CardChart
                    showYear={true}
                    x_items={row[1].map((i) => i.Date)}
                    label={asset[1].asset_type}
                    time="Date"
                    type="bar"
                    y_item={row[1].map((data) => data['Carbon Emission'])}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardChart
                    showYear={true}
                    x_items={row[1].map((i) => i.Date)}
                    label={asset[1].asset_type}
                    time="Date"
                    type="line"
                    y_item={row[1].map((data) => data['Carbon Emission'])}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </>
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
};

export default ScopeTwo;
