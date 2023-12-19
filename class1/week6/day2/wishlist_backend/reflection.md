"Everybody has a battleplan until shit stops working and needs 2+ hours to debug."

But I didn't really have a battleplan, unless "working my way through the list" counts as one.

I made a mistake of focusing on the most challenging and interesting parts first, which led to losing a lot of time with mixed results. Prisma's m-n relations was the first stumbling block (a necessary one though), eventually it came around... kinda. Then I spent the whole Thursday evening trying to use Context to pass the authorized state around, in the end it didn't click with me and I had to scrap a lot of code. Then I found myself on Friday morning in a panic mode being 15-20 points off the minimum goal and with my auth still working like shit and needing time to debug. Another 2 hours spent trying to understand why Wishlist page wouldn't show a list of toys... turned out the /me endpoint was sending the token back instead of user data... don't ask.

My final result is quite a collection of WET schijtcode, featuring:

1) fetching user's auth data twice per page, first in Navigation then in Main - at least "fetchUsers" could have been moved into a component, but I decided to spend this time on the features;
2) breaking "users" data from state into 3 separate const's to fetch user's auth data in Wishlist because no time left to think of a proper way
3) having 3 different User types and I'm not even sure how many are actually used XD
4) --keeping userdata in localStorage-- - removed, that was too much even for me
5) ........ CSS, what CSS? Ok, I slightly improved the look as well.

But I'm not gonna touch it further because right now at least it works.

3.5 Create a Wish	The user is shown an error if they are not old enough to make a wish

The button is removed instead, but all 18+ items are labeled as such at all times.

3.7 Remove Wishes
The DELETE /wishes/:id endpoint uses Authentication to check wether the user is the owner of the Wish before deleting it

The endpoint receives the token and calculates the user's identity from it, I hope it counts as "owning" the item.

P.S. Folder "___hooks" contains remains of the Context stuff I pulled off the internet. Not used anywhere in the code, included just for fun.