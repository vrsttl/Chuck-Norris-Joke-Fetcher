import * as _ from 'lodash';
import * as React from 'react';

class EmailList extends React.Component<{ emails: string[]; }> {
  public render(): JSX.Element[] {
    const { emails } = this.props;
    const emailObjects: object[] = [];
    emails.map(email => {
      const addressBuffer = email.split('@');
      emailObjects.push({
        'domain': addressBuffer[1],
        'name': addressBuffer[0],
      }
      );
    });
    const sortedEmails: any[] = _.sortBy(emailObjects, ['domain', 'name']);
    const newEmails: string[] = [];
    sortedEmails.forEach(email => {
      newEmails.push(`${email.name}@${email.domain}`);
    })
    return (
      newEmails.map((element, index) => {
        return <div className="email-display" key={index}>{element}</div>
      })
    );
  }
}

export default EmailList;