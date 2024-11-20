import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HomeView from '@/views/HomeView.vue';

describe('Home.vue', () => {
    it('matches the snapshot', () => {
      const wrapper = mount(HomeView);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });