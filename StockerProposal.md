# Stocker Project Proposal

## Project Description

Stocker is a PC building tycoon game/stock keeping simulator. In the game the user will purchase materials to craft PC parts and ultimately a complete PC. The user will sell parts and complete PC's for more money to buy more materials. 

I'd like to add a minigame (perhaps a word scramble/anagram game) in which the user can earn a small amount of money for nothing in case they spend themselves into a unplayable situation. In addition I'd like for the user to be able to spend money to hire "managers" that automatically purchase certain requisite materials for crafting. (i.e the 'wire' manager purchases all the wire the user would need for any crafting job the user has queued.)

## Wireframes

Proposed game balance(WIP):http://framebox.org/AkKeJ

Materials page: http://framebox.org/AkKfA

Components page: http://framebox.org/AkKfk

### MVP User Stories

As a user, I want to see all purchaseable materials and craftable components.
As a user, I want to purchase materials indivudally and in bulk, as well as craft components from those materials.
As a user, I want to craft a PC out of components.
As a user, I want to sell components and PCs for money.
As a user, I want my game state to persist based on my login information

### Post MVP

As a user, I want to play a minigame to earn a small amount of money.
As a user, I want to hire "managers" to automate purchasing of materials for component crafting.
As a user, I want to navigate and use all of the above features on mobile phone.

## API

https://developers.facebook.com/docs/facebook-login/
```
//Sample JSON response
{
    status: 'connected',
    authResponse: {
        accessToken: '{access-token}',
        expiresIn:'{unix-timestamp}',
        reauthorize_required_in:'{seconds-until-token-expires}',
        signedRequest:'{signed-parameter}',
        userID:'{user-id}'
    }
}
```
## Component Hierarchy

http://framebox.org/AkKFl

The Stocker component will hold state, and pass props to Materials and Components, which will pass props to Material and Component.
