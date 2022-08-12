import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { BoxContainer } from './style'

function a11yProps(index: number) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  }
}
interface PropType {
  labels: React.ReactNode[]
  components: React.ReactNode[]
}

const Appbar: React.FC<PropType> = ({
  labels = ['Scope 1', 'Scope 2', 'Scope 3'],
  components = [<>Scope 1</>, <> Scope 2 </>, <> Scope 3 </>],
}) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: number) => setValue(newValue)

  return (
    <>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            display: 'inline-block',
          }}
        >
          {labels.map((item, pos) => (
            <Tab
              label={item}
              {...a11yProps(pos)}
              key={pos}
              sx={{
                minWidth: 200,
              }}
            />
          ))}
        </Tabs>
      </div>
      <SwipeableViews
        index={value}
        animateTransitions={true}
        style={{
          flexGrow: 1,
          height: '100%',
        }}
      >
        {components.map((item, pos) => (
          <BoxContainer key={pos}>{item}</BoxContainer>
        ))}
      </SwipeableViews>
    </>
  )
}
export default Appbar
