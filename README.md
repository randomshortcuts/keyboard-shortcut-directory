# Keyboard Shortcuts

A JSON directory of keyboard shortcuts, written in a consistent syntax.

### Why?

Used to power cmdspace.io

## Formatting

keyboard-shortcuts uses a standardized, abbreviated format so that shortcuts are easy to type. All characters should be lowercase.

Shortcuts are organized into groups.

### Keys

| Abbreviation | Meaning |
| ------------- | ---------- |
| cmd           | command    |
| ctrl          | control    |
| opt           | option     |
| shift         | shift      |
| alt           | alt        |
| ret           | return     |
| esc           | escape     |
| del           | delete     |
| ent           | enter      |
| pgdown        | page down  |
| pgup          | page up    |
| space         | space bar  |
| down, up, left, right | arrow keys |

### Actions
| Abbreviation  | Meaning    |
| ------------- | -----------|
| +             | combine keys|
| _empty space_ | then       |
| /             | or         |
| -             | through    |
| (...)         | instruction|

Instructions are surrounded by space on each side. "then" will not be placed before or after an instruction.
E.g. `g p` will result in "g then p"
but `cmd+g (then type what you need, then) p` will result in "`command` + `g` then type what you need, then `p`"

## Examples

Listed below are examples of formatted keyboard shortcuts and their parsed meaning.

| Formatted Shortcut | Parsed Shortcut |
| ------------------ | --------------- |
| cmd+space          | `command` + `space` |
| cmd+g p            | `command` + `g` then `p` |
| (Type a search term,) return | Type a search term, then `return` |
| e/y                | `e` or `y`       |
| F1-F12             | `F1` through `F12` |

## Contributing

Pull requests are welcome!