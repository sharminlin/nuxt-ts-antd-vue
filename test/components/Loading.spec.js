import { mount } from '@vue/test-utils'
import Loading from '~/components/UI/Loading/index.vue'

describe('Loading', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Loading)
    expect(wrapper.vm).toBeTruthy()
  })
})
