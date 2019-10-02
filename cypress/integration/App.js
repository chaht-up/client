import faker from 'faker';

it('should send message', () => {
  const message = faker.lorem.sentence(2);

  cy.visit('http://localhost:3000')
    .findByLabelText('chat-input')
    .type(message);

  cy.findByText('Send').click();

  cy.findByText(message);
});
