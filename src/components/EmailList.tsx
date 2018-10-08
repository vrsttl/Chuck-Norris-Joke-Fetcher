import * as React from 'react';

class EmailList extends React.Component<{ emails: string[]; }> {
  public render(): JSX.Element[] {
    const { emails } = this.props;
    const emailObjects: object[] = [];
    // const domainVar = 'dmn';
    // const nameVar = 'nm';
    emails.map(email => {
      const addressBuffer = email.split('@');
      emailObjects.push({
        'dmn': addressBuffer[1],
        'nm': addressBuffer[0],
      }
      );
    })
    console.log('before', emailObjects); // tslint:disable-line

    if (emailObjects.length > 1) {
      const newObjects = emailObjects.sort((a, b): number => a['dmn'] - b['dmn'] || a['nm'] - b['nm']);// tslint:disable-line 
      console.log('after', newObjects); // tslint:disable-line
    }

    return (
      emails.map((element: string, index: number) => {
        return <div className="email-display" key={index}>{element}</div>
      })
    );
  }
}

export default EmailList;