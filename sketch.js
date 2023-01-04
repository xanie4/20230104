var colors = "d8e2dc-ffe5d9-ffcad4-f4acb7-9d8189".split("-").map(a=>"#"+a)
var clr =[]
var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
var candy_x = [] //新增糖果x軸的變數
var candy_y = [] //新增糖果y軸的變數
var candy_size = [] //新增糖果大小的變數
var candy_num = 20 //新增糖果數量的變數並設為20

function preload(){
    song = loadSound("halloween.mp3");
    
  }



function setup() {
  createCanvas(windowWidth, windowHeight);
  

  
  
 
  
 

  //按鈕一
  music_btn = createButton("撥放音樂")
  music_btn.position(10,10) //X、Y位置在(10,10)的地方畫一個方框
  music_btn.size(350, 100);//寬高 (350,100)
  music_btn.style('background-color', 'black');//改變按鈕的背景顏色
  music_btn.style('font-size', '44px');//按鈕字的大小
  music_btn.style('color', 'white');//按鈕字的顏色
  music_btn.mousePressed(music_btn_pressed)

   //按鈕二
   mouse_btn = createButton("暫停")
   mouse_btn.position(370,10)
   mouse_btn.size(350, 100);
   mouse_btn.style('background-color', '#f3c4fb');
   mouse_btn.style('font-size', '44px');
   mouse_btn.style('color', 'white');
   mouse_btn.mousePressed(mouse_btn_pressed)

   //語音辨識
  Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(740,10)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

  for(var i=0;i<candy_num;i++){ //設定迴圈，讓糖果變多
    candy_size[i] = random(100,400) //亂數糖果的大小100~400
    candy_x[i] = random(100,width) //糖果亂數100~寬
    candy_y[i] = random(300,height) //糖果亂數300~高
    clr[i] = colors[int(random(0,colors.length))] //取亂數從0到顏色長度
    }
  }

  function music_btn_pressed(){
    song.stop()
    song.play()
    songIsplay = true
    mosueIsplay = false
    amp=new p5.Amplitude() 
    music_btn.style('background-color','#f3c4fb')
    mouse_btn.style('background-color','black')
    Speech_btn.style('background-color','black') 
  
  }
  function mouse_btn_pressed(){
    song.pause()
    mosueIsplay = true
    songIsplay = false
    music_btn.style('background-color','black')
    mouse_btn.style('background-color','#f3c4fb')
    Speech_btn.style('background-color','black') 
  
  }
  function Speech_btn_pressed(){
    music_btn.style('background-color','black')
    mouse_btn.style('background-color','black')
    Speech_btn.style('background-color','#f3c4fb') 
    myRec.onResult = showResult;
    myRec.start();
  
  
  
  }

  function showResult() //語音說話2
{
	if(myRec.resultValue==true) {
	     result = myRec.resultString
         if(myRec.resultString==="跳舞")
            {
                music_btn_pressed()
             }
         if(myRec.resultString==="不要跳")
            {
 
              mouse_btn_pressed()
             }
	}
}
 


        

  function draw() {
      
      
      
      background("#caf0f8"); //背景
      textSize(50) //設文字大小50
      text("X:"+mouseX+"  Y:"+mouseY,50,50) //文字在50,50的位置顯示X、Y軸座標
      
        for(var j=0;j<candy_num;j++){ //設定迴圈，讓糖果變多
          push()
        var f_s = candy_size[j] //宣告f_s為candy_size[j]
        translate(candy_x[j],candy_y[j]) //把(0,0)座標原點移到視窗的中間
            
        
        stroke("#fee440")
        fill(mouseY%256,(184+frameCount)%240,1.5+mouseX/3)
        triangle(-100,-25,-100,25,-50,0)
        triangle(20,-25,20,25,-30,0)
        ellipse(-40,0,50)//糖果
        pop()
    }
  
       
      
  // if(mouseIsPressed){
  //   push();
  //   translate(width/2,height/2)
  //   fill("#7b2cbf")
  //   triangle(-100,-20,90,-130,75,30)//帽子上面三角形
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#7b2cbf")
  //   quad(-30,90,-90,200,130,200,10,52)//披風
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#7b2cbf")
  //   ellipse(20,201,219,45)//披風
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/9.5);
  //   fill("#7b2cbf")
  //   ellipse(0,0,300,100)//帽子
  //   pop();
  
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/9.5);
  //   noStroke()
  //   fill("#5a189a")
  //   ellipse(0,0,150,50)//帽子裡面
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/8);
  //   noStroke()
  //   fill("#ff8fab")
  //   ellipse(-100,39,130,30)//角2
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/8);
  //   noStroke()
  //   fill("#ff8fab")
  //   ellipse(90,30,130,30)//角6
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#ff8fab")
  //   ellipse(90,30,130,30)//角5
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#ff8fab")
  //   ellipse(-120,28,130,30)//角1
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/3.8);
  //   noStroke()
  //   fill("#ff8fab")
  //   ellipse(-70,45,130,30)//角3
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/1.1);
  //   noStroke()
  //   fill("#ff8fab")
  //   ellipse(-75,-20,130,30)//角4
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/60);
  //   noStroke()
  //   fill("#ffc8dd")
  //   ellipse(-10,250,30,70)//右腳
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/40);
  //   noStroke()
  //   fill("#ffc8dd")
  //   ellipse(50,255,30,70)//左腳
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#ffc8dd")
  //   ellipse(-80+map(mouseX,0,width,-10,5),130+map(mouseY,0,height,-5,5),70,30)//右手
  //   rect(-80+map(mouseX,0,width,-10,5),115+map(mouseY,0,height,-5,5),60,30)
  //   pop();
  
   
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/40);
  //   noStroke()
  //   fill("#ffc8dd")
  //   ellipse(-20,30,180,120)//蠑螈頭
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#ffc8dd")
  //   triangle(-10,110,-10,250,140,280)//蠑螈尾巴
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/-11.5);
  //   noStroke()
  //   fill("#ffc8dd")
  //   ellipse(-40,160,150,200)//蠑螈身體
  //   pop();
  
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/-8);
  //   noStroke()
  //   fill(0)
  //   triangle(-160+map(mouseX,0,width,-10,5),-10+map(mouseY,0,height,-5,5),-154+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5),-146+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5))//魔法棒
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   stroke("#ff99c8")
  //   strokeWeight(1.5)
  //   fill("#ffc8dd")
  //   ellipse(40,150,30,70)//左手
  //   noStroke()
  //   rect(20,112,35,30)
  //   pop();
  
  
  //   push();
  //   translate(width/2,height/2)
  //   stroke(0)
  //   strokeWeight(3)
  //   line(-80,17,-60,10)
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   stroke(0)
  //   strokeWeight(3)
  //   line(14,15,34,22)
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   fill("#ff99c8")
  //   noStroke()
  //   ellipse(-85,30,30,15)//腮紅
  //   rotate(PI/40)
  //   ellipse(40,32,30,15)//腮紅
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   fill("#9d4edd")
  //   noStroke()
  //   triangle(-55,70,-57,100,-20,85)
  //   triangle(10,70,11,100,-30,85)
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   fill("#ffc8dd")
  //   rotate(PI/-15)
  //   ellipse(-37,20,25,15)//嘴巴
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   noStroke()
  //   fill("#ffc8dd")
  //   rect(-43,13,30,15)
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   fill("#ffc8dd")
  //   rotate(PI/30)
  //   ellipse(-10,30,25,15)//嘴巴
  //   pop();
  
  //   push();
  //   translate(width/2,height/2)
  //   rotate(PI/-30)
  //   noStroke()
  //   fill("#ffc8dd")
  //   rect(-29,14,25,15)
  //   pop();

  // }
    
  // else{  
  // // push();
  // // translate(width/2,height/2)
  // // fill("#7b2cbf")
  // // triangle(-100,-20,90,-130,75,30)//帽子上面三角形
  // // pop();

  // // push();
  // // translate(width/2,height/2)
  // // noStroke()
  // // fill("#7b2cbf")
  // // quad(-30,90,-90,200,130,200,10,52)//披風
  // // pop();

  // // push();
  // // translate(width/2,height/2)
  // // noStroke()
  // // fill("#7b2cbf")
  // // ellipse(20,201,219,45)//披風
  // // pop();

  // // push();
  // // translate(width/2,height/2)
  // // rotate(PI/9.5);
  // // fill("#7b2cbf")
  // // ellipse(0,0,300,100)//帽子
  // // pop();


  // // push();
  // // translate(width/2,height/2)
  // // rotate(PI/9.5);
  // // noStroke()
  // // fill("#5a189a")
  // // ellipse(0,0,150,50)//帽子裡面
  // // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/8);
  // noStroke()
  // fill("#ff8fab")
  // ellipse(-100,39,130,30)//角2
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/8);
  // noStroke()
  // fill("#ff8fab")
  // ellipse(90,30,130,30)//角6
  // pop();

  // push();
  // translate(width/2,height/2)
  // noStroke()
  // fill("#ff8fab")
  // ellipse(90,30,130,30)//角5
  // pop();

  // push();
  // translate(width/2,height/2)
  // noStroke()
  // fill("#ff8fab")
  // ellipse(-120,28,130,30)//角1
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/3.8);
  // noStroke()
  // fill("#ff8fab")
  // ellipse(-70,45,130,30)//角3
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/1.1);
  // noStroke()
  // fill("#ff8fab")
  // ellipse(-75,-20,130,30)//角4
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/60);
  // noStroke()
  // fill("#ffc8dd")
  // ellipse(-10,250,30,70)//右腳
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/40);
  // noStroke()
  // fill("#ffc8dd")
  // ellipse(50,255,30,70)//左腳
  // pop();

  // push();
  // translate(width/2,height/2)
  // noStroke()
  // fill("#ffc8dd")
  // ellipse(-80+map(mouseX,0,width,-10,5),130+map(mouseY,0,height,-5,5),70,30)//右手
  // rect(-80+map(mouseX,0,width,-10,5),115+map(mouseY,0,height,-5,5),60,30)
  // pop();

 

  // push();
  // translate(width/2,height/2)
  // rotate(PI/40);
  // noStroke()
  // fill("#ffc8dd")
  // ellipse(-20,30,180,120)//蠑螈頭
  // pop();

  // push();
  // translate(width/2,height/2)
  // noStroke()
  // fill("#ffc8dd")
  // triangle(-10,110,-10,250,140,280)//蠑螈尾巴
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/-11.5);
  // noStroke()
  // fill("#ffc8dd")
  // ellipse(-40,160,150,200)//蠑螈身體
  // pop();


  // // push();
  // // translate(width/2,height/2)
  // // rotate(PI/-8);
  // // noStroke()
  // // fill(0)
  // // triangle(-160+map(mouseX,0,width,-10,5),-10+map(mouseY,0,height,-5,5),-154+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5),-146+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5))//魔法棒
  // // pop();

  // push();
  // translate(width/2,height/2)
  // stroke("#ff99c8")
  // strokeWeight(1.5)
  // fill("#ffc8dd")
  // ellipse(40,150,30,70)//左手
  // noStroke()
  // rect(20,112,35,30)
  // pop();


  // push();
  // translate(width/2,height/2)
  // stroke(0)
  // strokeWeight(3)
  // line(-80,17,-60,10)
  // pop();

  // push();
  // translate(width/2,height/2)
  // stroke(0)
  // strokeWeight(3)
  // line(14,15,34,22)
  // pop();

  // push();
  // translate(width/2,height/2)
  // fill("#ff99c8")
  // noStroke()
  // ellipse(-85,30,30,15)//腮紅
  // rotate(PI/40)
  // ellipse(40,32,30,15)//腮紅
  // pop();

  // // push();
  // // translate(width/2,height/2)
  // // fill("#9d4edd")
  // // noStroke()
  // // triangle(-55,70,-57,100,-20,85)
  // // triangle(10,70,11,100,-30,85)
  // // pop();

  // push();
  // translate(width/2,height/2)
  // fill("#ffc8dd")
  // rotate(PI/-15)
  // ellipse(-37,20,25,15)//嘴巴
  // pop();

  // push();
  // translate(width/2,height/2)
  // noStroke()
  // fill("#ffc8dd")
  // rect(-43,13,30,15)
  // pop();

  // push();
  // translate(width/2,height/2)
  // fill("#ffc8dd")
  // rotate(PI/30)
  // ellipse(-10,30,25,15)//嘴巴
  // pop();

  // push();
  // translate(width/2,height/2)
  // rotate(PI/-30)
  // noStroke()
  // fill("#ffc8dd")
  // rect(-29,14,25,15)
  // pop();

  // }
  if(!songIsplay){
    push();
    translate(width/2,height/2)
    fill("#7b2cbf")
    triangle(-100,-20,90,-130,75,30)//帽子上面三角形
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#7b2cbf")
    quad(-30,90,-90,200,130,200,10,52)//披風
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#7b2cbf")
    ellipse(20,201,219,45)//披風
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/9.5);
    fill("#7b2cbf")
    ellipse(0,0,300,100)//帽子
    pop();
  
  
    push();
    translate(width/2,height/2)
    rotate(PI/9.5);
    noStroke()
    fill("#5a189a")
    ellipse(0,0,150,50)//帽子裡面
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/8);
    noStroke()
    fill("#ff8fab")
    ellipse(-100,39,130,30)//角2
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/8);
    noStroke()
    fill("#ff8fab")
    ellipse(90,30,130,30)//角6
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ff8fab")
    ellipse(90,30,130,30)//角5
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ff8fab")
    ellipse(-120,28,130,30)//角1
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/3.8);
    noStroke()
    fill("#ff8fab")
    ellipse(-70,45,130,30)//角3
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/1.1);
    noStroke()
    fill("#ff8fab")
    ellipse(-75,-20,130,30)//角4
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/60);
    noStroke()
    fill("#ffc8dd")
    ellipse(-10,250,30,70)//右腳
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/40);
    noStroke()
    fill("#ffc8dd")
    ellipse(50,255,30,70)//左腳
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ffc8dd")
    ellipse(-80+map(mouseX,0,width,-10,5),130+map(mouseY,0,height,-5,5),70,30)//右手
    rect(-80+map(mouseX,0,width,-10,5),115+map(mouseY,0,height,-5,5),60,30)
    pop();
  
   
  
    push();
    translate(width/2,height/2)
    rotate(PI/40);
    noStroke()
    fill("#ffc8dd")
    ellipse(-20,30,180,120)//蠑螈頭
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ffc8dd")
    triangle(-10,110,-10,250,140,280)//蠑螈尾巴
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/-11.5);
    noStroke()
    fill("#ffc8dd")
    ellipse(-40,160,150,200)//蠑螈身體
    pop();
  
  
    push();
    translate(width/2,height/2)
    rotate(PI/-8);
    noStroke()
    fill(0)
    triangle(-160+map(mouseX,0,width,-10,5),-10+map(mouseY,0,height,-5,5),-154+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5),-146+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5))//魔法棒
    pop();
  
    push();
    translate(width/2,height/2)
    stroke("#ff99c8")
    strokeWeight(1.5)
    fill("#ffc8dd")
    ellipse(40,150,30,70)//左手
    noStroke()
    rect(20,112,35,30)
    pop();
  
  
    push();
    translate(width/2,height/2)
    stroke(0)
    strokeWeight(3)
    line(-80,17,-60,10)
    pop();
  
    push();
    translate(width/2,height/2)
    stroke(0)
    strokeWeight(3)
    line(14,15,34,22)
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#ff99c8")
    noStroke()
    ellipse(-85,30,30,15)//腮紅
    rotate(PI/40)
    ellipse(40,32,30,15)//腮紅
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#9d4edd")
    noStroke()
    triangle(-55,70,-57,100,-20,85)
    triangle(10,70,11,100,-30,85)
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#ffc8dd")
    rotate(PI/-15)
    ellipse(-37,20,25,15)//嘴巴
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ffc8dd")
    rect(-43,13,30,15)
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#ffc8dd")
    rotate(PI/30)
    ellipse(-10,30,25,15)//嘴巴
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/-30)
    noStroke()
    fill("#ffc8dd")
    rect(-29,14,25,15)
    pop();
  }
  else{

    vol = amp.getLevel() //取得聲音值(值為0~1之間)
    // console.log(vol)
    push();
    translate(width/2,height/2)
    fill("#7b2cbf")
    triangle(-100+map(vol,0,0.5,0,20),-20+map(vol,0,0.5,0,20),90,-130,75+map(vol,0,0.5,0,20),30+map(vol,0,0.5,0,20))//帽子上面三角形
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#7b2cbf")
    quad(-30,90,-90,200,130,200,10,52+map(vol,0,0.5,0,20))//披風
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#7b2cbf")
    ellipse(20,201,219,45)//披風
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/9.5);
    fill("#7b2cbf")
    ellipse(0,0,300+map(vol,0,0.5,0,20),100+map(vol,0,0.5,0,20))//帽子
    pop();
  
  
    push();
    translate(width/2,height/2)
    rotate(PI/9.5);
    noStroke()
    fill("#5a189a")
    ellipse(0,0,150+map(vol,0,0.7,0,20),50+map(vol,0,0.7,0,20))//帽子裡面
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/8);
    noStroke()
    fill("#ff8fab")
    ellipse(-100,39,130+map(vol,0,1,0,20),30+map(vol,0,1,0,20))//角2
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/8);
    noStroke()
    fill("#ff8fab")
    ellipse(90,30,130+map(vol,0,1,0,20),30+map(vol,0,1,0,20))//角6
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ff8fab")
    ellipse(90,30,130+map(vol,0,1,0,20),30+map(vol,0,1,0,20))//角5
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ff8fab")
    ellipse(-120,28,130+map(vol,0,1,0,20),30+map(vol,0,1,0,20))//角1
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/3.8);
    noStroke()
    fill("#ff8fab")
    ellipse(-70,45,130+map(vol,0,1,0,20),30+map(vol,0,1,0,20))//角3
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/1.1);
    noStroke()
    fill("#ff8fab")
    ellipse(-75,-20,130+map(vol,0,1,0,20),30+map(vol,0,1,0,20))//角4
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/60);
    noStroke()
    fill("#ffc8dd")
    ellipse(-10,250,30+map(vol,0,0.5,0,20),70+map(vol,0,0.5,0,20))//右腳
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/40);
    noStroke()
    fill("#ffc8dd")
    ellipse(50,255,30+map(vol,0,0.5,0,20),70+map(vol,0,0.5,0,20))//左腳
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ffc8dd")
    ellipse(-80+map(mouseX,0,width,-10,5),130+map(mouseY,0,height,-5,5),70,30)//右手
    rect(-80+map(mouseX,0,width,-10,5),115+map(mouseY,0,height,-5,5),60,30)
    pop();
  
   
  
    push();
    translate(width/2,height/2)
    rotate(PI/40);
    noStroke()
    fill("#ffc8dd")
    ellipse(-20,30,180+map(vol,0,0.9,0,20),120+map(vol,0,0.9,0,20))//蠑螈頭
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ffc8dd")
    triangle(-10,110,-10,250,140,280+map(vol,0,0.5,0,20))//蠑螈尾巴
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/-11.5);
    noStroke()
    fill("#ffc8dd")
    ellipse(-40,160,150+map(vol,0,0.9,0,20),200+map(vol,0,0.9,0,20))//蠑螈身體
    pop();
  
  
    push();
    translate(width/2,height/2)
    rotate(PI/-8);
    noStroke()
    fill(0)
    triangle(-160+map(mouseX,0,width,-10,5),-10+map(mouseY,0,height,-5,5),-154+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5),-146+map(mouseX,0,width,-10,5),100+map(mouseY,0,height,-5,5))//魔法棒
    pop();
  
    push();
    translate(width/2,height/2)
    stroke("#ff99c8")
    strokeWeight(1.5)
    fill("#ffc8dd")
    ellipse(40,150,30+map(vol,0,1,0,20),70+map(vol,0,1,0,20))//左手
    noStroke()
    rect(20,112,35+map(vol,0,0.5,0,10),30+map(vol,0,0.5,0,10))
    pop();
  
  
    push();
    translate(width/2,height/2)
    stroke(0)
    strokeWeight(3)
    line(-80,17,-60,10)
    pop();
  
    push();
    translate(width/2,height/2)
    stroke(0)
    strokeWeight(3)
    line(14,15,34,22)
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#ff99c8")
    noStroke()
    ellipse(-85,30,30+map(vol,0,0.5,0,10),15+map(vol,0,0.5,0,10))//腮紅
    rotate(PI/40)
    ellipse(40,32,30+map(vol,0,0.5,0,10),15+map(vol,0,0.5,0,10))//腮紅
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#9d4edd")
    noStroke()
    triangle(-55+map(vol,0,1,0,20),70+map(vol,0,1,0,20),-57+map(vol,0,1,0,20),100+map(vol,0,1,0,20),-20+map(vol,0,1,0,20),85+map(vol,0,1,0,20))
    triangle(10+map(vol,0,1,0,20),70+map(vol,0,1,0,20),11+map(vol,0,1,0,20),100+map(vol,0,1,0,20),-30+map(vol,0,1,0,20),85+map(vol,0,1,0,20))
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#ffc8dd")
    rotate(PI/-15)
    ellipse(-37,20,25,15)//嘴巴
    pop();
  
    push();
    translate(width/2,height/2)
    noStroke()
    fill("#ffc8dd")
    rect(-43,13,30,15)
    pop();
  
    push();
    translate(width/2,height/2)
    fill("#ffc8dd")
    rotate(PI/30)
    ellipse(-10,30,25,15)//嘴巴
    pop();
  
    push();
    translate(width/2,height/2)
    rotate(PI/-30)
    noStroke()
    fill("#ffc8dd")
    rect(-29,14,25,15)
    pop();


  }
  }
