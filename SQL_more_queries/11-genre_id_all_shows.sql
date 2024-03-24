-- Script that lists all the shows contained on the database hbtn_0d_tvshows
-- Each record should display: tv_shows.title -tv_show_genres.genre_id
-- Display NULL if a show doesn;t have a genre
SELECT tv_shows.title, tv_show_genres.genre_id FROM tv_shows LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;
