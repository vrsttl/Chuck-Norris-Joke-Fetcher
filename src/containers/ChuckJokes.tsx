import * as React from 'react';
import EmailList from '../components/EmailList';

class ChuckJokes extends React.Component<{}, IState> {
  public state = {
    currentEmail: '',
    emails: [],
  };

  public async handleSend(e: React.SyntheticEvent<EventTarget>): Promise<string> {
    e.preventDefault();
    const currentJoke: Promise<string> = await this.fetchJoke('http://api.icndb.com/jokes/random');
    console.log('currentjoke', currentJoke)// tslint:disable-line
    const sendData = {
      currentJoke: {currentJoke},
      emails: this.state.emails,
    }
    return this.postData('http://localhost:3030', sendData);
  }

  public addEmail(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({
      currentEmail: '',
      emails: [
        ...this.state.emails,
        this.state.currentEmail
      ],
    })
  }

  private fetchJoke(url: string): any {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.value.joke)//tslint:disable-line
        return data.value.joke;
      })
      .catch(error => console.error('Error:', error));//tslint:disable-line
  }

  private postData(url: string, data: object): Promise<string> {
    console.log('data', data); //tslint:disable-line
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
        console.log('response', resp)//tslint:disable-line
        return resp;
      })
      .catch(err => err);
  }

  public render(): JSX.Element {
    return (
      <div>
        {/*   tslint:disable-next-line  */}
        <form onSubmit={e => this.addEmail(e)}>
          <input
            type='email'
            className='email-input'
            onChange={e => this.setState({ currentEmail: e.target.value })} // tslint:disable-line
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
        <EmailList emails={this.state.emails} />
        <button
          type='submit'
          onClick={e => this.handleSend(e)}//tslint:disable-line
        >Get a Chuck Norris joke sent to all these emails if you dare.
          </button>
      </div >
    )
  }
}

interface IState {
  currentEmail: string;
  emails: string[];
}

export default ChuckJokes;