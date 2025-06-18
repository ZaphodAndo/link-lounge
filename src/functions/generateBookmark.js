import { data } from "../data.js";

export function generateBookmark() {
    let list = "";

    for (let item of data) {
        const li = `
            <li>            
                <h2>${item.title}</h2>
                <a href="${item.url}" target="_blank">${item.url}</a>
                <p>${item.note}</p>
            </li>
        `;
        list = list.concat(li);
    }

    return list;
}
