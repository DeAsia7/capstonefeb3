let kgroups = [
    {
      groupname: "BTS",
      members: 7,
      debut: "June 13, 2013",
      company: 'Big Hit Entertainment'
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
      if (kgroups[i].members == 7)
  
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
  
  document.getElementById("hellokitty").addEventListener("click", getsearchdata);
  function getsearchdata() {

    let namegroup = inputname.value;
  
    let tablelayout = `<tr>
    <th>groupname</th>
    <th>members</th>
    <th>debut</th>
    <th>company</th>
    </tr>`
  
    for (let i = 0; i < kgroups.length; i++) {
      if (kgroups[i].groupname.includes(namegroup)) {
  
        tablelayout += `<tr>
        <td> ${kgroups[i].groupname} </td>
        <td> ${kgroups[i].members} </td>
        <td> ${kgroups[i].debut} </td>
        <td> ${kgroups[i].company} </td>
        </tr>`
      }
    searchresult.innerHTML = tablelayout
  }
  }
  
  function createband(){ 
    
    let namegroup = inputname.value;
    let members = inputmembers.value;
    let debut = inputdebut.value;
    let company = inputcompany.value;

    let tmp = {
      name: namegroup, 
      members: members,
      debut: debut,
      company: company
    };
    kgroups.push(tmp);
  }