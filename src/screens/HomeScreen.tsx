import { FC } from "react";
import Search from "../components/Search"
import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationProp } from '@react-navigation/native';
import ErrorBoundary from "../components/ErrorBoundary";
import ShowBooks from "./ShowBooks";
import BookDetails from "./BookDetails";

interface Props {
    navigation: NavigationProp<any> ;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
    const netiInfo = useNetInfo();

    return (
        <ErrorBoundary>
            <Search/>
            <ShowBooks/>
            {/* <BookDetails navigation={BookDetails}/>  */}
        </ErrorBoundary>
    )
}
export default HomeScreen;