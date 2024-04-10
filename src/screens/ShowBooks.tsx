import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { BASE_URL } from "../services/api";


const ShowBooks = () => {
    const [books, setBooks] = useState<any[]>([]);

    const fetchData = async () => {
        try {            
            const response = await axios.get(`${BASE_URL}?q='abc'`);            
            setBooks(response.data.docs)            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <View>
            {books.slice(0,3).map((book: any) => {                
                return (
                    <View key={book.key}>
                        <Text>
                            {book.title}
                        </Text>
                        <Text>
                            {book.author_name}
                        </Text>
                        <Text>
                            {book.cover_i}
                        </Text>
                        <Text></Text>
                        {book.cover_i && ( <Image source={{ uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` }} style={{width:100,height:100}}>
                        </Image>  )}
                    </View>
                )                
            })
            }
        </View>
    )
}

export default ShowBooks;

