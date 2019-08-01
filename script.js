let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Educational",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Educational",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "Big Brother",
    lengthInMinutes: 82,
    category: "Action",
    uploadDate: new Date("07-2-2019"),
    tags: "body, rock, power, action",
    features: ["repeated", "360°", "HD"],
    viewCount: 69000,
    rating: 4.7
  },
  {
    title: "Geo News",
    lengthInMinutes: 15,
    category: "News",
    uploadDate: new Date("11-19-2018"),
    tags: "news, everyday, advirtisment, circumstances",
    features: ["Live", "360°", "HDR"],
    viewCount: 5006,
    rating: 4.7
  },
  {
    title: "fashion show",
    lengthInMinutes: 60,
    category: "Fashion",
    uploadDate: new Date("05-3-2019"),
    tags: "fashion, style, classic",
    features: ["repeat", "360°", "HD"],
    viewCount: 3450,
    rating: 4.2
  },
  {
    title: "wild life",
    lengthInMinutes: 50,
    category: "Informative",
    uploadDate: new Date("4-25-2017"),
    tags: "wild, prey, predators, king",
    features: ["repeat", "360°", "VR"],
    viewCount: 73400,
    rating: 4.7
  },
  {
    title: "Mathematics tutorials ",
    lengthInMinutes: 2,
    category: "Educational",
    uploadDate: new Date("08-1-2019"),
    tags: "mathlers, mindgame, , expert",
    features: ["360°", "HD"],
    viewCount: 50,
    rating: 3.2
  },
  {
    title: "pop songs",
    lengthInMinutes: 3,
    category: "music",
    uploadDate: new Date("03-19-2017"),
    tags: "music, tone, beats",
    features: ["subtitile", "360°", "VR"],
    viewCount: 4500,
    rating: 3.4
  },
  {
    title: "biryani recipe",
    lengthInMinutes: 17,
    category: "Informative",
    uploadDate: new Date("10-12-2018"),
    tags: "taste, pakistani dish, energy",
    features: ["Live", "360°", "HD"],
    viewCount: 3050,
    rating: 4.3
  },
  {
    title: "fifa worldcup football match",
    lengthInMinutes: 90,
    category: "Sports",
    uploadDate: new Date("09-7-2019"),
    tags: "fifa, sports, worldcup, energy",
    features: ["Live", "360°", "HDR"],
    viewCount: 9954000,
    rating: 4.7
  },
  {
    title: "Shahveer Jaffery Vlogs",
    lengthInMinutes: 10,
    category: "Comedy",
    uploadDate: new Date("08-4-2019"),
    tags: "funny, laughter",
    features: ["repeat", "360°", "HD"],
    viewCount: 4600,
    rating: 4.2
  },
  {
    title: "Cinderella animation",
    lengthInMinutes: 70,
    category: "Animation",
    uploadDate: new Date("12-19-2019"),
    tags: "cartoon, disney land, animated movies",
    features: ["subtiltals", "360°", "VR"],
    viewCount: 45050,
    rating: 4.5
  },

];

// Print each video in this format:
// Title: Photoshop tutorial
// Length: 70 minutes
// Category: Education
// Views: 4,700
// Uploaded On: 22-July-2019
// Rating: 

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]


for (i = 0; i < videos.length; i++) {
  let date = videos[i].uploadDate;
  console.log("Title: " + videos[i].title);
  console.log("Lenght: " + videos[i].lengthInMinutes);
  console.log("Category: " + videos[i].category);
  console.log("Views: " + videos[i].viewCount);
  console.log("Uploaded On: " + date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear());
  console.log("Rating: " + videos[i].rating);
  console.log("");
}

console.log("");

// Print titles of all short ( less than 3 minutes ) videos.

for (i = 0; i < videos.length; i++) {
  if (videos[i].lengthInMinutes <= 3) {
    console.log(videos[i].title);
  }
}

console.log("");

// Print titles of all long ( greater than 20 minutes ) videos.

for (i = 0; i < videos.length; i++) {
  if (videos[i].lengthInMinutes >= 20) {
    console.log(videos[i].title);
  }
}

console.log("");

// Print titles of all medium length videos.

for (i = 0; i < videos.length; i++) {
  if (videos[i].lengthInMinutes < 20 && videos[i].lengthInMinutes > 3) {
    console.log(videos[i].title);
  }
}

console.log("");

// Print titles of all long ( greater than 20 minutes ) videos.

for (i = 0; i < videos.length; i++) {
  if (videos[i].lengthInMinutes > 20) {
    console.log(videos[i].title);
  }
}

console.log("");

// Print title of the longest video

let maxLength = 0;
let longestVideo;

for (let i = 0; i < videos.length; i++) {
  if (maxLength < videos[i].lengthInMinutes) {
    maxLength = videos[i].lengthInMinutes;
    longestVideo = videos[i].title;
  }
}
console.log(longestVideo + " is the longest video")
console.log("");

videos.forEach(function (clip) {
  if (maxLength < clip.lengthInMinutes) {
    maxLength = clip.lengthInMinutes;
    longestVideo = clip.title;
  }
});
console.log(longestVideo + " is the longest video")
console.log("");





// Print titles of all "Educational" videos

for (i = 0; i < videos.length; i++) {
  if (videos[i].category === "Educational") {
    console.log(videos[i].title);
  }
}

console.log("");


// Print titles of all videos with tag "Javascript"

// for (i = 0; i < videos.length; i++) {
//   let arraysOftages = videos[i].tags.split(", ");
//   if (arraysOftages[i] === "javascript") {
//     console.log(videos[i].title);
//   }
// }

// console.log("");


videos.forEach(function (video) {
  let arraysOftages = video.tags.split(", ");
  for (i = 0; i < arraysOftages.length; i++) {
    if (arraysOftages[i] === "javascript") {
      console.log(video.title);
    }
  }
})
console.log("");

// Print titles of all videos with HD feature
videos.forEach(function (video) {

  for (i = 0; i < video.features.length; i++) {
    if (video.features[i] === "HD") {
      console.log(video.title);
    }
  }
})
console.log("");

// Print titles of all videos uploaded today

let videoDate;
let videoMonth;
let videoYear;
let today = new Date().getDate();
let thisMonth = new Date().getMonth();
let thisYear = new Date().getFullYear();

videos.forEach(function (clip) {
  videoDate = clip.uploadDate.getDate();
  videoMonth = clip.uploadDate.getMonth();
  videoYear = clip.uploadDate.getFullYear();
  if (today == videoDate && thisMonth == videoMonth && thisYear == videoYear) {
    console.log(clip.title);
  }
});
console.log("");



// Print titles of all videos uploaded this week

videos.forEach(function (clip) {
  videoDate = clip.uploadDate.getDate();
  videoMonth = clip.uploadDate.getMonth();
  videoYear = clip.uploadDate.getFullYear();
  if (thisMonth == videoMonth && thisYear == videoYear) {
    if (today == videoDate || today - 2 == videoDate || today - 3 == videoDate || today - 4 == videoDate || today - 5 == videoDate || today - 6 == videoDate) {
      console.log(clip.title);
    }
  }

});
console.log("");

// Print titles of all videos uploaded this month
videos.forEach(function (clip) {
  videoDate = clip.uploadDate.getDate();
  videoMonth = clip.uploadDate.getMonth();
  videoYear = clip.uploadDate.getFullYear();
  if (thisMonth == videoMonth && thisYear == videoYear) {
    console.log(clip.title);
  }

});
console.log("");

// Print titles of all videos uploaded this year
videos.forEach(function (clip) {
  videoDate = clip.uploadDate.getDate();
  videoMonth = clip.uploadDate.getMonth();
  videoYear = clip.uploadDate.getFullYear();
  if (thisYear == videoYear) {
    console.log(clip.title);
  }

});
console.log("");







