// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open App.js to achraf start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const student = {
    name: 'AIT LAHCEN',
    firstName: 'Achraf',
    matricule: 'C-2025-001708',
    birthDate: '28/11/2003',
    major: '4 ème année IIR',
    phone: '0699950990',
    email: 'achrafbenagri28@gmail.com',
    academicYear: ' Année Universitaire 2025 / 2026',
  };

  const callPhone = () => {
    Linking.openURL(`tel:${student.phone}`);
  };

  const sendEmail = () => {
    Linking.openURL(`mailto:${student.email}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.badgeLegend}>
          <FontAwesome name="id-card" size={18} color="#3d4453ff" /> Carte Étudiant
        </Text>

        <View style={styles.header}>
          <Image 
            source={require('./assets/emsi.png')} 
            style={styles.logo} 
            resizeMode="contain" 
          />
          <Text style={styles.schoolName}>EMSI MAARIF</Text>
        </View>

        <Text style={styles.academicYearCentered}>{student.academicYear}</Text>

        <View style={styles.contentRow}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('./assets/avatar.jpg')} 
              style={styles.avatar} 
              resizeMode="cover" 
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Nom : <Text style={styles.value}>{student.name}</Text></Text>
            <Text style={styles.label}>Prénom : <Text style={styles.value}>{student.firstName}</Text></Text>
            <Text style={styles.label}>Matricule : <Text style={styles.value}>{student.matricule}</Text></Text>
            <Text style={styles.label}>Date de naissance : <Text style={styles.value}>{student.birthDate}</Text></Text>
            <Text style={styles.label}>Filière : <Text style={styles.value}>{student.major}</Text></Text>
            <Text style={styles.label}>Téléphone : <Text style={styles.value}>{student.phone}</Text></Text>
            <Text 
              style={styles.label}
            >
              Email : <Text style={styles.value}>{student.email}</Text>
            </Text>
          </View>
        </View>

        {/* Ligne QR + Call + Email */}
        <View style={styles.bottomRow}>
          <View style={styles.qrContainer}>
            <QRCode
              value={JSON.stringify({
                matricule: student.matricule,
                nom: student.name,
                prenom: student.firstName,
                email: student.email,
              })}
              size={78}
              backgroundColor="white"
              color="#626770ff"
            />
            <Text style={styles.qrLabel}>Badge QR étudiant</Text>
          </View>

          <TouchableOpacity style={styles.callIconButton} onPress={callPhone}>
            <FontAwesome name="phone" size={28} color="#cc113dff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.emailContainer} onPress={sendEmail}>
            <FontAwesome name="envelope" size={28} color="#cc113dff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#1b7415ff',
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 8,
    padding: 18,
    alignItems: 'center',
  },
  badgeLegend: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3d4453ff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    gap: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  schoolName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 20,
    letterSpacing: 1,
  },
  academicYearCentered: {
    fontSize: 15,
    color: '#1b7415ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: -25,
  },
  contentRow: {
    flexDirection: 'row',
    width: '92%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    gap: 20,
  },
  avatarContainer: {
    flex: 3,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000000ff',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 5,
  },
  info: {
    flex: 7,
    paddingLeft: 12,
    gap: 8,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 15,
    color: '#111827',
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '92%',
    marginTop: 20,
  },
  qrContainer: {
    alignItems: 'center',
  },
  qrLabel: {
    marginTop: 6,
    fontSize: 12,
    color: '#6b7280',
  },
  callIconButton: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#cc113dff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 150,
    borderWidth: 2,
    borderColor: '#cc113dff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 30,
    marginHorizontal: 10,
  },
});
