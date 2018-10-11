import * as _ from 'lodash';
import * as React from 'react';

const EmailList: React.SFC<{ emails: string[]; }> = props => {
  const { emails } = props;
  const emailObjects: Array<{ domain: string, name: string }> = [];
  emails.map(email => {
    const addressBuffer = email.split('@');
    emailObjects.push({
      'domain': addressBuffer[1],
      'name': addressBuffer[0],
    }
    );
  });
  const sortedEmails: Array<{ domain: string, name: string }> = _.sortBy(emailObjects, ['domain', 'name']);
  const newEmails: string[] = [];
  sortedEmails.forEach(email => {
    newEmails.push(`${email.name}@${email.domain}`);
  })

  return (
    <div className="email-cont">
      {newEmails.length < 1 ?
        <h1 className="nodata-display">No email addresses given!</h1> :
        newEmails.map((element, index) => {
          return (
            <div
              className="email-display"
              key={index}>{element}
            </div>
          )
        }
        )}
    </div>
  );
}

export default EmailList;
