var express = require('express');
var appStoreReviewsModule = require('app-store-reviews');
var appStoreReviews = new appStoreReviewsModule();

appStoreReviews.on('review', function(review) {
	console.log(review);
});

appStoreReviews.on('nextPage', function(nextPage) {
	appStoreReviews.getReviews(nextPage['appId'], nextPage['country'], nextPage['nextPage']);
});

appStoreReviews.getReviews('302920553', 'us', 1);

