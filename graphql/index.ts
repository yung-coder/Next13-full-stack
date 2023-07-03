export const getUserQuery = ` 
  query GetUser($email: String) {
  user(by: {email: $email}) {
    name
    email
    avatarUrl
    githuburl
    description
    linkedInUrl
  }
} 
`;

export const createUserMutation = ` 
   mutation CreateUser($input: UserCreateInput!) {
  userCreate(input: {input: $input}) {
    user {
      name
      email
      avatarUrl
      description
      githuburl
      linkedInUrl
    }
  }
} 
`;
