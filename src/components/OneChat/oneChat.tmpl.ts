export const tmpl = `
<div class='oneChatContainer'>
    <img class='oneChatImg' src={{imgSrc}}/>
    <div class='oneChatInfo'>
        <div class='mainInfo'>
            <p class='mainInfo_name'>{{name}}</p>
            <p class='mainInfo_text'>{{text}}</p>
        </div>
        <div class='otherInfo'>
            <p class='otherInfo_time'>{{time}}</p>
            <div class='otherInfo_counter'>{{counter}}</div>
        </div>
    </div>
</div>`;
