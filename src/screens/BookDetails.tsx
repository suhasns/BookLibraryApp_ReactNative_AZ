import React, { FC } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';



type RootStackParamList = {
    BookDetails: { book: any }; 
};

type BookDetailsRouteProp = RouteProp<RootStackParamList, 'BookDetails'>; 


type Props = {
    navigation: NavigationProp<any>;
    route: BookDetailsRouteProp;
};

const BookDetails: FC<Props> = ({ route,navigation }) => {
    const { book } = route.params; 

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>Author(s): {book.author_name.join(', ')}</Text>
            {book.cover_i && (
                <Image
                    source={{ uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` }}
                    style={styles.image}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50
    },
    title: { width: 25, height: 25 },
    author: { width: 25, height: 25 },
    image: {width: 25, height: 25}
    
});

export default BookDetails;
