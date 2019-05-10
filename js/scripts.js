const div = document.querySelector('.grid-container');

drawGrid(20);
paint();


function drawGrid(size) {

    for(let i=0; i<(size*size); i++) {
        let block = document.createElement('div');
        let cSize = 0;
        cSize = 600 / size;
        block.style.cssText = 'width: ' + cSize + 'px ; height: ' + cSize + 'px';
        block.classList.add('cell');
        div.appendChild(block);

    }

}

function paint(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((draw)=>{
       draw.addEventListener('mouseenter',()=>{
          
        draw.classList.add('filled');
        
    })
  })
}

function resetGrid(){
    while(div.hasChildNodes()){
     div.removeChild(div.lastChild);
    }
  
   drawGrid(sizePrompt());
   paint();
  }  

function sizePrompt(){
        
        let gSize = prompt("How many squares in your grid?");
        return parseInt(gSize)
}
