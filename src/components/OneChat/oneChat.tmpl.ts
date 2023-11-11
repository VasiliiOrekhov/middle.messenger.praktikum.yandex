export const tmpl = `
<div class='oneChatContainer'>
    <img class='oneChatImg' src={{avatar}}/>
    <div class='oneChatInfo'>
        <div class='mainInfo'>
            <p class='mainInfo_name'>{{title}}</p>
            <p class='mainInfo_text'>{{last_message.content}}</p>
        </div>
        <div class='otherInfo'>
            <p class='otherInfo_time'>{{last_message.time}}</p>
            <div class='otherInfo_counter'>{{unread_count}}</div>
        </div>
    </div>
</div>`;
