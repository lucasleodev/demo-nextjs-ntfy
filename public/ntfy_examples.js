/*
*  BLOCO CONTENDO EXEMPLOS DE NOTIFICAÇÕES 🤖
fetch('https://ntfy.sh/name_topic', {
    method: 'POST',
    body: 'Objeto JSON enviando mensagem via JS.',
    headers: {
        'Title': 'Teste #1',
        'Tags': 'warning,skull',
        'Attach': 'https://filesrv.lan/space.jpg'
    }
});

fetch('https://ntfy.sh/name_topic', {
    method: 'POST',
    body: 'Objeto JSON enviando mensagem via JS, mas com tag de urgência',
    headers: {
        'Title': 'Teste #2',
        'Priority': 'low',
        'Tags': 'warning,skull',
        'Attach': 'https://filesrv.lan/space.jpg'
    }
});

fetch('https://ntfy.sh/name_topic', {
    method: 'POST',
    body: 'Objeto JSON enviando mensagem via JS, mas com tag de urgência, de nível max/5',
    headers: {
        'Title': 'Teste #3',
        'Priority': '5',
        'Tags': 'warning,skull',
        'Attach': 'https://filesrv.lan/space.jpg'
    }
});

fetch('https://ntfy.sh/name_topic', {
    method: 'POST',
    body: 'Objeto JSON enviando mensagem via JS, usando emojis no header',
    headers: {
        'Title': 'Teste #4',
        'Priority': '5',
        'Tags': 'smiling_imp,moyai',
        'Attach': 'https://filesrv.lan/space.jpg'
    }
});

fetch('https://ntfy.sh', {
    method: 'POST',
    body: JSON.stringify({
        "topic": "name_topic",
        "message": "Objeto JSON enviando mensagem via JS, todo o objeto sendo json dessa vez",
        "title": "Teste #5",
        "tags": ["sushi","volcano"],
        "priority": 3,
        "attach": "https://filesrv.lan/space.jpg",
        "filename": "diskspace.jpg",
        "click": "https://homecamera.lan/xasds1h2xsSsa/",
        "actions": [{ "action": "view", "label": "Admin panel", "url": "https://filesrv.lan/admin" }]
    })
});
*/

fetch('https://ntfy.sh', {
    method: 'POST',
    body: JSON.stringify({
        "topic": "name_topic",
        "message": "App running in localhost:3000, check it out!",
        "title": "App Running",
        "tags": ["computer","runner"],
        "priority": 3,
        "actions": [{ "action": "view", "label": "Abrir app", "url": "http://localhost:3000" }]
    })
});