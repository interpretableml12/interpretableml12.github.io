function getUserName() {
    let username;
    if (localStorage.getItem('user_name')) {
        username = localStorage.getItem('user_name');
    } else {
        username = generateRandomUsername();
        localStorage.setItem('user_name', username);
    }

    return username;
}

function generateRandomUsername() {
    return 'User_' + Math.random().toString(16).substring(2, 8);
}

function submitSurveyA() {
    const surveyData = {
        "user_name": getUserName(),
        "type": 'A',
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
        responses: {}
    };

    for (let i = 1; i <= 2; i++) {
        const questionName = `q${i}`;
        const selectedOptions = [];

        document.querySelectorAll(`input[name="${questionName}"]:checked`).forEach(option => {
            selectedOptions.push(option.value);
        });

        surveyData.responses[questionName] = selectedOptions;
    }

    const auth1 = "ghp_jMgBY"
    const auth2 = "WcE5Ty6R8i"
    const auth3 = "IFxiKYn6S"
    const auth4 = "kzCXH62Lfr7G"

    const accessToken = auth1 + auth2 + auth3 + auth4;
    const repoOwner = 'interpretableml12';
    const repoName = 'interpretableml12.github.io';

    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `token ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
            title: 'Multi-question Survey Response',
            body: JSON.stringify(surveyData)
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Survey submitted successfully!');
        // Clear the selected checkboxes
        for (let i = 1; i <= 10; i++) {
            document.querySelectorAll(`input[name="q${i}"]:checked`).forEach(option => {
                option.checked = false;
            });
        }
    })
    .catch(error => {
        console.error('Error submitting survey:', error);
        alert('An error occurred while submitting the survey.');
    });

    redirectToNextPage_Temp()
}



function redirectToNextPage_Temp() {
    // 이동할 링크를 설정합니다.
    const nextPageUrl = 'counter.html';

    // 현재 창에서 새로운 페이지로 이동합니다.
    window.location.href = nextPageUrl;
}



function submitSurveyB() {
    const surveyData = {
        "user_name": getUserName(),
        "type": 'B',
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
        responses: {}
    };

    for (let i = 1; i <= 2; i++) {
        const questionName = `q${i}`;
        const selectedOptions = [];

        document.querySelectorAll(`input[name="${questionName}"]:checked`).forEach(option => {
            selectedOptions.push(option.value);
        });

        surveyData.responses[questionName] = selectedOptions;
    }

    const auth1 = "ghp_jMgBY"
    const auth2 = "WcE5Ty6R8i"
    const auth3 = "IFxiKYn6S"
    const auth4 = "kzCXH62Lfr7G"

    const accessToken = auth1 + auth2 + auth3 + auth4;
    const repoOwner = 'interpretableml12';
    const repoName = 'interpretableml12.github.io';

    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `token ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
            title: 'Multi-question Survey Response',
            body: JSON.stringify(surveyData)
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Survey submitted successfully!');
        // Clear the selected checkboxes
        for (let i = 1; i <= 10; i++) {
            document.querySelectorAll(`input[name="q${i}"]:checked`).forEach(option => {
                option.checked = false;
            });
        }
    })
    .catch(error => {
        console.error('Error submitting survey:', error);
        alert('An error occurred while submitting the survey.');
    });
}



