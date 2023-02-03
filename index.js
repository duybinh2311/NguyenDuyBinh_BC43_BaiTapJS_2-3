// Bài Tập 1
var btn_1 = document.getElementsByClassName('btn')[0]
btn_1.onclick = function baiTap_1() {
  // input
  const LUONG_TREN_NGAY = 100000
  var soNgayLam = document.getElementById('soNgayLam').value

  // process
  var tongTienLuong = LUONG_TREN_NGAY * soNgayLam

  // output
  var ketQuaBaiTap_1 = document.getElementsByClassName('ketQuaBaiTap')[0]
  ketQuaBaiTap_1.innerHTML = `Tổng Tiền Lương = ${tongTienLuong.toLocaleString()} VNĐ`
}

// Bài Tập 2
var btn_2 = document.getElementsByClassName('btn')[1]
btn_2.onclick = function baiTap_2() {
  // input
  var soThuc_1 = document.getElementById('soThuc_1').value
  var soThuc_2 = document.getElementById('soThuc_2').value
  var soThuc_3 = document.getElementById('soThuc_3').value
  var soThuc_4 = document.getElementById('soThuc_4').value
  var soThuc_5 = document.getElementById('soThuc_5').value

  // process
  var giaTriTrungBinh =
    (Number(soThuc_1) +
      Number(soThuc_2) +
      Number(soThuc_3) +
      Number(soThuc_4) +
      Number(soThuc_5)) /
    5

  // output
  var ketQuaBaiTap_2 = document.getElementsByClassName('ketQuaBaiTap')[1]
  ketQuaBaiTap_2.innerHTML = `Giá Trị Trung Bình = ${giaTriTrungBinh}`
}

// Bài Tập 3
var btn_3 = document.getElementsByClassName('btn')[2]
btn_3.onclick = function baiTap_3() {
  // input
  const TY_GIA_USD = 23500
  var usdQuyDoi = document.getElementById('usdQuyDoi').value

  // process
  var tongUsdQuyDoi = TY_GIA_USD * usdQuyDoi

  // output
  var ketQuaBaiTap_3 = document.getElementsByClassName('ketQuaBaiTap')[2]
  ketQuaBaiTap_3.innerHTML = `Tổng Tiền Sau Khi Quy Đổi = ${tongUsdQuyDoi.toLocaleString()} VNĐ`
}

// Bài Tập 4
var btn_4 = document.getElementsByClassName('btn')[3]
btn_4.onclick = function baiTap_4() {
  var chieuRong = document.getElementById('chieuRong').value
  var chieuDai = document.getElementById('chieuDai').value
  var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
  var dienTich = Number(chieuDai) * Number(chieuRong)
  var ketQuaBaiTap_4 = document.getElementsByClassName('ketQuaBaiTap')[3]
  ketQuaBaiTap_4.innerHTML = `Diện Tích = ${dienTich} ; Chu Vi = ${chuVi}`
}

// Bài Tập 5
var btn_5 = document.getElementsByClassName('btn')[4]
btn_5.onclick = function baiTap_5() {
  // input
  var kySo_1 = document.getElementById('nhapSo').value[0]
  var kySo_2 = document.getElementById('nhapSo').value[1]

  // process
  var tongKySo = Number(kySo_1) + Number(kySo_2)

  // output
  var ketQuaBaiTap_5 = document.getElementsByClassName('ketQuaBaiTap')[4]
  ketQuaBaiTap_5.innerHTML = `Tổng Ký Số = ${tongKySo}`
}
