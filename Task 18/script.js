const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    }
  ];

  const employees2 = [];

  var x = employees.length;

  const tableBody = document.getElementById("employee-table-body");

  employees.forEach(employee => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${employee.id}</td>
                     <td>${employee.name}</td>
                     <td>${employee.age}</td>
                     <td>${employee.department}</td>
                     <td>${employee.role.title}</td>
                     <td>${employee.role.level}</td>
                     <td>${employee.contact.email}</td>
                     <td>${employee.contact.phone}</td>
                     <td>${employee.skills}</td>`;
    tableBody.appendChild(row);                 
  });


var tr = 0;
function divShow(){
    if(tr % 2 == 0){
        document.getElementById("btnClickAdd").style.display = "block";
    }else{
        document.getElementById("btnClickAdd").style.display = "none";
    }
    ++tr;
}

function submitInfo(){
    const divid = document.getElementById("divID").value;
    const divname = document.getElementById("divName").value;
    const divAge = document.getElementById("divAge").value;
    const divDep = document.getElementById("divDep").value;
    const divRoleTitle = document.getElementById("divRoleTitle").value;
    const divRoleLevel = document.getElementById("divRoleLevel").value;
    const divContactEmail = document.getElementById("divContactEmail").value;
    const divContactPhone = document.getElementById("divContactPhone").value;
    const divSkills = document.getElementById("divSkills").value;
    employees[x] =
    {
        id: divid,
        name: divname,
        age: divAge,
        department: divDep,
        role: { title: divRoleTitle, level: divRoleLevel },
        contact: { email: divContactEmail, phone: divContactPhone },
        skills: [divSkills]

    }

      const row = document.createElement("tr");
      row.innerHTML = `<td>${employees[x].id}</td>
                       <td>${employees[x].name}</td>
                       <td>${employees[x].age}</td>
                       <td>${employees[x].department}</td>
                       <td>${employees[x].role.title}</td>
                       <td>${employees[x].role.level}</td>
                       <td>${employees[x].contact.email}</td>
                       <td>${employees[x].contact.phone}</td>
                       <td>${employees[x].skills}</td>`;
      tableBody.appendChild(row); 

      ++x;
      ++tr;
      document.getElementById("btnClickAdd").style.display = "none";
}

function removeTableRow(){
    const abs = document.getElementById("employee-table-body");
    abs.innerHTML = " ";
    --x;
    for(var i = 0; i < x; ++i){
        const row = document.createElement("tr");
        row.innerHTML = `<td>${employees[i].id}</td>
                        <td>${employees[i].name}</td>
                        <td>${employees[i].age}</td>
                        <td>${employees[i].department}</td>
                        <td>${employees[i].role.title}</td>
                        <td>${employees[i].role.level}</td>
                        <td>${employees[i].contact.email}</td>
                        <td>${employees[i].contact.phone}</td>
                        <td>${employees[i].skills}</td>`;
        tableBody.appendChild(row); 
    }
        
}