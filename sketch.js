let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 100 , g = 100, b = 0
// ====================================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
  //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
  font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//=====================================================================

function setup() {  //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight);  //產生一個畫布
  angleMode(DEGREES)  //設定三角函數的角度用0~36
  background("#ffadad")  //設定背景顏色
 //===================================================================
 points = font.textToPoints("YUUUU", -300, 80, 200, {
  sampleFactor:0.1
 })
  
}

function draw() {
  //background(220);  //設定背景顏色灰白色(0黑色~225白)
  background("#caf0f8")  //設定背景顏色
  noFill()  //以下所畫的物件不要充滿顏色
  stroke("#ffc2d1")  //設定框線顏色
  strokeWeight(4)  //框線的粗細
  rectMode(CENTER)  //設定方形的座標點放在方形的中間  

  //直告變數
  var rect_width = 50 +mouseX/10  //方框的寬度
  var bc_width = 50 +mouseY/10  //大圓的寬度
  var sc_width = 25 +mouseX/100  //小圓的寬度

  for(let i=0;i<40;i=i+1){
     for(let j=0;j<20;j=j+1){
       if(j<7){  //第0~6排共7排設定的顏色
          stroke("#014f86")
       }else if(j<14){
          stroke("#907ad6")
       } else{  //第14排後
          stroke("#dabfff")
       }
     ellipse(25+50*i,25+50*j,bc_width)  //在座標(x:25,y:25)畫一個直徑為50的圓
     rect(25+50*i,25+50*j,rect_width)  //在座標(x:25,y:25)畫一個50*50的方框
     ellipse(50+50*i,50+50*j,sc_width)  //在座標(x:50,y:50)畫一個直徑為25的圓
   }
  }
  //======================================================================
  //background("#caf0f8")
  //textSize(30)
  //text(mouseX+":"+mouseY,width/2,height/2)
  

  let r = map(sin(frameCount),-1,1,50,255)  
  let g = map(cos(frameCount/2),-1,1,50,255)
  let b = map(sin(frameCount/4),-1,1,50,255)

  
  textSize(75)
  textAlign(CENTER,CENTER)
  translate(width/2,height/2)
  rotate(angle)
  for (let i=0; i<points.length-1; i++)  {
    //text(str(i),points[i].x,points[i].y)  //在(points[i].x,points[i].y)座標上，顯示一個文字(數字)
    //fill("#abc4ff")  //圓的充滿顏色
    //noStroke()
    //strokeWeight(1)  //畫圓的框線粗細
    //ellipse(points[i].x+r*sin(angle+i*10),points[i].y,10)
    stroke(r,g,b) //線條的顏色
    strokeWeight(5)  //線條的粗細
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)  //畫線，兩個點構成一條線
  }
  //===================================================================
  angle = angle+5
  
 
  

}

