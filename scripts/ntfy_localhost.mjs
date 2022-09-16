import fetch from 'node-fetch';

fetch('https://ntfy.sh', {
    method: 'POST',
    body: JSON.stringify({
        "topic": "NAME_TOPIC",
        "message": "App running in localhost:3000, check it out!",
        "title": "App Running",
        "tags": ["computer","runner"],
        "priority": 3,
        "actions": [{ "action": "view", "label": "Abrir app", "url": "http://localhost:3000" }]
    })
});