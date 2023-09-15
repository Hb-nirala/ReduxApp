import * as yup from 'yup'
import TrackPlayer,{State,Capability,AppKilledPlaybackBehavior,RepeatMode} from 'react-native-track-player'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/
const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
export const loginValidationSchema = yup.object().shape({
    email: yup.string().matches(emailRegex, "please enter valid email")
        .required('please enter email'),

    //Minimum eight characters, at least one letter, one number and one special character:
    pass: yup.string().matches(passwordRegex, "please enter valid password")
        .required('please enter password'),
})
export const loginInitialValuesSchema = { email: '', pass: '' }

export const signUpValidationSchema = yup.object().shape({
    fullname: yup.string().matches(fullNameRegex, "please enter valid Name")
        .required('please enter Name'),
    email: yup.string().matches(emailRegex, "please enter valid email")
        .required('please enter email'),
    //Minimum eight characters, at least one letter, one number and one special character:
    pass: yup.string().matches(passwordRegex, "please enter valid password")
        .required('please enter password'),
    phone: yup.string().matches(phoneNumberRegex, "please enter valid Mobile No.")
        .required('please enter Mobile No.'),
})

export const cartItemArray = [
    {
        "id": "1",
        "itemName": 'Apple',
        "itemImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyc7erdKt0noSwc9H0NTv3aDuauMrcB7L9eg&usqp=CAU',
        "itemPrice": 300,
    },
    {
        "id": "2",
        "itemName": 'Bike',
        "itemImage": 'https://m.media-amazon.com/images/I/71d-JDP6JsL._AC_UF1000,1000_QL80_.jpg',
        "itemPrice": 2500,
    },
    {
        "id": "3",
        "itemName": 'Bus',
        "itemImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUabakdjkdSaJny6zZ27B4ZI-IxtC_96Q_g&usqp=CAU',
        "itemPrice": 5000,
    },
    {
        "id": "4",
        "itemName": 'Pizza',
        "itemImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbgJcJyG8w-YdcBsvwrgVQIv8b5TMhMRL1w&usqp=CAU',
        "itemPrice": 550,
    },
    {
        "id": "5",
        "itemName": 'Tomato',
        "itemImage": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnStYUhUu0NH87Elz8YFKUMR1_vHcWiZ7tg&usqp=CAU',
        "itemPrice": 200,
    },
]

export const dataArray = [
    { "id": "1", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "2", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "3", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "4", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "5", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "6", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "7", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "8", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "9", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "10", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "11", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "12", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "13", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "14", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "15", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "16", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "17", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "18", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "19", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    { "id": "20", "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
    // { "title": "Ms", "first": "Alexandra", "last": "Ward", "email": "alexandra.ward@example.com" },
]

export const signUpInitialValuesSchema = { fullname: '', email: '', pass: '', phone: '' }

// export const appDimension = {
//     deviceWidth: Dimensions.get('screen').width,
//     deviceHeight: Dimensions.get('screen').height
// }

// const TwilioChat = {
//     TWILIO_ACCOUNT_SID: 'ACda998d40424002c207a695612e8e2c42',
//     TWILIO_API_KEY: 'SK5fd32b48c603c4d7d78dab1100ddb440',
//     TWILIO_API_SECRET: 'mGYazBErl91exQ0qWKpyPdCK8RH8lPDv',
//     TWILIO_CHAT_SERVICE_SID: 'IS8a345a392acb4a3a93988935e864db01'
// }




// {
//     "_events": {
//       "updated": [
//         Functionanonymous
//       ]
//     },
//     "_eventsCount": 1,
//     "_maxListeners": undefined,
//     "configuration": {
//       "backoffConfiguration": {
//         "max": 4000,
//         "maxAttemptsCount": 3,
//         "min": 1000
//       },
//       "channelMetadataCacheCapacity": 100,
//       "consumptionReportInterval": 1,
//       "httpCacheInterval": 1,
//       "limits": {
//         "emailBodiesAllowedContentTypes": [
//           Array
//         ],
//         "emailHistoriesAllowedContentTypes": [
//           Array
//         ],
//         "mediaAttachmentSizeLimitInMb": 150,
//         "mediaAttachmentsCountLimit": 10,
//         "mediaAttachmentsTotalSizeLimitInMb": 150
//       },
//       "links": {
//         "conversations": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations",
//         "currentUser": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Users/US78d7d101965c44edb9be666cb2503562",
//         "mediaService": "https://mcs.us1.twilio.com/v1/Services/IS8a345a392acb4a3a93988935e864db01/Media",
//         "mediaSetService": "https://mcs.us1.twilio.com/v1/Services/IS8a345a392acb4a3a93988935e864db01/MediaSet",
//         "messagesReceipts": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/%s/Messages/%s/Receipts",
//         "myConversations": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Users/US78d7d101965c44edb9be666cb2503562/Conversations",
//         "typing": "https://aim.us1.twilio.com/v1/Instances/IS8a345a392acb4a3a93988935e864db01/Typing",
//         "users": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Users"
//       },
//       "myConversations": "nirala.channels",
//       "productId": "ip_messaging",
//       "reachabilityEnabled": true,
//       "retryWhenThrottled": true,
//       "typingIndicatorTimeoutDefault": 5000,
//       "typingIndicatorTimeoutOverride": undefined,
//       "userIdentity": "nirala",
//       "userInfo": "US78d7d101965c44edb9be666cb2503562.info",
//       "userInfosToSubscribe": 100
//     },
//     "conversation": {
//       "_configuration": {
//         "backoffConfiguration": [
//           Object
//         ],
//         "channelMetadataCacheCapacity": 100,
//         "consumptionReportInterval": 1,
//         "httpCacheInterval": 1,
//         "limits": [
//           Object
//         ],
//         "links": [
//           Object
//         ],
//         "myConversations": "nirala.channels",
//         "productId": "ip_messaging",
//         "reachabilityEnabled": true,
//         "retryWhenThrottled": true,
//         "typingIndicatorTimeoutDefault": 5000,
//         "typingIndicatorTimeoutOverride": undefined,
//         "userIdentity": "nirala",
//         "userInfo": "US78d7d101965c44edb9be666cb2503562.info",
//         "userInfosToSubscribe": 100
//       },
//       "_dataSource": "sync",
//       "_entity": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 2,
//         "_maxListeners": undefined,
//         "closed": false,
//         "domain": null,
//         "syncDocumentImpl": [
//           SyncDocumentImpl
//         ],
//         "uuid": "4c022212-8843-45a7-afac-40b351a97515"
//       },
//       "_entityName": "CH9000bf48e64b45a0b5e4626a0ad933bf.channel",
//       "_entityPromise": {
//         "_h": 2,
//         "_i": 1,
//         "_j": [
//           SyncDocument
//         ],
//         "_k": null
//       },
//       "_events": {
//         "messageAdded": [
//           Functionanonymous
//         ],
//         "messageRemoved": [
//           Functionanonymous
//         ],
//         "messageUpdated": [
//           Functionanonymous
//         ],
//         "participantJoined": [
//           Functionanonymous
//         ],
//         "participantLeft": [
//           Functionanonymous
//         ],
//         "participantUpdated": [
//           Functionanonymous
//         ],
//         "removed": [
//           Functionanonymous
//         ],
//         "typingEnded": [
//           Functionanonymous
//         ],
//         "typingStarted": [
//           Functionanonymous
//         ],
//         "updated": [
//           Functionanonymous
//         ]
//       },
//       "_eventsCount": 10,
//       "_internalState": {
//         "attributes": [
//           Object
//         ],
//         "bindings": [
//           Object
//         ],
//         "createdBy": "nirala",
//         "dateCreated": 2023-08-12T06: 18: 07.299Z,
//         "dateUpdated": 2023-08-12T06: 18: 07.299Z,
//         "friendlyName": "Abhi",
//         "lastMessage": [
//           Object
//         ],
//         "lastReadMessageIndex": null,
//         "notificationLevel": "default",
//         "state": [
//           Object
//         ],
//         "status": "joined",
//         "uniqueName": "Abhi"
//       },
//       "_links": {
//         "messages": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/CH9000bf48e64b45a0b5e4626a0ad933bf/Messages",
//         "participants": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/CH9000bf48e64b45a0b5e4626a0ad933bf/Participants",
//         "self": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/CH9000bf48e64b45a0b5e4626a0ad933bf"
//       },
//       "_maxListeners": undefined,
//       "_messagesEntity": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 3,
//         "_maxListeners": undefined,
//         "configuration": [
//           Configuration
//         ],
//         "conversation": [
//           Circular
//         ],
//         "domain": null,
//         "eventHistory": [
//           Map
//         ],
//         "messagesByIndex": [
//           Map
//         ],
//         "messagesListPromise": [
//           Promise
//         ],
//         "services": [
//           ClientServices
//         ]
//       },
//       "_participants": Map{
//         "MB3418992158fa4da0bfadb188908e3923"=>[
//           Participant
//         ]
//       },
//       "_participantsEntity": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 3,
//         "_maxListeners": undefined,
//         "configuration": [
//           Configuration
//         ],
//         "conversation": [
//           Circular
//         ],
//         "domain": null,
//         "eventHistory": [
//           Map
//         ],
//         "links": [
//           Object
//         ],
//         "participants": [
//           Map
//         ],
//         "rosterEntityPromise": [
//           Promise
//         ],
//         "services": [
//           ClientServices
//         ]
//       },
//       "_services": {
//         "channelMetadataClient": [
//           ChannelMetadataClient
//         ],
//         "commandExecutor": [
//           CommandExecutor
//         ],
//         "contentClient": [
//           ContentClient
//         ],
//         "mcsClient": [
//           _class
//         ],
//         "network": [
//           Network
//         ],
//         "notificationClient": [
//           _class
//         ],
//         "syncClient": [
//           Client
//         ],
//         "transport": [
//           _class
//         ],
//         "twilsockClient": [
//           _class
//         ],
//         "typingIndicator": [
//           TypingIndicator
//         ],
//         "users": [
//           Users
//         ]
//       },
//       "domain": null,
//       "eventHistory": Map{
//         "updated"=>[
//           Array
//         ],
//         "messageAdded"=>[
//           Array
//         ]
//       },
//       "sid": "CH9000bf48e64b45a0b5e4626a0ad933bf"
//     },
//     "domain": null,
//     "eventHistory": Map{
      
//     },
//     "links": {
//       "conversation": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/CH9000bf48e64b45a0b5e4626a0ad933bf",
//       "messages_receipts": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/CH9000bf48e64b45a0b5e4626a0ad933bf/Messages/IM0a8b10cac1514531a24c40c869b7e23b/Receipts",
//       "self": "https://aim.us1.twilio.com/Client/v2/Services/IS8a345a392acb4a3a93988935e864db01/Conversations/CH9000bf48e64b45a0b5e4626a0ad933bf/Messages/IM0a8b10cac1514531a24c40c869b7e23b"
//     },
//     "services": {
//       "channelMetadataClient": {
//         "_cache": [
//           QuickLRU
//         ],
//         "_configuration": [
//           Configuration
//         ],
//         "_services": [
//           Circular
//         ]
//       },
//       "commandExecutor": {
//         "_productId": "ip_messaging",
//         "_serviceUrl": "https://aim.us1.twilio.com",
//         "_services": [
//           Object
//         ]
//       },
//       "contentClient": {
//         "_cacheTtlMs": 5000,
//         "_cachedTemplates": null,
//         "_pageSize": 100,
//         "_services": [
//           Circular
//         ]
//       },
//       "mcsClient": {
//         "config": [
//           Configuration
//         ],
//         "network": [
//           Network
//         ],
//         "options": [
//           Object
//         ],
//         "transport": [
//           Transport
//         ]
//       },
//       "network": {
//         "cache": [
//           Map
//         ],
//         "cacheLifetime": 100,
//         "configuration": [
//           Configuration
//         ],
//         "services": [
//           Circular
//         ],
//         "timer": 2647
//       },
//       "notificationClient": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 1,
//         "_maxListeners": undefined,
//         "connectors": [
//           Map
//         ],
//         "domain": null
//       },
//       "syncClient": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 0,
//         "_maxListeners": undefined,
//         "domain": null,
//         "entities": [
//           EntitiesCache
//         ],
//         "services": [
//           Object
//         ]
//       },
//       "transport": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 5,
//         "_maxListeners": undefined,
//         "channel": [
//           TwilsockChannel
//         ],
//         "config": [
//           Configuration
//         ],
//         "domain": null,
//         "offlineStorageDeferred": [
//           Deferred
//         ],
//         "registrations": [
//           Registrations
//         ],
//         "telemetryTracker": [
//           TelemetryTracker
//         ],
//         "upstream": [
//           Upstream
//         ],
//         "version": "0.12.2"
//       },
//       "twilsockClient": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 5,
//         "_maxListeners": undefined,
//         "channel": [
//           TwilsockChannel
//         ],
//         "config": [
//           Configuration
//         ],
//         "domain": null,
//         "offlineStorageDeferred": [
//           Deferred
//         ],
//         "registrations": [
//           Registrations
//         ],
//         "telemetryTracker": [
//           TelemetryTracker
//         ],
//         "upstream": [
//           Upstream
//         ],
//         "version": "0.12.2"
//       },
//       "typingIndicator": {
//         "configuration": [
//           Configuration
//         ],
//         "getConversation": [
//           Functionbound
//         ],
//         "sentUpdates": [
//           Map
//         ],
//         "serviceTypingTimeout": null,
//         "services": [
//           Circular
//         ]
//       },
//       "users": {
//         "_events": [
//           Object
//         ],
//         "_eventsCount": 3,
//         "_maxListeners": undefined,
//         "configuration": [
//           Configuration
//         ],
//         "domain": null,
//         "eventHistory": [
//           Map
//         ],
//         "fifoStack": [
//           Array
//         ],
//         "myself": [
//           User
//         ],
//         "services": [
//           Circular
//         ],
//         "subscribedUsers": [
//           Map
//         ]
//       }
//     },
//     "state": {
//       "aggregatedDeliveryReceipt": null,
//       "attributes": {
        
//       },
//       "author": "nirala",
//       "body": "Hii Nirala",
//       "contentSid": null,
//       "dateUpdated": 2023-08-12T06: 18: 36.897Z,
//       "hasChannelMetadata": false,
//       "index": 0,
//       "lastUpdatedBy": null,
//       "media": null,
//       "medias": null,
//       "participantSid": "MB3418992158fa4da0bfadb188908e3923",
//       "sid": "IM0a8b10cac1514531a24c40c869b7e23b",
//       "subject": null,
//       "timestamp": 2023-08-12T06: 18: 36.897Z,
//       "type": "text"
//     }
//   }

export const musicListArray = [
    {
        id: '1',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPV78qAaxSknKZmaVayk3FhrfIKGZVogIaK1LRTYVdLjlKY0lV0dnitk&s',
        name: 'Sample-1',
        url: require('../../assets/Songs/Sample-1.mp3'),
        title: 'Fluidity',
        artist: 'tobylane',
        duration: 10,
    },
    {
        id: '2',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPV78qAaxSknKZmaVayk3FhrfIKGZVogIaK1LRTYVdLjlKY0lV0dnitk&s',
        name: 'Sample-2',
        url: require('../../assets/Songs/Sample-2.mp3'),
        title: 'Fluidity',
        artist: 'tobylane',
        duration: 15,
    },
    {
        id: '3',
        image:'https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg',
        name: 'Chak De India',
        url: require('../../assets/Songs/Chak_De_India.mp3'),
        title: 'Shah Rukh Khan',
        artist: 'Shah Rukh Khan',
        duration: 3,
    },
    {
        id: '4',
        image:'https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg',
        name: 'Chak De India',
        url: require('../../assets/Songs/sample-3.mp3'),
        title: 'Shah Rukh Khan',
        artist: 'Shah Rukh Khan',
        duration: 3,
    },
    {
        id: '5',
        image:'https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg',
        name: 'Chak De India',
        url: require('../../assets/Songs/sample-4.mp3'),
        title: 'Shah Rukh Khan',
        artist: 'Shah Rukh Khan',
        duration: 3,
    },
    {
        id: '6',
        image:'https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg',
        name: 'Chak De India',
        url: require('../../assets/Songs/sample-5.mp3'),
        title: 'Shah Rukh Khan',
        artist: 'Shah Rukh Khan',
        duration: 3,
    },
    {
        id: '7',
        image:'https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg',
        name: 'Chak De India',
        url: require('../../assets/Songs/songs_1.mp3'),
        title: 'Shah Rukh Khan',
        artist: 'Shah Rukh Khan',
        duration: 3,
    },
    {
        id: '8',
        image:'https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_.jpg',
        name: 'Chak De India',
        url: require('../../assets/Songs/songs_2.mp3'),
        title: 'Shah Rukh Khan',
        artist: 'Shah Rukh Khan',
        duration: 3,
    },
]

export const setupPlayer = async () => {
    try {
        await TrackPlayer.setupPlayer()
        await TrackPlayer.updateOptions({
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop
            ],
            compactCapabilities: [Capability.Play, Capability.Pause]
        })
        await TrackPlayer.add(musicListArray)
    } catch (error) {
        console.log("error===", error);
    }
}

