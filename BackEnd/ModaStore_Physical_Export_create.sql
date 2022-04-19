-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2022-04-18 22:26:12.22

-- tables
-- Table: admin
CREATE TABLE admin (
    admin_id int  NOT NULL,
    username varchar(50)  NOT NULL,
    password varchar(32)  NOT NULL,
    correo varchar(30)  NOT NULL,
    CONSTRAINT admin_pk PRIMARY KEY (admin_id)
);

-- sequences
-- Sequence: admin_seq
CREATE SEQUENCE admin_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- End of file.

