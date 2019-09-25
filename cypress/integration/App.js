import uuidv4 from 'uuid';

it('should send message', () => {
  const message = uuidv4();

  cy.visit('http://localhost:3000')
    .findByLabelText('chat-input')
    .type(message);

  cy.findByText('Send').click();

  cy.findByText(message);
});
