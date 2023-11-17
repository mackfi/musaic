# Overview

This is a music web application loosely modeled after YouTube Music, which is my music app of choice. Dependencies of this projct consist of [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [tailwindCSS](https://tailwindcss.com/), [Supabase](https://supabase.com/), and [Stripe](https://stripe.com/). To utilize any of the features of this website, the user must first log into their account.

Open https://musaic.online to view the current deployment.

# Features 

#### Home Page

The home page displays the user's personal library in the sidebar on the left, which includes all of the songs they have uploaded. Other songs that users have uploaded are viewable in the main home screen, along with a link to the user's liked songs. At the top of the screen, there are options to search, sign out, or view account details.

#### Songs

All songs displayed in the library, home page, liked songs, or search screens have the option to be played by clicking on them.


#### Uploading

To upload a song, click the plus button in the sidebar on the home screen. The user is prompted with a song title, artist, .MP3 sound file, and image file for the cover art. Uploaded songs are visible in the user's library in the sidebar, and also in the home and search screens of other users.


#### Search

Clicking on the search icons take the user to a search page, where typing in a specific artist or song title will limit the results. 


#### Liked Songs

If the heart icon next to a song is clicked on any page, it will be included in the user's liked playlist. This playlist can be accessed from the home screen.


#### Account View

To access account details, click the profile icon in the top right corner. This currently allows the user to access and manage subscriptions.


#### Subscriptions

Through Stripe, subscriptions can be securely managed. Any subscription-only features prompt the user for a subscription purchase, although currently all subscription-only features are unlocked to allow full-site access. Subscriptions have also been disabled in Stripe to prevent the user from accidentally spending money on the account page.


## Notes and Disclaimers

Currently, user authentication is most easily done through email, though GitHub should work as well. 

As previously mentioned, subscriptions are currently disabled to allow full access to site features.

I do not own the songs that are currently available on this website. If you enjoy any of these songs, please support the respective artists.


## Future Plans and Goals

I would like to implement some features in the future to distinguish this website from other music applications. One such example may be to leverage OpenAI's DALL-E API to allow the user to automatically generate an image based on the song title when uploading music. Alternatively, the user may be able generate an image to be used in the cover art of a preexisting song that will only be displayed while logged into their account. Either of these futures may help this website live up to its MusAIc name.

I would like to provide the user with more login alternatives in the future, such as through Google or Spotify.
