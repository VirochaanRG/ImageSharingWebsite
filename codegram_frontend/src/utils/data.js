export const categories = [
  {
    name: 'Python',
    image: 'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-python-icon.png',
    id: 'python'
  
},
  {
    name: 'Java',
    image: 'https://georgewfraser.gallerycdn.vsassets.io/extensions/georgewfraser/vscode-javac/0.2.39/1619758486020/Microsoft.VisualStudio.Services.Icons.Default',
    id: 'java'
},
  {
    name: 'Javascript',
    image: 'https://gitconnected.com/public/images/tutorials/svg/javascript.svg',
    id: 'javascript'
},
  {
    name: 'Rust',
    image: 'https://prev.rust-lang.org/logos/rust-logo-256x256.png',
    id: 'rust'
},
  {
    name: 'UX/UI Design',
    image: 'https://styles.redditmedia.com/t5_2u66g/styles/communityIcon_gjdxwtiuqt691.jpeg?format=pjpg&s=818a58b6a4829fbc52a51b5d6015a34731f7a995',
    id: 'ux'
},
  {
    name: 'PC/Desk setup',
    image: 'https://cdn.iconscout.com/icon/free/png-256/pc-1717555-1461311.png',
    id: 'pc'
},
  {
    name: 'Web Apps',
    image: 'https://res.cloudinary.com/apideck/image/upload/v1594075913/icons/azure-static-web-apps.png',
    id: 'web'
},
  {
    name: 'Android Apps',
    image: 'https://styles.redditmedia.com/t5_2r26y/styles/communityIcon_q69d9lxagoi31.png',
    id: 'android'
}, 
  {
    name: 'IOS Apps',
    image: 'https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png',
    id: 'ios'
},
  {
    name: 'C',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoeovhpm4XW-q-7Sn8ZYH08NedkYxvTTw7A&usqp=CAU',
    id: 'c'
}, {
    name: 'C++',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
    id: 'c++'
}, {
    name: 'Linux',
    image: 'https://www.stepsoftware.com/images/services/linux.png',
    id: 'linux'
},
  {
    name: 'Miscellaneous',
    image: 'https://cdn.iconscout.com/icon/free/png-256/code-280-460136.png',
    id: 'misc'    
},
]

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};