import { TextProps, Text as Texts } from "react-native"
import React from "react"
import { makeStyles } from "@rneui/themed"

export default function Text(props: TextProps) {
  const { style, ...other } = props
  const styles = useStyles()
  return (
    <Texts style={[styles.container, style]} {...other}>
      {props.children}
    </Texts>
  )
}
const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.colors.black,
  },
}))
