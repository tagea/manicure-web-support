import React from 'react';
import { SearchStyled, SearchIconStyled, InputStyled } from './styled';

const SearchInput = () => (
  <SearchStyled>
    <InputStyled placeholder="Search…" />
    <SearchIconStyled />
  </SearchStyled>
);

export { SearchInput };
