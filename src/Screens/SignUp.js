import { View, Text, StyleSheet, TextInput, Button, Dimensions, ScrollView, Alert } from 'react-native'
import React, { useEffect, } from 'react'
import { addSignUpData, setSignUpData } from '../Redux/signUpReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { signUpInitialValuesSchema, signUpValidationSchema } from '../utils/globalConstant';

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const SignUp = (props) => {

    const signUpReducerData = useSelector((state) => state.SignUp.value.signUpDataArray)

    const isExist = (data, values) => {
        const isDuplicate = data.some(item => item.email === values.email || item.phone === values.phone);
        isDuplicate ? Alert.alert("Already Exist") : dispatch(addSignUpData(values));

    }

    const dispatch = useDispatch()
    const userSignUp = (values) => {
        if (signUpReducerData.length > 0) {
            isExist(signUpReducerData, values)
        } else {
            dispatch(addSignUpData(values))
        }
        props.navigation.navigate('Login')
    }

    return (
        <ScrollView style={styles.scrollViewStyle}>
            <View style={styles.formViewStyle}>
                <Text style={styles.textStyle}>SignUp</Text>
                <Formik
                    initialValues={signUpInitialValuesSchema}
                    onSubmit={(values) => { userSignUp(values) }}
                    validationSchema={signUpValidationSchema}
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
                            <TextInput style={styles.input}
                                placeholder="Enter Name"
                                onChangeText={(text) => { setFieldValue('fullname', text) }}
                            />
                            {errors.fullname ? <Text style={styles.errorsTextStyle}>{errors.fullname}</Text> : null}
                            <TextInput style={styles.input}
                                placeholder="Enter Email"
                                onChangeText={(text) => { setFieldValue('email', text) }}
                            />
                            {errors.email ? <Text style={styles.errorsTextStyle}>{errors.email}</Text> : null}
                            <TextInput style={styles.input}
                                placeholder="Enter Phone"
                                onChangeText={(text) => { setFieldValue('phone', text) }}
                                keyboardType='numeric'
                            />
                            {errors.phone ? <Text style={styles.errorsTextStyle}>{errors.phone}</Text> : null}
                            <TextInput style={styles.input}
                                placeholder="Enter Password"
                                onChangeText={(text) => { setFieldValue('pass', text) }}
                            />
                            {errors.pass ? <Text style={styles.errorsTextStyle}>{errors.pass}</Text> : null}
                            <View style={styles.button}>
                                <Button title="Submit" onPress={handleSubmit} />
                            </View>
                        </>
                    }
                </Formik>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollViewStyle: {
        backgroundColor: 'rgb(225,245,230)',
    },
    errorsTextStyle: {
        alignSelf: 'stretch',
        marginLeft:15,
        color: 'red'
    },
    input: {
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
    formViewStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30,
        marginVertical: 100,
        color: 'black'
    },
    button: {
        marginVertical: 30,
        width: deviceWidth / 2,
    },
})
export default SignUp;