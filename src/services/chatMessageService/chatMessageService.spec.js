import { ChatMessageService } from './index.js';


describe('Chat Message Service', () => {

  let service;

  beforeEach(() => {
    service = ChatMessageService([])
  });

  it('should add messages', async () => {

    expect(await service.getMessages()).toHaveLength(0);

    const content = 'blah!';
    await service.submitMessage(content);

    expect(await service.getMessages()).toHaveLength(1);

    const messages = await service.getMessages();
    expect(messages[0].content).toEqual(content);
  });

});
