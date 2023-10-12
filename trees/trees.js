document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("grow").addEventListener("click", function (){

        var height = parseInt(document.getElementById("height").value);
        var direction = document.getElementById("treeType").value;
        var isUpsideDown = parseInt(document.getElementById("upsideDown").value);
        var tree = '';
        var space = ' '; // variable for space to make more readable
        var star = '*'; // variable for star to make more readable
        
        switch(direction) {
            case 'left':
                // assume that the last row will have number of stars equal to height, as each row adds another star
                // height - 1 used to find # spaces needed per row
                if(!isUpsideDown){
                    for(i=1; i<=height; i++){
                        var line = '';
                        line += space.repeat(height - i) + star.repeat(i) + '\n';
                        tree += line;
                    }
                // upside down just does the loop in opposite order
                } else if(isUpsideDown){
                    for(i=height; i>=0; i--){
                        var line = '';
                        line += space.repeat(height - i) + star.repeat(i) + '\n';
                        tree += line;
                    }
                }
                break;

            case 'right':
                if(!isUpsideDown){
                    for(i=1; i<=height; i++){
                        var line = '';
                        line += star.repeat(i) + '\n';  
                        tree += line; 
                    }
                // upside down just does the loop in opposite order
                } else if(isUpsideDown){
                    for(i=height; i>=0; i--){
                        var line = '';
                        line += star.repeat(i) + '\n';  
                        tree += line; 
                    }
                }
                break;

            case 'full':
                // calculation to find the most stars possible. used to find # of spaces needed for each row
                var maxStar = (height + (height - 1)); 

                if(!isUpsideDown){
                    for(i=1; i<=height; i++){
                        var line = '';
                        var starsInLine = i + (i - 1); // variable for # of stars in line used in following calc to find # of spaces needed.
                        line += space.repeat((maxStar - starsInLine) /2) + star.repeat(i + (i - 1)) + '\n';
                        tree += line;
                    }
                // upside down just does the loop in opposite order
                } else if(isUpsideDown){
                    for(i=height; i>=1; i--){
                        var line = '';
                        var starsInLine = i + (i - 1); // variable for # of stars in line used in following calc to find # of spaces needed.
                        line += space.repeat((maxStar - starsInLine) /2) + star.repeat(i + (i - 1)) + '\n';
                        tree += line;
                    }
                }
                break;
        }
    
        document.getElementById("forest").innerHTML = tree;

    });

});