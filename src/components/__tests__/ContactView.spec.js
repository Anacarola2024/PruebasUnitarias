import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
    it('renders the Contact page correctly', () => {
      const wrapper = mount(ContactView);
      expect(wrapper.text()).toContain('Contact');
      expect(wrapper.text()).toContain('This is a Contact page');
    });
  });