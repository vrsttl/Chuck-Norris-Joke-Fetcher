import * as React from 'react';
import EmailList from '../components/EmailList';
import '../styles/ChuckJokes.css';

class ChuckJokes extends React.Component<{}, IState> {
  public state = {
    currentEmail: '',
    emails: [],
  };

  public async handleSend(e: React.SyntheticEvent<EventTarget>): Promise<string> {
    e.preventDefault();
    const { emails } = this.state;
    if (emails.length) {
      const jokeAPI: string = 'http://api.icndb.com/jokes/random';
      const currentJoke: Promise<string> = await this.fetchJoke(jokeAPI);
      const sendData: { currentJoke: object, emails: string[] } = {
        currentJoke: { currentJoke },
        emails,
      }
      this.setState({
        ...this.state,
        emails: [],
      })
      const resp: any = await this.postData('http://localhost:3030', sendData);
      if (resp.result === 'OK') {
        alert('A Chuck Norris joke has been sent to the specified email addresses.');
        return resp;
      } else {
        alert('Something went wrong. Please try starting the server.');
        return '';
      }
    } else {
      alert('There\'s no email to send the joke to.');
      return '';
    }
  }

  public addEmail(e: React.FormEvent<HTMLFormElement>): void {
    const { currentEmail } = this.state;
    e.preventDefault();
    if (currentEmail.length) {
      this.setState({
        currentEmail: '',
        emails: [
          ...this.state.emails,
          currentEmail,
        ],
      })
    } else {
      alert('Please add an email address before trying to save it :)');
    }
  }

  public render(): JSX.Element {
    return (
      <div className='wrapper'>
        {/*   tslint:disable-next-line jsx-no-lambda */}
        <form className='email-form' onSubmit={e => this.addEmail(e)}>
          <input
            type='email'
            className='email-input'
            onChange={e => this.setState({ currentEmail: e.target.value })} // tslint:disable-line jsx-no-lambda
            value={this.state.currentEmail}
            placeholder='Enter your email address here...'
          />
          <button
            type='submit'
            className='add-email'
          >
            Add email...
          </button>
        </form>
        <EmailList
          emails={this.state.emails}
        />
        <button
          className='send-button'
          type='submit'
          onClick={e => this.handleSend(e)} // tslint:disable-line jsx-no-lambda
        >Get a Chuck Norris joke sent to all these emails if you dare.
          </button>
      </div >
    )
  }

  private fetchJoke(url: string): any {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.value.joke;
      })
      .catch(error => console.error('Error:', error));//tslint:disable-line
  }

  private postData(url: string, data: { emails: string[], currentJoke: any }): Promise<string> {
    return fetch(url, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "POST",
      mode: "cors",
    })
      .then(response => response.json())
      .then(resp => {
        return resp;
      })
      .catch(err => err);
  }
}

interface IState {
  currentEmail: string;
  emails: string[];
}

export default ChuckJokes;
