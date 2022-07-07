import React from 'react'
import { ScrollView } from 'react-native'
import CallItem from './CallItem';

const Calls = () => {
	return (
		<ScrollView>
			<CallItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Mercy Patrick"
				callStatus={0}
				time="12:00 PM Today"
			/>
			<CallItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Jackie Chan"
				callStatus={1}
				time="12:00 PM Today"
			/>
			<CallItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Jet Li"
				callStatus={2}
				time="12:00 PM Today"
			/>
			<CallItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="James Johnson"
				callStatus={3}
				time="12:00 PM Today"
			/>
		</ScrollView>
	)
}

export default Calls