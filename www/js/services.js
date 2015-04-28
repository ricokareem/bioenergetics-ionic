angular.module('starter.services', [])

.factory('Ailments', function() {
  var ailments = [{
    id: 0,
    name: 'Migraine/Headaches',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Neck Pain',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Overall Body Pain',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Gastric Stomach Pain Spasms',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Diarrhea',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 5,
    name: 'Chronic Constipation',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 6,
    name: 'Flu',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 7,
    name: 'Bladder Pain',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 8,
    name: 'PMS/Cramps',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 9,
    name: 'Shoulder Pain',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 10,
    name: 'Back Pain',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 11,
    name: 'Dementia',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 12,
    name: 'Thyroid',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 13,
    name: 'Knee Pain',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 14,
    name: 'Leg Pain/Cramps',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return ailments;
    },
    remove: function(ailment) {
      ailments.splice(ailments.indexOf(ailment), 1);
    },
    get: function(ailmentId) {
      for (var i = 0; i < ailments.length; i++) {
        if (ailments[i].id === parseInt(ailmentId)) {
          return ailments[i];
        }
      }
      return null;
    }
  }
})


.factory('HealingCards', function() {
  var healingCards = [{
    id: 0,
    name: "card_1",
    title: "Balancing Energy Distribution",
    movie: "/media/1.mp4"
  }, {
    id: 1,
    name: "card_2",
    title: "Opening and Repairing the Energy field: Knitting Movement",
    movie: "/media/2.mp4"
  }, {
    id: 2,
    name: "card_3",
    title: "Energizing Sequence: Mobilization of Chi Energy",
    movie: "/media/3.mp4"
  }, {
    id: 3,
    name: "card_4",
    title: "Scissors Movement",
    movie: "/media/4.mp4"
  }, {
    id: 4,
    name: "card_5",
    title: "Pinch of Salt",
    movie: "/media/5.mp4"
  }, {
    id: 5,
    name: "card_6",
    title: "Pressing Sequence",
    movie: "/media/6.mp4"
  }, {
    id: 6,
    name: "card_7",
    title: "Spiral Pulling",
    movie: "/media/7.mp4"
  }, {
    id: 7,
    name: "card_8",
    title: "Clockwise &amp; Counterclockwise Circular Motion: To Reset the Chi - part 1",
    movie: "/media/81.mp4"
  }, {
    id: 8,
    name: "card_8",
    title: "Clockwise &amp; Counterclockwise Circular Motion: To Reset the Chi - part 2",
    movie: "/media/82.mp4"
  }, {
    id: 9,
    name: "card_9",
    title: "Directing Energy Flow",
    movie: "/media/9.mp4"
  }, {
    id: 10,
    name: "card_10",
    title: "Energy &quot;Flossing&quot;: Unblocking Energy Pathways",
    movie: "/media/10.mp4"
  }, {
    id: 11,
    name: "card_11",
    title: "Energy Cocooning: Energy Firming or Shielding",
    movie: "/media/11.mp4"
  }, {
    id: 12,
    name: "card_12",
    title: "Contact Healing - part 1",
    movie: "/media/12.mp4"
  }, {
    id: 13,
    name: "card_12",
    title: "Contact Healing - part 2",
    movie: "/media/122.mp4"
  }, {
    id: 14,
    name: "card_12",
    title: "Contact Healing - part 3",
    movie: "/media/123.mp4"
  }, {
    id: 15,
    name: "card_13",
    title: "Ending the Healing Session - part 1",
    movie: "/media/13.mp4"
  }, {
    id: 16,
    name: "card_13",
    title: "Ending the Healing Session - part 2",
    movie: "/media/132.mp4"
  }, {
    id: 17,
    name: "card_13",
    title: "Ending the Healing Session - part 3",
    movie: "/media/133.mp4"
  }];

  return {
    all: function() {
      return healingCards;
    },
    get: function(healingCardId) {
      // Simple index lookup
      return healingCards[healingCardId];
    }
  }
});
