export const addToHomeScreen = () => {
  if (window.location.hostname === 'localhost') return;
  // Add to Homescreen functionality.
  window.addEventListener('beforeinstallprompt', (e) => {
    // beforeinstallprompt Event fired
    // e.userChoice will return a Promise.
    e.userChoice.then((choice) => {
      console.log(choice.outcome);
      if (choice.outcome === 'dismissed') {
        console.log('User has dismissed the add to home screen');
      } else {
        console.log('User has added to home screen');
      }
    });
  });
};
