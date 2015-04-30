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


.factory('movementCards', function() {
  var movementCards = [{
    id: 0,
    name: "card_1",
    title: "Balancing Energy Distribution",
    movie: "/media/1.mp4",
    description: "All of the following movements must be performed precisely. Approach the movements, as if the hands were gliding through water and a gentle resistance exists. The resistance will slowly increase as you make contact with the patient's energy. The patient's body is seldom actually touched. Instead, the work takes place around the patient in the living energy field. These movements help to reprogram the metabolism and return a healthy calmness to the body.<br/><br/>The healer begins the session by positioning a hand on either side of the patient at the hip area. The fingertips are positioned slightly apart, with the fingers and palms gently curved upwards, as if the healer was holding a large grapefruit in each hand. The healer now slowly inhales through the nostrils and continues to inhale while moving the hands upwards until they are facing just above the patient's head (crown chakra). The hands nearly come together above the head but do not touch each other. The hands never touch each other. The hands are now in a position above the patient's head, as if the healer were holding a crown between them.<br/><br/>The movement is now reversed. The healer slowly begins to exhale, and continues to exhale, while simultaneously rotating the curved fingertips and palms downward. The hands now gently glide down to the original starting point at the patient's hips, where the hand motions are again reversed and the entire sequence repeated without stopping for 5 or 6 minutes."
  }, {
    id: 1,
    name: "card_2",
    title: "Opening and Repairing the Energy field: Knitting Movement",
    movie: "/media/2.mp4",
    description: "The left hand will now receive information from the patient's energy field and the right hand will send a new reprogrammed signal back to that field. The body will accept that signal as its own and healing will begin. Begin with both hands facing each other in front of the patient's forehead between the eyebrows. Keep the left hand still so that body signals can be intuitively sensed. Damaged energy that the patient's body is not able to release will leave the patient's body and seek ground by entering the healer's left hand. Healthy energy is already grounded by the patient's own body and will not be affected.<br/><br/>The healer now gently inhales through the nostrils and simultaneously moves the right hand away from the left hand about six inches. The healer then exhales through the nostrils and simultaneously moves the right hand back to the beginning position. Both hands then are then lowered about an inch and the sequence is repeated over and over again until both hands are at the level of the bladder.<br/><br/>These movements through the patient's living energy field help to reprogram the metabolism by improving the patient's microcirculation and establishing balance in the energy flow. A healthy calmness returns to the body when irregular signals have been removed from the living energy field."
  }, {
    id: 2,
    name: "card_3",
    title: "Energizing Sequence: Mobilization of Chi Energy",
    movie: "/media/3.mp4",
    description: "blah"
  }, {
    id: 3,
    name: "card_4",
    title: "Scissors Movement",
    movie: "/media/4.mp4",
    description: "blah"
  }, {
    id: 4,
    name: "card_5",
    title: "Pinch of Salt",
    movie: "/media/5.mp4",
    description: "blah"
  }, {
    id: 5,
    name: "card_6",
    title: "Pressing Sequence",
    movie: "/media/6.mp4",
    description: "blah"
  }, {
    id: 6,
    name: "card_7",
    title: "Spiral Pulling",
    movie: "/media/7.mp4",
    description: "blah"
  }, {
    id: 7,
    name: "card_8",
    title: "Clockwise & Counterclockwise Circular Motion: To Reset the Chi - part 1",
    movie: "/media/81.mp4",
    description: "blah"
  }, {
    id: 8,
    name: "card_8",
    title: "Clockwise & Counterclockwise Circular Motion: To Reset the Chi - part 2",
    movie: "/media/82.mp4",
    description: "blah"
  }, {
    id: 9,
    name: "card_9",
    title: "Directing Energy Flow",
    movie: "/media/9.mp4",
    description: "blah"
  }, {
    id: 10,
    name: "card_10",
    title: 'Energy "Flossing": Unblocking Energy Pathways',
    movie: "/media/10.mp4",
    description: "blah"
  }, {
    id: 11,
    name: "card_11",
    title: "Energy Cocooning: Energy Firming or Shielding",
    movie: "/media/11.mp4",
    description: "blah"
  }, {
    id: 12,
    name: "card_12",
    title: "Contact Healing - part 1",
    movie: "/media/12.mp4",
    description: "blah"
  }, {
    id: 13,
    name: "card_12",
    title: "Contact Healing - part 2",
    movie: "/media/122.mp4",
    description: "blah"
  }, {
    id: 14,
    name: "card_12",
    title: "Contact Healing - part 3",
    movie: "/media/123.mp4",
    description: "blah"
  }, {
    id: 15,
    name: "card_13",
    title: "Ending the Healing Session - part 1",
    movie: "/media/13.mp4",
    description: "blah"
  }, {
    id: 16,
    name: "card_13",
    title: "Ending the Healing Session - part 2",
    movie: "/media/132.mp4",
    description: "blah"
  }, {
    id: 17,
    name: "card_13",
    title: "Ending the Healing Session - part 3",
    movie: "/media/133.mp4",
    description: "blah"
  }];

  return {
    all: function() {
      return movementCards;
    },
    get: function(movementCardId) {
      // Simple index lookup
      return movementCards[movementCardId];
    }
  }
});
