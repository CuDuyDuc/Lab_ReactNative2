import { ArrowLeft2, User, UserSquare } from 'iconsax-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'
import { HeaderComponent, RowComponent, SectionComponent, TextComponent } from '../../components'

const Bai1 = ({ navigation }: any) => {
    return (
        <View>
            <HeaderComponent
                leftChildrent={<ArrowLeft2 size="22" color={COLORS.HEX_BLACK} />}
                text='Header'
                rightChildrent={<UserSquare size="22" color={COLORS.DARK_BLUE} variant="Bold"/>} />
            <HeaderComponent
                leftChildrent={<ArrowLeft2 size="22" color={COLORS.HEX_BLACK} />}
                text='Trang chủ' />
            <HeaderComponent
                leftChildrent={<ArrowLeft2 size="22" color={COLORS.HEX_BLACK} />} />
            <SectionComponent styles = {{marginTop: 30}}>
                <RowComponent justify='center'>
                    <TouchableOpacity onPress={() => navigation.navigate('Lab1_Bai2')}>
                        <TextComponent
                            font={FONTFAMILY.poppins_bold}
                            text='Bài 2'
                            size={20}
                            color={COLORS.DARK_BLUE}></TextComponent>
                    </TouchableOpacity>
                </RowComponent>
            </SectionComponent>
        </View>
    )
}

export default Bai1