import * as React from 'react';
import EmailList from '../components/EmailList';

class ChuckJokes extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentEmail: '',
      emails: [],
    };
  };

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

  public render(): JSX.Element {
    {/*   tslint:disable-next-line  */ }
    console.log(this.state);
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
      </div>
    )
  }
}

interface IState {
  currentEmail: string;
  emails: string[];
}

export default ChuckJokes;