const parseShortcut = require('../util/parseShortcut');

test('converts basic key combos correctly', () => {
  expect(parseShortcut('cmd++')).toEqual([{
      type: 'key',
      value: 'command'
    },
    {
      type: 'instruction',
      value: '+'
    },
    {
      type: 'key',
      value: '+'
    }
  ]);

  expect(parseShortcut('cmd+space')).toEqual([{
      type: 'key',
      value: 'command'
    },
    {
      type: 'instruction',
      value: '+'
    },
    {
      type: 'key',
      value: 'space'
    }
  ]);

  expect(parseShortcut('-')).toEqual([{
      type: 'key',
      value: '-'
    }
  ]);


});

test('converts spaces to "then" correctly', () => {
  expect(parseShortcut('g p')).toEqual([{
      type: 'key',
      value: 'g'
    },
    {
      type: 'instruction',
      value: 'then'
    },
    {
      type: 'key',
      value: 'p'
    },
  ]);
});

test('converts - to "through" correctly', () => {
  expect(parseShortcut('cmd+1-4')).toEqual([{
      type: 'key',
      value: 'command'
    },
    {
      type: 'instruction',
      value: '+'
    },
    {
      type: 'key',
      value: '1'
    },
    {
      type: 'instruction',
      value: 'through'
    },
    {
      type: 'key',
      value: '4'
    },
  ]);
});

test('converts / to "or" correctly', () => {
  expect(parseShortcut('cmd+4/f3')).toEqual([{
      type: 'key',
      value: 'command'
    },
    {
      type: 'instruction',
      value: '+'
    },
    {
      type: 'key',
      value: '4'
    },
    {
      type: 'instruction',
      value: 'or'
    },
    {
      type: 'key',
      value: 'f3'
    },
  ]);
});

test('does not convert space to them if followed by instruction', () => {
  expect(parseShortcut('g (then go to the mall)')).toEqual([{
    type: 'key',
    value: 'g'
  },
  {
    type: 'instruction',
    value: 'then go to the mall'
  }])
});

test('does not convert space to them if preceded by instruction', () => {
  expect(parseShortcut('(move the mouse then press) enter')).toEqual([{
    type: 'instruction',
    value: 'move the mouse then press'
  },
  {
    type: 'key',
    value: 'enter'
  }])
});

test('does not convert instructional keys if they are used in shortcuts', () => {
  expect(parseShortcut('cmd++')).toEqual([{
    type: 'key',
    value: 'command'
  },
  {
    type: 'instruction',
    value: '+'
  },
  {
    type: 'key',
    value: '+'
  }]);

  expect(parseShortcut('cmd+/')).toEqual([{
    type: 'key',
    value: 'command'
  },
  {
    type: 'instruction',
    value: '+'
  },
  {
    type: 'key',
    value: '/'
  }]);

  expect(parseShortcut('cmd+-')).toEqual([{
    type: 'key',
    value: 'command'
  },
  {
    type: 'instruction',
    value: '+'
  },
  {
    type: 'key',
    value: '-'
  }]);

  expect(parseShortcut('ctrl+a')).toEqual([{
    type: 'key',
    value: 'control'
  },
  {
    type: 'instruction',
    value: '+'
  },
  {
    type: 'key',
    value: 'a'
  }]);
});

test('is not affected by regex global state', () => {
  // see https://stackoverflow.com/q/2630418/1369063
  expect(parseShortcut('right/down/left/up')).toEqual([{
    type: 'key',
    value: 'right'
  },
  {
    type: 'instruction',
    value: 'or'
  },
  {
    type: 'key',
    value: 'down'
  },{
    type: 'instruction',
    value: 'or'
  },
  {
    type: 'key',
    value: 'left'
  },{
    type: 'instruction',
    value: 'or'
  },
  {
    type: 'key',
    value: 'up'
  }])
})
