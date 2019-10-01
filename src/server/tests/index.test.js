import router from '../index';

const routes = ['concatenate', 'mathematics', 'auth'];

describe('Index file', () => {
    const stacks = router.stack.map(el => el.regexp.toString().match(/\w+/)[0]);

    it('should attach the routes', () => {
        stacks.forEach(el => expect(routes.includes(el)).toBeTruthy());
    });
});
