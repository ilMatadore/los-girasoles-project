BEGIN TRANSACTION;

INSERT INTO users ( first_name, last_name, email, address, city, postal, country, joined, phone, state) 
VALUES ( 'Vernon', 'Bear', 'vbear@test.com', 'Test 123', 'Test City', 1234, 'US', '2021-01-01', 34354354, 'TX' );

INSERT INTO login ( hash, email) 
VALUES ( '$2a$10$L8dh/Vt3e.S/rDb.M9226.0vjXqJPFIra5l9JlnahhQG8C83JLGuS', 'vbear@test.com' );

INSERT INTO product ("name", price, unidad, available) 
    values ('Mizuna', 45, '1', TRUE);
INSERT INTO product ("name", price, unidad, available) 
    values ('Kale', 30, '1', TRUE);
INSERT INTO product ("name", price, unidad, available) 
    values ('Miel', 50, '1kg', TRUE);
INSERT INTO product ("name", price, unidad, available) 
    values ('Perejil', 20, '1', TRUE);
INSERT INTO product ("name", price, unidad, available) 
    values ('Mostaza', 45, '1', TRUE);
INSERT INTO product ("name", price, unidad, available) 
    values ('Cilantro', 35, '1', TRUE);

insert into canasta (name, price, description)
    values (
    'Mix Verdura',
    400,
    '[
    {"id": 1,"name":"Mizuna","cantidad": 1},
    {"id": 2,"name":"Kale","cantidad": 1},
    {"id": 5,"name":"Mostaza","cantidad": "1"},
    {"id": 6,"name":"Cilantro","cantidad": "1"}
    ]'
    );

insert into canasta (name, price, description)
    values (
    'Mix Todo',
    800,
    '[
    {"id": 1,"name":"Mizuna","cantidad": 1},
    {"id": 2,"name":"Kale","cantidad": 1},
    {"id": 4,"name":"Perejil","cantidad": "1"},
    {"id": 6,"name":"Cilantro","cantidad": "1"}
    ]'
    );

insert into canasta (name, price, description)
    values (
    'Mix Verde',
    500,
    '[
    {"id": 5,"name":"Perejil","cantidad": 1},
    {"id": 2,"name":"Kale","cantidad": 1},
    {"id": 6,"name":"Cilantro","cantidad": "1"},
    {"id": 4,"name":"Perejil","cantidad": "1"}
    ]'
    );

COMMIT;