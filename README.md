# Kindred-Code

Hey there! This is Kindred-Code, a project I'm building to see if we can use tech to actually get people outside and doing good. 

The idea is pretty simple: Companies want to donate money to good causes, and people want to help their communities. Kindred-Code sits in the middle. It’s a web app where you can find "challenges"—like picking up trash or planting trees—and once you're actually at the location, you verify your action via GPS to move the needle on a corporate donation goal.

#  How it works (The TL;DR)
1. Sign up: Create an account so the app knows who you are.
2. Find a task: Look through a list of "Impact Challenges" sponsored by different companies.
3. Go there: Physically go to the challenge site.
4. Verify: Hit the button! The app checks your GPS to make sure you're actually there, then updates the progress bar for everyone in real-time.

## What's under the hood?
I wanted this to be fast and functional, so I went with:
 The Basics: Just clean HTML, CSS, and JavaScript. No bulky frameworks yet.
 The Brains: Firebase handles all the "hard stuff"—the login system and the live database.
 The Magic: The Browser Geolocation API to handle the GPS verification.

##  Current Status
Right now, this is a working prototype. You can log in, see challenges pulled straight from my Firestore database, and "verify" them to see the progress bars move live. 

Next on the list:
- [ ] Adding photo uploads so you can see proof of the work.
- [ ] A "User Profile" to see how much money you've helped raise.
- [ ] An "Admin" view so companies can add their own tasks without me doing it manually.

## Want to try it?
If you want to poke around the code or run it yourself:
1. Clone it to your machine.
2. You'll need your own Firebase project keys (I've kept mine in the file for now so the demo works, but you should swap them out for yours!).
3. Open `index.html` and you're good to go.

---
Feel free to reach out if you have ideas on how to make the verification more secure or want to suggest a new feature!
