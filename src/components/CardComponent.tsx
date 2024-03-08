import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { SectionComponent, TextComponent } from '.';
import { gobalStyles } from '../styles/gobalStyles';
interface Props{
    titleAddress?:string;
    descriptionAddress?:string;
    titleTimeIn?:string;
    descriptionTimeIn?:string;
    titleVehicle?:string;
    descriptionVehicle?:string;
    titleTimeOut?:string;
    descriptionTimeOut?:string;
    titleImage?:string;
    descriptionImage?:string;
    checkButton:boolean


}
const CardComponent = (props:Props) => {
    const {
        titleAddress,
        descriptionAddress,
        titleTimeIn,
        descriptionTimeIn,
        titleVehicle,
        descriptionVehicle,
        titleTimeOut,
        descriptionTimeOut,
        titleImage,
        descriptionImage,
        checkButton }=props
  return (
    <View style={[gobalStyles.card,{paddingVertical:15}]}>
      {titleAddress || descriptionAddress !=undefined?(
        <SectionComponent>
            <TextComponent text={titleAddress} styles = {gobalStyles.titleText} size={13}/>
            <TextComponent text={descriptionAddress} styles = {gobalStyles.desciptionText}/>
        </SectionComponent>
      ):undefined}
      {titleTimeIn || descriptionTimeIn !=undefined?(
        <SectionComponent>
            <TextComponent text={titleTimeIn} styles = {gobalStyles.titleText} size={13}/>
            <TextComponent text={descriptionTimeIn} styles = {gobalStyles.desciptionText}/>
        </SectionComponent>
      ):undefined}
      {titleVehicle || descriptionVehicle !=undefined?(
        <SectionComponent>
            <TextComponent text={titleVehicle} styles = {gobalStyles.titleText} size={13}/>
            <TextComponent text={descriptionVehicle} styles = {gobalStyles.desciptionText}/>
        </SectionComponent>
      ):undefined}
      {titleTimeOut || descriptionTimeOut!=undefined?(
        <SectionComponent>
            <TextComponent text={titleTimeOut} styles = {gobalStyles.titleText} size={13}/>
            <TextComponent text={descriptionTimeOut} styles = {gobalStyles.desciptionText}/>
        </SectionComponent>
      ):undefined}
      {titleImage || descriptionImage !=undefined?(
        <SectionComponent>
            <TextComponent text={titleImage} styles = {gobalStyles.titleText} size={13}/>
            {descriptionImage!=null?(<Image style={{width:'100%',height:150}} src={descriptionImage}/>):undefined}
        </SectionComponent>
      ):undefined}
      {checkButton?(
        <SectionComponent>
            <Button title='Chi tiết' />
        </SectionComponent>
      ):undefined}
    </View>
  )
}

export default CardComponent