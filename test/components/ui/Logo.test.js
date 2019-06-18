import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '../../../src/ui/Logo';
import {
  LogoStyled,
  ImgStyled,
  TopHeaderStyled,
  SubHeaderStyled
} from '../../../src/ui/Logo/styled';

it('render Logo styled-component with', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(LogoStyled)).toMatchSnapshot();
});

it('should render Logo with justify=center', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(LogoStyled).prop('justify')).toBe('center');
});

it('should render Logo with alignItems=center', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(LogoStyled).prop('alignItems')).toBe('center');
});

it('should render Logo with spacing=8', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(LogoStyled).prop('spacing')).toBe(8);
});

it('should render ImgStyled with not empty prop src', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(ImgStyled).prop('src')).not.toEqual('');
});

it('should render ImgStyled with not empty prop alt', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(ImgStyled).prop('alt')).not.toEqual('');
});

it('should render ImgStyled with not empty prop Width', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(ImgStyled).prop('width')).not.toEqual('');
});

it('should render ImgStyled with not empty prop Height', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(ImgStyled).prop('height')).not.toEqual('');
});

it('should render TopHeaderStyled with variant=h3', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(TopHeaderStyled).prop('variant')).toBe('h3');
});

it('should render TopHeaderStyled with align = |left|right|center', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(TopHeaderStyled).prop('align')).toMatch(/left|center|right/);
});

it('should render TopHeaderStyled with text', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(TopHeaderStyled).text().length).toBeGreaterThan(2);
});

it('should render SubHeaderStyled with variant=h3', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(SubHeaderStyled).prop('variant')).toBe('h4');
});

it('should render SubHeaderStyled with align = |left|right|center', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(SubHeaderStyled).prop('align')).toMatch(/left|center|right/);
});

it('should render SubHeaderStyled with text', () => {
  const LogoComponent = shallow(<Logo />);
  expect(LogoComponent.find(SubHeaderStyled).text().length).toBeGreaterThan(2);
});
