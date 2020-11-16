import React from "react";
import NewsCard from "./NewsCard";

const newsFeedList = [
  {
    user: 'Jamal',
    img: 'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png',
    message: 'How\'s it going'
  },
  {
    user: 'Venessa',
    img: 'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png',
    message: 'Beautiful Day'
  },
  {
    user: 'Kimberly',
    img: 'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png',
    message: 'The sun is out, the birds are sing... Ugh it\'s morning.'
  }
];

function NewsFeed() {
  return (
    <React.Fragment>
      <hr />
      {newsFeedList.map((newsCard, index) =>
        <NewsCard img={newsCard.img}
          user={newsCard.user}
          message={newsCard.message}
          key={index}/>
        )}
    </React.Fragment>
  );
}

export default NewsFeed;