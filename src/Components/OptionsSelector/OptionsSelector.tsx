import React from 'react';
import { Child, Container, Option, Square } from './style';

interface OptionType {
  name: string;
  children?: OptionType[];
}

interface Proptypes {
  options?: OptionType[];
  selected: string[];
  onSelect?: (option: string) => void;
}

const OptionsSelector: React.FC<Proptypes> = ({
  options,
  selected,
  onSelect,
}) => {
  return options ? (
    <Container>
      {options?.map((x, i) => (
        <Option key={i}>
          <p> {x['name']} </p>
          {x.children?.map((y, j) => (
            <Child key={j}>
              <Square
                selected={selected.some((s) => s === y.name)}
                onClick={() => onSelect?.(y.name)}
              />
              <p>{y.name}</p>
            </Child>
          ))}
        </Option>
      ))}
    </Container>
  ) : (
    <></>
  );
};

export default OptionsSelector;
