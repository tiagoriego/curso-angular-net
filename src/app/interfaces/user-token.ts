export interface AccessToken {
  accessToken: string;
  user: User;
}

export interface User {
  email: string;
  name: string;
  roles: string[];
  id: number;
}
