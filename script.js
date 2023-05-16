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

    const inputs = [1039];

    //Dynamic input V
    //Dynamic show input V
    //CSS for both above
    //After hit the button, run all algor to the input
    //After ran use the itens array as base to render the screen


    const addButtonInput = document.getElementById('add-button');
    const arrayInput = document.getElementById('array-input');
    const container = document.getElementById("container");



    //Get the NodeList in columns and convert to array.
    const sizeColumnNl = document.querySelectorAll('.memory-space'); 
    const ffColumnNl = document.querySelectorAll('.ff-column'); 
    const bfColumnNl = document.querySelectorAll('.bf-column'); 
    const wfColumnNl = document.querySelectorAll('.wf-column');

    let sizeColumnArr = convertNodelistAndReverse(sizeColumnNl);
    let ffColumnArr = convertNodelistAndReverse(ffColumnNl);
    let bfColumnArr = convertNodelistAndReverse(bfColumnNl);
    let wfColumnArr = convertNodelistAndReverse(wfColumnNl);

    console.log(sizeColumnArr);
    console.log(ffColumnArr);
    console.log(bfColumnArr);
    console.log(wfColumnArr);
    //================================

    
    arrayInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          addToArray();
        }
      });    
    addButtonInput.addEventListener("click", () => {
        addToArray();
        //run fits
        //find correct place in table
        //render in the table
      });

    function addToArray() {
        //Converte o texto para um valor numérico
        let value = parseInt(arrayInput.value);
    
        //Push no valor para o array
        inputs.push(value);
        
        //Caso o input não esteja vazio, cria uma box;
        if(arrayInput.value != '') createBox(value);
    
        clearInput();
        
        console.log(inputs);
      }

      function convertNodelistAndReverse(nodelist){
        let columnArr = Array.from(nodelist);
        let reverseColumnArr =  columnArr.reverse();
        return reverseColumnArr;
    }

    function createBox(value){
        container.innerHTML += `<div class="box">
                <span class="boxValue">
                `+value+`
                </span>
        </div> `
      }
      function clearInput(){
        arrayInput.value = '';
      }

//==========================================================================
    //Algorithm Functions
//==========================================================================
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
