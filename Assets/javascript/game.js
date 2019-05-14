
        window.onload = function () {

            //Creates an array of words 
            var gamePlayerWords = ["tombrady", "joemontana", "michaeljordan", "kobebryant", "tigerwoods"]

            //Computer picks a random index from the array above
            var guessingWord = Array.from(gamePlayerWords[Math.floor(Math.random() * gamePlayerWords.length)])
            console.log(guessingWord);
            //Sets up the answer array to show how many letters to guess using underscores "_"
            //Empty Array
            var currentWordDisplay = []
            var nonCorrect = []
            //Runs a loop through the length of the gamePlayerWord and adds a underscore
            for (var i = 0; i < guessingWord.length; i++) {
                currentWordDisplay[i] = "_"
            }

            //Grabs the word to guess id in the Html
            var grabCurrentword = document.getElementById("wordtoGuess")

            //Makes the content in the word to guess equal to the current word display
            grabCurrentword.textContent = currentWordDisplay

            var grabRemaining = document.getElementById("guessesRemaining")
            var remainingGuesses = 10
            grabRemaining.textContent=remainingGuesses
            
            //Sets number of wins to zero
            var wins=0
            var grabWins= document.getElementById("numberofWins")
            grabWins.textContent=wins
            //Sets a variable for users input 
            var userKey;

            document.onkeyup = function (event) {
                userKey = event.key;

                //*****Correct Guess Statement



                //Displays & Adds the correct letter guessed to current word array 
               
                if (guessingWord.indexOf(userKey) > -1) {

                    currentWordDisplay[guessingWord.indexOf(userKey)] = userKey
                    grabCurrentword.textContent = currentWordDisplay
                    }
                //*****Wrong Guess Statement

                //Displays & Adds the incorrect letter guessed to the nonCorrect array
                else if (guessingWord.indexOf(userKey === -1)) 
                    
                    nonCorrect.push(userKey)
                    var grabIncorrect = document.getElementById("user-guessed")
                    grabIncorrect.textContent = nonCorrect
                
                    console.log(nonCorrect)
                     //Makes the content for the guesses remaining id equal to the remaining guess variable
                    var grabRemaining = document.getElementById("guessesRemaining")
                    var remainingGuesses = 10
                    grabRemaining.textContent = remainingGuesses

                }
                if(currentWordDisplay.indexOf = guessingWord.indexOf){
                     var grabAnswer = document.getElementsByClassName(".answer")
                     grabAnswer.textContent= guessingWord
                 }
                
                // console.log(guessingWord.indexOf(userKey));

                // remainingGuesses--


                // guessLeft.textContent =remainingGuesses

                // };
                // while(remainingGuesses>guessingWord.length){

                //     document.get
                // }




            

        }
 