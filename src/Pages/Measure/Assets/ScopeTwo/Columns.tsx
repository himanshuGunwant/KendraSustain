import { Column } from 'material-table';
import { ScopeTwoAssetType } from 'Types';

export const ScopeTwoColumns: Column<Object>[] = [
  {
    title: 'S.NO',
    field: 'sn',
    width: '5%',
  },
  {
    title: 'Asset Name',
    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
    },
    render: () => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333',
        }}
      >
        NIUK Stearn Electrical
      </span>
    ),
  },
  {
    title: 'Name of Asset',
    field: 'asset_name',

    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
    },
    render: (rowData) => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333',
        }}
      >
        {(rowData as ScopeTwoAssetType).asset_name}
      </span>
    ),
  },
  {
    title: 'Asset Type',
    field: 'asset_type',

    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    },
    render: (rowData) => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333',
        }}
      >
        {(rowData as ScopeTwoAssetType).asset_type}
      </span>
    ),
  },

  {
    title: 'Location',
    field: 'location',
    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    },
    render: (rowData) => (
      <span
        style={{
          borderRadius: '5px',
          background: '#fff',
          padding: '5px 8px',
          color: '#333',
        }}
      >
        {(rowData as ScopeTwoAssetType).location}
      </span>
    ),
  },
];
export const DetailsColumns = [
  {
    title: 'S.NO.',
    field: 'sn',
    width: '5%',
  },
  {
    title: 'Date',
    field: 'Date',
  },
  {
    title: 'Energy Consumption',
    field: 'Energy Consumption',
  },
  {
    title: 'Carbon Emission',
    field: 'Carbon Emission',
  },
];
