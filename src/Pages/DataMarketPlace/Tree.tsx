import React from 'react';
import { nodes } from './Data';
import Xarrow, { Xwrapper } from 'react-xarrows';

// const boxStyle = {
//   border: 'grey solid 2px',
//   borderRadius: '10px',
//   padding: '5px',
// };

interface Node {
  name: string;
  children?: Node[];
}

interface PropType {
  item?: Node;
  isRoot: boolean;
}
const RenderTree: React.FC<PropType> = ({ item, isRoot }) => {
  if (!item) return <></>;
  return (
    <Xwrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: !isRoot ? 'flex-start' : 'center',
          alignItems: !isRoot ? 'flex-start' : 'center',
          padding: 10,
        }}
      >
        <div
          style={{
            width: '200px',
            minHeight: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 12,
            borderRadius: 20,
            padding: 10,
            border: '2px solid',
            borderColor: 'blue',
            // marginLeft: 100,
            // background: isRoot ? 'red' : '',
            marginBottom: isRoot ? 40 : 0,
          }}
          id={item.name}
        >
          {item.name}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: !isRoot ? 'column' : 'row',
            marginLeft: 90,
          }}
        >
          {item.children?.map((x, i) => (
            <RenderTree item={x} key={i} isRoot={false} />
          ))}
          {item.children?.map((x, i) => (
            <Xarrow
              headSize={6}
              strokeWidth={2}
              start={item.name}
              end={x.name}
              path={'grid'}
              startAnchor={
                isRoot ? 'auto' : { position: 'bottom', offset: { x: -50 } }
              }
              endAnchor={
                isRoot ? 'auto' : { position: 'left', offset: { x: 0 } }
              }
              lineColor="blue"
            />
          ))}
        </div>
      </div>
    </Xwrapper>
  );
};

export default function Tree() {
  return (
    <div
      style={{
        display: 'inline',
        position: 'relative',
      }}
    >
      {nodes.map((x, i) => (
        <RenderTree item={x} key={i} isRoot={true} />
      ))}
    </div>
  );
}

// import React from 'react'

// export default function Tree() {
//   return <div>Tree</div>
// }
