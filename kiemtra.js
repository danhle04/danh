
const gameSound = document.getElementById('game-sound');
gameSound.play();const questions = [
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466613224_bao-cao.jpg',
        answer: 'báo cáo'
    },
    {
        image: 'https://2.bp.blogspot.com/-UOytrPANfKU/U8eaSkAPGrI/AAAAAAAACsQ/hAiagBrE8gs/s1600/2014-07-17+00.46.19-1.png',
        answer: 'neo đơn'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466613006_cung-cau.jpg',
        answer: 'cung cầu'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1627543138_lazi_948014.png',
        answer: 'ca dao'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466613189_mat-ma.jpg',
        answer: 'mật mã'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1514479758_bc2.jpg',
        answer: 'Ô ba ma'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466677191_nhan-tam.jpg',
        answer: 'nhẫn tâm'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466612687_hung-thu.jpg',
        answer: 'hứng thú'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466667898_tai-hoa.jpg',
        answer: 'tai họa'
    },
    {
        image: 'https://cdn.lazi.vn/storage/uploads/dhbc/1466667031_ao-mua.jpg',
        answer: 'áo mưa'
    }
];

let luutru = 0;

function loadQuestion() {
    if (luutru < questions.length) {
        const question = questions[luutru];
        document.getElementById('image').src = question.image;
        document.getElementById('guess').value = '';
        document.getElementById('message').textContent = '';
        document.getElementById('next').style.display = 'none';
    } else {
        document.getElementById('message').textContent = 'Chúc mừng bạn đã hoàn thành trò chơi!';
        document.getElementById('next').style.display = 'none';
        document.getElementById('image').style.display = 'none';
        document.querySelector('.input-container').style.display = 'none';
    }
}

function check() {
    const input = document.getElementById('guess').value.trim().toLowerCase();
    const correctAnswer = questions[luutru].answer.toLowerCase();

    if (input === correctAnswer) {
        document.getElementById('message').textContent = 'Bạn đã trả lời đúng!';
        document.getElementById('message').style.color = "green";
        document.getElementById('next').style.display = 'inline-block';
    } else {
        document.getElementById('message').textContent = 'Bạn trả lời sai mất rồi!';
        document.getElementById('message').style.color = "red";
    }
}

document.getElementById('next').addEventListener('click', function() {
    if (document.getElementById('message').textContent === "Bạn đã trả lời đúng!") {
        luutru++;
        loadQuestion();
    }
});

window.onload = loadQuestion;
