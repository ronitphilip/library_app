import commonAPI from './commonAPI'
import SERVERURL from './serverURL'

// showAllBooksAPI - to get the book details from http://localhost:3000/addBooks and display it in the UI
export const showAllBooksAPI = async () => {
    return await commonAPI("GET",`${SERVERURL}/addBooks`,"")
}

// saveBookAPI - to post the book details from Modal and save it in http://localhost:3000/addBooks
export const saveBookAPI = async (bookDetails) => {
    return await commonAPI("POST",`${SERVERURL}/addBooks`,bookDetails)
}

export const deleteBookAPI  = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/addBooks/${id}`,{})
}

// numOfLikesAPI - to save the number of likes in http://localhost:3000/addBooks
export const numOfLikesAPI = async (id, likes) => {
    return await commonAPI("PATCH", `${SERVERURL}/addBooks/${id}`, { likes });
};
