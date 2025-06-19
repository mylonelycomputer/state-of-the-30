
let text; 
let genText; 
let markov;
      

//grab some text
      fetch("duterte.txt")
          .then(response => {
             return response.text();
          })
          .then(data => {
            text = data;
        
            //generate text
            generate();
          });


//function which creates a markov model and adds it to the HTML
function generate(){
        
        // create a markov model w' n=4
        markov = RiTa.markov(4);
        
        // load text into the model
        markov.addText(text);
        
        //generate 10 lines
        genText = markov.generate(10);
        console.log(genText);
        
        //adds a space between all the random stuff
        genText.join(" ");    
        
        //add it to the HTML
        document.getElementById("container").innerHTML = genText.join(" ");
        
      }
        

