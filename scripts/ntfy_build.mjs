import fetch from 'node-fetch';

fetch('https://ntfy.sh', {
    method: 'POST',
    body: JSON.stringify({
        "topic": "NAME_TOPIC",
        "message": `This was a triumph\nI'm making a note here; "Huge success"`,
        "title": "App Build",
        "tags": ["computer","toolbox"],
        "priority": 3,
        "actions": [{ "action": "view", "label": "Abrir app", "url": "http://localhost:3000" }]
    })
});