import Home from './Home.vue'

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const { element } = shallowMount(Home)
    expect(element.textContent).toContain('Home Page')
  })
})
