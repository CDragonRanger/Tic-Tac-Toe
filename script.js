var a = [0,0,0,0,0,0,0,0,0]
var count=0;
$(document).ready(function() {
    var l = 1;
    $(".in").click(function() 
    {
        if(l==-1)
        {
            var player="O";
        }
        else{
            var player="X";
        }
        $(".message").text(`${player}'s turn`);
        var d=$(".in").index(this);
        if(a[d]==1 || a[d]==-1)
        {
            return;
        }
        if (l == -1) {
            $(this).text("X");
            l = 1;
        } else {
            $(this).text("O");
            l = -1;
        }
        count++;
        a[d]=l;
        if((a[0]==1 && a[4]==1 && a[8]==1)||(a[0]==1 && a[1]==1 && a[2]==1)||(a[3]==1 && a[4]==1 && a[5]==1)||(a[6]==1 && a[7]==1 && a[8]==1)||(a[2]==1 && a[4]==1 && a[6]==1)||(a[0]==1 && a[3]==1 && a[6]==1)||(a[1]==1 && a[4]==1 && a[7]==1)||(a[2]==1 && a[5]==1 && a[8]==1))
        {
            setTimeout (() => {alert("X Wins The Game");resetgame();},500);
        }
        else if((a[0]==-1 && a[4]==-1 && a[8]==-1)||(a[0]==-1 && a[1]==-1 && a[2]==-1)||(a[3]==-1 && a[4]==-1 && a[5]==-1)||(a[6]==-1 && a[7]==-1 && a[8]==-1)||(a[2]==-1 && a[4]==-1 && a[6]==-1)||(a[0]==-1 && a[3]==-1 && a[6]==-1)||(a[1]==-1 && a[4]==-1 && a[7]==-1)||(a[2]==-1 && a[5]==-1 && a[8]==-1))
        {
            setTimeout (() => {alert("O Wins The Game");resetgame();}, 500);
        }
        else if(count==9)
        {
            setTimeout(()=>{alert("Draw");resetgame();},500);
        }
    });
});

function resetgame()
{
    $(".message").text("Press to Play");
    $(".in").text("");
    a = [0,0,0,0,0,0,0,0,0];
    l=1;
    count=0;
}