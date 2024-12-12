function register() {
    const username = document.getElementById('UserName').value;
    const password = document.getElementById('PassWord').value;

    if (username === "" || password === "") {
        alert("Vui lòng điền thông tin");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert("Tài khoản đã tồn tại");
    } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công");
        window.location.href= "../html/signIn.html";
    }
}

function login(){
    const username = document.getElementById("UserName").value;
    const password = document.getElementById("Password").value;

    if(username === "" || password === ""){
        alert("please input information");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(users => users.username === username);
    const passwordExists = users.find(users => users.password === password && users.username === username);

    if(passwordExists)
    {
        alert("Sign in successfully!");
        window.location.href = "../html/home.html"
    }
    else {                 
        alert("Invalid username or password!");             
    }
}


function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Gọi hàm displayUsers để hiển thị danh sách người dùng khi tải trang
displayUsers();
