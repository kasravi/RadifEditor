// "M 0 0 L 0 1 L 1 1 Z".split(" ").reduce(
//     (a,i)=>{
//       var aa = Math.round(parseFloat(i)*100)/100; 
//       if(isNaN(aa)){
//         a.d.push(i==="M"?[i]:[i.toLowerCase()])
//       } 
//       else 
//       {
//         if(a.d.length>1&&(a.d[a.d.length-2][0]==="M"||a.d[a.d.length-2][0]==="l")){
//             a.d[a.d.length-1].push(
//           Math.round((aa-a.p[a.d[a.d.length-1].length-1])*100)/100)
//             a.p[a.d[a.d.length-1].length-2]=aa
//         }
//         else{
//           a.d[a.d.length-1].push(aa);
//           a.p[a.d[a.d.length-1].length-2]=aa
//         }
        
        
//       } 
//       return a
//     },{d:[],p:[0,0]})
var aa = "M0,14.46l0,-1.02l2.43,0l0,-12.42l-2.43,0l0,-1.02l3.645,0l0,14.46l-3.645,0z"
console.log(JSON.stringify(aa.split("").map(f=>f.match(/[a-z]/i)?`,${f},`:f).join("").split(",").filter(f=>f.length>0).reduce((a,i)=>{var aa = parseFloat(i); if(isNaN(aa)){a.push([i])} else {a[a.length-1].push(aa)} return a},[])))


U: P=!esharehu!
U: O=!esharehd!
U: I=!esharehu!
U: L=!esharechap!
U: K=!esharehdorrab!
U: J=!esharehud!
U: M=!esharehdu!
U: N=!dorrab!
U: B=!shalal!
U: U=!riz!
U: [=!groohs!
U: ]=!groohe!
U: Q=!acckoron!