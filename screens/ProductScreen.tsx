import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { findAllProduct } from "../Services/product-service";

import { ListItem, Avatar } from "@rneui/themed";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: "Product",
      headerTitle: () => <Text>Product</Text>,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      //console.log(response.data.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getProduct();
    }, [])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  const renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.detail}</Text>
      </View>
    );
  };

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem bottomDivider>
          <View>
            <ListItem
              bottomDivider
              onPress={() => {
                navigation.navigate("Detail", {
                  id: item.id,
                  title: item.title,
                });
              }}
            >
              <Avatar source={{ uri: item.picture }} size={50} rounded />
            </ListItem>
          </View>

          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success" />
        </ListItem>
      </>
    );
  };

  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text> */}
      <FlatList
        data={product}
        renderItem={_renderItem} //renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen;
