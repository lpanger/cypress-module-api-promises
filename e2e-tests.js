// runs Cypress end-to-end tests using Cypress Node module API
// https://on.cypress.io/module-api

/* eslint-disable no-console */

const cypress = require('cypress')
const globby = require('globby')
const Promise = require('bluebird')

const runOneSpec = (spec) => {
	return cypress.run({
		config: {
			video: false,
		},
		spec: spec.filename,
	})
}

const promises = [];
globby('./cypress/integration/*-spec.js')
.then((specs) => {
	console.table('Running last modified spec first', specs)

	specs.forEach((spec) => {
		promises.push(runOneSpec(spec));
	});

	Promise.all(promises)
		.then((results) => {
			console.log('ALL DONE');
			results.forEach((result, index) => {
				console.log(`index ${index}`);
				if (result.status === 'failed') {
					console.log("thread did not finish", result);
				}
				else {
					console.log("ok");
				}
			});

			process.exit();
		});
});