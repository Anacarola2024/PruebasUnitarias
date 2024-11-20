import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AboutView from '@/views/AboutView.vue';

describe('about.vue', () => {
    it('matches the snapshot', () => {
      const wrapper = mount(AboutView);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });