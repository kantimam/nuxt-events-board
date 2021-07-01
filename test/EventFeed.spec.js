import { mount } from '@vue/test-utils'
import EventFeed from '@/components/EventFeed.vue'
import EventItem from '@/components/EventItem.vue'
import { expect } from '@jest/globals'

describe('EventFeed', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(EventFeed)
    expect(wrapper.vm).toBeTruthy()
  })

  test('should render 0 EventItems when passing no props', () => {
    const wrapper = mount(EventFeed)
    expect(wrapper.findComponent(EventItem).exists()).toBeFalsy()
  })

  test('should render EventItems when passing array with 2 events', () => {
    const wrapper = mount(EventFeed, {
      propsData: {
        events: [
          { id: 1, title: 'first' },
          { id: 2, title: 'second' },
        ],
      },
    })
    expect(wrapper.findComponent(EventItem).exists()).toBeTruthy()
  })

  test('should render 2 EventItems when passing array with 2 events', () => {
    const wrapper = mount(EventFeed, {
      propsData: {
        events: [
          { id: 1, title: 'first' },
          { id: 2, title: 'second' },
        ],
      },
    })
    expect(wrapper.findAllComponents(EventItem)).toHaveLength(2)
  })
})
