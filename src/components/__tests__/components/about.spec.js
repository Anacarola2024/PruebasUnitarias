import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(AboutView, {
      props: {
        msg: 'about',
        message: 'This is an about page.'
      }
    });

    // Comparar el HTML del componente con el snapshot guardado
    expect(wrapper.html()).toMatchSnapshot();
  });
});
