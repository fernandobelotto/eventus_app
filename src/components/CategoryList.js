import React from 'react'
import { View, Text } from 'react-native'

const CategoryList = () => {
  return (
    <View>
      <FlatList
        data={['negócios', 'esportes', 'programação']}
    </View>
  )
}

export default CategoryList
