import React, { useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { CardChart, TextCard } from 'Components'
import { Context } from 'Context'
import { Round } from 'Helper'
const ScopeTwo = () => {
  const { scopeTwoData, scopeTwoAsset } = useContext(Context)
  const [CE, setCE] = useState<number[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [GC, setGC] = useState<number[]>([])
  useEffect(() => {
    const carbonEmissions = scopeTwoData
      .map((e) => e.map((i) => i['Carbon Emission']))
      .flat()
    setCE(carbonEmissions)
    const energyComsuption = scopeTwoData
      .map((e) => e.map((i) => i['Energy Consumption']))
      .flat()
    setGC(energyComsuption)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [select, setSelect] = useState(0)
  const content = [
    {
      title: 'Total Carbon Emission',
      data: Round(CE.reduce((a, b) => a + b, 0)) + ' kgCO2/kwH',
    },
    {
      title: 'Max Carbon Emission',
      data: Round(Math.max(...CE)) + ' kgCO2/kwH',
    },
    {
      title: 'Min Carbon Emission',
      data: Round(Math.min(...CE)) + ' kgCO2/kwH',
    },
    {
      title: 'Avrage Carbon Emission',
      data: Round(CE.reduce((a, b) => a + b, 0) / CE.length) + ' kgCO2/kwH',
    },
  ]
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
        {scopeTwoAsset.map((x, i) => (
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
                backgroundColor: select === i ? '#2F3DA9' : '#DADADA',
                borderRadius: 4,
                cursor: 'pointer',
                marginRight: 5,
              }}
              onClick={() => setSelect(i)}
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
      <TextCard cards={content} grid={4} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <CardChart
            title={scopeTwoAsset[select].asset_name}
            x_items={scopeTwoData[select].map((e) => e.Date)}
            type="line"
            showYear={true}
            y_item={scopeTwoData[select].map((e) => e['Carbon Emission'])}
            label={'Carbon Emission for ' + scopeTwoAsset[select].asset_type}
          />
        </Grid>

        <Grid item xs={12}>
          <CardChart
            title={scopeTwoAsset[select].asset_name}
            x_items={scopeTwoData[select].map((e) => e.Date)}
            type="bar"
            showYear={true}
            y_item={scopeTwoData[select].map((e) => e['Carbon Emission'])}
            label={'Carbon Emission for ' + scopeTwoAsset[select].asset_type}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ScopeTwo
