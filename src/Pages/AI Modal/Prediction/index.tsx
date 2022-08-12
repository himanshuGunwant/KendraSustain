import React, { useContext, useEffect } from 'react';
import Scope1Com from './Scope1';
import Scope2Com from './Scope2';
import { Appbar } from 'Components';
import { Context } from 'Context';

// TODO : refactor all the scope 1,2,3 code
export default function DataMonitor() {
  const { setHead } = useContext(Context);
  useEffect(() => {
    setHead?.(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Prediction Model /{' '}
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          AI Models
        </span>
      </p>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <Grid
        item
        xs={12}
        style={{
          textAlign: 'center',
          height: '50px',
          color: 'black',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        AI Prediction Models
      </Grid> */}
      <Appbar
        components={[
          <Scope1Com />,
          <Scope2Com />,
          // <Scope3Com/>
        ]}
        labels={[<>Scope 1</>, <>Scope 2</>]}
      />
    </div>
  );
}
