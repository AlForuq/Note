import React from 'react'
import { Icon, InputTag, Wrapper } from './style'

export const Input = ({ onSearch, placeholder }) => {
  return (
    <Wrapper>
      <Icon />
      <InputTag
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
    </Wrapper>
  );
};
