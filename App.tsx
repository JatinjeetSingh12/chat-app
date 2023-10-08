import { View, Text, Button } from 'react-native'
import React from 'react'

const App = () => {

  const onAdd = () => {
    console.log("add")
  }

  return (
    <View>
      <Text style={{fontSize:30,fontWeight:'500'}}>Blogs</Text>
      <Text style={{fontSize:30}}>Add Blog</Text>
      <Button title='Add' onPress={onAdd} />
      
    </View>
  )
}

export default App