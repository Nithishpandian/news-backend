const asyncHandler = require("express-async-handler")
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// @desc    Get top headlines
// @route   GET /api/home
// @access  public
const getHeadlines = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})

// @desc    Get top business
// @route   GET /api/business
// @access  public
const getBusiness = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        category: 'business',
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})

// @desc    Get entertainment
// @route   GET /api/entertainment
// @access  public
const getEntertainment = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        category: 'entertainment',
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})

// @desc    Get health
// @route   GET /api/health
// @access  public
const getHealth = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        category: 'health',
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})

// @desc    Get science
// @route   GET /api/science
// @access  public
const getScience = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        category: 'science',
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})

// @desc    Get sports
// @route   GET /api/sports
// @access  public
const getSports = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        category: 'sports',
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})

// @desc    Get technology
// @route   GET /api/technology
// @access  public
const getTechnology = asyncHandler(async(req, res)=>{
    newsapi.v2.topHeadlines({
        category: 'technology',
        language: 'en',
        country: 'in'
      }).then(response => {
        res.status(200).json(response)
      });
})



module.exports = {
    getHeadlines,
    getBusiness,
    getEntertainment,
    getHealth,
    getScience,
    getSports,
    getTechnology
}