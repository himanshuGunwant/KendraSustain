import React from 'react';
import MaterialTable, { Options } from 'material-table';

interface Proptypes extends React.ComponentProps<typeof MaterialTable> {}

const MTable: React.FC<Proptypes> = ({ options, ...other }) => {
  const tableOptions: Options<Object> = {
    sorting: true,
    search: true,
    searchAutoFocus: true,
    searchFieldVariant: 'standard',
    paging: true,
    paginationType: 'stepped',
    showFirstLastPageButtons: false,
    exportButton: true,
    exportAllData: true,
    exportFileName: 'TableData',
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    showSelectAllCheckbox: false,
    showTextRowsSelected: false,
    columnsButton: true,
    showTitle: other.title ? true : false,
    headerStyle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      borderBottom: 'none',
      whiteSpace: 'nowrap',
      background: '#E4E4E4',
      color: '#000000'
    },
    emptyRowsWhenPaging: false,
    ...options
  };

  return (
    <div>
      <MaterialTable options={tableOptions} {...other} />
    </div>
  );
};

export default MTable;
