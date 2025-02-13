let kgroups = [
    {
      groupname: "BTS",
      members: 7,
      debut: "June 13, 2013",
      company: "Big Hit Entertainment"
    },
    {
      groupname: "Blackpink",
      members: 4,
      debut: "August 8, 2016",
      company: "YG Entertainment"
    },
    {
      groupname: "Twice",
      members: 9,
      debut: "June 25, 2015",
      company: "JYP Entertainment"
    },
    {
      groupname: "Stray Kids",
      members: 8,
      debut: "March 25, 2018",
      company: "JYP Entertainment"
    },
    {
      groupname: "Aespa",
      members: 4,
      debut: "February 11, 2020",
      company: "SM Entertainment"
    },
    {
      groupname: "Red Velvet",
      members: 5,
      debut: "April 11, 2014",
      company: "SM Entertainment"
    },
    {
      groupname: "Mamamoo",
      members: 4,
      debut: "August 18, 2014",
      company: "RCM Entertainment"
    },
    {
      groupname: "IVE",
      members: 6,
      debut: "August 25, 2019",
      company: "Cube Entertainment"
    },
    {
      groupname: "ATEEZ",
      members: 8,
      debut: "October 24, 2018",
      company: "KQ Entertainment"
    },
    {
      groupname: "G-IDLE",
      members: 5,
      debut: "July 8, 2018",
      company: "Cube Entertainment"
    },
  ]
  
  function rendernummembers() {
  
    let tableLayout = ` <tr> 
                               <th>groupname</th>
                               <th>members</th>
        
                             </tr>`
  
    for (let i = 0; i < kgroups.length; i++) {
    
  
        tableLayout += `  <tr> 
                               <td>${kgroups[i].groupname} </td>
                               <td>${kgroups[i].members}</td>
                               
                             </tr>`
    }
    report7members.innerHTML = tableLayout
  }
  
  function debutdate() { 
   
    let tableLayout = ` <tr> 
                               <th>groupname</th>
                               <th>debut</th>
        
                             </tr>`

  
    for (let i = 0; i < kgroups.length; i++) {
      tableLayout += `<tr>
    <td> ${kgroups[i].groupname} </td>
    <td> ${kgroups[i].debut} </td>
    </tr>`
    }
    groupdebut.innerHTML = tableLayout
  }
  // my getsearchdata function needs () , 102 

  function getsearchdata(event) {

  event.preventDefault();

  console.log("hello")

  //use spiderman is the id of the input in html we wanna access
    let namegroup = spiderman.value;
   // tablelayout is template string. creating a table layout

    let tablelayout = `<tr>  
    <th>groupname</th>
    <th>members</th>
    <th>debut</th>
    <th>company</th>
    </tr>`
  
    for (let i = 0; i < kgroups.length; i++) {
      if (kgroups[i].groupname.includes(namegroup)) {
      // adding [i] is for arrays for kgroups when inside for loop
        tablelayout += `<tr>
        <td> ${kgroups[i].groupname} </td>
        <td> ${kgroups[i].members} </td>
        <td> ${kgroups[i].debut} </td>
        <td> ${kgroups[i].company} </td>
        </tr>`
  
    searchresult.innerHTML = tablelayout 
      } 
  }
    searchdiv.style.display = "block"
  }
  //use () at the end of the function for immediate trigger. no () for the same function means it will wait for the action
  document.getElementById("hellokitty").addEventListener("submit", getsearchdata);

  //form in the html triggers the submit event not the button

  function createband(){ 
    
    let namegroup = inputname.value;
    let members = inputmembers.value;
    let debut = inputdebut.value;
    let company = inputcompany.value;

    //key is left side of : and value is right side of :
    let tmp = {
      name: namegroup, 
      members: members,
      debut: debut,
      company: company
    };
    kgroups.push(tmp);
rendercard(tmp);

    console.log(kgroups);

  }
// newband is a nickname for the object tmp
  function rendercard(newband) {

const band = document.getElementById("band")

let cardlayout = `

  <div class="card">
    <div class="card-header">Band Name: ${newband.name} </div>
    <div class="card-body"># of Members: ${newband.members}</div> 
    <div class="card-footer"> Debut Date: ${newband.debut} </div>
  <div class="card-body">Company Name: ${newband.company} </div>
  </div>
</div>`
band.innerHTML = cardlayout
  }


  // safari browser needs to use the enter key to submit the form.
  //search is case sensitive. 