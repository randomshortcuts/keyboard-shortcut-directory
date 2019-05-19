const isInstructional = require('./isInstructional');

const VALUE_MAP = {
  '+': '+',
  '-': 'through',
  '/': 'or'
}

const ABBREVIATION_MAP = { 
  cmd: 'command',
  ctrl: 'control',
  opt: 'option',
  ret: 'return',
  esc: 'escape',
  del: 'delete',
  ent: 'enter',
  pgdown: 'page down',
  pgup: 'page up',
};

const REGEX = {
  INSTRUCTIONAL_SYMBOL: new RegExp(/(\+|\/|\-)/),
  OPEN_OR_CLOSED_PARENS: new RegExp(/\(|\)/, 'g'),
  SPACES_OUTSIDE_OF_PARENS: new RegExp(/( )+(?![^\(]*\))/, 'g')
}

function parseShortcut(shortcut) {
  const splitShortcut = shortcut.split(REGEX['SPACES_OUTSIDE_OF_PARENS']);
  return splitShortcut // Split by spaces, excluding spaces within parens (instructions)
    .reduce((parsedShortcut, section, index) => {
      // Handle "then" spaces. Exclude spaces if adjacent to paren instructions
      if (section == " ") {
        if (isInstructional(splitShortcut[index - 1]) || isInstructional(splitShortcut[index + 1])) {
          return parsedShortcut;
        }
        parsedShortcut.push({
          type: 'instruction',
          value: 'then'
        });
        return parsedShortcut;
      }

      // Handle Instructions
      if (isInstructional(section)) {
        parsedShortcut.push({
          type: 'instruction',
          value: section.replace(REGEX['OPEN_OR_CLOSED_PARENS'], '') // Remove parens
        });
        return parsedShortcut;
      }
      
      // Go through everything else 
      const splitCommand = section
        .split(REGEX['INSTRUCTIONAL_SYMBOL'])
        .filter(string => string != '');

      splitCommand.forEach((string, index) => {
        if (string.length == 1 && REGEX['INSTRUCTIONAL_SYMBOL'].test(string)) {
          // Handle when special instruction symbol (+,-,/) is supposed to be a key
          // Either if it's the only key in the command, or its preceded by a +
          if (splitCommand[index - 1] == "+" || splitCommand.length == 1) {
            parsedShortcut.push({
              type: 'key',
              value: string
            });
            return;
          }

          // Handle instructional symbols
          parsedShortcut.push({
            type: 'instruction',
            value: VALUE_MAP[string]
          });
        } else {
          // Handle keys
          parsedShortcut.push({
            type: 'key',
            value: ABBREVIATION_MAP[string] || string
          });
        }
      });

      return parsedShortcut;
    }, []);
}

module.exports = parseShortcut;