//   important stuff

		var canvasBg = document.getElementById('canvasBg');			//make background canvas
			var ctxBg = canvasBg.getContext('2d');
			
			var canvasJet = document.getElementById('canvasJet');				//make jet canvas
			var ctxJet = canvasJet.getContext('2d');
			
			var clearCanvasBtn = document.getElementById('clearCanvasBtn');        //make clear button
			clearCanvasBtn.addEventListener('click', clearCtxsBg,false);					//on click clear canvas
			
			
			var jet1;
			var gameWidth = canvasBg.width;											//save the backgroun canvas windth into "gameWidth"
			var gameHeight = canvasBg.height;											//save the backgroun canvas height into "gameHeight"
			var fps = 10;																				// mili seconds
			var drawInterval;
			
			
			var imgSprite = new Image();															//make new img
			imgSprite.src = 'sprite.png';															// get the image from folder
			imgSprite.addEventListener('load',init,false);							//load the image
		
// end of important stuff


		
		
		
		
//main functions
		
		function init(){
			drawBg();
			startDrawing();
			jet1 = new Jet();		// create variable to object
			document.addEventListener('keydown',checkKeyDown,false);
			document.addEventListener('keyup',checkKeyUp,false);
		}
		
		function draw(){
				jet1.draw();
		}
		
		function startDrawing(){
				stopDrawing();									//to stop twise start drawing
				drawInterval = setInterval(draw,fps);
		}

		function stopDrawing(){	
				clearInterval(drawInterval);
		
		}
		
		function drawBg(){
			var srcX = 0;						
			var srcY = 0;
			var drawX = 0 ;
			var drawY= 0 ;
			ctxBg.drawImage(imgSprite,srcX,srcY,gameWidth,gameHeight,drawX,drawY,gameWidth,gameHeight);			//draw the image
		}
			
			function clearCtxsBg() {				//clear background canvas
				ctxBg.clearRect(0,0,gameWidth,gameHeight);
			}
		
//end of main functions
	
	
		
		
		
		
//Jet functions
		
		function Jet(){                //object	for Jet
				this.srcX = 0;
				this.srcY = 500;
				this.drawX = 200;
				this.drawY  = 200;
				this.width = 100;
				this.height = 40;
				this.speed = 2;		//2px every second or draw funct is call
				this.isUpKey = false;
				this.isRightKey = false;
				this.isDownKey = false;
				this.isLeftKey = false;
			}
		
		Jet.prototype.draw = function() {						//it`s normal function but shared betwen all jets
				clearCtxJet(); 												//tutorial 10  .. if we move jet forward this will remove the shadow after every move
				this.checkKeys();										//see which button is down before draw the jet
				ctxJet.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);	 //from where to get the img , from where to where to cut , from where to where to paste and size
				};
				
				Jet.prototype.checkKeys = function() {	
						if(this.isUpKey){
							this.drawY -= this.speed;
						}
						if(this.isRightKey){
							this.drawX += this.speed;
						}
						if(this.isDownKey){
							this.drawY += this.speed;
						}
						if(this.isLeftKey){
							this.drawX -= this.speed;
						}
				};
		
			function clearCtxJet() {				// clear Jet canvas
				ctxJet.clearRect(0,0,gameWidth,gameHeight);
			}
			
//end of Jet functions
			
			
			
			
			
			
//event functions
			
			function checkKeyDown(e){
					var keyID = e.keyCode || e.which;                   // if keyID can`t open e."keyCode" it will use "e.which"
					if (keyID === 38  || keyID === 87){					//check for up arrow and "W" key 
							jet1.isUpKey = true;
							e.preventDefaut();
					}
					if (keyID === 39  || keyID === 68){					//check for right arrow and "D" key 
							jet1.isRightKey = true;
							e.preventDefaut();
					}
					if (keyID === 40  || keyID === 83){					//check for down arrow and "S" key 
							jet1.isDownKey = true;
							e.preventDefaut();
					}
					if (keyID === 37 || keyID === 65){					//check for left arrow and "A" key 
							jet1.isLeftKey  = true;
							e.preventDefaut();
					}
			}
			
			function checkKeyUp(e){
					var keyID = e.keyCode || e.which;
					if (keyID === 38  || keyID === 87){					//check for up arrow and "W" key 
							jet1.isUpKey = false;
							e.preventDefaut();
					}
					if (keyID === 39  || keyID === 68){					//check for right arrow and "D" key 
							jet1.isRightKey = false;
							e.preventDefaut();
					}
					if (keyID === 40  || keyID === 83){					//check for down arrow and "S" key 
							jet1.isDownKey = false;
							e.preventDefaut();
					}
					if (keyID === 37 || keyID === 65){					//check for left arrow and "A" key 
						jet1.isLeftKey  = false;	
						e.preventDefaut();
					}
			}
			
//end of event functions
			
			
			
			
			
			
			
			
			
			
			
			
			