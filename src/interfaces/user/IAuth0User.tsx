
interface IAuth0User {
  email?: string | undefined;
  email_verified?: boolean | undefined;
  family_name?: string | undefined;
  given_name?: string | undefined;
  locale?: string | undefined;
  name?: string | undefined;
  nickname?: string | undefined;
  picture?: string | undefined;
  sub?: string | undefined;
  updated_at?: string | undefined;
}

export type {
  IAuth0User,
};
