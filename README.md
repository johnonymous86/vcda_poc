# vcda_poc
## Initial Post:

Virtual College Directory Application Proof of Concept (take 2)

This is a redeployment of this repo https://github.com/johnonymous86/Virtual_College_Directory_Application_poc

Issues with a possibly corrupted pages publication were easier to fix by redeploying the code to a new repo and intiating a pages publiction that way.

This app is purely HTML with a few small instances of inline javascript to keep the search function clean and responsive. The purpose of this app is as a proof of concept to show that a basic search function, if segregated by topic, can be useful as a building directory. A simplistic and intuitive design can be expanded from the current architecture to include a search function that can search based on topic tags and allows users to type search terms. 

The next step in developing this application would involve a more robust search functionality with greater specification and more values. Styling and design needs to be created and added in a way that will benefit the intentionally simple layout. An inputable search function will need to be implimented to allow users to type in search words.

## Update 9/14:

Initial HTML only set up for authentication was successful. Implimented JS logic and created very basic authentication loop that occurs in-browser (obviously, this is about as secure as putting a piece of scotch tape on the gate to a lion's cage). Exploring more robust security options means looking at user persistance via a backend database solution. A free solution that offers a relational Postgres database for yet-to-be-developed directory data storage is [Supabase](https://supabase.com/). I am currently only exploring this solution as a authentication structure but the utility of directory data storage makes it an attractive option.

Also, I have decided to change the name of the application to

#Campus Compass!

![Campus Compass](assets/Campus_Compass%20(6).png)