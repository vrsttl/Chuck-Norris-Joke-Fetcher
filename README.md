# Chuck-Norris-Joke-Fetcher

# Issues I ran into:

https://stackoverflow.com/questions/52723958/react-typescript-broke-overnight-all-declarations-of-value-must-have-iden

I removed @types/es6-shim and it works now.

In the backend application's nodemailer transport ethereal.email seems to not work when login credentials are pulled from .env. For this reason it is hardcoded until I figure out what's wrong. I know for a fact that nodemailer with the Mailgun transport does work from .env so why this happens is beyond me.

I could not create an SFC from EmailList, it seemed to not be able to handle the varying types of returns.

Otherwise, the application works as expected. Please note that the emails are mocked and can be accessed on ethereal.email with the login/pass in the backend code.

I have submitted the code for review to multiple programmers and as soon as I get feedback, I'll get to refactoring what might be clunky.
