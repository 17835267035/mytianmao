window.onload = function(){
	// 侧导航
	let cebian = document.getElementsByClassName('banner-left')[0];
	let lis = cebian.getElementsByTagName('li');
	let item = cebian.getElementsByClassName('item');
	// console.log(cebian);
	// console.log(lis);
	// console.log(item);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}


	// banner
	let banner = $('#banner');
	let btn = document.getElementsByClassName('banner-btn')[0];
	let lis1 = btn.getElementsByTagName('li');
    let bannerimg = document.getElementsByClassName('banner-img')[0];
    let lis2 = bannerimg.getElementsByTagName('li');
    console.log(banner);	

	// 	for(let i=0;i<lis1.length;i++){
	// 	lis1[i].onmouseover = function(){
	// 		for(let i=0;i<lis2.length;i++){
	// 		// 所有消失  对应的显示
	// 			lis2[i].style.display = 'none';
	// 			lis1[i].style.background = '#98979B';
	// 		}
	// 		lis2[i].style.display = 'block';
	// 		lis1[i].style.background = '#fff';
	// 	}
	// }	
	
        
        //图片的li隐藏，第一张图片的li显示
		// let now = 0;
		//   for(let i=0;i<lis1.length;i++){
		//     lis1[i].onclick = function(){
		//       lis2[now].style.display = 'none';
		//       lis1[now].style.background = '#98979B';
		//       lis2[i].style.display = 'block';
		//       lis1[i].style.background = '#fff';
		//       now = i;
		//     }
		//   }
		
		for(let i=0;i<lis1.length;i++){
			lis1[i].onclick = function(){
				for(let j=0;j<lis2.length;j++){
					lis2[j].style.display = 'none';
					lis1[j].style.background = '#98979B';
				}
				lis2[i].style.display = 'block';
				lis1[i].style.background = '#fff';
				num = i;
			}
		}

        
        let num = 0;
        let t;
        t = setInterval(move,1000);
        banner.onmouseover = function(){
        	clearInterval(t);
        }
        banner.onmouseout = function(){
        	t = setInterval(move,1000);
        }
        function move(){
        	num++;
        	if(num == lis2.length){
        		num = 0;
        	}
        	for(let i=0;i<lis2.length;i++){
        		lis2[i].style.display = 'none';
				lis1[i].style.background = '#98979B';
			}
			lis2[num].style.display = 'block';
			lis1[num].style.background = '#fff';

        	}

}