describe('App', () => {
  const APP_CONTAINER_SELECTOR = 'data-app-container';

  function createAppRootElement(){
    const element = document.createElement('div');
    element.setAttribute(APP_CONTAINER_SELECTOR, '');
    return element;
  }

  beforeEach(() => {
    document.body.appendChild(createAppRootElement());
    require('./app');
  })

  afterEach(() => {
    document.querySelector(`[${APP_CONTAINER_SELECTOR}]`).remove()
  })

  it('should render homepage', done => {
    setTimeout(() => {
      expect(document.querySelector('h1').textContent).toEqual('Hello World')
      done();
    });
  })
})
