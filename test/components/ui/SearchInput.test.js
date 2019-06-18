import React from 'react';
import { shallow } from 'enzyme';
import { SearchInput } from '../../../src/ui/SearchInput';
import { SearchStyled, InputStyled } from '../../../src/ui/SearchInput/styled';

it('render SearchInput', () => {
  const SearchInputComponent = shallow(<SearchInput />);
  expect(SearchInputComponent.find(SearchStyled)).toMatchSnapshot();
});

it('InputStyled should contain "placeholder" not empty', () => {
  const SearchInputComponent = shallow(<SearchInput />);
  expect(SearchInputComponent.find(InputStyled).prop('placeholder')).not.toBe('');
});
