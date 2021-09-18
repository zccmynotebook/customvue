import parse from './parse.js'
let str=`
<div id="wrap">
    <h2 class="title">VUE</h2>
    <ul>
        <li>A</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>
<main>
<h2>REACT</h2>
</main>
`
console.log(parse(str))
 

