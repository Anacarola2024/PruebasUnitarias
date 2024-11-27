import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ContactView from '@/views/ContactView.vue';

describe('ContactView.vue', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(ContactView, {
      props: {
        title: 'Contact Us',
        description: 'This is the contact page.'
      }
    });

    // Comparar el HTML del componente con el snapshot guardado
    expect(wrapper.html()).toMatchSnapshot();
  });
});