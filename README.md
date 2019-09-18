# Simply Pairs
 Interactive Frontend Development Milestone Project

 - ### Project
 *** 

 This is a simple memory game project called Simply Pairs, where users have to select cards from a grid of face down cards and find the matches in the grid. As I am new to JavaScript and didn't know where to start with creating this game, I went with the approach of finding an existing project with a similar concept and tried to modify it to how I wanted, commenting the code throughout to try and learn and understand what is happening, where actions and events are taking place and why those events are taking place.
 
### Features
***

#### Existing Features
- **Multiple Levels**

There are three levels in this project; 
    - Level 1 - Features a 4x3 grid and more contrasting cards.
    - Level 2 - Features a 6x3 grid and more similar cards (i.e. Ace of hearts and Ace of Spades)
    - Level 3 - Features a 8x3 grid and similar cards (i.e. Both black kings)

- **Turn Counter**

On each level there is a turn counter that shows the user the number of turns in real time they have taken to complete a level.


### Future Development
***

- **'Victory' modal** 

After completing a level, I tried implementing a modal that would show if all the child elements of the grid (i.e. the cards) had the class 'match'. This modal ideally would show a 'victory' message and the number of turns the user took to complete that level and navigation options for the user to go to the next level, go back to the home screen or restart/replay the current level. 
I wasn't able to implement this and truthfully I didn't know where to put this code in the script anyway. My attempt at implementing this feature is at the end of 'game-level1.js' script, where I tried to have a message print to console if the condition was met.

- **Better Responsive grid for smaller viewports**

Currently on mobile and tablet screens, the larger grids of Level 1 and 2 cause the user to have to scroll to view all the cards on the grid. I am currently making the cards smaller for mobile and tablet screens which temporary fixes the issue for Level 1.

- **Adding another game** 

I would like, in future iterations of this project, to add another memory game.


### Testing
***

- **Responsiveness**

As mentioned earlier, Levels 1,2 and 3 look good on larger, desktop screens however on smaller screens, I struggled to find a card size where the cards are big enough that they are readable once selected and small enough that the grid fits on the screen without the user having to scroll to view the whole grid.

- **Testing card selection**
    1. Go to game level 1
    2. Click on any card and verify that the card is revealed to the user.
    3. Click on another card and verify that the card is revealed to the user.
        - **NO MATCH** Verify that both cards are hidden again 
        - **MATCH** Verify that cards are turned back with a green card back signifying a match has been made.
    4. Verify the Turn counter has increased by 1. 


### Deployment
***

Branched the beta version and released.


### Credits/Assets
***

- Original game code: https://github.com/taniarascia/memory
- Hover.css: https://github.com/IanLunn/Hover
- Playing cards: https://github.com/hayeah/playing-cards-assets



