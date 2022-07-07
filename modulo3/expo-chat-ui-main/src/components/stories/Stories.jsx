import React from "react";
import { ScrollView } from "react-native";
import StoryItem from "./StoryItem";
import AddStoryCard from "./AddStoryCard";

const Stories = () => {
	return (
		<ScrollView>
			<AddStoryCard />
			<StoryItem
				picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Jake Bull"
				time="3 Hours ago"
				stories={[
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
				]}
			/>
			<StoryItem
				picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Ryan Murphy"
				time="3 Hours ago"
				stories={[
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
				]}
			/>
			<StoryItem
				picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Nina Gomez"
				time="3 Hours ago"
				stories={[
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
					{
						time: "3 Hours ago",
						url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					},
				]}
			/>
		</ScrollView>
	);
};

export default Stories;
