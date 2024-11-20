import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ContactView from '@/views/ContactView.vue';

describe('Contact.vue', () => {
    it('matches the snapshot', () => {
      const wrapper = mount(ContactView);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });