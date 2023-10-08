CREATE TABLE product (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  isWish BOOLEAN NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  discount INT NOT NULL,
  star DECIMAL(3, 1) NOT NULL,
  image MEDIUMBLOB
);

-- เพิ่มข้อมูลสินค้าที่ 1
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('1', 'สินค้าที่ 1', TRUE, 1000.00, 10, 4.5, 'base64_image_data_1');

-- เพิ่มข้อมูลสินค้าที่ 2
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('2', 'สินค้าที่ 2', FALSE, 2000.00, 5, 3.8, 'base64_image_data_2');

-- เพิ่มข้อมูลสินค้าที่ 3
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('3', 'สินค้าที่ 3', TRUE, 1500.00, 15, 4.2, 'base64_image_data_3');

-- เพิ่มข้อมูลสินค้าที่ 4
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('4', 'สินค้าที่ 4', FALSE, 1800.00, 20, 3.9, 'base64_image_data_4');

-- เพิ่มข้อมูลสินค้าที่ 5
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('5', 'สินค้าที่ 5', TRUE, 2500.00, 0, 4.7, 'base64_image_data_5');

-- เพิ่มข้อมูลสินค้าที่ 6
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('6', 'สินค้าที่ 6', TRUE, 3000.00, 12, 4.0, 'base64_image_data_6');

-- เพิ่มข้อมูลสินค้าที่ 7
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('7', 'สินค้าที่ 7', FALSE, 1500.00, 0, 4.8, 'base64_image_data_7');

-- เพิ่มข้อมูลสินค้าที่ 8
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('8', 'สินค้าที่ 8', TRUE, 2200.00, 8, 4.3, 'base64_image_data_8');

-- เพิ่มข้อมูลสินค้าที่ 9
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('9', 'สินค้าที่ 9', FALSE, 2800.00, 18, 3.7, 'base64_image_data_9');

-- เพิ่มข้อมูลสินค้าที่ 10
INSERT INTO product (id, name, isWish, price, discount, star, image)
VALUES ('10', 'สินค้าที่ 10', TRUE, 1700.00, 7, 4.1, 'base64_image_data_10');