# Qatar World Cup Opening Ceremony - 2022
# Part of the concert 

This project deployed on [netlify: https://agitated-poincare-d5f871.netlify.app/](https://agitated-poincare-d5f871.netlify.app/).

## 
In the project src folder user can find a component folder. 
Here some short description or details of those folders...

### Header
In Header Component, site details added. 
user can fiend here Two main header div. One header and overlay.
header contain Header information like "The purpose of this project total Budget of the Concert and a short text about project"


### Main
In Main component lots of thing added here. 
In this component all the  JSON data fetched here by using useState and useEffect
A handler function added. This function can handle a button under the artist section, which user can find on Artist component.
This Main component pass data to both Artist and Cart component.
On return of data I returned Artist component data under the hood of Artist-container by using .map method and pass a unique key, pass full Array of Object and pass  handleAddToCart function. And also under the hood of cart-container I pass an Array for Cart component. 

### Artist
This Artist component is one of the main component of this projects here user shaw all the data. 
And also in this component I added a button. Which get data from Main component. When user click on that button cart data will updated

### Cart
**Note: When user clicked on Add This Artist, Cart data will update !**
This Cart component is on of the main interactive part of this project. When a user clicked on Add This Artist button 
user can shaw 3 data updated
:one: Total added Artist data 
:two: Total cost for artist cost
:three: And at last a list of added Artist name

for listing the Artist I use .map method. Because Cart data itself an Array. 

## Thanks

**/ Thanks for visiting my first react project /**