import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import HelloWorld from '@/components/Foo.vue';
import { VueConstructor } from 'vue';
import Vuetify from 'vuetify';

describe('Foo.vue', () => {
  let localVue: VueConstructor;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
  });

  it('testA', () => {
    const name = 'bar';
    const wrapper = mount(HelloWorld, {
      localVue,
      propsData: { name },
    });
    expect(wrapper.find('.v-btn').text()).toMatch(name);
  });

  it('testB', () => {
    const name = 'bar';
    const wrapper = mount(HelloWorld, {
      localVue,
      propsData: { name },
    });
    expect(wrapper.find('.v-btn').text()).toMatch(name);
  });
});
