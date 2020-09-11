import React from 'react';

// CSS
import 'assets/css/search/Search.css'

function Search() {
  return (
    <div className="search__wrapper">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.517 4.00006C7.81321 4.00006 4 7.81316 4 12.517C4 17.2209 7.81321 21.0342 12.517 21.0342C14.4706 21.0342 16.2704 20.3766 17.7074 19.2706L23.1132 24.6763C23.5448 25.108 24.2447 25.108 24.6763 24.6763C25.1079 24.2448 25.1079 23.5448 24.6763 23.1133L19.2704 17.7074C20.3764 16.2705 21.0341 14.4706 21.0341 12.517C21.0341 7.81316 17.2209 4.00006 12.517 4.00006ZM6.21053 12.517C6.21053 9.03419 9.03404 6.21059 12.517 6.21059C16 6.21059 18.8235 9.03419 18.8235 12.517C18.8235 16.0001 16 18.8237 12.517 18.8237C9.03404 18.8237 6.21053 16.0001 6.21053 12.517Z" fill="#686868" />
      </svg>
      <input type="text" placeholder="Busca" />
    </div>
  )
}

export default Search
