import { serverUrl } from "./serverUrl";
import { commonAPI } from "./commonAPI";

//Add Video API Call => post => localhost:3000/allVideos
export const addVideoAPI = async(reqBody)=>{
        return await commonAPI('post',`${serverUrl}/allVideos`,reqBody)
}

//get all Video API Call from json-server  => get  => localhost:3000/allVideos
export const getVideoAPI = async()=>{
 return await commonAPI('get',`${serverUrl}/allVideos`,{})
}

//get a particular video from json-server => get  => localhost:3000/allVideos/:789
export const getAVideoAPI = async(id)=>{
return await commonAPI('get',`${serverUrl}/allVideos/${id}`,"")
}

//delete a video from json-server => delete => localhost:3000/allVideos
export const deleteVideoAPI = async(id)=>{
return await commonAPI('delete',`${serverUrl}/allVideos/${id}`,"")
}

//add history API call => post => localhost:3000/watchinghistory
export const addHistoryAPI = async(videoDetails)=>{
        return await commonAPI('post',`${serverUrl}/watchHistrory`,videoDetails)
}

//get history API call => get => localhost:3000/watchinghistory
export const getHistoryAPI = async()=>{
        return await commonAPI('get',`${serverUrl}/watchHistrory`,{})
}

//delete history API call => delete => localhost:3000/watchinghistory
export const  deleteHistoryAPI = async(id)=>{
        return await commonAPI('delete',`${serverUrl}/watchHistrory/${id}`,"")
}

//add category API call => post => localhost:3000/category
export const addCategoryAPI = async(reqBody)=>{
        return await commonAPI('post',`${serverUrl}/category`,reqBody)
}

//get category API call => get => localhost:3000/category

export const getCategoryAPI = async()=>{
        return await commonAPI('get',`${serverUrl}/category`,"")
}

//delete category API call => delete => localhost:3000/category/890809
export const deleteCategoryAPI = async(id)=>{
return await commonAPI('delete',`${serverUrl}/category/${id}`,"")
}

//update category API call => put => localhost:3000/category
export const updateCategoryAPI = async(id,category)=>{
return await commonAPI('put',`${serverUrl}/category/${id}`,category)
}