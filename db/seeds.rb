# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "admin@gmail.com", username: "admin", password: "123456");
User.create(email: "demoUser@gmail.com", username: "demoUser", password: "123456");
User.create(email: "Madeline@g.com", username: "Madeline", password: "123456"); #3
User.create(email: "Theo@g.com", username: "Theo", password: "123456"); #4
User.create(email: "theHuman@g.com", username: "theHuman", password: "123456"); #5
User.create(email: "flowey@g.com", username: "flowey", password: "123456"); #6
User.create(email: "Toriel@g.com", username: "Toriel", password: "123456"); #7
User.create(email: "Mercy@g.com", username: "Mercy", password: "123456"); #8
User.create(email: "Ana@g.com", username: "Ana", password: "123456"); #9
User.create(email: "Pharah@g.com", username: "Pharah", password: "123456"); #10
User.create(email: "Tyrande@g.com", username: "Tyrande", password: "123456"); #11
User.create(email: "Malfurion@g.com", username: "Malfurion", password: "123456"); #12
User.create(email: "WW@g.com", username: "Winter Wyvern", password: "123456"); #13
User.create(email: "Dazzle@g.com", username: "Dazzle", password: "123456"); #14
User.create(email: "DCane@g.com", username: "Deckard", password: "123456") # 15
User.create(email: "Sylvannas@g.com", username: "Sylvannas", password: "123456") # 16
User.create(email: "Azmodan@g.com", username: "AzmoDUNK", password: "123456") # 17
User.create(email: "Juggernaut@g.com", username: "Juggernaut", password: "123456") # 18
User.create(email: "Invoker@g.com", username: "Invoker", password: "123456") # 19
User.create(email: "Sniper@g.com", username: "Sniper", password: "123456") # 20
User.create(email: "Jon@g.com", username: "Jon", password: "123456") # 21
User.create(email: "Dan@g.com", username: "Dan", password: "123456") # 22
User.create(email: "Bill@g.com", username: "Bill", password: "123456") # 23


# Servers 1-5
Server.create(name: "General", owner_id: "1");
Server.create(name: "demo's server", owner_id: "2");
Server.create(name: "Support Mains", owner_id: "8");
Server.create(name: "Dota2", owner_id: "8");
Server.create(name: "Heroes of the Storm", owner_id: "8");
Server.create(name: "JS Talk", owner_id: "1");

# ServerSubs
ServerSubscription.create(server_id: "1", user_id: "1")
ServerSubscription.create(server_id: "1", user_id: "2")
ServerSubscription.create(server_id: "1", user_id: "3")
ServerSubscription.create(server_id: "1", user_id: "4")
ServerSubscription.create(server_id: "1", user_id: "5")
ServerSubscription.create(server_id: "1", user_id: "6")
ServerSubscription.create(server_id: "1", user_id: "7")
ServerSubscription.create(server_id: "1", user_id: "8")
ServerSubscription.create(server_id: "1", user_id: "9")
ServerSubscription.create(server_id: "3", user_id: "8")
ServerSubscription.create(server_id: "3", user_id: "9")
ServerSubscription.create(server_id: "1", user_id: "10")
ServerSubscription.create(server_id: "3", user_id: "11")
ServerSubscription.create(server_id: "3", user_id: "12")
ServerSubscription.create(server_id: "5", user_id: "11")
ServerSubscription.create(server_id: "5", user_id: "12")
ServerSubscription.create(server_id: "5", user_id: "15")
ServerSubscription.create(server_id: "5", user_id: "16")
ServerSubscription.create(server_id: "5", user_id: "17")
ServerSubscription.create(server_id: "3", user_id: "13")
ServerSubscription.create(server_id: "3", user_id: "14")
ServerSubscription.create(server_id: "4", user_id: "13")
ServerSubscription.create(server_id: "4", user_id: "14")
ServerSubscription.create(server_id: "4", user_id: "18")
ServerSubscription.create(server_id: "4", user_id: "19")
ServerSubscription.create(server_id: "4", user_id: "20")
ServerSubscription.create(server_id: "2", user_id: "2")
ServerSubscription.create(server_id: "3", user_id: "2")
ServerSubscription.create(server_id: "4", user_id: "2")
ServerSubscription.create(server_id: "5", user_id: "2")
ServerSubscription.create(server_id: "6", user_id: "1")
ServerSubscription.create(server_id: "6", user_id: "21")
ServerSubscription.create(server_id: "6", user_id: "22")
ServerSubscription.create(server_id: "6", user_id: "23")

# Channel for Server1
Channel.create(channel_name: "General Chatter", server_id: "1") #1
Channel.create(channel_name: "Celeste Mountain", server_id: "1")
Channel.create(channel_name: "Mount Ebott", server_id: "1")
Channel.create(channel_name: "Overwatch", server_id: "1")
Channel.create(channel_name: "Crochet", server_id: "1")

#Channel for Server2
Channel.create(channel_name: "Favorites", server_id: "2")

#Channels for Server3
Channel.create(channel_name: "Favorite Maps", server_id: "3")
Channel.create(channel_name: "Woes", server_id: "3")
Channel.create(channel_name: "FOOD!", server_id: "3")

#Channels for Server4
Channel.create(channel_name: "Mid Life", server_id: "4")
Channel.create(channel_name: "Casuals", server_id: "4")
Channel.create(channel_name: "Ranked", server_id: "4")

#Channels for Server5
Channel.create(channel_name: "Competitive", server_id: "5")
Channel.create(channel_name: "Quickplay", server_id: "5")

#Channels for Server6
Channel.create(channel_name: "Vanilla JS", server_id: "6");
Channel.create(channel_name: "React", server_id: "6");
Channel.create(channel_name: "Redux", server_id: "6");

#General Chatter 
Message.create(body: "Welcome to the General Server! (And General Chatter Channel).  Take a look around! Try creating some servers joining some (like `JS Talk`), and chat! :)",
 author_id: "1", channel_id: "1")

#Celeste
Message.create(body: "Anyone here?", author_id: "3", channel_id: "2")
Message.create(body: "Yep! Beautiful night for a climb.", author_id: "4", channel_id: "2")
Message.create(body: "Theo!  Take any good pictures lately?", author_id: "3", channel_id: "2")
Message.create(body: "Of course!", author_id: "4", channel_id: "2")
Message.create(body: "Check them out: https://www.instagram.com/theounderstars/", author_id: "4", channel_id: "2")
Message.create(body: "I feel like... I keep seeing myself on the mountain.", author_id: "3", channel_id: "2")
Message.create(body: "Aww, just gotta breathe and take it slow.  You'll be fine!", author_id: "4", channel_id: "2")
Message.create(body: "I'm serious, Theo.", author_id: "3", channel_id: "2")

#Undertale
Message.create(body: "I need to get out of the underground.", author_id: "5", channel_id: "3")
Message.create(body: "I can help get you out. TRUST ME.", author_id: "6", channel_id: "3")
Message.create(body: "I wouldn't follow that little flower...", author_id: "7", channel_id: "3")
Message.create(body: "...", author_id: "5", channel_id: "3")

#Overwatch
Message.create(body: "Being a support hero is exhausting...", author_id: "8", channel_id: "4")
Message.create(body: "Tell me about it. DPS are such babies.", author_id: "9", channel_id: "4")
Message.create(body: "* Ahem * Excuse me.", author_id: "10", channel_id: "4")
Message.create(body: "I think you could use a little nap, Pharah.", author_id: "9", channel_id: "4")
Message.create(body: "MOM!", author_id: "10", channel_id: "4")
Message.create(body: "You know, Pharah, you just interrupted our conversation.  
Say, Ana, why don't we head over to Support Mains for more privacy.", author_id: "8", channel_id: "4")
Message.create(body: "Wait!", author_id: "10", channel_id: "4")
Message.create(body: "Who will heal me..?", author_id: "10", channel_id: "4")

#Crochet
Message.create(body: "Anyone else here like to crochet?",
 author_id: "1", channel_id: "5")
# Demos

Message.create(body: "I was supposed to add something here...", author_id: "2", channel_id: "6");

# Support Mains
Message.create(body: "Yeah, he asked why I used owl instead of healing him. I got the kill, and he didn't perish, so what does it matter?", 
                author_id: "11", channel_id: "8");
Message.create(body: "LOL, it does sound kinda greedy.", author_id: "12", channel_id: "8");
Message.create(body: "Whew! Much better.  Now, where were we, Ana?", author_id: "8", channel_id: "8")
Message.create(body: "Talking about Fareeha and her friends.", author_id: "9", channel_id: "8")
Message.create(body: "Right!  You should have heard what this Genji said to me the other day.  Yikes.", author_id: "8", channel_id: "8")
Message.create(body: "You think YOU have it bad with Genjis? Lemme hear it. Haha.", author_id: "9", channel_id: "8")

#Favorite Maps
Message.create(body: "This channel seems useless.", author_id: "13", channel_id: "7");
Message.create(body: "Maybe for you it does.", author_id: "11", channel_id: "7");
Message.create(body: "All of the maps we have are great!", author_id: "11", channel_id: "7");
Message.create(body: "Yeah, it might be cool to have more than one, but there's enough strategy anyway.", author_id: "13", channel_id: "7");

# FOOD
Message.create(body: "I think my favorite food is probably swiss chocolate.", author_id: "8", channel_id: "9")
Message.create(body: "Harhar.", author_id: "9", channel_id: "9")
Message.create(body: "Here, I have some chocolate, though.", author_id: "9", channel_id: "9")
Message.create(body: "I prefer tangoes, personally.", author_id: "13", channel_id: "9")

# Mid Life
Message.create(body: "Mid life 4 life!", author_id: "19", channel_id: "10");
Message.create(body: "Sure as shootin'!", author_id: "20", channel_id: "10");
Message.create(body: "Oh, it's the Juggernaut.", author_id: "18", channel_id: "10");
Message.create(body: "Why is he referring to himself in the third person, again?", author_id: "13", channel_id: "10");
Message.create(body: "Who threatens my concentration?!", author_id: "19", channel_id: "10");
Message.create(body: "Uhh...", author_id: "13", channel_id: "10");
Message.create(body: "What joy it is beholding me!", author_id: "19", channel_id: "10");

# Casuals
Message.create(body: "Anyone wanna play some doter with me?", author_id: "13", channel_id: "11");
Message.create(body: "Fight me!", author_id: "19", channel_id: "11");
Message.create(body: "Fine! Queue up, nub.", author_id: "13", channel_id: "11");
Message.create(body: "HOHO HAHA", author_id: "20", channel_id: "11");


#Ranked
Message.create(body: "My eyes are set!  Queue up for Ranked if you dare!", author_id: "20", channel_id: "12");
Message.create(body: "Juggernaut stands ready.", author_id: "18", channel_id: "12");
Message.create(body: "DAZZLE!", author_id: "14", channel_id: "12");
Message.create(body: "You've called winter down upon you!", author_id: "13", channel_id: "12");
Message.create(body: "I invoke myself!", author_id: "19", channel_id: "12");
Message.create(body: "Good! Into the breach!", author_id: "20", channel_id: "12");

#Competitive
Message.create(body: "Who is ready for some competitive play?! I have an idea about our strategy.  I'm thinking solo mid
Witch Doctor, Demon Hunter and me top, and uther and Diablo bottom. Uther and I will ocassionally help gank mid with our stuns. We'll all need to call out our cooldowns so that we can stagger our CC accordingly.", author_id: "11", channel_id: "13");
Message.create(body: "I have an idea about a team composition as well!  Stay awhile and listen!", author_id: "15", channel_id: "13");
Message.create(body: "I think I can actually solo-mid. COME ON AND SLAM, IF YOU WANNA JAM.", author_id: "17", channel_id: "13");
Message.create(body: "I am Sylvanas Windrunner, Ranger-General of Silvermoon. I advise you to relinquish mid to ME.", author_id: "16", channel_id: "13");
Message.create(body: "What is happening right now.", author_id: "11", channel_id: "13");

#Quickplay
Message.create(body: "In QP, I can go a DPS build and no one cares! It's great.", author_id: "12", channel_id: "14");
Message.create(body: "I have no time for games. Spec correctly because penalty for stupidity is death!", author_id: "16", channel_id: "14");

#Vanilla JS
Message.create(body: "Anyone build anything cool using only JS and DOM manipulation of late?", author_id: "1", channel_id: "15");

#React
Message.create(body: "I feel like there are so many date-pickers out there... But I really need one that works well on mobile,
has nice keyboard input options.  Any suggetions?", author_id: "21", channel_id: "16");
Message.create(body: "For React, react-datetime is the most popular by a long shot. You could also try Airbnb's date picker.", author_id: "22", channel_id: "16");
Message.create(body: "Does anyone know much about Hooks? I've been hearing about them, and I'm excited to try it.", author_id: "21", channel_id: "16");
Message.create(body: "Hooks are basically a feature that let you use state and other React features without writing a class. 
They allow you to reuse stateful logic without changing your component hierarchy.  Here, check out the React docs: https://reactjs.org/docs/hooks-intro.html", author_id: "23", channel_id: "16");
Message.create(body: "Awesome!", author_id: "21", channel_id: "16");
Message.create(body: "I'll definitely check this out!", author_id: "21", channel_id: "16");

#Redux
Message.create(body: "Is it OK to have more than one middleware chain in my store enhancer? 
What's the difference between next and dispatch in a middleware function?", author_id: "21", channel_id: "17");
Message.create(body: "Well, Redux middleware acts like a linked list. Each middleware function can either call next(action) 
to pass an action along to the next middleware in line, call dispatch(action) to restart the processing at the beginning of the list, 
or do nothing at all to stop the action from being processed further.", author_id: "22", channel_id: "17");
Message.create(body: "This chain of middleware is defined by the arguments passed to the applyMiddleware function used when creating a store. 
Defining multiple chains will not work correctly, as they would have distinctly different dispatch references and the different chains would 
effectively be disconnected.", author_id: "22", channel_id: "17");
Message.create(body: "Cool, thanks :)", author_id: "21", channel_id: "17");







