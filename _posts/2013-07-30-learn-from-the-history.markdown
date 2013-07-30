---
layout: post
title: Learn from the history
published: false
---

Sharing knowledge is hard. 

Even if you are part of a small team, having the overview of what is going on, and especially in the code base, requires quite some effort from all your team members. 

And the problem with this lack of overview, is that often it leads to developers solving the same problem, or perhaps similar problems, several times and in different ways. And not only that, but developers also make errors due to lack of knowledge about the domain and the rest of the code base. 

Now, we all probably understand that this will eventually lead to a maintenance hell somewhere down the road. And we do not want to go there, do we?

Practices like Pair Programming and Code Reviews are of course great ways of sharing knowledge, but sharing is then limited between two persons and not the whole team.

I'm going to tell you about a little practice I've been doing for some years now. Of course, it's no silver bullit, but I can most certainly promise that it will help you and your team with delivering better, more maintainable software. 

It goes like this: *When you get in the office in the morning, you grab a cup of coffee as usual. But, instead of drinking your coffee while reading yesterdays news, you drink your coffee while reading yesterdays commits done by you and your team. You pull up the history, read the commit messages, and the changes that are made.*

When you find something good, you will learn something. When you find something wrong, you tell the person who did it, and work together with him to fix it. 

It's as simple as that, and it only takes you a few minutes every day. 

You might experience that it can be a bit hard to begin with, especially if you have a lot of crappy commits. But guess what? You'll get better at committing or checking in as well. Your commits will get more focused, and your messages will get more descriptive. Your source control is no longer just a place where you keep a backup of your files.

One other thing. I mentioned Code Reviews. They are hard. Not doing them necessarily, but getting people to do them. At least from my experience, things go well in the beginning, but then people tend to not do it so much more. I hope I don't have to convince you that doing code reviews are a good thing. Right? By following the little advice I've just given you, you also get code reviews for free. Let's call it a check in review. You'll be amazed by how many bugs, wrongly implemented business rules, and duplicated code you'll find.

So, start learning from your history, stop repeating it, and encourage your team mates to do the same!
