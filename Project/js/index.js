multimediaArticleOne = `
<section class="article1 articlehover">
  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/824934847&color=ff5500"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" class="image">
    <a href="https://soundcloud.com/the-daily-northwestern" title="The Daily Northwestern" target="_blank" style="color: #cccccc; text-decoration: none;">The Daily Northwestern</a> · <a href="https://soundcloud.com/the-daily-northwestern/nu-declassified-path-to-the-pulitzer" title="NU Declassified: Path to the Pulitzer" target="_blank" style="color: #cccccc; text-decoration: none;">NU Declassified: Path to the Pulitzer</a></div>
  <h3>NU Declassified: Path to the Pulitzer</h3>
  <p>Evan Hill and Brian Rosenthal have a lot in common: They both graduated from Medill, were editors at The Daily Northwestern, are now New York Times investigative journalists — and recently won the highest honor in journalism: a Pulitzer Prize.</p>
  <br>
  <a href="https://dailynorthwestern.com/2020/05/21/multimedia/nu-declassified-path-to-the-pulitzer/" target="_blank">Read More</a>
</section>
`

multimediaArticleTwo = `
<p class="codepen" data-height="471" data-theme-id="light" data-default-tab="result" data-user="meganmunce" data-slug-hash="PLRqgN" style="height: 471px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Jour 201-2 Final Project">
  <span>See the Pen <a href="https://codepen.io/meganmunce/pen/PLRqgN">
  Jour 201-2 Final Project</a> by Megan Munce (<a href="https://codepen.io/meganmunce">@meganmunce</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`

printArticleOne = `
<a href="https://dailynorthwestern.com/2020/05/25/campus/desi-american-women-fight-period-stigma-during-asian-pacific-american-heritage-month/" target="_blank">
<section class="article1 articlehover">
<img src="https://dailynorthwestern.com/wp-content/uploads/2020/05/FTP_-02_5.png" class="image">
<h3>Desi-American women fight period stigma during Asian Pacific American Heritage Month</h3>
<p>Meghna Gaddam, Samanvi Kanugula and Mahie Gopalka are the three Desi-American women behind PERIOD at Northwestern fighting for an end to period stigma in their culture and the state of Illinois.</p>
<br>
<p>Click to read more.
</section>
</a>
`

printArticleTwo = `
<a href="https://dailynorthwestern.com/2020/04/10/campus/supreme-court-decision-disrupts-students-voting-plan/" target="_blank">
<section class="article2 articlehover">
  <img src="https://dailynorthwestern.com/wp-content/uploads/2020/04/US-NEWS-CORONAVIRUS-LIVE-UPDATES-STIMULUS-CHECKS-AU-900x695.jpg" class="image">
  <h3>Supreme Court decision disrupts students’ voting plan</h3>
  <p>The Supreme Court of the United States reversed a lower court’s ruling allowing Wisconsin to extend the deadline for absentee ballots to be counted on Tuesday, forcing many of the state’s residents to choose between voting and potential exposure to COVID-19.</p>
  <br>
  <p>Click to read more.</p>
</section>
</a>
`
multimediaGrid = `
grid-template-areas:
   "a a a a"
   "b b b b"
   "e e f f"
   "c c d d";
`

const checkKey = (e) => {
    var character = document.querySelector(".character");
    var leftValue = parseInt(document.querySelector(".character").style.left, 10);
    console.log(leftValue)
    var topValue = parseInt(document.querySelector(".character").style.top, 10);
    console.log(leftValue)
    var k = e.keyCode;
    if (k == '39'){
        console.log("Right key was pressed");
        document.querySelector(".game").innerHTML = '<img src="right.png" class="character animate">';
        document.querySelector(".character").style.left = `${leftValue + 10}`;
      }
    else if (k =='37') {
        console.log("Left key was pressed");
        document.querySelector(".game").innerHTML = '<img src="left.png" class="character animate">';
        document.querySelector(".character").style.left = `${topValue + 10}`;
    }
};


const multimediaArticles = () => {
  document.querySelector('.article1').innerHTML = multimediaArticleOne;
  document.querySelector('.article2').innerHTML = multimediaArticleTwo;
  document.querySelector('.article3').innerHTML = "";
  document.querySelector('.article4').innerHTML = "";
};

$(".multimediabutton").on("click", function(){
  $(this).css("grid-template-areas", multimediaGrid)
});

const printArticles = () => {
  document.querySelector('.article1').innerHTML = printArticleOne;
  document.querySelector('.article2').innerHTML = printArticleTwo;
};

document.addEventListener('keydown', checkKey);
document.querySelector('.multimediabutton').onclick = multimediaArticles;
document.querySelector('.printbutton').onclick = printArticles;
