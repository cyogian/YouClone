import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import "./App.css";


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    onTermSubmit = async (term) => {
        document.querySelector('#search-box').classList.add('loading');
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
        document.querySelector('#search-box').classList.remove('loading');
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        
    }
    render() {
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row" id="layout-row">
                        <div className="column" id="video-detail">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="column" id="video-list">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    };
};

export default App;