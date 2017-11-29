import { mount } from 'vue-test-utils';
import { expect } from 'chai';
import Counter from '../src/Components/Counter';


describe('TestCounter', () => {
	let counter = mount(Counter);
	it('should return initial value of counter', () => {
		expect(counter.vm.count).to.be.equal(0);
	});
});