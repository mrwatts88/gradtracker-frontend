import { authenticationService } from './';

describe('authenticationService', () => {
    it('can call getCurrentUser', () => {
        authenticationService.getCurrentUser('testUser');
    });
});
