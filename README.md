# a  e  s  t  h  e  t  i  c        
# m  u  s  i  c         
# p  l  a  y  e  r

With aesthetic music player, you can enter a URL from either Soundcloud or YouTube and play it via the onscreen player (without additional video streaming, in YouTube's case).



## Tech stack:

React is used for the frontend. The backend consists of a GraphQL engine deployed by Hasura, and interacted with via Apollo-client. The database used is Neon (postgres).
Styling is applied via Material UI.

## Functionality:

With the music player, you can enter any YouTube or Soundcloud URL and save the information to the database. You can then create a listening queue to suit your mood.
The songs in the queue are saved in local storage, so you won't lose your playlist. 

<img width="1404" alt="Screenshot 2023-04-05 at 13 54 00" src="https://user-images.githubusercontent.com/60020259/230088444-0293619b-02f2-4d24-99be-2a0b500d8e6f.png">


## Challenges:

Created from an out-of-date coursework idea, which needed complete updating to exclude using Heroku, and to include new versions of Apollo-client, Hasura and Material UI. 

## 
