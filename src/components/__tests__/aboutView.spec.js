import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
    it('renders the About page correctly', () => {
      const wrapper = mount(AboutView);
      
      expect(wrapper.text()).toContain('This is an about page.');
    });
  });