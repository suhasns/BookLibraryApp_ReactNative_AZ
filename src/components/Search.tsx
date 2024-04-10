import React, { FC, useContext, useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import { BASE_URL } from '../services/api';
import { CommonContext, CommonContextType } from "../context/context";
import axios from "axios";

const Search: FC = () => {
    const { searchBox } = styles;

    const context = useContext(CommonContext) as CommonContextType;
    const [books, setBooks] = useState<any[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false); 
    useEffect(() => {
        if (context.searchQuery && !dataLoaded) { 
            fetchData();
        } else {
            setBooks([]); // Clearing books when search query is empty
        }
    }, [context.searchQuery, dataLoaded]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}.json?title=${context.searchQuery}`);
            const filteredBooks = response.data.docs.filter((book: any) => book.title && book.author_name && book.cover_i);
            const top4Books = filteredBooks.slice(0, 4); 
            setBooks(top4Books);
            setDataLoaded(true); 
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    const handleSearch = (query: string) => {
        context.setSearchQuery(query);
        setDataLoaded(false); 
        
    };

    return (
        <View style={{ margin: '2%' }}>
            <TextInput
                placeholder='Search'
                clearButtonMode='always'
                style={searchBox}
                autoCapitalize='none'
                value={context.searchQuery}
                onChangeText={(query) => handleSearch(query)}
            />
            {books.length > 0 && ( 
                <View>
                    {books.map((book: any, index: number) => {
                        return (
                            <View key={index}>
                                <Text>{book.title}</Text>
                                <Text>{book.author_name}</Text>
                                <Text>{book.cover_i}</Text>
                                {book.cover_i && (
                                    <Image
                                        source={{ uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` }}
                                        style={{ width: 100, height: 100 }}
                                    />
                                )}
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8
    },
});



