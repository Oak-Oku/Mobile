import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList ,Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Detail = ({ route, navigation }) => {

    const StudyData = [
      { id :"0",name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ", grade: "130  หน่วยกิต",duration:"4 ปี", data : "คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง มีแนวคิดในการผลิต บัณฑิตที่มีความรู้ความสามารถด้านเทคโนโลยีสารสนเทศ มีความรับผิดชอบต่อสังคมในการประกอบวิชาชีพด้านเทคโนโลยีสารสนเทศ และสามารถสื่อสารตลอดจนทำงานร่วมกับผู้อื่นในองค์กรได้อย่างมีประสิทธิภาพ โดยหลักสูตรออกแบบมาเพื่อผลิตบัณฑิตที่มีความรู้และทักษะทั้งใน มิติเชิงกว้างและเชิงลึก (T-shaped Skills) กล่าวคือ ความรู้เชิงกว้างด้านพื้นฐานเทคโนโลยีสารสนเทศและระบบธุรกิจ  พร้อมไปกับการมีทักษะความเชี่ยวชาญเฉพาะทางตามแขนงวิชาที่เลือกเรียน อันได้แก่ ด้านการพัฒนาซอฟต์แวร์ ด้านการออกแบบและบริหารระบบเครือข่าย และด้านการพัฒนาสื่อประสมและเกม"},
      { id :"1",name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ", grade: "126  หน่วยกิต",duration:"4 ปี", data : "คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ได้ตระหนักถึงความสำคัญและความจำเป็นที่จะต้องจัดเตรียมบุคลากรที่มีความรู้ทางด้านวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ เพื่อรองรับความต้องการของตลาดแรงงาน รวมทั้งรองรับการเปลี่ยนแปลงของเทคโนโลยีที่ได้รับการพัฒนาอย่างรวดเร็ว จึงได้จัดทำหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจขึ้น เพื่อผลิตบัณฑิตที่มีความรู้ความสามารถทั้งในภาคทฤษฎีและปฏิบัติ มีทักษะความชำนาญทั้งในระดับพื้นฐานและในระดับสูง รวมทั้งมีวันัย ซื่อสัตย์สุจริต มีคุณธรรมจริยธรรม และมีความพร้อมในการทำงาน เพื่อสามารถตอบสนองความต้องการขององค์กรและหน่วยงานต่าง ๆ ทั้งภาครัฐและเอกชนดังกล่าวได้ในอนาคต"},
      { id :"2",name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศทางธุรกิจ (หลักสูตรนานาชาติ)", grade: "126  หน่วยกิต",duration:"4 ปี", data : "หลักสูตร วิทยาศาสตรบัณฑิต สาขา เทคโนโลยีสารสนเทศทางธุรกิจ (หลักสูตรนานาชาติ) เป็นหลักสูตรที่ให้การศึกษาทางด้านเทคโนโลยีสารสนเทศทางธุรกิจ หลักสูตรมุ่งมั่นในการผลิตบัณฑิตมีความรู้ ความเชี่ยวชาญ และทักษะพร้อมในการทำงานด้านเทคโนโลยีสารสนเทศทางธุรกิจระดับสากล เพื่อเป็นแรงขับเคลื่อนที่สำคัญในการพัฒนาประเทศ"},
      { id :"3",name: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีปัญญาประดิษฐ์", grade: "120  หน่วยกิต",duration:"4 ปี", data : "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีปัญญาประดิษฐ์ เป็นหลักสูตรที่พัฒนาขึ้นบนแนวคิดปรัชญา มุ่งสร้างองค์ความรู้  ผลิต และ พัฒนา ทรัพยากรบุคคลของชาติ เพื่อเพิ่มขีดความสามารถในการแข่งขันของประเทศ และเพื่อสนับสนุนการพัฒนาบนฐานข้อมูลความรู้ เทคโนโลยี วิจัย และ นวัตกรรม ด้านวิทยาศาสตร์และเทคโนโลยีอันเป็นรากฐานที่ดีของการพัฒนาประเทศ จุดเด่นของหลักสูตร คือ การออกแบบที่มุ่งเน้นการวางรากฐานคณิตศาสตร์ที่แข็งแรง การวางรากฐานองค์ความรู้ด้านปัญญาประดิษฐ์สมัยใหม่ ได้แก่ การเรียนรู้ของเครื่องและการเรียนรู้เชิงลึก และการสร้างความร่วมมือกับภาคธุรกิจอุตสาหกรรมเพื่อให้ผู้เรียน ได้ทำงานกับโจทย์จริงตั้งแต่ปีการศึกษาที่สาม"},
    ];
    
    const redata = route.params.ID
    console.log(redata)
    const displayedData = StudyData.filter((data) => data.id == redata
      );
    return (
    <View style={styles.containers1}>
         <FlatList style={styles.containers2}
            data={displayedData}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={styles.containers2}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.name}
                      </Text>
                      <Text>
                        {item.grade}
                      </Text>
                      <Text>
                        {item.data}
                      </Text>
                      <Button
                        onPress={() => navigation.navigate("Viewstudy",{Name:item.name})}
                        title="VIEW STUDY PLAN"
                        color="#1e90ff"
                      />
                  </View>

              );
            }}
          />
    </View>
         
    
      );
    };
export default Detail

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: "#00ffff",
        alignItems: 'center',
        justifyContent: 'center',
      },
      container2: {
        flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      },
})