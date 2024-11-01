export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    cover: string;
    artists: string[];
}

export const autogeneratePlaylistSongs: Song[] = []


export const playlists: Playlist[] = [
    {
        id: '1',
        albumId: 1,
        title: "Chill Lo-Fi Music",
        cover:"/VINYL_MORNING_COFFEE_4-min.webp",
            // "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
        artists: ["NoSpirit", "Casiio"],
    },
    {
        id: '2',
        albumId: 2,
        title: "Lo-Fi Chill Session",
        cover:"/2amsynth-vinyl.webp",
            // "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
        artists: ["Kupla", "Blue Fox"],
    },
    {
        id: '3',
        albumId: 3,
        title: "Study Session",
        cover:"/a1435058381_65.jpg",
            // "https://f4.bcbits.com/img/a1435058381_65.jpg",
            artists: ["Tenno", "xander", "Team Astro"],
        },
    {
        id: '4',
        albumId: 4,
        title: "Blue Note Study Time",
        cover:"/a1962013209_16.jpg",
        // "https://f4.bcbits.com/img/a1962013209_16.jpg",
        artists: ["Raimu", "Yasumu"],
    },
    {
        id: '5',
        albumId: 5,
        title: "Chau Saura Session",
        cover:"/a2793859494_16.jpg",
        // "https://f4.bcbits.com/img/a2793859494_16.jpg",
        artists: ["Chau Saura", "amies", "kyu"],
    },
    {
        id: '6',
        albumId: 6,
        title: "Like a Necessity",
        cover:"/a0363730459_16.jpg",
        // "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
    },
    {
        id: "7",
        albumId:7,
        title:"Música que te gustó",
        cover:"/YTMPlaylist.png",
        artists:["Playlist autogenerada"]
    },
];

export const songs: Song[] = [
    ...autogeneratePlaylistSongs,
    {
        "id": 1,
        "albumId": 1,
        "title": "Moonlit Walk",
        "image": playlists[0].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "Coffee Daze",
        "image": playlists[0].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Skyline Serenade",
        "image": playlists[0].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 1,
        "title": "Urban Echoes",
        "image": playlists[0].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 1,
        "title": "Night's End",
        "image": playlists[0].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 2,
        "title": "Silent Rain",
        "image": playlists[1].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 2,
        "title": "Lost Pages",
        "image": playlists[1].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 2,
        "title": "Midnight Tales",
        "image": playlists[1].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 2,
        "title": "City Lights",
        "image": playlists[1].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 2,
        "title": "Night Drive",
        "image": playlists[1].cover,
        // `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
        "artists": ["Urban Nocturne"],
        "album": "Midnight Tales",
        "duration": "4:20"
    },
    {
        "id": 1,
        "albumId": 3,
        "title": "Lunar",
        "image":playlists[2].cover,
        // `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 3,
        "title": "Go go go!",
        "image": playlists[2].cover,
        // `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 3,
        "title": "Keep focus!",
        "image": playlists[2].cover, 
        // `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 4,
        "albumId": 3,
        "title": playlists[2].cover,
        "image": "/a1435058381_65.jpg", 
        // `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 5,
        "albumId": 3,
        "title": playlists[2].cover,
        "image": "/a1435058381_65.jpg", 
        // `https://f4.bcbits.com/img/a1435058381_65.jpg`,
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 4,
        "title": "Lunar",
        "image": playlists[3].cover, 
        // "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:40"
    },
    {
        "id": 2,
        "albumId": 4,
        "title": "Go go go!",
        "image": playlists[3].cover, 
        // "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:20"
    },
    {
        "id": 3,
        "albumId": 4,
        "title": "Keep focus!",
        "image": playlists[3].cover, 
        // "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:40"
    },
    {
        "id": 4,
        "albumId": 4,
        "title": "JavaScript is the way",
        "image": playlists[3].cover, 
        // "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "3:10"
    },
    {
        "id": 5,
        "albumId": 4,
        "title": playlists[3].cover,
        "image": "/a1962013209_16.jpg", 
        // "https://f4.bcbits.com/img/a1962013209_16.jpg",
        "artists": ["Tenno"],
        "album": "Study Session",
        "duration": "2:10"
    },
    {
        "id": 1,
        "albumId": 5,
        "title": "Moonlit Walk",
        "image": playlists[4].cover,
        // "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:12"
    },
    {
        "id": 2,
        "albumId": 5,
        "title": "Coffee Daze",
        "image": playlists[4].cover, 
        // "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:07"
    },
    {
        "id": 3,
        "albumId": 5,
        "title": "Skyline Serenade",
        "image": playlists[4].cover,
        // "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:50"
    },
    {
        "id": 4,
        "albumId": 5,
        "title": "Urban Echoes",
        "image": playlists[4].cover, 
        // "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "3:30"
    },
    {
        "id": 5,
        "albumId": 5,
        "title": "Night's End",
        "image": playlists[4].cover, 
        // "https://f4.bcbits.com/img/a2793859494_16.jpg",
        "artists": ["LoFi Dreamer"],
        "album": "Chill Lo-Fi Music",
        "duration": "4:20"
    },
    {   id: 1,
        albumId: 6,
        album: "Like a Necessity",
        image: playlists[5].cover,
            // "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
        title: "Moonlit Walk",
        duration: "1:57"
    },
    {   id: 2,
        albumId: 6,
        album: "Like a Necessity",
        image: playlists[5].cover,
            // "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
        title: "Coffee Daze",
        duration: "1:49"
    },
    {   id: 3,
        albumId: 6,
        album: "Like a Necessity",
        image: playlists[5].cover,
            // "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
        title: "Skyline Serenade",
        duration: "2:35"
    },
    {   id: 4,
        albumId: 6,
        album: "Like a Necessity",
        image: playlists[5].cover,
            // "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
        title: "Urban Echoes",
        duration: "2:49"
    },
    {   id: 5,
        albumId: 6,
        album: "Like a Necessity",
        image: playlists[5].cover,
            // "https://f4.bcbits.com/img/a0363730459_16.jpg",
        artists: ["WFS", "Nadav Cohen"],
        title: "Night's End",
        duration: "2:29"
    }

]