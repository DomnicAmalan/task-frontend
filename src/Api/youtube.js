import Axios from 'axios'

const YoutubeInstance = Axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/videos"
})

export const getTrending = async(nextPage) => {
  const {data} = await Axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA4Hde2-k2pkcwisd49Qe6CId5GazvPtsM&maxResults=50`)
  return data
}

export const getRelated = async(videoId) => {
  const {data} = await Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=AIzaSyA4Hde2-k2pkcwisd49Qe6CId5GazvPtsM`)
  return data
}