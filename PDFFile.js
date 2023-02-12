import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
// import LebronStretch from "../photos/lebron_transparent.png";

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "Times-Roman",
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });


const PDFFile = () => {

  const data = [
    { name: 'John Doe', age: 32, city: 'New York' },
    { name: 'Jane Doe', age: 28, city: 'London' },
    { name: 'Jim Smith', age: 40, city: 'Paris' },
  ];

  return (
    <Document>
      <Page >
        <Text  fixed className = 'text-danger'>Invoice #213456</Text>
        {/* <Image style={styles.image} src={LebronStretch} /> */}
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
          <View style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}>
            <Text>Name</Text>
          </View>
          <View style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}>
            <Text>Age</Text>
          </View>
          <View style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}>
            <Text>City</Text>
          </View>
        </View>
        {data.map(({ name, age, city }) => (
          <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
            <View style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}>
              <Text>{name}</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}>
              <Text>{age}</Text>
            </View>
            <View style={{ flex: 1, borderWidth: 1, borderColor: 'black' }}>
              <Text>{city}</Text>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default PDFFile;
