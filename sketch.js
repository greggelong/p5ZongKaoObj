 
 let vocab;
 
 
 function setup(){
     createCanvas(800, 800);
     background(0);
     vocab = data.zkv // need to point to the head of the json file
     console.log(vocab)
     fill(0,255,0)
     textSize(30)
     text(vocab[0].Chinese,100,100)
     text(vocab[0].English,100,150)


 }

 function draw(){
     background(0);
     fill(0,255,0);
     let index = floor(map(mouseX,0,width,0,vocab.length-1,true)) // true constrains it so you dont get -1
     console.log(index)
     text(vocab[index].Chinese,100,height/2-25)
     if(mouseIsPressed){
        text(vocab[index].English,100,height/2+25)
     }
 }