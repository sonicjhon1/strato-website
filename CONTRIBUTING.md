# Contributing Guidelines

## Common

### Commit Style

We generally follow simple plain-English commit titles and summaries, which encapsulate what a commit has done. We don't use a distinct commit style like that of the Linux Kernel for any commits and they would look extremely out of place in the repository overall.

In addition, we stick to a single objective with one commit albeit ensure that the scope isn't too small so there'll be a huge amount of them or too large so it's a single commit that changes vast swaths of the codebase. Try to find the right balance between committing too less and too much.

### Use code formatter

To reformat code with Prettier:
```shell
# Replace bun with your package manager
bun run format
```

## JS

### Comments

Only add comments if there is a workaround or some nonstandard code being used. Discretion of what constitutes nonstandard is up to the author and maintainers.

-   Use // in order to explain a section
-   If there is a need for a file wide comment, use the multiline comment /\*\*/

### Naming rules

-   Images: Extremely brief names, replace spaces with hypens (-), lowercase.
-   Directories: One word, lowercase.
-   Components: PascalCase.
-   Pages: lowercase.
-   JS Variables: camelCase.
-   JS Methods: camelCase.

### Spacing

For conventional javascript, we generally follow the rule of **"Functional Spacing"**, that being spacing between chunks of code that do something functionally different while functionally similar blocks of code can be closer together.
