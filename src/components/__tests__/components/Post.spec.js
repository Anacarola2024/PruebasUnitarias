import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PostView from '@/views/PostView.vue';

describe('Post.vue', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(PostView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
