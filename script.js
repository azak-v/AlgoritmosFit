function script(){
    let itens = [
        {value: 1090,
        occupied: false},
        {value: 400,
        occupied: false}, 
        {value: 2000,
        occupied: false},
        {value: 1850,
        occupied: false},
        {value: 714,
        occupied: false},
        {value: 908,
        occupied: false},
        {value: 1210,
        occupied: false},
        {value: 1550,
        occupied: false},
    ];

    const inputs = [1350, 380, 960];



    function firstF(){
        let i = 0;

        for (const input of inputs) {
            for (const object of itens) {
                if(object.value>input && object.occupied==false){
                    console.log(object.value);
                    object.occupied = true;
                    break;
                }
                i++;
            }
            console.log('==============');
        }
    }
    // Return the first-fit for all the inputs array
    
    function firstFb(input){        
        for (const object of itens) {
            if(object.value>input){
                return object.value;
            }
    }
    } //return just the fist-fit

    function bestF(){
        for (const input of inputs) {
            console.log(input);
            let smallest =firstFb(input);
            for (const object of itens) {
                
                if(object.value>input && object.occupied==false){//Se couber e não tiver ocupado
                    console.log("Cabe no: " + object.value);
                    // console.log(object.value + " < " + smallest + " ? ");
                    // console.log(object.value<smallest);
                    if(object.value<smallest){
                        smallest = object.value
                    }
                    // console.log(object.value);
                }
                // object.occupied = true;
                
            }
            itens[findNumberIndex(smallest)].occupied = true;
            console.log("O menor é: "+ smallest);
            console.log("O indice do maior é: " + findNumberIndex(smallest));
            console.log('==============');
        }
    }

    function worstF(){

        for (const input of inputs) {
            console.log(input);
            let biggest =firstFb(input);
            for (const object of itens) {
                
                if(object.value>input && object.occupied==false){//Se couber e não tiver ocupado
                    console.log("Cabe no: " + object.value);
                    // console.log(object.value + " < " + biggest + " ? ");
                    // console.log(object.value<biggest);
                    if(object.value>biggest){
                        biggest = object.value
                    }
                    // console.log(object.value);
                }
                // object.occupied = true;
                
            }
            itens[findNumberIndex(biggest)].occupied = true;
            console.log("O maior é: "+ biggest);
            console.log("O indice do maior é: " + findNumberIndex(biggest));
            console.log('==============');
        }
    }

    function findNumberIndex(number){
        let i = 0;
        for (const objects of itens) {
            if(objects.value==number){
                return i;
            }
            i++;
        }
    }

    worstF();




function resetArray(){
    itens = [
        {value: 1090,
        occupied: false},
        {value: 400,
        occupied: false}, 
        {value: 2000,
        occupied: false},
        {value: 1850,
        occupied: false},
        {value: 714,
        occupied: false},
        {value: 908,
        occupied: false},
        {value: 1210,
        occupied: false},
        {value: 1550,
        occupied: false},
    ];
}
}//Dom
