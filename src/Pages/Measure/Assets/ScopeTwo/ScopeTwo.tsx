import React, { useContext } from 'react';
import { ScopeTwoColumns as Columns } from './Columns';
import { MTable } from 'Components';
import { useNavigate } from 'react-router-dom';
import { Context } from 'Context';
const ScopeTwo = () => {
  const { scopeTwoAsset } = useContext(Context);
  const navigate = useNavigate();
  const tableData = scopeTwoAsset.map((x, i) => ({ ...x, sn: i + 1 }));
  const handelClick = (data: typeof tableData[0]) => {
    navigate('/asset', {
      state: data.sn,
    });
  };

  return (
    <div>
      <MTable
        title="Scope 2"
        data={tableData}
        columns={Columns}
        onRowClick={(e, data) => handelClick(data as any)}
      />
    </div>
  );
};

export default ScopeTwo;
