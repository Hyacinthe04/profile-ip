import { Profile } from './profile';

describe('Profile', () => {
  it('should create an instance', () => {
    expect (new Profile("","",0,0,0,"","")).toBeTruthy();
  });
});
