module.exports = {
  adapter: { name: 'shell' },
  nlu: {
    name: 'botfuel',
    qna: {
      when: 'before',
    },
  },
  logger: 'info',
};
