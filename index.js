const dadJokesStart = [
    'What is the difference between a',
    'Whats the best thing about a',
    'Whats the worst thing about a',
  ];
  
  const dadJokesMiddle = [
    'Pineapple',
    'Red Squirrel',
    'Australian',
    'Garden Gnome',
    'Dutch Person',
  ];
  
  const dadJokesEnd = ['Nothing!', 'Everything!', 'Most things!'];
  
  const randomJoke = () => {
    let p1 = dadJokesStart[Math.floor(Math.random() * 3)];
    let p2 = dadJokesMiddle[Math.floor(Math.random() * 5)];
    let p3 = dadJokesEnd[Math.floor(Math.random() * 3)];
    
    // Check if p1 is a specific phrase and modify p2 accordingly
    if (p1 === 'What is the difference between a') {
      p2 = dadJokesMiddle[Math.floor(Math.random() * 5)] + ' and a' + dadJokesMiddle[Math.floor(Math.random() * 5)];
    }
    
    return `${p1} ${p2} .... ${p3}`;
  };
  
  console.log(randomJoke());
  