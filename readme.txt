Sau khi clone code về máy, chạy lệnh npm install ở thư mục root để cài đặt những package cần thiết
Để chạy server cần có:
   + Môi trường nodejs
Cách lệnh khởi động server ở localhost:
    + Mở terminal ở thư mục root chạy lệnh node server.js
Server chạy ở địa chỉ http://127.0.0.1:8000
Các api cơ bản:(xem ở file router.js)
- Đăng kí: v0/signup
- Đăng nhập: v0/login
- Tạo sản phẩm:/v0/create_product
- Lấy danh sách sản phẩm:/v0/get_list_product
- Update sản phẩm:/v0/update_product
- Xoá sản phẩm: /v0/delete_product
