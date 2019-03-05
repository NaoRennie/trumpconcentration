function shuffle(arr) {
    let n = arr.length;
    let temp,i;

    while(n){
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;  
}

    pic = [
        {
            mark:1,
            number:1
        },
         {
            mark:1,
            number:2
        },
         {
            mark:1,
            number:3
        },
        {
            mark:1,
            number:4
        },
         {
            mark:1,
            number:5
        },
         {
            mark:1,
            number:6
        },
        {
            mark:1,
            number:7
        },
         {
            mark:1,
            number:8
        },
         {
            mark:1,
            number:9
        },
        {
            mark:1,
            number:10
        },
        {
            mark:1,
            number:11
        },
        {
            mark:1,
            number:12
        },
        {
            mark:1,
            number:13
        },
        {
            mark:2,
            number:1
        },
         {
            mark:2,
            number:2
        },
         {
            mark:2,
            number:3
        },
        {
            mark:2,
            number:4
        },
         {
            mark:2,
            number:5
        },
         {
            mark:2,
            number:6
        },
        {
            mark:2,
            number:7
        },
         {
            mark:2,
            number:8
        },
         {
            mark:2,
            number:9
        },
        {
            mark:2,
            number:10
        },
        {
            mark:2,
            number:11
        },
        {
            mark:2,
            number:12
        }, 
        {
            mark:2,
            number:13
        },
        {
            mark:3,
            number:1
        },
         {
            mark:3,
            number:2
        },
         {
            mark:3,
            number:3
        },
        {
            mark:3,
            number:4
        },
         {
            mark:3,
            number:5
        },
         {
            mark:3,
            number:6
        },
        {
            mark:3,
            number:7
        },
         {
            mark:3,
            number:8
        },
         {
            mark:3,
            number:9
        },
        {
            mark:3,
            number:10
        },
        {
            mark:3,
            number:11
        },
        {
            mark:3,
            number:12
        },
        {
            mark:3,
            number:13
        },
        {
            mark:4,
            number:1
        },
         {
            mark:4,
            number:2
        },
         {
            mark:4,
            number:3
        },
        {
            mark:4,
            number:4
        },
         {
            mark:4,
            number:5
        },
         {
            mark:4,
            number:6
        },
        {
            mark:4,
            number:7
        },
         {
            mark:4,
            number:8
        },
         {
            mark:4,
            number:9
        },
        {
            mark:4,
            number:10
        },
        {
            mark:4,
            number:11
        },
        {
            mark:4,
            number:12
        }, 
        {
            mark:4,
            number:13
        }


    ];
        

   //シャッフルして並べる
    let pics =[];
    let isOpen= false;
    (function(){
        pics = shuffle(pic);
        console.log(pics);
        for(i=0;i<pics.length;i++){
          $('#board_p').append('<li><img class="num_card" data-number="'+pic[i].number+'" src="trump/'+pics[i].mark+'_'+pics[i].number+'.png"/><img class="back_card bk_first" src="trump/card_back.png"></li>');
        }
   
        let cardNum1=[];
        let cardNum2=[];
        let count = 0;

         $(document).on("click",".back_card",function(){
          if( isOpen=== false ){
            isOpen= true;
            $(this).addClass('bk_clicked');
            let t = $(this).prev();
            cardNum1.push(t);

          }else if ( isOpen=== true){
            isOpen= false;
            $(this).addClass('bk_clicked');
            let t2 = $(this).prev();
            cardNum2.push(t2);
             $('#board').on('click',function(){
              if(cardNum1[0].data('number') === cardNum2[0].data('number')){
                    $(cardNum1[0]).addClass('finished');
                    $(cardNum1[0]).next().addClass('finished');
                    $(cardNum2[0]).addClass('finished');
                    $(cardNum2[0]).next().addClass('finished');
                    isOpen= false;

                    cardNum1.pop();
                    cardNum2.pop();

                    count = count + 1;
                    alert('合計'+count+'組');

                }else{
                    $(cardNum1[0]).next().removeClass('bk_clicked');
                    $(cardNum2[0]).next().removeClass('bk_clicked');
                    cardNum1.pop();
                    cardNum2.pop();
                    isOpen= false;
                }
            });

            }
        });

    }());




