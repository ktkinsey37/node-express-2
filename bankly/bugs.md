- BUG #1: /auth/login route doesn't await User.authenticate, so can't authenticate admins  **FIXED

- BUG #2: JWT injection attack is possible. **SUPPOSEDLY FIXED BUT IT SEEMS LIKE IM HAVING SOME PROBLEMS

- BUG #3: You can change password and admin fields in the /patch route  **FIXED

- BUG #4: /patch returns the hashed password, this is a serious security problem if someone ever gets admin access **FIXED

- BUG #5: get /users route returns more info than is requested.

