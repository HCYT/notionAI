/**
This is a setting class used to configure and send requests to the Notion API.
*/
import { v4 as uuid } from 'uuid';
const URL = "https://www.notion.so/api/v3/getCompletion";
export class setting {

    constructor(token, spaceId) {
        this.stream = false;
        this.token = token;
        this.spaceId = spaceId;
        this.model = "openai-3";
        this.is_space_permission = false;
        this.url = URL;
    }
    /**
    This function sends a request to the Notion API.
    @param {string} content - The content of the request.
    @returns {Promise} - A Promise that resolves with the response from the server.
    */
    async request(content) {
        const body = {
            "id": uuid(),
            "model": this.model,
            "spaceId": this.spaceId,
            "isSpacePermission": this.is_space_permission,
            "context": JSON.parse(content),
        };
        const cookies = [
            "token_v2=" + this.token,
        ];

        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Cookie": cookies.join("; "),
        };

        const response = await fetch(this.url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
            stream: this.stream,

        });
        return response.text();
    }
    /**

    This function parses a row of JSON data from the server response and returns the completion data.
    @param {string} row - The JSON data to be parsed.
    @returns {string} - The completion data from the JSON.
    */
    parseResponseJson(row) {
        if (row) {
            try {
                const data = JSON.parse(row);
                if (data["type"] == "success") {
                    return data["completion"];
                }
            } catch (err) {
                console.log(`error rowData : ${row}, error Message is : ${err}`);
            }
        }
        return "";
    }

}
export default setting;