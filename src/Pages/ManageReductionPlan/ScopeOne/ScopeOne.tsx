import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { ScopeThreeDataSummary as ScopeData } from 'Helper'
import { CardChart, MediaCard } from 'Components'
const barStyle = {
  backgroundColor: ['#272253', '#36A2DE', '#586785', '#4B5FAE'],
  barPercentage: 0.5,
  barThickness: 40,
  borderRadius: 2,
  categoryPercentage: 0.5,
  label: 'Emission',
  maxBarThickness: 35,
}

const ScopeOne = () => {
  const metadata = [
    {
      name: 'Most Significant Emission Source for 2020',
      data: 'Building 1',
    },
    {
      name: 'Scope 1 (MtCO2e) for 2020',
      data: '16,083.65',
    },
    {
      name: '   Most Significant Combustion Fuel for 2020',
      data: 'Diesel Fuel',
    },
  ]

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {metadata.map((item, pos) => (
            <Grid key={pos} item xs={4}>
              <MediaCard title={item.name} content={item.data} />
            </Grid>
          ))}
          <Grid item xs={6}>
            <CardChart
              y_item={ScopeData.singleData.data2}
              x_items={ScopeData.singleData.labels7}
              title="Monthly Scope 1 emissions (MtCO2e) for 2020"
              type="bar"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              y_item={ScopeData.singleData.data}
              x_items={ScopeData.singleData.labels6}
              title="Stationay Combustion by Fuel Type (MtCO2e) for 2020"
              type="bar"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              y_item={ScopeData.singleData.data}
              x_items={ScopeData.singleData.labels8}
              title="Mobile Combustion by Vechile Type (MtCO2e) for 2020"
              type="bar"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              y_item={ScopeData.singleData.data}
              styleBar={{ ...barStyle, maxBarThickness: 50 }}
              x_items={ScopeData.singleData.labels9}
              type="bar"
              title="Industrial Process (MtCO2e) for 2020"
            />
          </Grid>

          <Grid item xs={6}>
            <CardChart
              y_item={ScopeData.singleData.data}
              styleBar={{ ...barStyle, maxBarThickness: 50 }}
              x_items={ScopeData.singleData.labels5}
              type="bar"
              title="Emission by Facility for 2020"
              axis="y"
            />
          </Grid>
          <Grid item xs={6}>
            <CardChart
              y_item={ScopeData.singleData.data2}
              styleBar={{ ...barStyle, maxBarThickness: 50 }}
              x_items={ScopeData.singleData.labels4}
              type="bar"
              title="Emission % by Source for 2020"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default ScopeOne
