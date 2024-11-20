import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PostView from '@/views/PostView.vue';

describe('PostView.vue', () => {
  it('renders the post page correctly', () => {
    const wrapper = mount(PostView);
    expect(wrapper.text()).toContain('Post');
    expect(wrapper.text()).toContain('Posts');
  });
});