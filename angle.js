function checkshow(wht,wht2){
//alert(wht.checked);
if(wht.checked == true){
document.getElementById(wht2).className = 'show';}
else{
document.getElementById(wht2).className = 'hide';
}
}
  function drawAngle(strtangle,endangle,canvasname,ref1, ref2, djoint,x,y,ccw){
	  if(ccw==''){
	  ccw=false}
var canvas = document.getElementById(canvasname);
var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
var img = new Image();
        img.src = 'img/angles/'+canvasname+'.png';
        img.onload = function (e)
        {
            ctx.drawImage(img, 0, 0);
			//var x = 100;
//var y = 90;
var radius = 45;
var startAngle = strtangle*Math.PI/180;
var endAngle = endangle* Math.PI/180;
var ref1Angle = ref1*Math.PI/180;
var ref2Angle = ref2*Math.PI/180;
var counterClockwise = ccw;
ctx.beginPath();
if(djoint == false){
ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
ctx.lineWidth = 1;
// line color
ctx.strokeStyle = 'blue';
  ctx.moveTo(x,y);
ctx.lineTo(radius*Math.cos(strtangle*Math.PI/180)+x, radius*Math.sin(strtangle*Math.PI/180)+y);
 ctx.moveTo(x,y); ctx.lineTo(radius*Math.cos(endangle*Math.PI/180)+x, radius*Math.sin(endangle*Math.PI/180)+y);
ctx.stroke();
}else{
//firstjoint
ctx.arc(x, y, radius, ref1Angle, startAngle, counterClockwise);
ctx.lineWidth = 1;
// line color
ctx.strokeStyle = 'blue';
  ctx.moveTo(x,y);
ctx.lineTo(radius*Math.cos(ref1Angle)+x, radius*Math.sin(ref1Angle)+y);
 ctx.moveTo(x,y); 
 ctx.lineTo(radius*Math.cos(startAngle)+x, radius*Math.sin(startAngle)+y);
ctx.stroke();
//second joint
ctx.beginPath();
ctx.arc(x, y, radius, ref2Angle, endAngle, !ccw);
ctx.lineWidth = 1;
// line color
ctx.strokeStyle = 'blue';
  ctx.moveTo(x,y);
ctx.lineTo(radius*Math.cos(ref2Angle)+x, radius*Math.sin(ref2Angle)+y);
 ctx.moveTo(x,y); 
 ctx.lineTo(radius*Math.cos(endAngle)+x, radius*Math.sin(endAngle)+y);
ctx.stroke();
}
        }

  }
function changeangles(canvasname,slider1name, slider2name,ref1, ref2, djoint,x,y,letter,ccw,invertval){
  var slider = document.getElementById(slider1name);
  var slider2 = document.getElementById(slider2name);
  var flexc=false;
  if(document.getElementById(canvasname+"flexc")!=null){
  var flexc = document.getElementById(canvasname+"flexc").checked;}
  angle1 = Math.abs(slider.value-ref1);
  angle2 = Math.abs(slider2.value-ref2);
  drawAngle(slider.value,slider2.value,canvasname,ref1,ref2, djoint,x,y,ccw);
  if(invertval==true){
	  if(flexc==true){
		  
	document.getElementById(canvasname+"div").innerHTML = letter+"=0-"+angle2+"-"+angle1;}  
	  else{
	  document.getElementById(canvasname+"div").innerHTML = letter+"="+angle2+"-0-"+angle1;}
  }else{
	  if(flexc==true){
		  document.getElementById(canvasname+"div").innerHTML = letter+"=0-"+angle1+"-"+angle2;
	  }else{
	  document.getElementById(canvasname+"div").innerHTML = letter+"="+angle1+"-0-"+angle2;}
  }
}
function updateflexc(wht,wht2,wht3){
	if(wht.checked == true){
document.getElementById(wht2).className = 'show slider';
document.getElementById(wht3).className = 'hide slider';}
else{
document.getElementById(wht3).className = 'show slider';
document.getElementById(wht2).className = 'hide slider';}
}
	
function initneck(){
	changeangles('neck1','neck1_slider1','neck1_slider2',270,270,false,98,94,'C',false,false);
	changeangles('neck2','neck2_slider1','neck2_slider2',270,270,false,103,134,'F',false,false);
	changeangles('neck3','neck3_slider1','neck3_slider2',270,270,false,102,90,'R',false,false);
}
function initshoulder(){
	changeangles('shoulder1','shoulder1_slider1','shoulder1_slider2',90,90,false,113,100,'F',true,false)
changeangles('shoulder2','shoulder2_slider1','shoulder2_slider2',450,450,false,86,102,'F',false,false)
changeangles('shoulder3','shoulder3_slider1','shoulder3_slider2',450,450,false,92,116,'C',false,true)
changeangles('shoulder4','shoulder4_slider1','shoulder4_slider2',90,90,false,107,115,'C',true,true)
changeangles('shoulder5','shoulder5_slider1','shoulder5_slider2',360,360,false,53,107,'R',false,false)
changeangles('shoulder6','shoulder6_slider1','shoulder6_slider2',180,180,false,143,109,'R',true,false)	
//changeangles('shoulder7','shoulder7_slider1','shoulder7_slider2',270,270,false,109,169,'R',false,false)
//changeangles('shoulder8','shoulder8_slider1','shoulder8_slider2',270,270,false,89,170,'R',false,true)
}
function initelbow(){
changeangles('elbow1','elbow1_slider1','elbow1_slider2',360,360,false,74,91,'C',false,true)
changeangles('elbow2','elbow2_slider1','elbow2_slider2',180,180,false,83,92,'C',false,false)
changeangles('elbow3','elbow3_slider1','elbow3_slider2',270,270,false,67,88,'R',false,false)
changeangles('elbow4','elbow4_slider1','elbow4_slider2',270,270,false,83,88,'R',false,false)
}
function inithip(){
changeangles('hip1','hip1_slider1','hip1_slider2',180,180,false,103,88,'C',false,false)
changeangles('hip2','hip2_slider1','hip2_slider2',360,360,false,105,97,'C',false,true)
changeangles('hip3','hip3_slider1','hip3_slider2',90,90,false,106,25,'F',true,false)
changeangles('hip3','hip3_slider1','hip3_slider2',90, 90, false,106,25,'F',true,false)
changeangles('hip4','hip4_slider1','hip4_slider2',90,90,false,63,27,'F',true,true)
changeangles('hip4','hip4_slider1','hip4_slider2',90, 90, false,63,27,'F',true,true)
changeangles('hip5','hip5_slider1','hip5_slider2',90,90,false,106,25,'R',true,false)
changeangles('hip6','hip6_slider1','hip6_slider2',90,90,false,94,25,'R',true,true)
}
function initknee(){
	changeangles('knee1','knee1_slider1','knee1_slider2',360,360,false,76,46,'C',true,true)
changeangles('knee2','knee2_slider1','knee2_slider2',360,360,false,76,46,'C',true,true)
}
function initankle(){
	changeangles('ankle1','ankle1_slider1','ankle1_slider2',315,315,false,100,90,'C')
changeangles('ankle2','ankle2_slider1','ankle2_slider2',315,315,false,100,90,'C')
}
function initwrist(){
	changeangles('wrist1','wrist1_slider1','wrist1_slider2',270,270,false,100,166,'F')
changeangles('wrist2','wrist2_slider1','wrist2_slider2',360,360,false,9,92,'C')
changeangles('wrist3','wrist3_slider1','wrist3_slider2',270,270,false,100,166,'F',false,true)
changeangles('wrist4','wrist4_slider1','wrist4_slider2',360,360,false,9,92,'C')
}
function initmcp(){
	changeangles('mcp2r','mcp2r_slider1','mcp2r_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp3r','mcp3r_slider1','mcp3r_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp4r','mcp4r_slider1','mcp4r_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp5r','mcp5r_slider1','mcp5r_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp2l','mcp2l_slider1','mcp2l_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp3l','mcp3l_slider1','mcp3l_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp4l','mcp4l_slider1','mcp4l_slider2',360,360,false,92,57,'C',true,true)
changeangles('mcp5l','mcp5l_slider1','mcp5l_slider2',360,360,false,92,57,'C',true,true)
}
function initpifs(){
	changeangles('pifs2r','pifs2r_slider1','pifs2r_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs3r','pifs3r_slider1','pifs3r_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs4r','pifs4r_slider1','pifs4r_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs5r','pifs5r_slider1','pifs5r_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs2l','pifs2l_slider1','pifs2l_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs3l','pifs3l_slider1','pifs3l_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs4l','pifs4l_slider1','pifs4l_slider2',360,360,false,120,31,'C',true,true)
changeangles('pifs5l','pifs5l_slider1','pifs5l_slider2',360,360,false,120,31,'C',true,true)
}
function initdifs(){
	changeangles('difs2r','difs2r_slider1','difs2r_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs3r','difs3r_slider1','difs3r_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs4r','difs4r_slider1','difs4r_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs5r','difs5r_slider1','difs5r_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs2l','difs2l_slider1','difs2l_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs3l','difs3l_slider1','difs3l_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs4l','difs4l_slider1','difs4l_slider2',470,470,false,115,58,'C',true,true)
changeangles('difs5l','difs5l_slider1','difs5l_slider2',470,470,false,115,58,'C',true,true)
}
function initthumb(){
	changeangles('thumbmcpr','thumbmcpr_slider1','thumbmcpr_slider2',290,290,false,89,148,'C',false,true)
changeangles('thumbmcpl','thumbmcpl_slider1','thumbmcpl_slider2',250,250,false,46,147,'C',true,true)
changeangles('thumbipr','thumbipr_slider1','thumbipr_slider2',180,180,false,92,57,'C',false,true)
changeangles('thumbipl','thumbipl_slider1','thumbipl_slider2',180,180,false,92,57,'C',false,true)
}
function updyglometriq(){
	var yglometriq="";
	if(document.getElementById("neckangles").className == "show"){
		neck1 = document.getElementById("neck1div").innerHTML;
		neck2 = document.getElementById("neck2div").innerHTML;
		neck3 = document.getElementById("neck3div").innerHTML;
		yglometriq += "ШИЕН ОТДЕЛ: "+neck1+", "+neck2+", "+neck3+";\n";
	}
	if(document.getElementById("shoulderangles").className == "show"){
		shoulder1 = document.getElementById("shoulder1div").innerHTML;
		shoulder2 = document.getElementById("shoulder2div").innerHTML;
		shoulder3 = document.getElementById("shoulder3div").innerHTML;
		shoulder4 = document.getElementById("shoulder4div").innerHTML;
		shoulder5 = document.getElementById("shoulder5div").innerHTML;
		shoulder6 = document.getElementById("shoulder6div").innerHTML;
		yglometriq += "РАМЕННА СТАВА /ДЯСНО/: "+shoulder1+", "+shoulder3+", "+shoulder5+";\n";
		yglometriq += "РАМЕННА СТАВА /ЛЯВО/: "+shoulder2+", "+shoulder4+", "+shoulder6+";\n";
	}
	if(document.getElementById("elbowangles").className == "show"){
	elbow1 = document.getElementById("elbow1div").innerHTML;
		elbow2 = document.getElementById("elbow2div").innerHTML;
		elbow3 = document.getElementById("elbow3div").innerHTML;
		elbow4 = document.getElementById("elbow4div").innerHTML;
		yglometriq += "РАМЕННА СТАВА /ДЯСНО/: "+elbow1+", "+elbow3+";\n";
		yglometriq += "РАМЕННА СТАВА /ЛЯВО/: "+elbow2+", "+elbow4+";\n";
	}
		if(document.getElementById("hipаngles").className == "show"){
		hip1 = document.getElementById("hip1div").innerHTML;
		hip2 = document.getElementById("hip2div").innerHTML;
		hip3 = document.getElementById("hip3div").innerHTML;
		hip4 = document.getElementById("hip4div").innerHTML;
		hip5 = document.getElementById("hip5div").innerHTML;
		hip6 = document.getElementById("hip6div").innerHTML;
		yglometriq += "ТАЗОБЕДРЕНА СТАВА /ДЯСНО/: "+hip1+", "+hip3+", "+hip5+";\n";
		yglometriq += "ТАЗОБЕДРЕНА СТАВА /ЛЯВО/: "+hip2+", "+hip4+", "+hip6+";\n";
	}
	if(document.getElementById("kneeаngles").className == "show"){
		knee1 = document.getElementById("knee1div").innerHTML;
		knee2 = document.getElementById("knee2div").innerHTML;
		yglometriq += "КОЛЯННА СТАВА /ДЯСНО/: "+knee1+";\n";
		yglometriq += "КОЛЯННА СТАВА /ЛЯВО/: "+knee2+";\n";
	}
	if(document.getElementById("ankleangles").className == "show"){
		ankle1 = document.getElementById("ankle1div").innerHTML;
		ankle2 = document.getElementById("ankle2div").innerHTML;
		yglometriq += "ГЛЕЗЕННА СТАВА /ДЯСНО/: "+ankle1+";\n";
		yglometriq += "ГЛЕЗЕННА СТАВА /ЛЯВО/: "+ankle2+";\n";
	}
		if(document.getElementById("wristangles").className == "show"){
		wrist1 = document.getElementById("wrist1div").innerHTML;
		wrist2 = document.getElementById("wrist2div").innerHTML;
		wrist3 = document.getElementById("wrist3div").innerHTML;
		wrist4 = document.getElementById("wrist4div").innerHTML;
		yglometriq += "ГРИВНЕНА СТАВА /ДЯСНО/: "+wrist1+", "+wrist2+";\n";
		yglometriq += "ГРИВНЕНА СТАВА /ЛЯВО/: "+wrist3+", "+wrist4+";\n";
	}
			if(document.getElementById("mcpangles").className == "show"){
		mcp2r = document.getElementById("mcp2rdiv").innerHTML;
		mcp3r = document.getElementById("mcp3rdiv").innerHTML;
		mcp4r = document.getElementById("mcp4rdiv").innerHTML;
		mcp5r = document.getElementById("mcp5rdiv").innerHTML;
		mcp2l = document.getElementById("mcp2ldiv").innerHTML;
		mcp3l = document.getElementById("mcp3ldiv").innerHTML;
		mcp4l = document.getElementById("mcp4ldiv").innerHTML;
		mcp5l = document.getElementById("mcp5ldiv").innerHTML;
		yglometriq += "МКФ /ДЯСНО/ (II,III,IV,V): "+mcp2r +", "+mcp3r+", "+mcp4r+", "+mcp5r+";\n";
		yglometriq += "МКФ /ЛЯВО/ (II,III,IV,V): "+mcp2l +", "+mcp3l+", "+mcp4l+", "+mcp5l+";\n";
	}
	if(document.getElementById("pifsangles").className == "show"){
		pifs2r = document.getElementById("pifs2rdiv").innerHTML;
		pifs3r = document.getElementById("pifs3rdiv").innerHTML;
		pifs4r = document.getElementById("pifs4rdiv").innerHTML;
		pifs5r = document.getElementById("pifs5rdiv").innerHTML;
		pifs2l = document.getElementById("pifs2ldiv").innerHTML;
		pifs3l = document.getElementById("pifs3ldiv").innerHTML;
		pifs4l = document.getElementById("pifs4ldiv").innerHTML;
		pifs5l = document.getElementById("pifs5ldiv").innerHTML;
		yglometriq += "ПИФС /ДЯСНО/ (II,III,IV,V): "+pifs2r +", "+pifs3r+", "+pifs4r+", "+pifs5r+";\n";
		yglometriq += "ПИФС /ЛЯВО/ (II,III,IV,V): "+pifs2l +", "+pifs3l+", "+pifs4l+", "+pifs5l+";\n";
	}
		if(document.getElementById("difsangles").className == "show"){
		difs2r = document.getElementById("difs2rdiv").innerHTML;
		difs3r = document.getElementById("difs3rdiv").innerHTML;
		difs4r = document.getElementById("difs4rdiv").innerHTML;
		difs5r = document.getElementById("difs5rdiv").innerHTML;
		difs2l = document.getElementById("difs2ldiv").innerHTML;
		difs3l = document.getElementById("difs3ldiv").innerHTML;
		difs4l = document.getElementById("difs4ldiv").innerHTML;
		difs5l = document.getElementById("difs5ldiv").innerHTML;
		yglometriq += "ДИФС /ДЯСНО/ (II,III,IV,V): "+difs2r +", "+difs3r+", "+difs4r+", "+difs5r+";\n";
		yglometriq += "ДИФС /ЛЯВО/ (II,III,IV,V): "+difs2l +", "+difs3l+", "+difs4l+", "+difs5l+";\n";
	}
			if(document.getElementById("thumbangles").className == "show"){
		thumbmcpr = document.getElementById("thumbmcprdiv").innerHTML;
		thumbmcpl = document.getElementById("thumbmcpldiv").innerHTML;
		thumbipr = document.getElementById("thumbiprdiv").innerHTML;
		thumbipl = document.getElementById("thumbipldiv").innerHTML;
		yglometriq += "ПАЛЕЦ /ДЯСНО/ (МКФI,ИФ): "+thumbmcpr+", "+thumbipr+";\n";
		yglometriq += "ПАЛЕЦ /ЛЯВО/ (МКФI,ИФ): "+thumbmcpl+", "+thumbipl+";\n";
	}
	document.getElementById('uglometriqresult').innerHTML += yglometriq;
}