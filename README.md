# Chuck-Norris-Joke-Fetcher

This is a working prototype.

# Issues I ran into:

https://stackoverflow.com/questions/52723958/react-typescript-broke-overnight-all-declarations-of-value-must-have-iden

I removed @types/es6-shim and it works now.

In the backend application's nodemailer transport ethereal.email seems to not work when login credentials are pulled from .env. For this reason it is hardcoded until I figure out what's wrong. I know for a fact that nodemailer with the Mailgun transport does work from .env so why this happens is beyond me. Also, dotenv in React+TS without Webpack is a challenge for me at this point, so I'll get back to that later.

I could not create an SFC from EmailList, it seemed to not be able to handle the varying types of returns.

Otherwise, the application works as expected. Please note that the emails are mocked and can be accessed on ethereal.email with the login/pass in the backend code.

I have submitted the code for review to multiple programmers and as soon as I get feedback, I'll get to refactoring what might be clunky.

# Re: ts-lint:disable-line no lambda:

https://github.com/palantir/tslint-react/issues/96

I couldn't figure out a way to circumvent this issue. I doubt that lambda referencing reduces performance at this scale, so I'll just leave that be for now.
