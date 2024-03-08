import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'
import { InputComponent, RowComponent, SectionComponent, TextComponent } from '../../components'

const initValue={
    text1:'',
    text2:'',
    text3:'',
    text4:'',

}
const Bai3_Lab1 = ({navigation}:any) => {
    const [values, setValues] = useState(initValue);
    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values }
        data[`${key}`] = value;
        setValues(data);
    }
  return (
    <View style={{marginTop:15}}>
        <SectionComponent>
            <TextComponent 
                text='Title*' 
                font={FONTFAMILY.poppins_bold} 
                size={16} 
                color={COLORS.DARK_BLUE}/>
            <InputComponent 
                value={values.text1} 
                placeholder='Place holder' 
                onChange={val => handleChangeValue('text1',val)}/>
        </SectionComponent>
        <SectionComponent>
        <TextComponent 
                text='Title*' 
                font={FONTFAMILY.poppins_bold} 
                size={16} 
                color={COLORS.DARK_BLUE}/>
            <InputComponent 
                value={values.text2} 
                placeholder='Place holder' 
                onChange={val => handleChangeValue('text2',val)}/>
        </SectionComponent>
        <SectionComponent>
        <TextComponent 
                text='Title*' 
                font={FONTFAMILY.poppins_bold} 
                size={16} 
                color={COLORS.DARK_BLUE}/>
            <InputComponent 
                value={values.text3} 
                placeholder='Place holder' 
                onChange={val => handleChangeValue('text3',val)}/>
        </SectionComponent>
        <SectionComponent>
        <TextComponent 
                text='Title*' 
                font={FONTFAMILY.poppins_bold} 
                size={16} 
                color={COLORS.DARK_BLUE}/>
            <InputComponent 
                value={values.text4} 
                placeholder='Place holder' 
                onChange={val => handleChangeValue('text4',val)}/>
        </SectionComponent>
        <SectionComponent>
        <RowComponent justify='center'>
            <TouchableOpacity onPress={()=>navigation.navigate('Lab1_Bai1')}>
            <TextComponent
                            font={FONTFAMILY.poppins_bold}
                            text='Bài 1'
                            size={20}
                            color={COLORS.DARK_BLUE}></TextComponent>
            </TouchableOpacity>
        </RowComponent>
    </SectionComponent>
    </View>
  )
}

export default Bai3_Lab1