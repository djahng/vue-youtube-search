<template>
  <div class="container">
    <Header />
    
    <SearchBar @searchTermChange="onSearchTermChange" />

    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    async onSearchTermChange(searchTerm) {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      });

      this.videos = response.data.items;
      this.selectedVideo = response.data.items[0];  // Load a "default" video
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>
