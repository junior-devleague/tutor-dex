# tutor-dex
WHS TutorDex Final Project

<p>Project Manager: Angela Geronimo<br>
Developers: Kyle Lingat, Cornelious Mooring, Angela Geronimo, Gwen Raquepo</p>

<h3>Final Project Breakdown</h3>
<b>Assignments and Grading for the 4th quarter</b>
<ul>
  <li>Final project: Minimum of 6 commits a week and Pull request when a task is complete</li>
  <li>Quizzes: Take home quiz every other week</li>
  <li>Research assignments: Given every other week and turned in as a medium blog or Journal entry</li>
</ul>

<hr>

<h3>Daily Scrum</h3>
<b>Teams will meet daily for the first 5-10 mins of class to report the following:</b>
<ul>
  <li>Progress on their task. What did team members accomplish in the previous class?</li>
  <li>What each team member is going to work for the current class period</li>
  <li>Any road blocks per task or clarifications they may need from other team memebers or instructors</li>
</ul>


<b>Project Manager reports daily to the instructors the following:</b>
<ul>
  <li>Progress per task that the group is currently working on</li>
  <li>Projection as to what will be accomplished by the end of the week</li>
  <li>Any road blocks per task or clarifications the team may need</li>
</ul>

<b>Developers are to notify the project manager and an instructor (in person or in Slack) when:</b>
<ul>
  <li>A task is complete</li>
  <li>A pull request is made</li>
</ul>


<p>If there are questions about a task, code questions, road blocks (challenges) please notify an instructor via Slack.</p>

<hr>

<h3>Formatting Structure</h3>

<b>HTML, CSS, and Project Images</b>
<ul>
  <li>File, class and id names should be all lowercase with dashes for spacing (if needed).</li>
  <li>Any nesting must be properly tabbed, and every element should be returned as a new line.</li>
</ul>
<img src="./images/html-css.png">

<b>Javascript</b>
<ul>
  <li>Function names and variables should be camelcase.</li>
  <li>Any nesting must be properly tabbed. No one liners for multiple lines of code.</li>
  <li>Use block comment for each a task.</li>
  <li>Each Javascript task should have a block comment of psuedo code.</li>
</ul>
<img src="./images/javascript.png">
<b>Formatting example</b>
<img src="./images/formatting.png">

<b>Sublime Text</b>
<ul>
  <li>Set spaces: 2</li>
</ul>

<b>Git Flow</b>
<img src="./images/git-flow.png">
<b>Github Commit Messages</b>
<ul>
  <li>What was completed, any current bugs.</li>
  <li>Example: ‘completed top navigation in html, links do not work yet’</li>
</ul>

<hr>

<h2>Task Breakdown - Part 1</h2>

<b>Creating the Views</b>
<ul>
  <li>Follow the design views found under the Assets folder.</li>
  <li>If the view is not the home (first page/index.html), create a new file in the root folder with the view name.</li>
  <li>Create interactive buttons (links) to navigate through views</li>
</ul>

<b>Adding CSS</b>
<ul>
  <li>All of the css will be in the css/styles.css</li>
  <li>Assign classes to reusable styles.</li>
  <li>Create a block comment if styles are for a specific view or user interaction, otherwise it's considered a general style.</li>
</ul>
<ul>
  <li><b>Colors</b><ul>
    <li>Dark Gray: #4A4A4A</li>
    <li>Light Gray: #EDEDED</li>
    <li>Green: #8AE8A1</li>
    <li>Body Font: #838383</li>
  </ul></li>
  <li><b>Fonts</b><ul>
    <li>Logo <a href="https://fonts.google.com/specimen/Exo">Exo Semibold</a></li>
    <li>Headings <a href="https://fonts.google.com/specimen/Raleway">Raleway Semibold</a></li>
    <li>Body <a href="https://fonts.google.com/specimen/Bitter">Bitter</a></li>
  </ul></li>
</ul>

<b>User Interactions</b>
<ul>
  <li>All of the javascript will be in the js/app.js</li>
  <li>Start each task with a block comment and include your pseudo code.</li>
  <li>Create array objects of mock data per page and store them in a variable</li>
  <li>Dynamically display mock data per view.</li>
  <li>Sort - display data based on a keyword. Make the first items data show as default.</li>
</ul>

<h2>Task Breakdown - part 2</h2>
<ul>
  <li>Create class for remove animation</li>
  <li>When an item is down voted more than a certain number, add class to 'remove' item</li>
  <li>When answer is given positive credit, change the style of the points container.</li>
</ul>

<h2>Stretch Goal</h2>
<ul>
  <!-- <li>Retreive subject from url and display data accordingly</li> -->
  <li>Allow user to submit answer, store in local storage and display answer.</li>
  <li>Make actual forms but do not send data.</li>
</ul>

<h2>Update after 4/15</h2>
<b>To Do</b>
<ul>
  <li>Origin master needs to updated with the latest styles</li>
  <li>Add JS for voting system</li>
  <li>CSS for remove animation</li>
</ul>

<h1>Progressing nicely! Don't forget to update master branch.</h1>
<b>Improvments</b>
<ul>
  <li>Gwen and Angela: Let's stick to the mockups for the voting system. When the number is negative make the circle background red.</li>
  <li>Update master with Kyle's flexbox styles. Kyle: add flexbox container class to add flexbox to elements that need to use it. Polish CSS</li>
  <li>Cornelious: create an array of subjects and psuedo code direction to print to the #top-subjects element.</li>
</ul>