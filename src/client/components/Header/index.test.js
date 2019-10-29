import React from 'react';
import { Header } from '.';
import { shallow } from 'enzyme';
import { Layout } from 'antd';
const { Header: AntdHeader } = Layout;

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders', () => {
    expect(component.find(AntdHeader).length).toEqual(1);
  });
});
