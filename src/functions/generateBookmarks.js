import { getData } from "./getData.js";

export async function generateBookmarks() {
    let data = await getData();
    let list = "";

    for (let item of data.reverse()) {
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
