import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { FONTFAMILY } from '../../../assets/fonts'
import COLORS from '../../assets/colors/Colors'
import { CardComponent, RowComponent, SectionComponent, TextComponent } from '../../components'

const Bai2_Lab1 = ({ navigation }: any) => {
    return (
        <ScrollView>
            <SectionComponent>
                <TextComponent
                    text='Lịch trình'
                    title
                    color={COLORS.DARK_BLUE}
                    font={FONTFAMILY.poppins_bold}
                    size={25} />
                <CardComponent
                    titleAddress='Địa điểm'
                    descriptionAddress='Hồ Tràm, Vũng Tàu'
                    titleTimeIn='Thời gian'
                    descriptionTimeIn='09:00 AM - 12:00 AM, 12/12/2024'
                    titleVehicle='Phương tiện di chuyển'
                    descriptionVehicle='Xe bus'
                    titleTimeOut='Thời gian'
                    descriptionTimeOut='21:00 - 22:00'
                    titleImage='Hình ảnh'
                    descriptionImage='https://statics.vinpearl.com/cac-dao-o-phu-quoc-1_1632974771.jpg'
                    checkButton={false} />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text='Khách sạn'
                    title
                    color={COLORS.DARK_BLUE}
                    font={FONTFAMILY.poppins_bold}
                    size={25} />
                <CardComponent
                    titleAddress='Tên khách sạn'
                    descriptionAddress='Hồng Quỳnh'
                    titleTimeIn='Giờ mở cửa'
                    descriptionTimeIn='06:00 AM - 12:00 AM'
                    titleVehicle='Địa điểm'
                    descriptionVehicle='234 Quang Trung, Hồ Chí Minh'
                    checkButton={true} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='center'>
                    <TouchableOpacity onPress={() => navigation.navigate('Lab1_Bai3')}>
                        <TextComponent
                            font={FONTFAMILY.poppins_bold}
                            text='Bài 3'
                            size={20}
                            color={COLORS.DARK_BLUE}></TextComponent>
                    </TouchableOpacity>
                </RowComponent>
            </SectionComponent>
        </ScrollView>
    )
}

export default Bai2_Lab1