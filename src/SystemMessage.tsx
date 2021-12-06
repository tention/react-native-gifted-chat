import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  ImageProps,
  View,
  ViewStyle,
  StyleProp,
  ImageStyle,
  TextStyle,
} from 'react-native'
import PropTypes from 'prop-types'
import Color from './Color'
import { IMessage } from './Models'
import { StylePropType } from './utils'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    backgroundColor: Color.backgroundTransparent,
    color: Color.defaultColor,
    fontSize: 12,
    fontWeight: '300',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    margin: 3,
    resizeMode: 'cover',
  },
})

export interface SystemMessageProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  imageStyle?: StyleProp<ImageStyle>
  imageProps?: Partial<ImageProps>
}

export default class SystemMessage<
  TMessage extends IMessage = IMessage
> extends Component<SystemMessageProps<TMessage>> {
  static defaultProps = {
    currentMessage: {
      image: null,
      system: false,
    },
    containerStyle: {},
    wrapperStyle: {},
    textStyle: {},
    imageStyle: {},
    imageProps: {},
  }

  static propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: StylePropType,
    wrapperStyle: StylePropType,
    textStyle: StylePropType,
    imageStyle: StylePropType,
    imageProps: PropTypes.object,
  }

  render() {
    const {
      currentMessage,
      containerStyle,
      wrapperStyle,
      textStyle,
      imageProps,
      imageStyle,
    } = this.props
    if (currentMessage) {
      return (
        <View style={[styles.container, containerStyle]}>
          <View style={wrapperStyle}>
            <Image
              {...imageProps}
              style={[styles.image, imageStyle]}
              source={{ uri: currentMessage.image }}
            />
            <Text style={[styles.text, textStyle]}>{currentMessage.text}</Text>
          </View>
        </View>
      )
    }
    return null
  }
}
