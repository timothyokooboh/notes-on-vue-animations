// test emitted events
/**
 * Sample test description
 * 
 * On button click of the form, component emits an event called "formSubmitted" with
 * payload { name: this.name }
 */

/*
 import LoginForm from '@/components/LoginForm.vue'
 import { mount } from '@vue/test-utils'
 
 describe('LoginForm', () => {
   it('emits an event with a user data payload', () => {
     const wrapper = mount(LoginForm) 
     // 1. Find text input
     // 2. Set value for text input
     // 3. Simulate form submission
     // 4. Assert event has been emitted
     // 5. Assert payload is correct
   })
 })

 */


 /*

import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]') // Find text input

    input.setValue('Adam Jahr') // Set value for text input
    wrapper.trigger('submit') // Simulate form submission

    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // Assert payload is correct
    const expectedPayload = { name: 'Adam Jahr' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})
 */