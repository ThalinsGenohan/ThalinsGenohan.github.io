// JavaScript source code

// totally a .json file
// no really it's just because file:// urls are dumb and break same-origin policy stuff
// also this file is exactly 1000 lines! yeah!

const pTypes = Object.freeze({
    bold: 0,
    brave: 1,
    calm: 2,
    docile: 3,
    hardy: 4,
    hasty: 5,
    impish: 6,
    jolly: 7,
    lonely: 8,
    naive: 9,
    quiet: 10,
    quirky: 11,
    rash: 12,
    relaxed: 13,
    sassy: 14,
    timid: 15
});

questions = [
    //0
    {
        "comment": "Random, Simple Questions",


        "q": "Have you ever blurted something out without thinking about the consequences first?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.lonely, pTypes.lonely,
                    pTypes.relaxed, pTypes.relaxed
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.hardy
                ]
            }
        ]
    },
    //1
    {
        "q": "Are you afraid of growing bigger?",
        "a": [
            {
                "text": "Ummm...",
                "points": [
                    pTypes.timid, pTypes.timid
                ]
            },
            {
                "text": "Of course not.",
                "points": [
                    pTypes.calm
                ]
            },
            {
                "text": "Bigger is better!",
                "points": [
                    pTypes.sassy, pTypes.sassy
                ]
            }
        ]
    },
    //2
    {
        "q": "Once you've decided something, do you see it through to the end?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.brave,
                    pTypes.relaxed, pTypes.relaxed
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.quirky
                ]
            }
        ]
    },
    //3
    {
        "q": "Have you ever said \"Nice to meet you\" to someone you said previously?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.brave,
                    pTypes.relaxed
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.calm
                ]
            },
            {
                "text": "\"Nice to meet you\"",
                "points": [
                    pTypes.sassy,
                    pTypes.quirky
                ]
            }
        ]
    },
    //4
    {
        "q": "You're at a movie theater. What are you there to see?",
        "a": [
            {
                "text": "An action movie.",
                "points": [
                    pTypes.impish, pTypes.impish,
                    pTypes.sassy
                ]
            },
            {
                "text": "A drama.",
                "points": [
                    pTypes.hardy
                ]
            },
            {
                "text": "A romantic movie.",
                "points": [
                    pTypes.quirky
                ]
            }
        ]
    },
    //5
    {
        "q": "Have you ever looked at your reflection in the morror & thought, \"What's that on my face?\"?",
        "a": [
            {
                "text": "I must be cleansed!",
                "points": [
                    pTypes.jolly,
                    pTypes.naive,
                    pTypes.impish,
                    pTypes.sassy
                ]
            },
            {
                "text": "Well, not really...",
                "points": [
                    pTypes.hardy,
                    pTypes.quirky
                ]
            }
        ]
    },
    //6
    {
        "q": "Have you ever thought that if you dug into your backyard, you would find a buried treasure?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.naive, pTypes.naive
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.quiet
                ]
            }
        ]
    },
    //7
    {
        "q": "Do you prefer to play outside rather than inside?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.bold,
                    pTypes.relaxed, pTypes.relaxed,
                    pTypes.jolly
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.calm
                ]
            }
        ]
    },
    //8
    {
        "q": "You discover a beat-up looking treasure chest in some ruins. What do you do?",
        "a": [
            {
                "text": "Open it!",
                "points": [
                    pTypes.impish, pTypes.impish,
                    pTypes.brave,
                    pTypes.rash,
                    pTypes.hasty, pTypes.hasty
                ]
            },
            {
                "text": "Get help opening it.",
                "points": [
                    pTypes.timid
                ]
            }
        ]
    },
    //9
    {
        "q": "Have you ever realized you were hogging the conversation?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.rash, pTypes.rash,
                    pTypes.sassy, pTypes.sassy
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.docile,
                    pTypes.quiet
                ]
            }
        ]
    },
    //10
    {
        "q": "When you see a switch, do you have an overwhelming urge to flip it?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.hasty, pTypes.hasty
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.calm
                ]
            }
        ]
    },
    //11
    {
        "q": "Have you ever forgotten you bought something & bought another one?",
        "a": [
            {
                "text": "Yes.",
                "points": [
                    pTypes.hasty,
                    pTypes.quirky, pTypes.quirky,
                    pTypes.rash
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.quiet
                ]
            }
        ]
    },
    //12
    {
        "q": "Do you think it's important to always aim to be the best?",
        "a": [
            {
                "text": "Of course!",
                "points": [
                    pTypes.lonely,
                    pTypes.sassy
                ]
            },
            {
                "text": "No.",
                "points": [
                    pTypes.calm, pTypes.calm,
                    pTypes.quirky
                ]
            }
        ]
    },
    //13
    {
        "q": "Do you want to be famous?",
        "a": [
            {
                "text": "Yes.",
                "points": [
					pTypes.lonely, pTypes.lonely,
					pTypes.sassy, pTypes.sassy
				]
            },
            {
                "text": "No.",
                "points": [
					pTypes.relaxed
				]
            }
        ]
    },
    //14
    {
        "q": "If you saw someone do something bad, would you scold them?",
        "a": [
            {
                "text": "Of course!",
                "points": [
					pTypes.bold,
					pTypes.brave,
					pTypes.sassy, pTypes.sassy
				]
            },
            {
                "text": "Not really...",
                "points": [
					pTypes.timid
				]
            }
        ]
    },
    //15
    {
        "q": "Have you ever told a joke that just completely fell flat?",
        "a": [
            {
                "text": "Yes.",
                "points": [
					pTypes.impish,
					pTypes.naive, pTypes.naive
				]
            },
            {
                "text": "No.",
                "points": [
					pTypes.calm
				]
            }
        ]
    },
    //16
    {
        "q": "Do you like lively parties?",
        "a": [
            {
                "text": "Yes.",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.lonely]
            },
            {
                "text": "No.",
                "points": [pTypes.quiet]
            }
        ]
    },
    //17
    {
        "q": "Are you truly sincere when you apologize?",
        "a": [
            {
                "text": "Of course!",
                "points": [pTypes.bold, pTypes.docile, pTypes.docile]
            },
            {
                "text": "That's not easy to admit!",
                "points": [pTypes.lonely, pTypes.timid, pTypes.timid]
            }
        ]
    },
    //18
    {
        "q": "Do you like karaoke?",
        "a": [
            {
                "text": "Yes.",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.sassy, pTypes.sassy]
            },
            {
                "text": "No.",
                "points": [pTypes.hasty, pTypes.timid]
            }
        ]
    },
    //19
    {
        "q": "You're hiking up a mountain when you reach diverging paths. Which path do you take?",
        "a": [
            {
                "text": "Narrow.",
                "points": [pTypes.impish, pTypes.impish, pTypes.naive]
            },
            {
                "text": "Wide.",
                "points": [pTypes.quirky, pTypes.quirky, pTypes.timid]
            }
        ]
    },
    //20
    {
        "q": "Your friend takes a spectacular fall! What do you do?",
        "a": [
            {
                "text": "Help my friend up!",
                "points": [pTypes.brave, pTypes.lonely]
            },
            {
                "text": "Laugh! It's too funny!",
                "points": [pTypes.impish, pTypes.impish, pTypes.naive, pTypes.naive, pTypes.rash]
            }
        ]
    },
    //21
    {
        "comment": "School Life",


        "q": "You have a really important test tomorrow! What do you do?",
        "a": [
            {
                "text": "Study all night long.",
                "points": [pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "Wing it! I'm sure I'll be fine!",
                "points": [pTypes.relaxed, pTypes.relaxed]
            },
            {
                "text": "Test?! I think I have a fever...",
                "points": [pTypes.naive, pTypes.naive]
            }
        ]
    },
    //22
    {
        "q": "Have you ever accidentally called a teacher \"Mom\" or \"Dad\"?",
        "a": [
            {
                "text": "Yes.",
                "points": [pTypes.rash, pTypes.rash]
            },
            {
                "text": "No.",
                "points": [pTypes.quiet, pTypes.quiet]
            }
        ]
    },
    //23
    {
        "q": "There's a rumor there's a ghost haunting the school bathrooms! What do you do?",
        "a": [
            {
                "text": "Scary... bathrooms!",
                "points": [pTypes.docile, pTypes.docile, pTypes.timid]
            },
            {
                "text": "Go in there anyway.",
                "points": [pTypes.bold, pTypes.jolly, pTypes.jolly, pTypes.relaxed]
            }
        ]
    },
    //24
    {
        "q": "You're in class when you realize you really have to go to the restroom! What do you do?",
        "a": [
            {
                "text": "Ask for permission.",
                "points": [pTypes.bold, pTypes.bold, pTypes.brave]
            },
            {
                "text": "Sneak out.",
                "points": [pTypes.hasty, pTypes.hasty]
            },
            {
                "text": "Hold on until class ends!",
                "points": [pTypes.timid, pTypes.timid]
            }
        ]
    },
    //25
    {
        "q": "Do you think you have good study habits?",
        "a": [
            {
                "text": "Yes.",
                "points": [pTypes.docile, pTypes.docile]
            },
            {
                "text": "No.",
                "points": [pTypes.naive, pTypes.naive, pTypes.rash]
            },
            {
                "text": "Well, I never lose at sports!",
                "points": [pTypes.impish, pTypes.impish]
            }
        ]
    },
    //26
    {
        "q": "What's your studying habit?",
        "a": [
            {
                "text": "Working hard, everyday.",
                "points": [pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "If I remember to...",
                "points": [pTypes.quirky, pTypes.quirky, pTypes.hasty]
            },
            {
                "text": "I just cover what I need to do.",
                "points": [pTypes.quiet]
            },
            {
                "text": "I can't really do it alone...",
                "points": [pTypes.lonely, pTypes.lonely]
            }
        ]
    },
    //27
    {
        "comment": "Food for Thought",


        "q": "You're packing your classroom's snacks when you get hungry! What do you do?",
        "a": [
            {
                "text": "Eat just a tiny bit.",
                "points": [pTypes.hasty, pTypes.hasty]
            },
            {
                "text": "Hold myself back & pack it all up.",
                "points": [pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "What snacks? They're in my belly!",
                "points": [pTypes.rash, pTypes.rash]
            }
        ]
    },
    //30
    {
        "q": "You see a cake that's past its expiration date, but only by one day. What do you do?",
        "a": [
            {
                "text": "Not a problem! Chow time!",
                "points": [pTypes.brave, pTypes.relaxed]
            },
            {
                "text": "Turn it down briefely, then decide.",
                "points": [pTypes.timid]
            },
            {
                "text": "Get someone to try it first.",
                "points": [pTypes.bold, pTypes.bold]
            }
        ]
    },
    //31
    {
        "q": "You've stuffed yourself with a good meal when a great dessert arrives. What do you do?",
        "a": [
            {
                "text": "Eat it. Who cares if I'm stuffed?",
                "points": [pTypes.hasty, pTypes.hasty, pTypes.rash]
            },
            {
                "text": "Turn it down. It's too fattening!",
                "points": [pTypes.hardy]
            },
            {
                "text": "Yum! I love dessert the most!",
                "points": [pTypes.brave, pTypes.jolly, pTypes.jolly, pTypes.relaxed]
            }
        ]
    },
    //32
    {
        "q": "Your friend made a meal that tastes terrible. They ask, \"How is it?\". You say...?",
        "a": [
            {
                "text": "\"Terrible!\"",
                "points": [pTypes.brave, pTypes.quiet]
            },
            {
                "text": "Just smile.",
                "points": [pTypes.calm, pTypes.calm, pTypes.lonely]
            },
            {
                "text": "Um... it's good...",
                "points": [pTypes.rash, pTypes.timid]
            }
        ]
    },

    //33
    {
        "q": "You're eating at a very fancy restaurant known for its food. Which course do you select?",
        "a": [
            {
                "text": "Seared steak.",
                "points": [pTypes.impish, pTypes.impish, pTypes.naive, pTypes.naive]
            },
            {
                "text": "Healthy fish.",
                "points": [pTypes.hardy]
            },
            {
                "text": "Anything! It's all good!",
                "points": [pTypes.bold, pTypes.bold]
            }
        ]
    },
    //34
    {
        "q": "Everyone's sharing a dessert, & there's an extra piece. What do you do?",
        "a": [
            {
                "text": "Don't tell anyone.",
                "points": [pTypes.bold, pTypes.bold, pTypes.timid]
            },
            {
                "text": "Let everyone know.",
                "points": [pTypes.docile, pTypes.docile, pTypes.rash, pTypes.rash]
            },
            {
                "text": "first come, first served!",
                "points": [pTypes.impish, pTypes.impish]
            }
        ]
    },
    //35
    {
        "q": "Your friend offers to treat you to dinner. What do you do?",
        "a": [
            {
                "text": "I'm there!",
                "points": [pTypes.bold, pTypes.bold]
            },
            {
                "text": "Allow me.",
                "points": [pTypes.jolly, pTypes.jolly]
            },
            {
                "text": "Thanks...",
                "points": [pTypes.quirky, pTypes.quirky]
            }
        ]
    },
    //36
    {
        "comment": "Suddenly...",


        "q": "Everyone around you is laughing at something you think is pretty boring. What do you do?",
        "a": [
            {
                "text": "Nothing, really.",
                "points": [pTypes.brave, pTypes.bold]
            },
            {
                "text": "Laught along.",
                "points": [pTypes.lonely, pTypes.timid, pTypes.timid]
            },
            {
                "text": "It depends on the situation.",
                "points": [pTypes.quiet, pTypes.quirky]
            }
        ]
    },
    //37
    {
        "q": "Do you prefer being busy or having a lot of free time?",
        "a": [
            {
                "text": "Being busy.",
                "points": [pTypes.relaxed, pTypes.relaxed, pTypes.sassy]
            },
            {
                "text": "Free time!",
                "points": [pTypes.calm, pTypes.calm]
            },
            {
                "text": "In between.",
                "points": [pTypes.quirky, pTypes.quirky]
            }
        ]
    },
    //38
    {
        "q": "You're about to buy a popular game when someone else gets the last copy! How do you feel?",
        "a": [
            {
                "text": "Whatever.",
                "points": [pTypes.calm, pTypes.calm]
            },
            {
                "text": "Annoyed. I was here first!",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.relaxed, pTypes.relaxed]
            },
            {
                "text": "I shed a few tears.",
                "points": [pTypes.lonely, pTypes.lonely]
            }
        ]
    },
    //39
    {
        "q": "You run into a person you've never met before. What do you do?",
        "a": [
            {
                "text": "Make small talk.",
                "points": [pTypes.calm]
            },
            {
                "text": "Say nothing!",
                "points": [pTypes.quirky]
            },
            {
                "text": "Make an excuse to get away!",
                "points": [pTypes.timid, pTypes.timid]
            }
        ]
    },
    //40
    {
        "q": "Good news & bad news... which one do you want to hear first?",
        "a": [
            {
                "text": "The good news.",
                "points": [pTypes.relaxed, pTypes.relaxed]
            },
            {
                "text": "The bad news.",
                "points": [pTypes.bold, pTypes.naive, pTypes.naive]
            },
            {
                "text": "I don't want either.",
                "points": [pTypes.timid, pTypes.timid]
            }
        ]
    },
    //41
    {
        "q": "Hey look! There's someone behind you! So... did you look just now?",
        "a": [
            {
                "text": "Don't do that! You scared me!",
                "points": [pTypes.timid, pTypes.timid]
            },
            {
                "text": "OK, I admit. You tricked me.",
                "points": [pTypes.docile, pTypes.docile]
            },
            {
                "text": "No way. I didn't fall for it.",
                "points": [pTypes.lonely, pTypes.lonely, pTypes.sassy, pTypes.sassy]
            },
            {
                "text": "Huh?! What?",
                "points": [pTypes.relaxed, pTypes.relaxed]
            }
        ]
    },
    //42
    {
        "q": "How are your mornings?",
        "a": [
            {
                "text": "Always in a rush.",
                "points": [pTypes.brave, pTypes.impish, pTypes.impish]
            },
            {
                "text": "Always perfect.",
                "points": [pTypes.quiet]
            },
            {
                "text": "They are OK.",
                "points": [pTypes.docile, pTypes.timid, pTypes.timid]
            }
        ]
    },
    //43
    {
        "q": "You've been invited to a wonderful party. It's time for the party to start, but there's nobody there! What do you do?",
        "a": [
            {
                "text": "Did something happen?",
                "points": [pTypes.docile, pTypes.docile, pTypes.lonely, pTypes.lonely]
            },
            {
                "text": "Maybe I have the day wrong?",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.relaxed, pTypes.relaxed]
            },
            {
                "text": "Let's get this party started!",
                "points": [pTypes.brave]
            }
        ]
    },
    //44
    {
        "q": "You take off your shoes to realize your socks are different colors! What do you do?",
        "a": [
            {
                "text": "Get embarrased!",
                "points": [pTypes.docile, pTypes.docile]
            },
            {
                "text": "Again?!",
                "points": [pTypes.rash, pTypes.rash]
            },
            {
                "text": "I meant to do that!",
                "points": [pTypes.jolly, pTypes.jolly]
            }
        ]
    },
    //45
    {
        "q": "Did you make any New Year's Resolutions?",
        "a": [
            {
                "text": "Of course!",
                "points": [pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "Nope.",
                "points": [pTypes.quirky, pTypes.quirky, pTypes.rash]
            },
            {
                "text": "What are those?",
                "points": [pTypes.relaxed, pTypes.relaxed]
            }
        ]
    },
    //46
    {
        "q": "You're in a completely silent assemble when someone passes gas! What do you do?",
        "a": [
            {
                "text": "Roll on the floor laughing!",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.naive, pTypes.naive]
            },
            {
                "text": "Just let it go by...",
                "points": [pTypes.docile, pTypes.docile, pTypes.impish, pTypes.impish]
            },
            {
                "text": "Who was that?!",
                "points": [pTypes.brave]
            }
        ]
    },
    //47
    {
        "q": "You're running a marathon, & when you start you fall flat on your face! What will you do?",
        "a": [
            {
                "text": "I'm not giving up yet!",
                "points": [pTypes.brave, pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "Just give up.",
                "points": [pTypes.quirky, pTypes.quirky]
            },
            {
                "text": "Shout, \"START OVER!\"",
                "points": [pTypes.brave, pTypes.rash]
            }
        ]
    },
    //48
    {
        "q": "You find something at a great bargain price! What do you do?",
        "a": [
            {
                "text": "Buy it right away!",
                "points": [pTypes.hasty, pTypes.hasty]
            },
            {
                "text": "Think about whether I need it.",
                "points": [pTypes.quiet]
            },
            {
                "text": "Demand an even bigger discount!",
                "points": [pTypes.brave]
            }
        ]
    },
    //49
    {
        "q": "You've been asked to do a difficult task. What will you do?",
        "a": [
            {
                "text": "Do it myself.",
                "points": [pTypes.brave, pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "Ask someone to help.",
                "points": [pTypes.docile]
            },
            {
                "text": "Make someone else do it!",
                "points": [pTypes.brave, pTypes.sassy]
            }
        ]
    },
    //50
    {
        "q": "You notice a toy you bought for full price yesterday is marked as half the price today! How do you feel?",
        "a": [
            {
                "text": "Heartbroken...",
                "points": [pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "Aaargh!!",
                "points": [pTypes.docile, pTypes.docile]
            },
            {
                "text": "Bad timing, I guess...",
                "points": [pTypes.brave, pTypes.calm, pTypes.calm]
            }
        ]
    },
    //51
    {
        "q": "Your friend is running a little late to meet you. Is that OK?",
        "a": [
            {
                "text": "Yes.",
                "points": [pTypes.brave, pTypes.relaxed]
            },
            {
                "text": "Not at all!",
                "points": [pTypes.hasty, pTypes.lonely, pTypes.lonely]
            }
        ]
    },
    //52
    {
        "q": "Do you think that, no matter what happens, life goes on?",
        "a": [
            {
                "text": "All the time!",
                "points": [pTypes.jolly, pTypes.relaxed, pTypes.relaxed]
            },
            {
                "text": "Never.",
                "points": [pTypes.quiet]
            }
        ]
    },
    //53
    {
        "q": "The phone's ringing! What do you do?",
        "a": [
            {
                "text": "Answer right away!",
                "points": [pTypes.hardy, pTypes.hardy, pTypes.lonely, pTypes.lonely]
            },
            {
                "text": "Wait a bit before answering.",
                "points": [pTypes.quiet]
            },
            {
                "text": "Ignore it & let it ring.",
                "points": [pTypes.timid]
            }
        ]
    },
    //54
    {
        "q": "Your friend seems to be making plans to hang out, just out of earshot. You think...",
        "a": [
            {
                "text": "I want to go too!",
                "points": [pTypes.naive, pTypes.naive]
            },
            {
                "text": "No big deal.",
                "points": [pTypes.lonely, pTypes.lonely]
            },
            {
                "text": "Will they invite me?",
                "points": [pTypes.timid]
            }
        ]
    },
    //55
    {
        "q": "Do you think it's important to be fashionably late?",
        "a": [
            {
                "text": "Yes.",
                "points": [pTypes.bold, pTypes.bold, pTypes.quiet, pTypes.quiet]
            },
            {
                "text": "No.",
                "points": [pTypes.brave]
            },
            {
                "text": "I don't know.",
                "points": [pTypes.docile, pTypes.docile]
            }
        ]
    },
    //56
    {
        "q": "You've won a big raffle ticket! You say...",
        "a": [
            {
                "text": "Woo-hoo!",
                "points": [pTypes.jolly, pTypes.naive, pTypes.naive]
            },
            {
                "text": "I can't believe it...",
                "points": [pTypes.timid]
            },
            {
                "text": "This is my little secret.",
                "points": [pTypes.quiet, pTypes.quiet]
            }
        ]
    },
    //57
    {
        "q": "Do you think blaming someone else on something you did is sometimes necessary?",
        "a": [
            {
                "text": "Of course!",
                "points": [pTypes.quiet, pTypes.quiet, pTypes.sassy, pTypes.sassy]
            },
            {
                "text": "No way!",
                "points": [pTypes.brave]
            }
        ]
    },
    //58
    {
        "q": "Your friend suddenly won't listen to you, when everything was fine yesterday. What do you think?",
        "a": [
            {
                "text": "Maybe they're sick.",
                "points": [pTypes.hardy, pTypes.hardy]
            },
            {
                "text": "They're lost in thought.",
                "points": [pTypes.quiet, pTypes.quiet]
            },
            {
                "text": "What?! Why?!",
                "points": [pTypes.timid]
            }
        ]
    },
    //59
    {
        "q": "You fail miserably! Everyone found out, & they're disappointed in you... what do you do?",
        "a": [
            {
                "text": "Try & hide.",
                "points": [pTypes.timid]
            },
            {
                "text": "Think of an excuse.",
                "points": [pTypes.naive, pTypes.naive, pTypes.sassy, pTypes.sassy]
            },
            {
                "text": "Drop down & play dead!",
                "points": [pTypes.rash, pTypes.rash]
            }
        ]
    },
    //60
    {
        "q": "You want to reveal you like someone a whole bunch! What do you do?",
        "a": [
            {
                "text": "Show it by playing together.",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.quiet]
            },
            {
                "text": "Make it obvious by... playing a prank!",
                "points": [pTypes.lonely, pTypes.lonely, pTypes.naive]
            },
            {
                "text": "State it clearly for all to hear!",
                "points": [pTypes.bold, pTypes.brave, pTypes.impish, pTypes.impish]
            },
            {
                "text": "Keep it to myself! It's too risky!",
                "points": [pTypes.timid, pTypes.timid]
            }
        ]
    },
    //61
    {
        "q": "The people at the next table are singing for someone's birthday. What do you do?",
        "a": [
            {
                "text": "Stay on the sidelines.",
                "points": [pTypes.calm]
            },
            {
                "text": "Sing along!",
                "points": [pTypes.jolly, pTypes.jolly, pTypes.naive, pTypes.naive]
            },
            {
                "text": "Walk away.",
                "points": [pTypes.lonely, pTypes.sassy, pTypes.sassy]
            }
        ]
    },
    //62
    {
        "q": "You're on a stroll when a TV crew pounces you for an interview! What do you do?",
        "a": [
            {
                "text": "Run away! How embarrassing!",
                "points": [pTypes.timid, pTypes.timid]
            },
            {
                "text": "Answer questions properly.",
                "points": [pTypes.brave, pTypes.sassy, pTypes.sassy]
            },
            {
                "text": "Yuck it up! Whoo-hoo! I'm on T.V.!",
                "points": [pTypes.bold, pTypes.bold, pTypes.naive, pTypes.naive]
            }
        ]
    },
    //63
    {
        "q": "You see a big and comfortable bed. Your first reaction is to...",
        "a": [
            {
                "text": "Jump on it!",
                "points": [pTypes.hasty, pTypes.sassy]
            },
            {
                "text": "Curl up.",
                "points": [pTypes.lonely, pTypes.lonely]
            },
            {
                "text": "Belly flop!",
                "points": [pTypes.impish, pTypes.impish]
            }
        ]
    },
    //64
    {
        "q": "You're daydreaming... when your friend sprays you with water! What do you do?",
        "a": [
            {
                "text": "Get mad.",
                "points": [pTypes.hasty, pTypes.hasty]
            },
            {
                "text": "Get sad.",
                "points": [pTypes.lonely, pTypes.lonely]
            },
            {
                "text": "Woo-hoo! Water fight!",
                "points": [pTypes.impish, pTypes.impish, pTypes.jolly, pTypes.jolly, pTypes.naive, pTypes.naive]
            }
        ]
    }
];