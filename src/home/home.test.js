import { mount } from '@vue/test-utils';
import { home } from './home';

describe('Home', () => {
  it('should contain a headline', () => {
    const wrapper = mount(home);
    expect(wrapper.find('h1').text()).toEqual('Hello World');
  });
});
