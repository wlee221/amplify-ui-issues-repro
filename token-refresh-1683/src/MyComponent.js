import { useAuthenticator } from "@aws-amplify/ui-react";

const MyComponent = () => {
  const { user, signOut } = useAuthenticator(context => [context.user]);
  // Here user cannot be used because its not authenticated
  user.getUserData(console.log);
  return (
    <>
      {user.attributes.email}
      <button onClick={() => user.getUserData(console.error)}>
        Get user data
      </button>
      <button onClick={() => console.log(user.attributes)}>
        Get user attribute
      </button>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
};

export default MyComponent;
