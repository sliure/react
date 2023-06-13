export const showUserFullName = (user) => {
  return user ? `${user.name} ${user.surname}` : "";
};

export const checkUserCredentials = (users, checkingUser) => {
  return users.find(
    (user) =>
      user.email === checkingUser.email &&
      user.password === checkingUser.password
  );
};
