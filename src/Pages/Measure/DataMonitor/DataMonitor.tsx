import { useEffect, useContext } from 'react';
import { Appbar } from 'Components';
import { Context } from 'Context';
import ScopeOne from './ScopeOne';
import ScopeTwo from './ScopeTwo';
import ScopeThree, { CloudCarbon } from './ScopeThree';

const DataMonitor = () => {
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
          Data Monitor
        </span>
      </p>,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user && (
      <Appbar
        components={
          user.id === 66
            ? [<ScopeOne />, <ScopeTwo />, <ScopeThree />, <CloudCarbon />]
            : user.id === 71
            ? [<ScopeOne />, <ScopeTwo />, <CloudCarbon />]
            : []
        }
        labels={[<>Scope 1</>, <>Scope 2</>, <>Scope 3</>]}
      />
    )
  );
};
export default DataMonitor;
