import { IAuth0User } from 'interfaces/user/IAuth0User';
import { IUserProfile } from 'interfaces/user/IUserProfile';

interface IUserDetails {
  user: IAuth0User;
  profile: IUserProfile;
}

export type {
  IUserDetails,
};