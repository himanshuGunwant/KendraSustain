import React, { useContext, useEffect } from 'react';
import { Appbar } from 'Components';
import { Context } from 'Context';
import { ScopeOne } from './ScopeOne';
import { ScopeTwo } from './ScopeTwo';
import { ScopeThree } from './ScopeThree';
export default function Asset() {
  const { user, setHead } = useContext(Context);
  useEffect(() => {
    setHead?.(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Assets /{' '}
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          Measure
        </span>
      </p>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user && (
      <div>
        <Appbar
          components={[<ScopeOne />, <ScopeTwo />, <ScopeThree />]}
          labels={
            user.id === 66
              ? [<>Scope 1</>, <>Scope 2</>, <>Scope 3</>]
              : user.id === 71
              ? [<>Scope 1</>, <>Scope 2</>]
              : []
          }
        />
      </div>
    )
  );
}
