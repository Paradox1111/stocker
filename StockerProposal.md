# Stocker Project Proposal

## Project Description

Stocker is a PC building tycoon game/stock keeping simulator. In the game the user will purchase materials to craft PC parts and ultimately a complete PC. The user will sell parts and complete PC's for money to buy materials. 

I'd like to add a minigame (perhaps a word scramble/anagram game) in which the user can earn a small amount of money for nothing in case they spend themselves into a unplayable situation. In addition I'd like for the user to be able to spend money to hire "managers" that automatically purchase certain requisite materials for crafting. (i.e the 'circuitry' manager purchases all the circuitry the user would need for any crafting job the user has queued.)

## Wireframes

Proposed game balance(WIP):http://framebox.org/AkKeJ

Home page: http://framebox.org/AkKgd

Materials page: http://framebox.org/AkKfA

Components page: http://framebox.org/AkKfk

### MVP User Stories

* As a user, I want to see and navigate between purchaseable materials, craftable components, and the main page.
* As a user, I want to purchase materials indivudally and in bulk, as well as craft components from those materials.
* As a user, I want to craft a PC out of components.
* As a user, I want to sell components and PCs for money.

### Post MVP

* As a user, I want my game state to persist based on my login information
* As a user, I want to play a minigame to earn a small amount of money.
* As a user, I want to hire "managers" to automate purchasing of materials for component crafting.
* As a user, I want to navigate and use all of the above features on mobile phone.

## APIs
https://unsplash.com/documentation
```
//Sample JSON response
"cover_photo": {
                "id": "-9jmFkN-_U4",
                "created_at": "2018-10-28T17:18:19-04:00",
                "updated_at": "2020-01-14T00:04:11-05:00",
                "promoted_at": null,
                "width": 3024,
                "height": 4032,
                "color": "#F1E7E8",
                "description": null,
                "alt_description": "close-up photography of green motherboard",
                "urls": {
                    "raw": "https://images.unsplash.com/photo-1540761352041-7d28666d4e37?ixlib=rb-1.2.1",
                    "full": "https://images.unsplash.com/photo-1540761352041-7d28666d4e37?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                    "regular": "https://images.unsplash.com/photo-1540761352041-7d28666d4e37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                    "small": "https://images.unsplash.com/photo-1540761352041-7d28666d4e37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                    "thumb": "https://images.unsplash.com/photo-1540761352041-7d28666d4e37?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                },
                "links": {
                    "self": "https://api.unsplash.com/photos/-9jmFkN-_U4",
                    "html": "https://unsplash.com/photos/-9jmFkN-_U4",
                    "download": "https://unsplash.com/photos/-9jmFkN-_U4/download",
                    "download_location": "https://api.unsplash.com/photos/-9jmFkN-_U4/download"
                },
```

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
