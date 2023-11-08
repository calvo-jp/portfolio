import {capitalize} from './capitalize';

describe('capitalize', () => {
	it('should capitalize words', () => {
		expect(capitalize('john paul calvo')).toEqual('John Paul Calvo');
	});
});
