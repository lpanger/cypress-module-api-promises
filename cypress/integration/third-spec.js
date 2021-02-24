/// <reference types="cypress" />
describe('third feature', () => {
  it('works', (done) => {
	setTimeout(() => {
		console.log('third');
		done();
	}, 1000);
  })
})
