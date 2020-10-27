import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RocketEmoji = ({ size }) => {
  const [altId] = useState(
    Math.random()
      .toString()
      .substr(2, 5),
  );
  const rocketEmojiId = 'rocketEmoji-' + altId;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size}>
      <linearGradient
        id={'A-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="133.645"
        y1="81.666"
        x2="133.645"
        y2="50.304"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#ff7b00" />
        <stop offset=".242" stopColor="#fb6b00" />
        <stop offset=".711" stopColor="#f04200" />
        <stop offset="1" stopColor="#e82500" />
      </linearGradient>
      <path
        fill={'url(#A-' + rocketEmojiId + ')'}
        d="M18.942 34.59C6.561 40.933 3.04 55.003 3.04 55.003s1.469-1.807 4.212-4.242C3.598 57.079 2 62 2
           62s4.912-1.586 11.232-5.242C10.802 59.496 9 60.962 9 60.962s14.067-3.521 20.409-15.904L18.942 34.59z"
      />
      <linearGradient
        id={'B-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="133.644"
        y1="73.101"
        x2="133.644"
        y2="51.672"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#fa0" />
        <stop offset=".175" stopColor="#ffa400" />
        <stop offset=".418" stopColor="#ff9200" />
        <stop offset=".701" stopColor="#ff7400" />
        <stop offset="1" stopColor="#ff4d00" />
      </linearGradient>
      <path
        fill={'url(#B-' + rocketEmojiId + ')'}
        d="M19.082 36.664c-8.778 4.015-10.63 14.185-10.63 14.185s.986-1.251
           2.877-2.899c-2.355 4.458-3.272 7.995-3.272 7.995s3.53-.908 7.99-3.267c-1.646
            1.887-2.896 2.87-2.896 2.87s10.169-1.85 14.185-10.63l-8.254-8.254z"
      />
      <linearGradient
        id={'C-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="133.647"
        y1="66.975"
        x2="133.647"
        y2="51.672"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#ffb500" />
        <stop offset=".087" stopColor="#ffba00" />
        <stop offset=".674" stopColor="#ffda00" />
        <stop offset="1" stopColor="#ffe600" />
      </linearGradient>
      <path
        fill={'url(#C-' + rocketEmojiId + ')'}
        d="M19.854 37.437c-5.014 5.236-7.465 14.176-7.465 14.176s8.933-2.445 14.177-7.465l-6.712-6.711z"
      />
      <linearGradient
        id={'D-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="141.64"
        y1="44.097"
        x2="154.103"
        y2="44.097"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#005687" />
        <stop offset="1" stopColor="#2289c7" />
      </linearGradient>
      <path
        fill={'url(#D-' + rocketEmojiId + ')'}
        d="M43.99 48.097c.568-7.62-.553-13.197-.553-13.197s-12.111 6.819-10.41 8.52c4.692 4.693 5.106
           6.923.225 11.805-.234.234.209.549.457.456 5.377-2.026 10.137-5.643 10.281-7.584z"
      />
      <linearGradient
        id={'E-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="113.188"
        y1="44.097"
        x2="125.652"
        y2="44.097"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#2289c7" />
        <stop offset="1" stopColor="#005687" />
      </linearGradient>
      <path
        fill={'url(#E-' + rocketEmojiId + ')'}
        d="M15.904 20.01c-1.941.145-5.559 4.905-7.583 10.282-.094.248.222.691.456.457 4.881-4.881 7.111-4.468
           11.805.226 1.7 1.701 8.52-10.41 8.52-10.41s-5.579-1.122-13.198-.555z"
      />
      <radialGradient
        id={'F-' + rocketEmojiId}
        cx="133.644"
        cy="46.926"
        r="8.768"
        gradientTransform="rotate(45.001 91.56 -87.079)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#657078" />
        <stop offset=".265" stopColor="#606b72" />
        <stop offset=".613" stopColor="#525b62" />
        <stop offset="1" stopColor="#3c4247" />
      </radialGradient>
      <path
        fill={'url(#F-' + rocketEmojiId + ')'}
        d="M24.812 25.159c-9.119 9.119-8.739 12.305-3.507 17.537 5.229 5.23 8.417 5.612 17.536-3.508L24.812 25.159z"
      />
      <path
        fill="#302C3B"
        d="M30.17 36.718c-3.588 3.59-6.174 6.821-5.776 7.219.401.4 3.632-2.184 7.222-5.774l-1.446-1.445zM34.501 
          38.161c-3.587 3.592-6.174 6.822-5.774 7.221.399.399 3.632-2.187 7.22-5.775l-1.446-1.446zM25.839 32.387c-3.591
          3.589-6.176 6.821-5.777 7.218.4.4 3.631-2.186 7.222-5.773l-1.445-1.445zM24.394 28.054c-3.589 3.589-6.174
          6.82-5.774 7.22.399.399 3.632-2.188 7.22-5.777l-1.446-1.443z"
      />
      <linearGradient
        id={'G-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="121.78"
        y1="23.538"
        x2="145.512"
        y2="23.538"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset=".297" stopColor="#cfdde6" />
        <stop offset=".472" stopColor="#cad8e1" />
        <stop offset=".679" stopColor="#bccbd3" />
        <stop offset=".901" stopColor="#a6b4bb" />
        <stop offset="1" stopColor="#99a8ae" />
      </linearGradient>
      <path
        fill={'url(#G-' + rocketEmojiId + ')'}
        d="M61.979 2.021S46.598.621 26.323 20.897c-9.089 9.089-8.267 12.707-2.098 18.877 6.172 6.172 9.789 6.992
           18.879-2.098C63.378 17.401 61.979 2.021 61.979 2.021z"
      />
      <circle fill="#E81C27" cx="43.103" cy="20.899" r="6.754" />
      <linearGradient
        id={'H-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="208.811"
        y1="-44.46"
        x2="218.462"
        y2="-44.46"
        gradientTransform="rotate(90 95.69 -97.047)"
      >
        <stop offset="0" stopColor="#4ecee6" />
        <stop offset=".198" stopColor="#46c9e8" />
        <stop offset=".504" stopColor="#30baec" />
        <stop offset=".879" stopColor="#0da3f4" />
        <stop offset="1" stopColor="#009af7" />
      </linearGradient>
      <circle fill={'url(#H-' + rocketEmojiId + ')'} cx="43.103" cy="20.899" r="4.825" />
      <path
        fill="#FFF"
        d="M47.539 17.146c-.456.456-1.139-.227-.684-.682s1.138.227.684.682zM39.352 
          25.333c-.456.456-1.139-.227-.684-.682s1.138.228.684.682zM46.855 
          25.334c-.456-.456.227-1.138.683-.682.454.454-.227
           1.137-.683.682zM38.668
           17.146c-.456-.456.227-1.138.683-.682.454.454-.229 1.137-.683.682zM48.893 21.38c-.643.001-.643-.964 
           0-.964.642 0 .642.964 0 .964zM37.313 21.381c-.645-.001-.645-.965-.001-.966.644.002.644.966.001.966zM42.62 
           26.688c.001-.644.966-.644.965 0 .001.644-.964.644-.965 0zM42.62 15.11c0-.645.965-.645.966
            0-.001.642-.966.642-.966 0z"
      />
      <linearGradient
        id={'I-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="132.589"
        y1="50.036"
        x2="134.701"
        y2="50.036"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#2289c7" />
        <stop offset="1" stopColor="#005687" />
      </linearGradient>
      <path
        fill={'url(#I-' + rocketEmojiId + ')'}
        d="M23.619 38.888c3.707-3.708 7.047-6.379 7.459-5.966.413.413-2.259
           3.751-5.966 7.459-3.707 3.707-7.047 6.379-7.46
           5.966-.412-.412 2.26-3.752 5.967-7.459z"
      />
      <linearGradient
        id={'J-' + rocketEmojiId}
        gradientUnits="userSpaceOnUse"
        x1="125.757"
        y1="3.938"
        x2="141.533"
        y2="3.938"
        gradientTransform="rotate(45.001 91.56 -87.079)"
      >
        <stop offset="0" stopColor="#ff000e" />
        <stop offset=".728" stopColor="#dd0004" />
        <stop offset="1" stopColor="#cf0000" />
      </linearGradient>
      <path
        fill={'url(#J-' + rocketEmojiId + ')'}
        d="M61.98 2.021s-5.765-.515-14.879 3.722c2.514 4.475
           6.681 8.642 11.155 11.156C62.494 7.785 61.98 2.021 61.98 2.021z"
      />
    </svg>
  );
};

RocketEmoji.defaultProps = {
  size: 35,
};

RocketEmoji.propTypes = {
  size: PropTypes.number,
};

export default React.memo(RocketEmoji);
