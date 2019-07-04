# Keyboard Shortcut Directory

A JSON directory of keyboard shortcuts, written in a consistent syntax.

### Why?

Currently used to power [cmdspace.io](https://www.cmdspace.io).

## Formatting

keyboard-shortcut-directory uses a standardized, abbreviated format so that shortcuts are easy to type. 

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

All characters should be lowercase.
Instructions are surrounded by space on each side. "then" will not be placed before or after an instruction.
E.g. `g p` will result in "g then p"
but `cmd+g (then type what you need, then) p` will result in "`command` + `g` then type what you need, then `p`"

## Examples

Listed below are examples of formatted keyboard shortcuts and their translated meaning.

| Formatted Shortcut | Translated Shortcut |
| ------------------ | --------------- |
| cmd+space          | `command` + `space` |
| cmd+g p            | `command` + `g` then `p` |
| (Type a search term, then press) return | Type a search term, then press `return` |
| e/y                | `e` or `y`       |
| F1-F12             | `F1` through `F12` |

## Contributing

Pull requests are welcome!