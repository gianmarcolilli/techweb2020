const fs = require('fs');
const { imageToChunks, righeToChunks } = require('split-images');

(async()=> {
try {
  const chunckSize = 100;
  const righe = await imageToChunks('https://previews.123rf.com/images/artshock/artshock1210/artshock121000046/15557821-imag-of-water-drops-on-window-and-blue-sky-background.jpg',chunckSize);
  console.log('Number of chunks', righe.length);

  let i = 0;
  righe.forEach(c => {
    i++;


    fs.writeFileSync(`riga_${i}.png`,c);
  });


   const colonne = await  righeToChunks(`riga_1.png`,29)


   colonne.forEach(colonna=>{
    fs.writeFileSync(`colonna.png`,colonna);

   })
  // })
} catch (e) {
  console.log(e);
}

})();
