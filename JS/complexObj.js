var myMusic = [
    {
        "artist":"Billy Joel",
        "title":"Piano Man",
        "release_year":1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold":true
    },

    {
        "artist":"Beau Carnes",
        "title":"Cereal Man",
        "release_year":2003,
        "formats":[
            "Youtube Video",
            "Spotify"
        ]
    }
];

console.log(myMusic);

var secondArtist = myMusic[1].formats[1];
console.log(secondArtist);
