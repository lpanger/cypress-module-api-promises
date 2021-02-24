/// <reference types="cypress" />
describe('first feature', () => {
  it('works', (done) => {
    setTimeout(() => {
	    console.log('first');
	    done();
    }, 6000);
  })
})
