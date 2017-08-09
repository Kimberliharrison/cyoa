import React from 'react';
import { shallow } from 'enzyme';

import User from './User';

test(`User component renders London`, () => {
  const wrapper = shallow(
    <User />);
  expect(wrapper.text()).toMatch(/London/);

});
