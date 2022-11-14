import React  from 'react'
import { Text } from './styles'

export const P = ({children,size,align}) =>{
    return(
        <Text size={size} align={align}>
            {children}
        </Text>
    )
}