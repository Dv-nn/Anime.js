const stage = document.querySelector('.container');
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];
const field = col * row;

for (let i = 0; i < field; i++) {
   const div = document.createElement('div');
   fragment.appendChild(div);
   div.className = 'tail';
}

stage.appendChild(fragment);

const stageAnimation = anime.timeline({
   targets: '.tail',
   easing: 'easeInBack',
   delay: anime.stagger(10, { from: 'last' }),
   duration: 2000,
   endDelay: 1000,
   loop: true,
   autoplay: false,
})
   .add({
      translateX: () => anime.random(-500, 500),
      translateY: () => anime.random(-500, 500),
      delay: anime.stagger(200, { grid: grid, from: 'last' }),
      scale: 0.5,
      backgroundColor: '#15ffa5',
      borderRadius: '50%',
   })
   .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
      duration: 3000,
      backgroundColor: '#b15dff',
   })
   .add({
      translateX: [
         {
            value: anime.stagger('-.1em', {
               grid: grid,
               from: 'first',
               axis: 'x'
            }),
         },
         {
            value: anime.stagger('.1em', {
               grid: grid,
               from: 'first',
               axis: 'x'
            }),
         },
         {
            value: anime.stagger(0, {
               grid: grid,
               from: 'first',
               axis: 'x'
            }),
         },
      ],
      translateY: [
         {
            value: anime.stagger('.1em', { grid: grid, from: 'last', axis: 'y' })
         },
         {
            value: anime.stagger('-.1em', { grid: grid, from: 'last', axis: 'y' })
         },
         {
            value: anime.stagger(0, { grid: grid, from: 'last', axis: 'y' })
         },
      ],
      delay: anime.stagger(100, { grid: grid, from: 'last' }),
      scale: 0.7,
      backgroundColor: '#15ffa5',
      borderRadius: 0,
   })
   .add({
      translateX: [
         {
            value: anime.stagger('-5px', {
               grid: grid,
               from: 'center',
               axis: 'x'
            }),
         },
         {
            value: anime.stagger('5px', {
               grid: grid,
               from: 'center',
               axis: 'x'
            }),
         },
         {
            value: anime.stagger(0, {
               grid: grid,
               from: 'center',
               axis: 'x'
            }),
         },
      ],
      translateY: [
         {
            value: anime.stagger('-5px', { grid: grid, from: 'center', axis: 'y' })
         },
         {
            value: anime.stagger('5px', { grid: grid, from: 'center', axis: 'y' })
         },
         {
            value: anime.stagger(0, { grid: grid, from: 'center', axis: 'y' })
         },
      ],
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
      scale: 1,
      backgroundColor: '#14ffeb',
   });

stageAnimation.play();