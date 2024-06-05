import { View, Text, FlatList, StyleSheet, Dimensions, Alert, Button, Image, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { dataArray } from '../../../utils/globalConstant'
import HeaderView from '../../../components/HeaderView/HeaderView'
const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const ApiResponse = (props) => {
    //pagination with api response
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const [moreCurrentPage, setMoreCurrentPage] = useState(1)
    const [staticArray, setStaticArray] = useState(dataArray)

    // useEffect(() => {
    //     getData()
    // }, [])

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        setIsLoading(true);
        await axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            .then(res => {
                //setUsers(res.data.results);
                console.log("res.data.results==>", res.data.results);
                setUsers([...users, ...res.data.results]);
                setIsLoading(false);
            });
        // setIsLoading(false);
    };

    console.log("");
    // ApiResponse renderItem
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
                <View style={styles.contentWrapperStyle}>
                    <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                    <Text style={styles.txtEmailStyle}>{item.email}</Text>
                </View>
            </View>
        );
    };

    const renderLoader = () => {
        return (
            isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        );
    };

    const onRefresh = React.useCallback(async () => {
        console.log("currentPage==$$", currentPage);
        setIsLoading(true);
        setCurrentPage(1)
        if (currentPage === 1) {
            console.log("currentPage===>", currentPage);
            getUsers()
            // await axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            //     .then(res => {
            //         //setUsers(res.data.results);
            //         console.log("res.data.results==>", res.data.results);
            //         setUsers([...users, ...res.data.results]);
            //         // setIsLoading(false);
            //     });
            //     setIsLoading(false);
        }
        else {
            console.log("No more Data");
        }
    }, [isLoading]);


    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
        getUsers()
        console.log("currentPage==", currentPage);
        // setCurrentPage(currentPage + 1);
    };

    const loadLessItem = () => {
        // getUsers()
        console.log("currentPage==>>>>", currentPage);
        setCurrentPage(currentPage - 1);
    };

    //------------------------------------------------------------

    // const getData = () => {
    //     console.log("hello");
    //     paginate(staticArray, 10, 1)
    // }

    //Pagination with static array
    //pagesize :- how many data show in a page
    // const paginate = (array, page_size, page_number) => {
    //     var localArray = [...staticArray]
    //     console.log("array====", array);
    //     // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    //     // var arr = localArray.slice((page_number - 1) * page_size, page_number * page_size);
    //     var arr = localArray.slice((page_number - 1) * page_size, page_number * page_size);
    //     console.log("arr====>", arr);
    //     setStaticArray([...arr])
    // }


    // const showMoreData = () => {
    //     console.log("(dataArray.length / 10)===", (dataArray.length / 10));
    //     console.log("moreCurrentPage==", moreCurrentPage);
    //     // if (moreCurrentPage < (dataArray.length / 10) + 1) {
    //         console.log((paginate(dataArray, 10, moreCurrentPage)))
    //         setMoreCurrentPage(moreCurrentPage + 1)
    //     // }
    //     // else {
    //     //     console.log("No more data present");
    //     // }

    // }

    // const showPrevData = () => {
    //     console.log("(dataArray.length / 10)===>>", (dataArray.length / 10));
    //     console.log("moreCurrentPage===>>", moreCurrentPage);
    //     if (moreCurrentPage < ((dataArray.length / 10) + 1) && moreCurrentPage > 0) {
    //         // paginate(dataArray, 10, moreCurrentPage)
    //         setMoreCurrentPage(moreCurrentPage - 1)
    //     }
    //     else {
    //         // setMoreCurrentPage(moreCurrentPage - 1)
    //         console.log("Data not Present");
    //     }
    // }


    // console.log("paginate(dataArray, 2, 2)===",paginate(dataArray, 2, 2));
    // console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 1));




    // console.log("data===",data);
    // const [page, setPage] = useState(0)

    // var resultArray = data == '' ? null : data.results
    // console.log("resultArray===>", resultArray[0].name);
    // console.log("resultArray===>", resultArray[0].email);

    // const getApiCall = async () => {
    //     console.log("getApiCall");
    //     const baseURL = 'https://fakestoreapi.com/products/?page=1&results=5'
    //     try {
    //         // console.log("try---getApiCall");
    //         const Response = await fetch(baseURL)
    //         // console.log("Response==", Response);
    //         const ResponseData = await Response.json()
    //         // console.log("ResponseData==", ResponseData);
    //         var responseData = ResponseData
    //         console.log("ResponseData==", responseData);
    //         setUsers(responseData)
    //         // var apiData = ResponseData
    //         // setData({
    //         //     page: 0,
    //         //     dataPost: apiData.results
    //         // },
    //         //     function () {
    //         //         addNewRecords(page)
    //         //     }
    //         // )
    //     } catch (error) {
    //         console.log("error===", error);
    //     }
    // }


    // const getApiCall = () => {
    //     setData(dataArray)
    //     // console.log('getApiCall---dataArray', dataArray);
    //     // console.log("page=====>>>>>>>>>", page);
    //     addNewRecords(page, dataArray)
    // }

    // addNewRecords = (page, data) => {
    //     // assuming this.state.dataPosts hold all the records
    //     console.log("page==", page);
    //     console.log("data---", data);
    //     const newRecords = []
    //     for (var i = page * 6, il = i + 6; i < il && i < data.length; i++) {
    //         newRecords.push(data[i]);
    //     }
    //     setData(newRecords);
    // }

    // const onScrollHandler = () => {
    //     var currentPage = page
    //     currentPage = currentPage + 1
    //     // console.log("page", page);
    //     setPage(currentPage)
    //     addNewRecords(currentPage, dataArray)
    //     if (currentPage * 6 > currentPage) {
    //         console.log('Data Not Present');
    //     }
    // }
    // const onUpScrollHandler = () => {
    //     var currentPage = page
    //     currentPage = currentPage - 1
    //     setPage(currentPage)
    //     addNewRecords(currentPage, dataArray)
    //     if (currentPage * 6 > dataArray.length) {
    //         console.log("Data Not Present");
    //     }
    // }



    //   const [loading, setLoading] = useState(true);
    //   const [dataSource, setDataSource] = useState([]);
    //   const [offset, setOffset] = useState(1);

    //   useEffect(() => getData(), []);

    //   const getData = () => {
    //     console.log('getData');
    //     setLoading(true);
    //     //Service to get the data from the server to render
    //     fetch('https://abooutreactapis.000webhostapp.com/getpost.php?offset='
    //           + offset)
    //       //Sending the currect offset with get request
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         //Successful response
    //         setOffset(offset + 1);
    //         //Increasing the offset for the next API call
    //         setDataSource([...dataSource, ...responseJson.results]);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   };

    // const staticDataArray = [...dataArray];
    // const [index, setIndex] = useState(0)
    // const [visibleData, setVisibleData] = useState(staticDataArray.splice(index, 5));

    // const [data, setData] = useState([]);
    // // const [visibleData, setVisibleData] = useState([]);
    // // const [visibleItems, setVisibleItems] = useState(5);
    // // Function to handle scroll up and decrease the number of visible items
    // const handleLoadLess = () => {
    //     // setVisibleData((prevVisibleItems) => {
    //     //     const newVisibleItems = prevVisibleItems - 10;
    //     //     return newVisibleItems >= 0 ? newVisibleItems : 0;    
    //     // });
    // };

    // // Function to handle scroll down and increase the number of visible items
    // const handleLoadMore = (index) => {
    //     var currentIdx = index + 5
    //     setVisibleData(staticDataArray.splice(currentIdx, 10))
    //     setIndex(currentIdx)
    //     // setVisibleItems((prevVisibleItems) => {
    //     //     const newVisibleItems = prevVisibleItems + 10;
    //     //     return newVisibleItems <= data.length ? newVisibleItems : data.length;
    //     // });
    // };



    // const handleLoadMore = () => {
    //     var currentLength = visibleData.length;
    //     console.log("currentLength--", currentLength);
    //     const nextData = staticDataArray.slice(currentLength, currentLength + 5);
    //     setVisibleData([...visibleData, ...nextData]);
    //     if (currentLength === staticDataArray.length) {
    //         Alert.alert('No more Data')
    //     }
    // };

    // const handleLoadLess = () => {
    //     var currentLength = visibleData.length;
    //     console.log("currentLength--->", currentLength);
    //     const nextData = staticDataArray.slice(currentLength, currentLength - 5);
    //     setVisibleData([...visibleData, ...nextData]);
    //     if (currentLength < 5) {
    //         Alert.alert('Data not Exist')
    //     }
    // };


    const RenderItem = ({ item }) => {
        return (
            <View style={styles.itemViewStyle}>
                <View>
                    {item ?
                        <View>
                            {item.id ? <Text style={styles.itemTextStyle}>{item.id}</Text> : null}
                            {item.title ? <Text style={styles.itemTextStyle}>{item.title}</Text> : null}
                            {item.first ? <Text style={styles.itemTextStyle}>{item.first}</Text> : null}
                            {item.last ? <Text style={styles.itemTextStyle}>{item.last}</Text> : null}
                        </View> :
                        null}
                    {item.email ? <Text style={styles.itemTextStyle}>{item.email}</Text> : null}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.containerStyle}>
            <HeaderView
                Title={'Api Response'}
                onBackPress={() => { props.navigation.goBack() }}
                // style={styles.headerViewStyle}
            />
            <View style={styles.viewStyle}>

                {/**static array data flatlist */}
                {/* <FlatList
                data={staticArray}
                // pagingEnabled={true}
                style={{ flex: 1 }}
                keyExtractor={(item) => item.id}
                renderItem={RenderItem}
                onEndReached={showMoreData}
                onStartReachedThreshold={0}
                onStartReached={showPrevData}
                ListHeaderComponent={renderLoader}
                ListFooterComponent={renderLoader}
                onEndThreshold={0}
            /> */}

                {/**Api response FlatList */}
                <FlatList
                    data={users}
                    // pagingEnabled={true}
                    style={{ flex: 1 }}
                    keyExtractor={(item) => item.email}
                    renderItem={renderItem}
                    onEndReached={loadMoreItem}
                    // onStartReachedThreshold={0}
                    // onStartReached={loadLessItem} 
                    // ListHeaderComponent={renderLoader}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
                    ListFooterComponent={currentPage == 1 ? null : renderLoader}
                    onEndThreshold={0}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: deviceWidth }}>
                    {/* <View style={styles.button}>
                    <Button title={'more'} onPress={() => { showMoreData() }} color={'rgba(0,0,50,0.9)'} />
                </View>
                <View style={styles.button}>
                    <Button title={'Less'} onPress={() => { showPrevData() }} color={'rgba(0,0,50,0.9)'} />
                </View> */}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    contentWrapperStyle: {
        justifyContent: "space-around",
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: "#777",
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
    },

    button: {
        marginVertical: 10,
        width: deviceWidth / 3,
    },
    textStyle: {
        fontSize: 25,
        color: 'black',
        marginVertical: 20,
    },
    itemViewStyle: {
        width: deviceWidth - 20,
        backgroundColor: 'rgb(0,0,50)',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 15,
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        // alignItems: 'center',
        // paddingBottom: 10,
        // backgroundColor:'red'
    },
    headerViewStyle: {
        flexDirection: 'row',
        width: deviceWidth * 0.7,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    containerStyle:{
        flex:1,
        backgroundColor:'rgb(225,245,230)'
    }
})
export default ApiResponse