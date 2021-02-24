/// <reference types="cypress" />
describe('second feature', () => {
  // empty second test
  it('works', (done) => {
	setTimeout(() => {
		console.log('second');
		done();
	}, 2000);
  })
})
