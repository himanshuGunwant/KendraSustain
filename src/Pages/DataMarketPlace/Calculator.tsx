import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import Paper from '@mui/material/Paper';
import { MTable } from 'Components';
import { Context } from 'Context';
import { Column } from 'material-table';

// TODO : refactor all the code

const columns: Column<Object>[] = [
  {
    title: 'pollutant',
    field: 'pollutant',
    sorting: false,
    filtering: false,
    headerStyle: { color: '#fff' },
  },
  { title: 'sector', field: 'sector' },
  { title: 'source', field: 'source', align: 'center' },
  { title: 'Fuel Name', field: 'fuel_name', align: 'center' },
  { title: 'Year', field: 'year', align: 'center', grouping: false },
  {
    title: 'Emission Factor',
    field: 'emission_factor',
    align: 'center',
    grouping: false,
  },
  { title: 'unit', field: 'unit', align: 'center', grouping: false },
  {
    title: 'activity units',
    field: 'activity_unit',
    align: 'center',
    grouping: false,
  },
];

export default function EmissionFactor() {
  const { setHead } = useContext(Context);
  const [tableData, setTableData] = React.useState([]);

  const [year, setYear] = React.useState('');
  const [sector, setSector] = React.useState('');
  const [pollutant, setPollutant] = React.useState('');
  useEffect(() => {
    setHead?.(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Emissions Factor Calculator /
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          {' '}
          Data Marketplace
        </span>
      </p>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: any) => {
    setYear(event.target.value);
  };
  const handleChange1 = (event: any) => {
    setSector(event.target.value);
  };
  const handleChange2 = (event: any) => {
    setPollutant(event.target.value);
  };
  const data2 = {
    year: year,
    sector: sector,
    pollutant: pollutant,
  };

  const handleSubmit = async () => {
    const apiGetData = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Accept: 'application/json',
      },
    });

    await apiGetData
      .get(
        `/api/emissionfactor?year=${data2.year}&sector=${data2.sector}&pollutant=${data2.pollutant}`,
      )
      .then((res) => {
        setTableData(res.data);
      });
  };

  const years = ['2015', '2016', '2017', '2018', '2019'];
  const sectors = [
    'Energy',
    'Memo',
    'Industrial Processes and Other Product Use',
    'Waste',
    'Agriculture',
  ];
  const pollutants = ['Methane', 'Nitrous Oxide', 'Carbon Dioxide as Carbon'];

  return (
    <div
      style={{
        padding: '0 10px',
      }}
    >
      {/* <BasicModal open={open} setOpen={setOpen} /> */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <MTable
          columns={columns}
          data={tableData}
          // editable={{
          //   onRowAdd: (newRow: any) =>
          //     new Promise((resolve: any, reject) => {
          //       setTableData([...(tableData as any), newRow as any] as any);

          //       setTimeout(() => resolve(), 500);
          //     }),
          //   onRowUpdate: (newRow: any, oldRow: any) =>
          //     new Promise((resolve: any, reject) => {
          //       const updatedData = [...(tableData as any)];
          //       updatedData[oldRow.tableData.id] = newRow;
          //       setTableData(updatedData as any);
          //       setTimeout(() => resolve(), 500);
          //     }),
          //   onRowDelete: (selectedRow: any) =>
          //     new Promise((resolve: any, reject) => {
          //       const updatedData = [...(tableData as any)];
          //       updatedData.splice(selectedRow.tableData.id, 1);
          //       setTableData(updatedData as any);
          //       setTimeout(() => resolve(), 1000);
          //     }),
          // }}
          // onSelectionChange={(selectedRows: any) => console.log(selectedRows)}
          title={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span>Emission Factors</span>
              <div
                style={{
                  width: '500px',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <FormControl>
                  <InputLabel>Year</InputLabel>
                  <Select
                    style={{ height: '50px' }}
                    value={year}
                    label="Year"
                    onChange={handleChange}
                  >
                    {years.map((years, pos) => {
                      return (
                        <MenuItem
                          style={{ display: 'list-item', padding: '5px' }}
                          key={pos}
                          value={years}
                        >
                          {years}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Year</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel>Sector</InputLabel>
                  <Select
                    style={{ height: '50px' }}
                    value={sector}
                    label="Sector"
                    onChange={handleChange1}
                  >
                    {sectors.map((sectors, pos) => {
                      return (
                        <MenuItem
                          style={{ display: 'list-item', padding: '5px' }}
                          key={pos}
                          value={sectors}
                        >
                          {sectors}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Sector</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel>Pollutants</InputLabel>
                  <Select
                    style={{ height: '50px' }}
                    value={pollutant}
                    label="Pollutant"
                    onChange={handleChange2}
                  >
                    {pollutants.map((pollutants, pos) => {
                      return (
                        <MenuItem
                          style={{ display: 'list-item', padding: '5px' }}
                          key={pos}
                          value={pollutants}
                        >
                          {pollutants}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <FormHelperText>Select Pollutants</FormHelperText>
                </FormControl>
                <Button
                  variant="outlined"
                  sx={{
                    position: 'relative',
                    top: '-10px',
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          }
        />
      </Paper>
    </div>
  );
}
