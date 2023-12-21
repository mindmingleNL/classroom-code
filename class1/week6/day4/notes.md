# QA

## NPM Scripts

- Run `npm run seed`

## QA - Quality Assurance

- Assuring there is 'some' quality
- Jest => unit tests (mainly for the developer)
  - Coverage percentages (how many line of code did we 'touch')
- A development team:
  - Developer
  - Managers
  - Scrum Master
  - Product Owner
  - Designers
  - Marketing managers
  - Testers
    - Monkey tester (manual testers)
    - Automated testers (tool/code)
      - If they use code most often they will use 'Cypress'

Challenge 1:

- Given a design, come up with as many requirements as possible
- As a user, I'd like to type in the white box
- When I completed the writing and press, it automatically added as a tag
- Typing a comma should create a tag (?)
- After 10 tags you can't type anymore And the 'remaining' message is replaced with a 'can't add more tags' message (?)
- Pressing on a X removes the tag
- Pressing on Remove All removes all tags
- The 'remaining tags' counter works, and counts correctly
- When you create a tag, the text should correspond to what you typed
- Tag duplicates are not allowed (?)
- The window should stretch to fit all typed tags (OR add a scroll bar but it's less comfortable) (?)
- Spaces are not allowed to type into the box (?)
- Suggestion when typing (?)
- Bring entered text to lowercase when creating a tag (?)
- Press delete to remove tags
- Should be keyboard navigable
