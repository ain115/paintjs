const canvas = document.getElementById("jsCanvas");
//js상에서도 캔버스의 크기를 줘야함(pixel modifier)
const CANVAS_SIZE = 600;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

//마우스 안누를땐 그리지 않도록 해주는 함수
function stopPainting() {
    painting = false; 
}

function startPainting() {
    painting = true;
}

//마우스 움직일때마다 x,y값 가져오는 함수
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY; 
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
        //ctx.closePath();
    }
}

//컬러 클릭했을때 클릭한 색상
function handleColorClick(event) {
    const color=event.target.style.backgroundColor;
    //캔버스에 색상 넘겨주는 명령어
    ctx.strokeStyle= color;
    //bottom Paint일때 선택한 색상 넣어주기
    ctx.fillStyle = color;
}
//input range로 선 굵기 선택
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

//Fill button을 클릭했을때 
function handleModeClick(){
    if(filling==true) {
        filling=false;
        mode.innerText = "Fill";
    }else{
        filling=true;
        mode.innerHTML = "Paint";
    }
}
//버튼이 paint일때 캔버스에 색채움
function handleCanvasClick() {
    if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    //          0, 0, canvas.width, canvas.height
    }
}
//다시 클릭했을때 이미지 남아있도록
function handleCM(event) {
    event.preventDefault();
}
//이미지 저장
function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
    
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));


if(range) {
    range.addEventListener("input", handleRangeChange);    
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}