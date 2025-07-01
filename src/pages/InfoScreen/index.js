import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../../style/Color';
import scaleFont from '../../style/FontScaler';
import Dimension from '../../style/Dimension';

// Get screen width to calculate relative indent
const {width} = Dimension;

// Indentation factor (adjust as needed)
const baseIndent = width * 0.05; // 5% of screen width

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>Data Info</Text>
        <View style={styles.underLine} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>
            <Text style={styles.descriptionItalic}>Karatech</Text> merupakan
            aplikasi yang dirancang untuk membantu atlet karate dalam mengukur
            kecepatan teknik pukulan dan tendangan secara objektif dan
            real-time. Dengan integrasi teknologi sensor gerakan IMU (Inertial
            Measurement Unit) 6 sumbu yang menggabungkan akselerometer dan
            giroskop untuk mendeteksi percepatan linier dan rotasi tubuh, sistem
            akan memprosesnya secara langsung untuk menghasilkan informasi
            penting, seperti kecepatan gerakan (pada tiga sumbu: X, Y, dan Z),
            kecepatan pukulan atau tendangan, serta efisiensi gerakan
            (berdasarkan waktu, jarak, dan sudut gerakan). Semua informasi
            ditampilkan secara visual dan mudah dipahami oleh pengguna, termasuk
            riwayat latihan sebelumnya. Selain itu, aplikasi ini juga mendukung
            mode latihan berdasarkan jumlah repetisi maupun durasi waktu, serta
            mencatat sisi tubuh (kiri atau kanan) yang digunakan saat melakukan
            gerakan. Dengan pemrosesan cepat dan sistem sensor real-time,
            Karatech menjadi solusi ideal bagi atlet, pelatih, maupun penggiat
            bela diri yang ingin mengetahui perkembangan kemampuan teknis mereka
            dengan data yang akurat dan berbasis teknologi.
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Workflow:</Text>
          {/* 1 */}
          <Text style={styles.number}>1. Buka Aplikasi</Text>
          <Text style={styles.bullet}>
            • Pengguna menekan ikon{' '}
            <Text style={styles.italic}>Karatech App</Text> di layar utama{' '}
            <Text style={styles.italic}>smartphone</Text>.
          </Text>

          {/* 2 */}
          <Text style={styles.number}>2. Halaman Selamat Datang</Text>
          <Text style={styles.bullet}>
            • Pengguna memilih salah satu jenis gerakan:
          </Text>
          <Text style={[styles.subBullet, {marginLeft: baseIndent * 2}]}>
            ➢ <Text style={styles.bold}>Punch</Text> (pukulan)
          </Text>
          <Text style={[styles.subBullet, {marginLeft: baseIndent * 2}]}>
            ➢ <Text style={styles.bold}>Kick</Text> (tendangan)
          </Text>
          <Text style={styles.bullet}>
            • Menekan tombol <Text style={styles.bold}>next</Text>.
          </Text>

          {/* 3 */}
          <Text style={styles.number}>3. Pengaturan Latihan</Text>
          <Text style={styles.bullet}>
            • Pengguna mengisi informasi berikut:
          </Text>
          <Text style={styles.subBullet}>▪ Nama</Text>
          <Text style={styles.subBullet}>▪ Jenis Kelamin</Text>
          <Text style={styles.subBullet}>▪ Metode latihan:</Text>
          <Text style={[styles.subBullet, {marginLeft: baseIndent * 2}]}>
            ➢ Berdasarkan jumlah repetisi
          </Text>
          <Text style={[styles.subBullet, {marginLeft: baseIndent * 2}]}>
            ➢ Berdasarkan durasi waktu
          </Text>
          <Text style={styles.subBullet}>
            ▪ Sisi tubuh yang digunakan (kiri atau kanan)
          </Text>
          <Text style={styles.bullet}>
            • Menekan tombol <Text style={styles.bold}>start</Text>.
          </Text>

          {/* 4 */}
          <Text style={styles.number}>4. Proses Akuisisi Data</Text>
          <Text style={styles.bullet}>• Sensor IMU 6-sumbu aktif.</Text>
          <Text style={styles.bullet}>
            • Mendeteksi gerakan: percepatan & rotasi.
          </Text>
          <Text style={styles.bullet}>
            • Data dikirim <Text style={styles.italic}>real-time</Text> ke
            smartphone melalui bluetooth.
          </Text>

          {/* 5 */}
          <Text style={styles.number}>5. Pemrosesan Data</Text>
          <Text style={styles.bullet}>• Aplikasi menghitung:</Text>
          <Text style={styles.subBullet}>
            ▪ Kecepatan gerakan (sumbu X, Y, Z)
          </Text>
          <Text style={styles.subBullet}>▪ Sudut rotasi</Text>
          <Text style={styles.subBullet}>▪ Jarak dan waktu tempuh</Text>
          <Text style={styles.subBullet}>▪ Efisiensi dan kekuatan</Text>

          {/* 6 */}
          <Text style={styles.number}>6. Tampilan Hasil</Text>
          <Text style={styles.bullet}>
            • Data ditampilkan di halaman{' '}
            <Text style={styles.italic}>History Detail</Text>, berisi:
          </Text>
          <Text style={styles.subBullet}>▪ Jenis gerakan</Text>
          <Text style={styles.subBullet}>▪ Jumlah repetisi</Text>
          <Text style={styles.subBullet}>▪ Kecepatan (X, Y, Z)</Text>
          <Text style={styles.subBullet}>
            ▪ Waktu pukulan / tendangan (m/s)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  txtTitle: {
    fontSize: scaleFont(24),
    color: Colors.black,
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
  },

  underLine: {
    height: 2,
    width: Math.round(Dimension.width * 0.08),
    backgroundColor: Colors.darkBlue,
    alignSelf: 'center',
  },

  titleContainer: {
    marginVertical: 50,
  },

  contentContainer: {
    paddingHorizontal: 24,
  },

  content: {
    marginBottom: 20,
  },

  title: {
    fontSize: scaleFont(18),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
  },

  description: {
    fontSize: scaleFont(16),
    fontFamily: 'Poppins-Light',
    color: Colors.black,
    textAlign: 'justify',
  },

  descriptionItalic: {
    fontSize: scaleFont(16),
    fontFamily: 'Poppins-Light',
    color: Colors.black,
    textAlign: 'justify',
    fontStyle: 'italic',
  },

  number: {
    fontSize: scaleFont(14),
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    marginTop: baseIndent * 0.5,
  },

  bullet: {
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-Light',
    color: Colors.black,
    marginLeft: baseIndent,
    marginTop: 2,
  },

  subBullet: {
    fontSize: scaleFont(12),
    fontFamily: 'Poppins-Light',
    color: Colors.black,
    marginLeft: baseIndent * 1.5,
    marginTop: 2,
  },

  bold: {
    fontWeight: 'bold',
  },

  italic: {
    fontStyle: 'italic',
  },
});
