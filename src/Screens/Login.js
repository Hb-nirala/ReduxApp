import { View, Text, StyleSheet, Dimensions, TextInput, Button, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUserData, } from '../Redux/loginReducer'
import { Formik } from 'formik'
import { loginInitialValuesSchema, loginValidationSchema } from '../utils/globalConstant'
const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const Login = (props) => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonHandler)
    }, [])

    const backButtonHandler = () => {
        BackHandler.exitApp();
    }

    const dispatch = useDispatch()
    const signUpReducerData = useSelector((state) => state.SignUp.value.signUpDataArray)

    const userLogin = (values) => {
        var isSuccess = false;
        if (signUpReducerData.length > 0) {
            signUpReducerData.filter((item) => {
                if (item.email == values.email && item.pass == values.pass) {
                    dispatch(getAuthUserData(item))
                    isSuccess = true
                }
            })
        }
        isSuccess ? props.navigation.navigate('UserNavigator', { screen: 'Home' }) : Alert.alert('Account not Exist')
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Login</Text>
            <Formik
                initialValues={loginInitialValuesSchema}
                onSubmit={(values) => { userLogin(values) }}
                validationSchema={loginValidationSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    touched,
                    values,
                    errors,
                    isValid
                }) =>
                    <>
                        <TextInput style={styles.textInputStyle}
                            placeholder="Enter Email"
                            onChangeText={(text) => { setFieldValue('email', text) }}
                            value={values.email}
                        /**dispatch(getLoginName(name)) */
                        />
                        {errors.email ? <Text style={styles.errorsTextStyle}>{errors.email}</Text> : ''}
                        <TextInput style={styles.textInputStyle}
                            placeholder="Enter Password"
                            onChangeText={(text) => { setFieldValue('pass', text) }}
                            value={values.pass}
                        /**dispatch(getLoginEmail(email)) */
                        />
                        {errors.pass ? <Text style={styles.errorsTextStyle}>{errors.pass}</Text> : ''}
                        <View style={styles.button}>
                            <Button title={'Login'} color={'rgb(25,200,235)'} onPress={handleSubmit} />
                        </View>
                    </>
                }
            </Formik>
            <Text style={styles.signUpTextStyle} onPress={() => { props.navigation.navigate('Auth') }}>{'new user SignUp'}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    textInputStyle: {
        backgroundColor: 'white',
        width: deviceWidth - 20,
        marginVertical: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    textStyle: {
        fontSize: 30,
        marginVertical: 100,
        color: 'black'
    },
    errorsTextStyle: {
        alignSelf: 'stretch',
        marginLeft: 15,
        color: 'red'
    },
    button: {
        marginVertical: 30,
        width: deviceWidth / 2,
    },
    signUpTextStyle: {
        fontSize: 15,
        lineHeight: 30,
        top: 100,
        color: 'black',
        padding: 10,
    }
})
export default Login
