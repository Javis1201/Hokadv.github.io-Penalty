document.getElementById('add-penalty-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var reason = document.getElementById('reason').value;
    var amount = document.getElementById('amount').value;

    // 添加罚款记录到列表
    addPenaltyToList(name, reason, amount);

    // 清空表单
    document.getElementById('name').value = '';
    document.getElementById('reason').value = '';
    document.getElementById('amount').value = '';
});

function addPenaltyToList(name, reason, amount) {
    var penaltiesList = document.getElementById('penalties');

    // 创建新的罚款记录元素
    var penaltyItem = document.createElement('li');
    penaltyItem.classList.add('penalty-item');
    penaltyItem.innerHTML = '<strong>' + name + '</strong>: ' + reason + ' - ￥' + amount;

    // 将新记录添加到列表顶部
    penaltiesList.insertBefore(penaltyItem, penaltiesList.firstChild);
}
// 加载页面时从本地存储中加载已保存的记录
window.onload = function() {
    loadPenaltiesFromLocalStorage();
};

// 添加罚款记录到本地存储
document.getElementById('add-penalty-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var reason = document.getElementById('reason').value;
    var amount = document.getElementById('amount').value;

    // 添加记录到页面
    addPenaltyToList(name, reason, amount);
    
    // 保存记录到本地存储
    savePenaltyToLocalStorage(name, reason, amount);

    // 清空表单
    document.getElementById('name').value = '';
    document.getElementById('reason').value = '';
    document.getElementById('amount').value = '';
});

function addPenaltyToList(name, reason, amount) {
    var penaltiesList = document.getElementById('penalties');

    // 创建新的罚款记录元素
    var penaltyItem = document.createElement('li');
    penaltyItem.innerHTML = '<strong>' + name + '</strong>: ' + reason + ' - ￥' + amount;

    // 将新记录添加到列表顶部
    penaltiesList.insertBefore(penaltyItem, penaltiesList.firstChild);
}

function savePenaltyToLocalStorage(name, reason, amount) {
    // 从本地存储中获取已保存的记录（如果存在）
    var penalties = JSON.parse(localStorage.getItem('penalties')) || [];

    // 将新记录添加到记录数组
    penalties.push({ name: name, reason: reason, amount: amount });

    // 将记录数组保存回本地存储
    localStorage.setItem('penalties', JSON.stringify(penalties));
}

function loadPenaltiesFromLocalStorage() {
    // 从本地存储中加载已保存的记录
    var penalties = JSON.parse(localStorage.getItem('penalties')) || [];

    // 遍历记录并添加到页面上
    penalties.forEach(function(penalty) {
        addPenaltyToList(penalty.name, penalty.reason, penalty.amount);
    });
}
function generateReport() {
    window.location.href = "record.html";
}
