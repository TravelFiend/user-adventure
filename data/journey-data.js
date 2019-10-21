const protest = {
    id: 'protest',
    title: 'Peaceful protest gone wrong',
    image: '.jpg',
    audio: null,
    action: null,
    description: 'You are drinking a coffe at your favorite shop.  You see people gathered to protest privacy concerns.  They were acting peacefully until a few bad apples start lashing out violently at police.  You see the police begin to move in with their batons and pepper-spray in hand.  Decide your next move.',
    choices: [{
        id: 'help-police',
        descripton: 'You can\'t agree with violence.  You decide to intervene and help the cops put an end to the senseless violence',
        result: 'You help put an end to the protest and everyone goes their own way.  34 protesters are arrested and 12 protesters are sent to the hospital from police related injuries.  Some of the injured dropped their cash and you grabbed it.  You later find out in the news that police planted people to start the violence, giving them a reason to stop the protest.',
        govermentStanding: 50,
        money: 35
    }, {
        id: 'do-nothing',
        descripton: 'You don\'t care about the privacy issues affecting everyone.  You just sit back and watch the events unfold and go about your day.',
        result: 'The protesters were close to progress until the police intervened.  Your inaction allowed a bill to pass, which allows the county to install facial recognition cameras throughout.',
        govermentStanding: 15,
        money: 0
    }, {
        id: 'help-protesters',
        descripton: 'You feel strongly about citizens\' privacy rights and step in to fight back against the man.',
        result: 'You try to stop the cops from moving forward but you get overpowered and thrown to the ground, dropping some of your cash.  Fortunately you\'re not arrested and manage to espace.',
        govermentStanding: -50,
        money: -30
    }]
};

const eminantDomain = {
    id: 'eminant-domain',
    title: 'Government land grab',
    image: 'sturgis.jpg',
    audio: null,
    action: null,
    description: 'The government comes in to town to tell its citizens they need to take their land.  They claim they need to take the land to procure resources that will help the the county get out of debt.  How will you proceed?',
    choices: [{
        id: 'reason-with-citizens',
        descripton: 'You understand the county needs money to thrive.  You help the governments reason with its citizens and convince them that selling their land is for the best.',
        result: 'The government steps in and makes the land grab.  They are able to pay off their debts and even have extra funds which could be used to serve the people, but instead are placed in the politicians\' (and your) pocket.',
        govermentStanding: 55,
        money: 60
    }, {
        id: 'do-nothing',
        descripton: 'You are able to see valid points on each sides.  You decide it\'s best to not intervene.',
        result: 'Some of the citizens decide to sell and some stand their ground.  The government isn\'t able to pay off their debts but they are a step closer',
        govermentStanding: 0,
        money: 10
    }, {
        id: 'block-police',
        descripton: 'You don\'t trust the government and convince the citizens to stand their ground',
        result: 'The people take the government to court and win their case.  No land is taken and the goverment is forced to look for alternative options to solve their debt problems',
        govermentStanding: -65,
        money: 0
    }
    ]
};

const revolution = {
    id: 'revolution',
    title: 'The people have risen!!!',
    image: 'open-road.jpg',
    audio: null,
    action: null,
    description: 'The time has come.  The people are fed up with the goverment, and have decided to stage a coup.  You join them in breaking into government headquarters.  What will you do?',
    choices: [{
        id: 'side-with-government',
        descripton: 'You are comfortable and don\'t want things to change. Stand by your government and protect your leaders.',
        result: 'You stand beside your leaders and try to protect them from the uprising.  The revolution kick down the door and take your leader\'s life.  The people have taken power back from their leader.',
        govermentStanding: 30,
        money: 0
    }, {
        id: 'do-nothing',
        descripton: 'You don\'t want to be involved in any way, Let the cards fall as they will.',
        result: 'The people charge governmenet headquarters and kill the leader.  They now have control over the county.',
        govermentStanding: -15,
        money: 10
    }, {
        id: 'help-the-people',
        descripton: 'You are ready for change. Join the revolution and charge government headquarters.',
        result: 'You charge government headquarters and take control.  Your associates take the leader\'s life and now control the county',
        govermentStanding: -60,
        money: 25
    }]
};

const levels = [protest, eminantDomain, revolution];

export default levels;