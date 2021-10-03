### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

A Json Web Token 

- What is the signature portion of the JWT?  What does it do?

The part of the token that validates it crytographically

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.

Have the JWT stored in as a header and allow it to be deciphered to get account information

- Compare and contrast unit, integration and end-to-end tests.

Unit testing is testing small individual bits of code as single units. Good for testing particular pieces when lots will rely on them. Good at finding edge cases at lower levels. Itegration testing tests how particular modules interact together. This can include catching backend errors between modules/functions/etc. End to end testing consists of testing/modeling the users entire experience, and can often include lots of front end errors and issues.

- What is a mock? What are some things you would mock?

A mock is a made up example of a way a real function might behave (for instance, if you need to test that a function gives back half of a random number, the mock might always throw the random number as x)

- What is continuous integration?

Continuous integration is the act of constantly updating an app as soon as a new feature or thing is done and tested. It means you don't do
huge rollouts of upgrades.

- What is an environment variable and what are they used for?

Environment variables are things that are assigned to your computers particular environment. For instance:
api keys, secret passwords, bcrypt work factors, etc. They are used for information particular to your box

- What is TDD? What are some benefits and drawbacks?

Test driven development is writing tests first and coding to meet those tests. Benefits are you know it is already tested,
drawback is that it can lead you into tunnelvision

- What is the value of using JSONSchema for validation?

It allows you to have a standardized method of input validation, and it also removes problem inputs very early

- What are some ways to decide which code to test?

You should test as much code as you can, but particularly stuff that users will interact with and stuff that is used by other pieces

- What does `RETURNING` do in SQL? When would you use it?

It returns particular information from what you've interacted with and can also rename that information. A good usage is to return "num_employees" AS "numEmployees"

- What are some differences between Web Sockets and HTTP?

Web sockets allow both sides to initiate communications, not just the client to the server. Web sockets are harder to re-establish connections.
Web sockets are newer and only supported on somewhat newer browsers. Web sockets keep the connection consisten, not just send/receive like http.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I generally much preferred flask and python because they are so much more streamlined and simple than JS. I will say, it does seem to me that express and js are more powerful and functional for web-dev
