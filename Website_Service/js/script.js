// Get the send, reset and title elements from the HTML
const sendbutton = document.getElementById('send');
const resetbutton = document.getElementById('reset');
const title = document.getElementById('title'); 

// Keep current content so it can be restored later
const Mytext = title.textContent;

// Array with all random messages
const textmessages = [
  'Please click for an appointment',
  'The available time is 10:00 AM.',
  'Email me for any questions',
  'michaeljamestenorio@gmail.com',
  'Thank you for your time!',
];

// Action on clicking "Make an appointment". button
sendbutton.onclick = function () {
  const nextmessage = Math.floor(Math.random() * textmessages.length);
  title.textContent = textmessages[nextmessage];
};

// Action of to reset 
resetbutton.onclick = function () {
  title.textContent = Mytext;
};
