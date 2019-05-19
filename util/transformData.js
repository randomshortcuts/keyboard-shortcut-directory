const parseShortcut = require('./parseShortcut');

function transformData(data) {
  return {
    program: data.program,
    groups: data.groups.map(group => {
      return {
        title: group.group,
        shortcuts: group.shortcuts.map(shortcut => {
          return {
            command: shortcut.command,
            steps: parseShortcut(shortcut.shortcut)
          }
        })
      }
    })
  }
}

module.exports = transformData;