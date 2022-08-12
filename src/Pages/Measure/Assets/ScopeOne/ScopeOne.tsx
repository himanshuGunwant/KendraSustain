import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MTable } from 'Components';
import { Context } from 'Context';
import { ScopeOneDataType } from 'Types';
import { ScopeOneColumns as Columns } from './Columns';

const ScopeOne = () => {
  const navigate = useNavigate();
  const { scopeOneData } = useContext(Context);

  const handelClick = (data: ScopeOneDataType) => {
    navigate('/asset/one', {
      state: {
        'Vehicle Reg': data['Vehicle Reg'],
        'Vehicle Reg Driver': data['Vehicle Reg Driver'],
        Data: data.Data,
      },
    });
  };

  const data = scopeOneData.map((item, pos) => ({
    sn: pos + 1,
    'Vehicle Reg': item['Vehicle Reg'],
    'Vehicle Reg Driver': item['Vehicle Reg Driver'],
    Location: item['Location'],
    'Fuel type': item['Fuel type'],
    'Vehicle type': item['Vehicle type'],
    Data: item.Data,
  }));

  return (
    <div>
      <MTable
        columns={Columns}
        data={data}
        onRowClick={(e, data) => data && handelClick(data as ScopeOneDataType)}
        title="Scope 1"
      />
    </div>
  );
};
export default ScopeOne;
